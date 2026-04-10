#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];
if (!filePath || !fs.existsSync(filePath)) process.exit(0);

const content = fs.readFileSync(filePath, "utf8");
const warnings = [];

// Missing alt text
if (/<img(?![^>]*alt=)[^>]*>/gi.test(content)) {
  warnings.push("[a11y] <img> without alt attribute found. Add descriptive alt text or alt=\"\" for decorative images.");
}

// outline: none without replacement
if (/outline:\s*none/gi.test(content) && !/outline-offset|ring|focus-visible/gi.test(content)) {
  warnings.push("[a11y] 'outline: none' found without visible focus replacement. Add a custom focus indicator.");
}

// onClick without keyboard handler
if (/onClick/g.test(content) && /<div[^>]*onClick/g.test(content)) {
  warnings.push("[a11y] onClick on <div> detected. Use <button> for interactive elements or add keyboard handlers and role.");
}

// Heading hierarchy check
const headings = content.match(/<h[1-6]/gi) || [];
let lastLevel = 0;
headings.forEach(h => {
  const level = parseInt(h.charAt(2));
  if (level > lastLevel + 1 && lastLevel > 0) {
    warnings.push(`[a11y] Heading level skip: h${lastLevel} to h${level}. Don't skip heading levels.`);
  }
  lastLevel = level;
});

// Touch target check
if (/w-[1-8]\b|h-[1-8]\b|width:\s*[12][0-9]px|height:\s*[12][0-9]px/g.test(content)) {
  warnings.push("[a11y] Small interactive element detected. Ensure minimum 44x44px touch targets.");
}

if (warnings.length > 0) {
  console.error(`\n[EDC Accessibility Check] ${path.basename(filePath)}`);
  warnings.forEach(w => console.error(`  ${w}`));
  console.error("");
}

process.exit(0);
