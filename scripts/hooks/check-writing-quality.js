#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];
if (!filePath || !fs.existsSync(filePath)) process.exit(0);

const content = fs.readFileSync(filePath, "utf8");
const warnings = [];

const aiPatterns = [
  { pattern: /in today'?s (fast[- ]paced|ever[- ]evolving|digital)/gi, label: "AI opener cliche" },
  { pattern: /whether you'?re a .+ or a/gi, label: "'Whether you're a... or a...'" },
  { pattern: /let'?s dive (in|deeper)/gi, label: "'Let's dive in'" },
  { pattern: /without further ado/gi, label: "'Without further ado'" },
  { pattern: /it'?s important to note/gi, label: "'It's important to note'" },
  { pattern: /at the end of the day/gi, label: "'At the end of the day'" },
  { pattern: /game[- ]?changer/gi, label: "'Game-changer'" },
  { pattern: /take .+ to the next level/gi, label: "'Take X to the next level'" },
  { pattern: /unlock the (power|potential)/gi, label: "'Unlock the power/potential'" },
  { pattern: /harness the (power|potential)/gi, label: "'Harness the power/potential'" },
  { pattern: /in the ever[- ]evolving landscape/gi, label: "AI landscape cliche" },
  { pattern: /seamless(ly)? integrat/gi, label: "'Seamlessly integrate'" },
];

aiPatterns.forEach(({ pattern, label }) => {
  if (pattern.test(content)) {
    warnings.push(`[ai-tone] ${label} detected. Rewrite in natural language.`);
  }
});

const buzzwords = [
  { pattern: /\bleverage\b/gi, label: "leverage", replacement: "use" },
  { pattern: /\butilize\b/gi, label: "utilize", replacement: "use" },
  { pattern: /\bsynerg/gi, label: "synergy/synergize", replacement: "say what you mean" },
  { pattern: /\brobust\b/gi, label: "robust", replacement: "strong, or be specific" },
  { pattern: /\bseamless\b/gi, label: "seamless", replacement: "describe what happens" },
  { pattern: /\bcutting[- ]edge\b/gi, label: "cutting-edge", replacement: "new, or be specific" },
  { pattern: /\bholistic\b/gi, label: "holistic", replacement: "complete, or be specific" },
  { pattern: /\bempower\b/gi, label: "empower", replacement: "enable, or be specific" },
];

buzzwords.forEach(({ pattern, label, replacement }) => {
  if (pattern.test(content)) {
    warnings.push(`[buzzword] "${label}" found. Try "${replacement}" instead.`);
  }
});

// Em-dash check
const emDashCount = (content.match(/\u2014/g) || []).length;
const paragraphCount = (content.match(/\n\n/g) || []).length + 1;
if (emDashCount > paragraphCount) {
  warnings.push(`[punctuation] ${emDashCount} em-dashes across ~${paragraphCount} paragraphs. Max 1 per paragraph.`);
}

if (warnings.length > 0) {
  console.error(`\n[EDC Writing Check] ${path.basename(filePath)}`);
  warnings.forEach(w => console.error(`  ${w}`));
  console.error("");
}

process.exit(0);
