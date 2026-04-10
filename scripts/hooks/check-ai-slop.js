#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];
if (!filePath || !fs.existsSync(filePath)) process.exit(0);

const content = fs.readFileSync(filePath, "utf8");
const warnings = [];

// Font checks
const slopFonts = [
  { pattern: /font-family[^;]*Inter[^;]*;/gi, name: "Inter" },
  { pattern: /font-family[^;]*Roboto[^;]*;/gi, name: "Roboto" },
  { pattern: /font-family[^;]*Arial[^;]*;/gi, name: "Arial" },
  { pattern: /font-family[^;]*Poppins[^;]*;/gi, name: "Poppins" },
  { pattern: /font-family[^;]*Montserrat[^;]*;/gi, name: "Montserrat" },
  { pattern: /font-sans|fontFamily.*sans/gi, name: "default sans-serif" },
];

slopFonts.forEach(({ pattern, name }) => {
  if (pattern.test(content)) {
    warnings.push(`[slop] Default font "${name}" detected. Use a distinctive font choice.`);
  }
});

// Color checks
if (/linear-gradient\([^)]*purple[^)]*blue/gi.test(content) ||
    /linear-gradient\([^)]*#[89a-f][0-9a-f]{5}[^)]*#[0-5][0-9a-f]{5}/gi.test(content)) {
  warnings.push("[slop] Purple-to-blue gradient detected. Choose a more intentional color approach.");
}

// Layout checks
if (/grid-cols-3.*rounded.*shadow/gs.test(content)) {
  warnings.push("[slop] Three-column card grid with shadows detected. Consider a more distinctive layout.");
}

// Hardcoded color checks
const hexMatches = content.match(/#[0-9a-fA-F]{6}/g);
if (hexMatches && hexMatches.length > 5) {
  warnings.push(`[consistency] ${hexMatches.length} hardcoded hex values found. Use CSS variables or design tokens.`);
}

if (warnings.length > 0) {
  console.error(`\n[EDC Taste Check] ${path.basename(filePath)}`);
  warnings.forEach(w => console.error(`  ${w}`));
  console.error("");
}

process.exit(0);
