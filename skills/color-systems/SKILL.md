---
name: color-systems
description: Perceptual color theory, accessible palette creation, mood mapping, and systematic color usage in interfaces.
triggers: ["color palette", "color system", "color theory", "accessibility colors", "dark mode colors", "color tokens"]
---

# Color Systems

## Building a Palette

### The 60-30-10 Rule
- 60% dominant color (backgrounds, large surfaces)
- 30% secondary color (cards, sections, supporting elements)
- 10% accent color (CTAs, active states, key interactive elements)

### Systematic Palette Generation

Start with one brand color. Build everything from there.

1. **Generate a hue scale** — Create 10 steps from near-white to near-black
   - 50 (lightest background)
   - 100 (subtle background)
   - 200 (border/divider)
   - 300 (placeholder/disabled)
   - 400 (secondary text)
   - 500 (body text on light)
   - 600 (primary interactive)
   - 700 (hover state)
   - 800 (heading text)
   - 900 (darkest text)

2. **Add functional colors** — These are non-negotiable:
   - Error/destructive (red family)
   - Warning (amber/yellow family)
   - Success (green family)
   - Info (blue family)
   - Each needs at least 3 values: light (bg), medium (text), dark (border)

3. **Add neutrals** — Gray scale that harmonizes with brand hue
   - Warm grays if warm brand color
   - Cool grays if cool brand color
   - Never pure gray (#808080) unless intentionally brutalist

### Perceptual Uniformity

Not all colors are equally bright to the human eye. Green appears brighter than blue at the same lightness value. When creating color scales:
- Use OKLCH or CIELAB color space instead of HSL
- Test colors at the same L value to ensure visual consistency
- Yellow needs to be darker than blue to appear "equal" in a UI

## Accessibility

### Contrast Requirements (WCAG AA)
- Body text: 4.5:1 minimum
- Large text (18px+ or 14px bold): 3:1 minimum
- UI components and graphical objects: 3:1 minimum
- Decorative elements: no requirement

### Contrast Checklist
- Text on background (both themes)
- Icon on background
- Button text on button background
- Form input text on input background
- Placeholder text (yes, this counts)
- Focus ring visibility
- Link text vs surrounding text

### Color Blindness
- Never use color alone to convey information
- Red/green is the most common confusion (8% of males)
- Add icons, patterns, or labels alongside color indicators
- Test with deuteranopia and protanopia filters

## Dark Mode Color Adjustments
- Reduce saturation by 10-20% for brand colors
- Use gray-900/gray-950 for backgrounds (not pure black)
- Swap elevation model: lighter = higher (opposite of light mode)
- Reduce shadow opacity to near-zero
- Ensure accent colors still have sufficient contrast
- Test all feedback colors (error/warning/success) against dark surfaces
