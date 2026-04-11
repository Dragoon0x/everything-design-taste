---
name: focus-state-design
description: Keyboard focus indicator design, focus management, and accessible focus patterns.
triggers: ["focus state", "focus ring", "keyboard focus", "focus indicator"]
---

# Focus State Design

## Focus Ring Design

### Requirements
- Visible on all backgrounds (light and dark).
- Minimum 3:1 contrast ratio against surrounding area.
- Must not rely on color alone (use outline, not just color change).

### Recommended Style
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Remove default only when providing custom */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Focus Management
- Modal opens: focus moves to first interactive element inside.
- Modal closes: focus returns to the element that opened it.
- Dynamic content: focus moves to new content (toast, expanded section).
- Page navigation: focus moves to main content area.

## Anti-Patterns
- `outline: none` without replacement (accessibility violation).
- Focus rings that are invisible on some backgrounds.
- Focus order that doesn't match visual order.
- No focus management in dynamic content (modals, drawers).