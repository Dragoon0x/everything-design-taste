---
name: scroll-behavior-design
description: Scroll-based interactions, scroll snapping, parallax alternatives, and scroll-linked animation.
triggers: ["scroll", "scroll behavior", "scroll animation", "parallax", "scroll snap"]
---

# Scroll Behavior Design

## Scroll Patterns

### Scroll Snap
```css
.container {
  scroll-snap-type: y mandatory; /* or x, or proximity */
}
.section {
  scroll-snap-align: start;
}
```
Use for: full-page sections, image galleries, card carousels.

### Scroll-Linked Animation
- Reveal elements as they enter viewport.
- Use IntersectionObserver (not scroll event listeners).
- Subtle fade + translateY is the safest bet.
- Don't animate on every scroll pixel (performance).

### Sticky Elements
- Sticky headers: useful for long pages.
- Sticky sidebars: useful for comparison pages.
- Sticky CTAs: useful for long forms or product pages.
```css
.sticky { position: sticky; top: 0; }
```

## Anti-Patterns
- Parallax that causes motion sickness.
- Scroll hijacking (overriding native scroll speed).
- Animations that play on every scroll (jarring on scroll up).
- Infinite scroll without position memory.