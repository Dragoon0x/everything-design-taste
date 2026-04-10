#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];
if (!filePath || !fs.existsSync(filePath)) process.exit(0);

const content = fs.readFileSync(filePath, "utf8");
const warnings = [];

// Raw hex values (should be tokens)
const hexValues = content.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
const uniqueHex = [...new Set(hexValues)];
if (uniqueHex.length > 3) {
  warnings.push(`[tokens] ${uniqueHex.length} unique hex colors found. Use design tokens (CSS variables) instead.`);
}

// Raw pixel values for spacing (should be scale)
const rawPixels = content.match(/:\s*\d+px/g) || [];
const nonScalePixels = rawPixels.filter(p => {
  const val = parseInt(p.replace(/\D/g, ""));
  const scale = [0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 80, 96, 112, 128];
  return !scale.includes(val) && val > 0 && val < 200;
});
if (nonScalePixels.length > 3) {
  warnings.push(`[tokens] ${nonScalePixels.length} off-scale pixel values found. Use spacing scale (4px base).`);
}

// Hardcoded font families
if (/font-family:\s*["']?[A-Z]/g.test(content) && !/var\(--font/g.test(content)) {
  warnings.push("[tokens] Hardcoded font-family found. Use font tokens: var(--font-display), var(--font-body).");
}

if (warnings.length > 0) {
  console.error(`\n[EDC Token Check] ${path.basename(filePath)}`);
  warnings.forEach(w => console.error(`  ${w}`));
  console.error("");
}

process.exit(0);
