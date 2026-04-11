---
name: micro-animation-design
description: Micro-interaction animation design, state transitions, and feedback animations.
triggers: ["micro-animation", "micro-interaction", "UI animation", "state transition"]
---

# Micro Animation Design

## Micro-Animation Categories

### Feedback
- Button press (scale down 95%, 100ms).
- Toggle switch (slide + color, 200ms).
- Checkbox (check mark draws in, 200ms).
- Like/heart (scale up + color, 300ms with spring easing).

### State Transitions
- Accordion open/close (height + opacity, 250ms).
- Tab switch (slide + fade, 200ms).
- Modal enter (scale from 95% + fade, 200ms).
- Modal exit (fade out, 150ms — exits should be faster than enters).

### Loading
- Skeleton shimmer (gradient sweep, 1.5s, infinite).
- Spinner rotation (360°, 800ms, infinite).
- Progress bar fill (width, eased).
- Content fade in (opacity 0→1, staggered by 50ms per item).

### Attention
- Badge pulse (scale 1→1.1→1, 600ms, once on new count).
- Error shake (translateX -4px→4px→0, 300ms).
- Success checkmark (draw SVG path, 400ms).

## Implementation Notes
- Only animate `transform` and `opacity` for 60fps.
- Use `will-change` sparingly.
- Always honor `prefers-reduced-motion`.