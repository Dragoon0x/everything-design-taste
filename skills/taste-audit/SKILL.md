---
name: taste-audit
description: Automated quality gate that scans design output for AI slop patterns, writing quality, accessibility baseline, and brand consistency violations.
triggers: ["taste audit", "quality check", "design audit", "slop check", "taste check", "design quality"]
---

# Taste Audit

## What It Checks

### 1. AI Slop Score (0-10, lower is better)
Scans for:
- Default/generic font usage (Inter, Roboto, Arial without justification)
- Purple-to-blue gradient patterns
- Generic card grid layouts
- Stock hero section patterns
- Cookie-cutter button copy ("Get Started", "Learn More")
- Overused component patterns without variation

Scoring:
- 0-2: Clean. Intentional design choices.
- 3-5: Mild slop. Some generic patterns leaking in.
- 6-8: Significant slop. Needs creative intervention.
- 9-10: Full AI default. Start over with a creative brief.

### 2. Writing Quality Score (0-10, higher is better)
Scans for:
- AI tone markers (see copy-editor agent for full list)
- Corporate buzzwords
- Em-dash overuse
- Passive voice excess
- Filler phrases
- Generic CTAs

### 3. Accessibility Baseline
Checks:
- Color contrast ratios (WCAG AA)
- Focus indicator presence
- Alt text on images
- Semantic HTML structure
- Touch target sizes (44px minimum)
- Reduced motion support

### 4. Hierarchy Check
Evaluates:
- Clear visual weight distribution
- Logical heading order (H1 > H2 > H3, no skips)
- CTA prominence relative to other elements
- Information grouping via proximity

### 5. Consistency Check
Looks for:
- Spacing value consistency (are values from the scale?)
- Color token consistency (raw hex vs token usage)
- Typography consistency (type scale adherence)
- Component pattern consistency

## Output Format

```
## Taste Audit Report

### Overall Grade: [A-F]

| Check | Score | Status |
|-------|-------|--------|
| AI Slop | X/10 | PASS/WARN/FAIL |
| Writing | X/10 | PASS/WARN/FAIL |
| Accessibility | X/10 | PASS/WARN/FAIL |
| Hierarchy | X/10 | PASS/WARN/FAIL |
| Consistency | X/10 | PASS/WARN/FAIL |

### Issues Found
[Prioritized list of specific issues with locations]

### Recommendations
[Actionable fixes, most impactful first]
```

## Pass Criteria
- AI Slop: 4 or below
- Writing: 7 or above
- Accessibility: 8 or above
- Hierarchy: 7 or above
- Consistency: 7 or above
- Overall: No FAIL on any check
