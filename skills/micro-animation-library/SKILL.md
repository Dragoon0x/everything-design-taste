---
name: micro-animation-library
description: A reference library of common micro-animations with CSS/JS implementations.
triggers: ["micro animations","animation library","CSS animations"]
---

# Micro-Animation Library

## Entry Animations
```css
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(16px); }
  to { opacity: 1; transform: translateX(0); }
}
```

## Interaction Feedback
```css
.button:active { transform: scale(0.97); }
.card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.toggle-on { background: var(--color-accent); }
.checkbox-check { stroke-dasharray: 16; animation: drawCheck 200ms ease forwards; }
```

## State Transitions
```css
.expandable { transition: height 250ms ease, opacity 200ms ease; }
.skeleton { animation: shimmer 1.5s ease-in-out infinite; }
.toast-enter { animation: slideInRight 200ms ease-out; }
.toast-exit { animation: fadeOut 150ms ease-in; }
```

## Usage Rules
- All durations from the timing scale (100, 150, 200, 250, 300, 400, 500ms)
- All easings from the easing tokens
- `prefers-reduced-motion: reduce` disables all
- GPU-accelerated properties only (transform, opacity)
