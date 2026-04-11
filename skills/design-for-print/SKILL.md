---
name: design-for-print
description: Designing for print output, CMYK considerations, bleed, and print-specific typography.
triggers: ["print design", "CMYK", "print layout", "bleed"]
---

# Design for Print

## Key Differences from Screen
| Property | Screen | Print |
|----------|--------|-------|
| Color mode | RGB | CMYK |
| Resolution | 72-144 PPI | 300 DPI minimum |
| Typography | px, rem | pt (points) |
| Color accuracy | Monitor-dependent | Pantone reference |
| Bleed | N/A | 3mm minimum |
| Safe area | Viewport | Inside trim marks |

## CMYK Color
- Bright RGB colors (neon green, electric blue) can't be reproduced
- Rich black: C60 M40 Y40 K100 (not just K100)
- Large solid areas may show banding, add subtle texture
- Request a proof before final print run

## Typography for Print
- Body text: 9-12pt (smaller than screen)
- Leading: 120-145% of font size
- Serif fonts are more readable in print body text (opposite of screen)
- Avoid fonts lighter than Regular weight

## Bleed & Margins
- Bleed: extend backgrounds 3mm beyond trim
- Safety margin: keep critical content 5mm inside trim
- Spine margin (books): add extra margin on binding side
