---
name: spacing-systems
description: Mathematical spacing systems, modular scales, and spatial rhythm.
triggers: ["spacing system", "modular scale", "spatial rhythm"]
---

# Spacing Systems

## Base-4 Scale (Recommended)
```
4  8  12  16  20  24  32  40  48  64  80  96  128
```
Why 4: divisible by 2 (half-pixel precision), works with common grid gutters.

## Base-8 Scale (Alternative)
```
8  16  24  32  40  48  64  80  96  128
```
Coarser, fewer decisions, works well for spacious designs.

## Application
| Context | Typical Values |
|---------|----------------|
| Icon-to-label gap | 4-8px |
| Input padding | 8-12px vertical, 12-16px horizontal |
| Card padding | 16-24px |
| Between form fields | 16-20px |
| Between cards | 16-24px |
| Section margin | 48-96px |
| Page margin (mobile) | 16-20px |
| Page margin (desktop) | 48-96px |

## Rules
1. Use only values from your scale (no magic numbers)
2. More space above headings than below (headings belong to what follows)
3. Related items: tight spacing. Unrelated: loose spacing.
4. Consistent padding within component types
5. Document your scale and enforce it via design tokens
