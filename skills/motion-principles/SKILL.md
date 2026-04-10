---
name: motion-principles
description: Animation purpose, timing, easing philosophy, and motion as a design language element rather than decoration.
triggers: ["animation", "motion design", "transitions", "easing", "micro-interactions", "loading animation"]
---

# Motion Principles

## Motion Has Purpose

Every animation answers one of these questions:
1. **Where did this come from?** (spatial orientation)
2. **What just happened?** (state feedback)
3. **What should I look at?** (attention direction)
4. **What's related?** (grouping/connection)

If an animation doesn't answer any of these, remove it.

## Timing

### Duration Scale
- Micro-interactions (hover, toggle): 100-200ms
- Element transitions (fade, slide): 200-300ms
- Page transitions: 300-500ms
- Complex orchestrations: 500-800ms
- Loading/progress: match actual duration

### The 300ms Rule
Most UI animations should be under 300ms. Users perceive anything longer as slow. The exception is orchestrated sequences where staggered delays create rhythm.

## Easing

### Which Curve When
- **ease-out** (decelerate): Elements entering the screen. They arrive and settle.
- **ease-in** (accelerate): Elements leaving the screen. They start slow and exit fast.
- **ease-in-out**: Elements moving between two visible positions.
- **linear**: Progress bars, loading spinners. Never for UI transitions.
- **spring/bounce**: Playful brands only. Subtle. Never on critical UI.

### Custom Curves
```css
/* Snappy entrance */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);

/* Smooth move */
--ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);

/* Gentle settle */
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

## Stagger Patterns
When animating multiple items (list items, grid cards), stagger by 30-60ms per item. Cap total duration at 600ms (after ~10 items, start them together in groups).

## Reduced Motion
Always respect `prefers-reduced-motion`. This is not optional.
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Anti-Patterns
- Animations that block interaction (can't click until animation finishes)
- Parallax scrolling on mobile (performance killer, motion sickness trigger)
- Loading spinners when a skeleton screen would work
- Bounce effects on serious/professional products
- Animation on every single element (visual noise)
