---
name: border-divider-patterns
description: Border usage, divider patterns, and visual separation techniques in UI design.
triggers: ["border", "divider", "separator", "visual separation"]
---

# Border Divider Patterns

## Separation Methods

| Method | When | Example |
|--------|------|--------|
| White space | Default, sufficient for most cases | Section gaps |
| Background change | Large sections, obvious grouping | Alternating row colors |
| Border/line | Tight spaces, clear delineation needed | Table rows, list items |
| Shadow | Overlapping elements, elevation | Cards on a surface |
| Color band | Strong visual break, decorative | Section dividers |

## Border Rules
1. **1px is usually enough.** 2px for emphasis only.
2. **Use semantic color tokens.** --color-border-default, --color-border-strong.
3. **Don't border everything.** White space often works better.
4. **Consistent style.** Solid throughout, or dashed for a specific meaning (drag targets, optional areas).
5. **Radius matches the system.** Don't mix sharp and rounded borders.

## Divider Rules
- Full-width dividers for major section breaks.
- Inset dividers (indented from edges) for related list items.
- Vertical dividers sparingly (toolbar groups, split panels).
- Never stack dividers and spacing (use one or the other).