#!/usr/bin/env node

/**
 * Design Consistency Check Hook
 * Flags hardcoded values that should be design tokens.
 */

const fs = require('fs');

const HARDCODED_PATTERNS = [
  { pattern: /#[0-9a-fA-F]{6}(?!.*var\()/g, message: 'Hardcoded hex color - use a design token instead' },
  { pattern: /font-size:\s*\d+px(?!.*var\()/g, message: 'Hardcoded font-size - use a type scale token' },
  { pattern: /border-radius:\s*\d+px(?!.*var\()/g, message: 'Hardcoded border-radius - use a radius token' },
  { pattern: /box-shadow:\s*[^v][^a][^r]/g, message: 'Hardcoded box-shadow - consider an elevation token' },
];

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) return [];

  const ext = filePath.split('.').pop();
  if (!['css', 'tsx', 'jsx', 'scss'].includes(ext)) return [];

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const warnings = [];

  lines.forEach((line, index) => {
    if (line.trim().startsWith('//') || line.trim().startsWith('*')) return;
    HARDCODED_PATTERNS.forEach(({ pattern, message }) => {
      const regex = new RegExp(pattern.source, pattern.flags);
      if (regex.test(line)) {
        warnings.push({ line: index + 1, message });
      }
    });
  });

  return warnings;
}

const filePath = process.argv[2] || process.env.FILE_PATH;
if (filePath) {
  const warnings = checkFile(filePath);
  if (warnings.length > 0) {
    console.error(`[EDC Hook] Design consistency issues in ${filePath}:`);
    warnings.slice(0, 10).forEach((w) => {
      console.error(`  Line ${w.line}: ${w.message}`);
    });
    if (warnings.length > 10) {
      console.error(`  ... and ${warnings.length - 10} more`);
    }
  }
}
