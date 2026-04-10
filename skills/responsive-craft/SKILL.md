---
name: responsive-craft
description: Content-driven breakpoints, fluid typography, responsive patterns beyond just "stack on mobile," and designing for real device diversity.
triggers: ["responsive design", "mobile design", "breakpoints", "fluid design", "adaptive layout", "mobile first"]
---

# Responsive Craft

## Content-First Breakpoints

Don't design for iPhone 14 Pro and MacBook Pro. Design for the content.

### Process
1. Start with the narrowest viewport (320px)
2. Slowly widen the browser
3. When the layout starts looking bad, THAT is your breakpoint
4. Name breakpoints by behavior, not device: `--layout-single`, `--layout-sidebar`, `--layout-full`

## Fluid Typography

### clamp() Formula
```css
/* Minimum size, preferred size (viewport-relative), maximum size */
font-size: clamp(1rem, 0.5rem + 2vw, 2rem);

/* Practical scale */
--text-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-h1: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
--text-h2: clamp(1.5rem, 1.25rem + 1.5vw, 2.5rem);
```

### Fluid Spacing
Same principle applies to spacing:
```css
--space-section: clamp(3rem, 2rem + 5vw, 8rem);
--space-container: clamp(1rem, 0.5rem + 3vw, 4rem);
```

## Beyond Stack-on-Mobile

### Navigation
- Desktop: horizontal nav bar
- Tablet: priority+ pattern (most important items visible, rest in overflow)
- Mobile: bottom tab bar for primary actions, hamburger for secondary

### Tables
- Desktop: full table
- Tablet: horizontal scroll with fixed first column
- Mobile: card-based layout with key-value pairs

### Forms
- Desktop: multi-column where logical
- Mobile: always single column, larger touch targets, sticky submit button

### Images
- Art direction: different crops for different viewports (not just scale)
- Use `<picture>` with `srcset` for art direction
- Lazy load below-fold images

## Touch Considerations
- Minimum touch target: 44x44px (Apple) / 48x48px (Material)
- Spacing between targets: minimum 8px
- Thumb zone: primary actions in bottom 60% of screen on mobile
- Swipe gestures: provide button alternatives (not everyone discovers gestures)

## Performance as Design
- Mobile users are often on slower connections
- Critical CSS inline, rest deferred
- Images: WebP/AVIF with fallbacks
- Skeleton screens instead of loading spinners
- Perceived performance matters more than actual performance
