---
name: keyboard-navigation
description: Designing for keyboard-first users, focus management, and keyboard shortcuts.
triggers: ["keyboard navigation","focus management","keyboard first"]
---

# Keyboard Navigation

## Focus Order
1. Follows visual reading order (top-left to bottom-right in LTR)
2. Skip links at the top: "Skip to main content"
3. Tab moves forward, Shift+Tab moves backward
4. No keyboard traps (user can always Tab away, except modals)
5. Focus returns to trigger after modal/dialog close

## Focus Indicators
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```
- Always visible, never `outline: none` without replacement
- High contrast against background
- Consistent style across all elements

## Component Keyboard Patterns
| Component | Keys |
|-----------|------|
| Button | Enter/Space to activate |
| Link | Enter to follow |
| Tab panel | Arrow keys between tabs, Tab into content |
| Menu | Arrow keys to navigate, Enter to select, Escape to close |
| Modal | Escape to close, Tab cycles within |
| Combobox | Arrow keys, Enter to select, Escape to close |
| Slider | Arrow keys to adjust value |
