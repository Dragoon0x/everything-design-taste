---
name: visual-regression-testing
description: Visual regression testing approaches, snapshot comparison, and visual QA automation.
triggers: ["visual regression", "visual testing", "screenshot testing", "visual QA automation"]
---

# Visual Regression Testing

## Visual Regression Testing

### Tools
- Chromatic (Storybook integration).
- Percy (BrowserStack).
- Playwright visual comparisons.
- BackstopJS (open source).

### What to Test
- Component states (default, hover, focus, disabled, error, loading).
- Responsive breakpoints (mobile, tablet, desktop).
- Dark mode vs light mode.
- Content edge cases (empty, long text, many items).

### Strategy
1. **Component-level screenshots** in Storybook (isolated, deterministic).
2. **Page-level screenshots** for layout validation.
3. **Threshold:** Allow 0.1% pixel difference (anti-aliasing varies).
4. **CI integration:** Block PRs that introduce visual changes without approval.

### Anti-Patterns
- Testing pages with dynamic data (timestamps, random content cause false positives).
- Screenshot resolution inconsistency.
- Not testing dark mode.
- Ignoring font rendering differences between CI and local.