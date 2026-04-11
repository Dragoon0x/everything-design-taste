---
name: responsive-typography
description: Fluid typography systems, viewport-based scaling, and responsive type hierarchies.
triggers: ["responsive typography","fluid type","viewport type"]
---

# Responsive Typography

## Fluid Type Scale
```css
/* clamp(min, preferred, max) */
--font-size-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--font-size-h3: clamp(1.25rem, 1rem + 1vw, 1.5rem);
--font-size-h2: clamp(1.5rem, 1rem + 2vw, 2.25rem);
--font-size-h1: clamp(2rem, 1rem + 3vw, 3.5rem);
--font-size-display: clamp(2.5rem, 1rem + 5vw, 5rem);
```

## Line Length by Viewport
- Mobile (320-480px): 35-50 characters
- Tablet (768-1024px): 50-65 characters
- Desktop (1280+): 55-75 characters
- Set `max-width` on text containers, not viewport percentage

## Responsive Adjustments
| Property | Mobile | Desktop |
|----------|--------|---------|
| Body size | 16px | 18-20px |
| H1 size | 28-32px | 48-64px |
| Line height (body) | 1.5 | 1.6 |
| Line height (headings) | 1.1 | 1.15 |
| Letter-spacing (headings) | -0.01em | -0.02em |
