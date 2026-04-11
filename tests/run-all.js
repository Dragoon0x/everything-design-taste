#!/usr/bin/env node

/**
 * EDC Test Runner
 * Validates all components of Everything Design Code.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
let passed = 0;
let failed = 0;
const errors = [];

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  \u2713 ${name}`);
  } catch (e) {
    failed++;
    errors.push({ name, error: e.message });
    console.log(`  \u2717 ${name}: ${e.message}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

// --- Agent Tests ---
console.log('\nAgents:');

const agentsDir = path.join(ROOT, 'agents');
const agents = fs.readdirSync(agentsDir).filter((f) => f.endsWith('.md'));

test('agents directory exists and has files', () => {
  assert(agents.length >= 50, `Expected >=10 agents, found ${agents.length}`);
});

agents.forEach((agent) => {
  test(`agent ${agent} has valid frontmatter`, () => {
    const content = fs.readFileSync(path.join(agentsDir, agent), 'utf-8');
    assert(content.startsWith('---'), 'Missing frontmatter opening');
    assert(content.indexOf('---', 3) > 0, 'Missing frontmatter closing');
    assert(content.includes('name:'), 'Missing name field');
    assert(content.includes('description:'), 'Missing description field');
  });
});

// --- Skill Tests ---
console.log('\nSkills:');

const skillsDir = path.join(ROOT, 'skills');
const skillDirs = fs.readdirSync(skillsDir).filter((d) => {
  return fs.statSync(path.join(skillsDir, d)).isDirectory();
});

test('skills directory has expected count', () => {
  assert(skillDirs.length >= 200, `Expected >=20 skills, found ${skillDirs.length}`);
});

skillDirs.forEach((skill) => {
  test(`skill ${skill} has SKILL.md with valid frontmatter and content`, () => {
    const skillFile = path.join(skillsDir, skill, 'SKILL.md');
    assert(fs.existsSync(skillFile), `Missing SKILL.md in ${skill}`);
    const content = fs.readFileSync(skillFile, 'utf-8');
    assert(content.startsWith('---'), 'Missing frontmatter');
    assert(content.includes('name:'), 'Missing name field');
    assert(content.includes('description:'), 'Missing description field');
    const body = content.split('---').slice(2).join('---').trim();
    assert(body.length > 100, `Content too short (${body.length} chars)`);
  });
});

// --- Rule Tests ---
console.log('\nRules:');

const rulesDir = path.join(ROOT, 'rules');
const ruleFiles = [];
function findRules(dir) {
  fs.readdirSync(dir).forEach((entry) => {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) findRules(full);
    else if (entry.endsWith('.md') && entry !== 'README.md') ruleFiles.push(full);
  });
}
findRules(rulesDir);

test('rules directory has expected count', () => {
  assert(ruleFiles.length >= 8, `Expected >=8 rules, found ${ruleFiles.length}`);
});

ruleFiles.forEach((ruleFile) => {
  const name = path.relative(rulesDir, ruleFile);
  test(`rule ${name} has valid frontmatter`, () => {
    const content = fs.readFileSync(ruleFile, 'utf-8');
    assert(content.startsWith('---'), 'Missing frontmatter opening');
    assert(content.includes('description:'), 'Missing description field');
  });
});

// --- Hook Tests ---
console.log('\nHooks:');

test('hooks.json exists and is valid JSON', () => {
  const hooksFile = path.join(ROOT, 'hooks', 'hooks.json');
  assert(fs.existsSync(hooksFile), 'Missing hooks.json');
  const parsed = JSON.parse(fs.readFileSync(hooksFile, 'utf-8'));
  assert(parsed.hooks && Array.isArray(parsed.hooks), 'Missing hooks array');
  assert(parsed.hooks.length >= 1, 'Expected at least 1 hook');
});

test('all referenced hook scripts exist', () => {
  const hooksFile = path.join(ROOT, 'hooks', 'hooks.json');
  const parsed = JSON.parse(fs.readFileSync(hooksFile, 'utf-8'));
  parsed.hooks.forEach((hook) => {
    hook.hooks.forEach((h) => {
      const scriptPath = h.command.replace(/^node\s+/, '').replace(/\s+"?\$.*$/, '').trim();
      const fullPath = path.join(ROOT, scriptPath);
      assert(fs.existsSync(fullPath), `Missing: ${scriptPath}`);
    });
  });
});

// --- Hook Script Syntax ---
console.log('\nHook Scripts:');

const hookScriptsDir = path.join(ROOT, 'scripts', 'hooks');
const hookScripts = fs.readdirSync(hookScriptsDir).filter((f) => f.endsWith('.js'));

hookScripts.forEach((script) => {
  test(`hook script ${script} has valid structure`, () => {
    const content = fs.readFileSync(path.join(hookScriptsDir, script), 'utf-8');
    assert(content.length > 50, 'Script too short');
    assert(content.includes('require') || content.includes('import'), 'Missing module imports');
    assert(content.includes('function') || content.includes('=>'), 'Missing function definitions');
  });
});

// --- Context Tests ---
console.log('\nContexts:');

const contextsDir = path.join(ROOT, 'contexts');
const contexts = fs.readdirSync(contextsDir).filter((f) => f.endsWith('.md'));

test('contexts directory has expected count', () => {
  assert(contexts.length >= 4, `Expected >=4 contexts, found ${contexts.length}`);
});

// --- Template Tests ---
console.log('\nDesign Templates:');

const templatesDir = path.join(ROOT, 'design-templates');
const templates = fs.readdirSync(templatesDir).filter((d) => {
  return fs.statSync(path.join(templatesDir, d)).isDirectory();
});

test('design-templates has expected count', () => {
  assert(templates.length >= 5, `Expected >=5 templates, found ${templates.length}`);
});

templates.forEach((tmpl) => {
  test(`template ${tmpl} has DESIGN.md with color tokens`, () => {
    const designFile = path.join(templatesDir, tmpl, 'DESIGN.md');
    assert(fs.existsSync(designFile), 'Missing DESIGN.md');
    const content = fs.readFileSync(designFile, 'utf-8');
    assert(content.includes('--color-'), 'Missing CSS custom properties');
    assert(content.includes('Typography'), 'Missing typography section');
  });
});

// --- Core Files ---
console.log('\nCore Files:');

['SOUL.md', 'CLAUDE.md', 'README.md', 'LICENSE', 'package.json', 'CONTRIBUTING.md', 'CHANGELOG.md', 'install.sh'].forEach((file) => {
  test(`${file} exists and has content`, () => {
    const filePath = path.join(ROOT, file);
    assert(fs.existsSync(filePath), `Missing ${file}`);
    const stat = fs.statSync(filePath);
    assert(stat.size > 100, `${file} is too small (${stat.size} bytes)`);
  });
});

// --- Examples ---
console.log('\nExamples:');

const examplesDir = path.join(ROOT, 'examples');
const examples = fs.readdirSync(examplesDir).filter((d) => {
  return fs.statSync(path.join(examplesDir, d)).isDirectory();
});

test('examples has expected count', () => {
  assert(examples.length >= 4, `Expected >=4 examples, found ${examples.length}`);
});

examples.forEach((ex) => {
  test(`example ${ex} has CLAUDE.md`, () => {
    assert(fs.existsSync(path.join(examplesDir, ex, 'CLAUDE.md')), 'Missing CLAUDE.md');
  });
});

// --- AI Tone Detection Unit Tests ---
console.log('\nAI Tone Detection:');

const AI_PATTERNS = [
  /\bin today'?s (fast-paced|ever-evolving|rapidly changing|digital)\b/i,
  /\blet'?s dive (in|deeper)\b/i,
  /\bcutting[- ]?edge\b/i,
  /\bleverage\b/i,
  /\bsynerg(y|ies|istic)\b/i,
  /\brobust\b/i,
  /\bstreamline\b/i,
  /\bfurthermore\b/i,
  /\bseamless(ly)?\b/i,
];

const toneTests = [
  { text: "In today's fast-paced world of design", shouldMatch: true },
  { text: "Let's dive deeper into this topic", shouldMatch: true },
  { text: "This cutting-edge solution leverages synergies", shouldMatch: true },
  { text: "Here is how the layout works", shouldMatch: false },
  { text: "The spacing creates visual rhythm", shouldMatch: false },
  { text: "Furthermore, the robust platform streamlines workflows", shouldMatch: true },
  { text: "Use a 4px spacing scale for consistency", shouldMatch: false },
  { text: "The seamless experience empowers users", shouldMatch: true },
];

toneTests.forEach(({ text, shouldMatch }) => {
  test(`AI tone ${shouldMatch ? 'detects' : 'allows'}: "${text.substring(0, 45)}..."`, () => {
    const matches = AI_PATTERNS.some((p) => p.test(text));
    assert(matches === shouldMatch, `Expected ${shouldMatch ? 'match' : 'no match'}`);
  });
});

// --- Repo Integrity ---
console.log('\nRepo Integrity:');

test('no personal project references in any file', () => {
  const allFiles = [];
  function walk(dir) {
    fs.readdirSync(dir).forEach((entry) => {
      const full = path.join(dir, entry);
      if (entry === 'node_modules' || entry === '.git') return;
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (entry.endsWith('.md') || entry.endsWith('.json')) allFiles.push(full);
    });
  }
  walk(ROOT);

  const sensitiveTerms = ['Thin Air', 'X Town', 'MITTI', 'Framelabs', 'Hexorial', 'Huetale', 'Polygon', 'Matic'];
  allFiles.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    sensitiveTerms.forEach((term) => {
      assert(!content.includes(term), `Found "${term}" in ${path.relative(ROOT, file)}`);
    });
  });
});

test('LICENSE credits 0xDragoon', () => {
  const license = fs.readFileSync(path.join(ROOT, 'LICENSE'), 'utf-8');
  assert(license.includes('0xDragoon'), 'LICENSE should credit 0xDragoon');
});

test('README credits 0xDragoon', () => {
  const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf-8');
  assert(readme.includes('0xDragoon'), 'README should credit 0xDragoon');
});

// --- Summary ---
console.log('\n' + '\u2500'.repeat(50));
console.log(`\nResults: ${passed} passed, ${failed} failed, ${passed + failed} total`);

if (errors.length > 0) {
  console.log('\nFailed tests:');
  errors.forEach(({ name, error }) => {
    console.log(`  \u2717 ${name}: ${error}`);
  });
}

process.exit(failed > 0 ? 1 : 0);
