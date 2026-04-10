#!/usr/bin/env node

/**
 * Contrast Ratio Check Hook
 * Detects potential WCAG contrast violations in CSS/HTML.
 */

const fs = require('fs');

const LOW_CONTRAST_PATTERNS = [
  { pattern: /color:\s*#[a-fA-F0-9]{3,8}\s*;.*background.*#[a-fA-F0-9]{3,8}/i, message: 'Inline color/background combination detected - verify contrast ratio' },
  { pattern: /opacity:\s*0\.[0-3]\d*/i, message: 'Low opacity value may cause contrast issues' },
  { pattern: /color:\s*(lightgray|lightgrey|silver|gainsboro|#[cCdDeEfF]{3,6})/i, message: 'Light color value detected - verify contrast on background' },
];

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const warnings = [];

  lines.forEach((line, index) => {
    LOW_CONTRAST_PATTERNS.forEach(({ pattern, message }) => {
      if (pattern.test(line)) {
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
    console.error(`[EDC Hook] Potential contrast issues in ${filePath}:`);
    warnings.forEach((w) => {
      console.error(`  Line ${w.line}: ${w.message}`);
    });
  }
}
