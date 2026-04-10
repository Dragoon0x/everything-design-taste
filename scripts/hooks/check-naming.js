#!/usr/bin/env node

/**
 * Component Naming Check Hook
 * Flags generic component names that lack specificity.
 */

const fs = require('fs');

const GENERIC_NAMES = [
  'Component', 'MyComponent', 'Wrapper', 'Container', 'Box',
  'Item', 'Element', 'Widget', 'Thing', 'Stuff',
  'Content', 'Data', 'Info', 'Main', 'Section1', 'Section2',
];

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf-8');
  const warnings = [];

  const exportMatches = content.matchAll(/export\s+(?:default\s+)?(?:function|const)\s+(\w+)/g);
  for (const match of exportMatches) {
    const name = match[1];
    if (GENERIC_NAMES.includes(name)) {
      warnings.push({
        name,
        message: `Generic component name "${name}" - use a descriptive name that reflects purpose`,
      });
    }
  }

  return warnings;
}

const filePath = process.argv[2] || process.env.FILE_PATH;
if (filePath) {
  const warnings = checkFile(filePath);
  if (warnings.length > 0) {
    console.error(`[EDC Hook] Naming issues in ${filePath}:`);
    warnings.forEach((w) => {
      console.error(`  ${w.message}`);
    });
  }
}
