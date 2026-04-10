#!/usr/bin/env node

/**
 * AI Tone Detection Hook
 * Flags AI-typical language patterns in text output.
 */

const fs = require('fs');

const AI_PATTERNS = [
  /\bin today'?s (fast-paced|ever-evolving|rapidly changing|digital)\b/i,
  /\bwhether you'?re a .+ or a\b/i,
  /\bit'?s important to note that\b/i,
  /\bat the end of the day\b/i,
  /\bthis is where .+ comes in\b/i,
  /\blet'?s dive (in|deeper)\b/i,
  /\bwithout further ado\b/i,
  /\bin the ever-evolving landscape\b/i,
  /\bgame[- ]?chang(er|ing)\b/i,
  /\btake .+ to the next level\b/i,
  /\bunlock the (power|potential) of\b/i,
  /\bharness the (power|potential)\b/i,
  /\bseamless(ly)?\b/i,
  /\brobust\b/i,
  /\bleverage\b/i,
  /\bsynerg(y|ies|istic)\b/i,
  /\bcutting[- ]?edge\b/i,
  /\bbest[- ]?in[- ]?class\b/i,
  /\bholistic\b/i,
  /\bstreamline\b/i,
  /\bempower\b/i,
  /\bfurthermore\b/i,
  /\bmoreover\b/i,
];

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const warnings = [];

  lines.forEach((line, index) => {
    AI_PATTERNS.forEach((pattern) => {
      const match = line.match(pattern);
      if (match) {
        warnings.push({
          line: index + 1,
          match: match[0],
          message: `AI tone detected: "${match[0]}"`,
        });
      }
    });
  });

  return warnings;
}

// Main
const filePath = process.argv[2] || process.env.FILE_PATH;
if (filePath) {
  const warnings = checkFile(filePath);
  if (warnings.length > 0) {
    console.error(`[EDC Hook] AI tone detected in ${filePath}:`);
    warnings.forEach((w) => {
      console.error(`  Line ${w.line}: ${w.message}`);
    });
    process.exit(1);
  }
}
