---
name: popover-flyout
description: Popover design, flyout menus, and hoverable content panels.
triggers: ["popover", "flyout", "hover panel", "content popup"]
---

# Popover & Flyout

## Popover
- Triggered by click (not hover)
- Contains rich content (text, links, mini-forms)
- Close: click outside, Escape, or explicit close button
- One popover open at a time
- Position near trigger, flip at viewport edges
- Arrow pointing to trigger element

## Flyout Menu
- Triggered by hover (desktop) or click (mobile)
- Contains navigation links or sub-options
- Show after brief delay (100-200ms hover)
- Keep open while cursor is within bounds
- Diagonal movement tolerance (don't close when moving diagonally to submenu)

## Design Rules
1. Max width: 320px for most popovers
2. Consistent shadow and border treatment
3. Don't nest popovers (if you need this, rethink the UX)
4. Mobile: convert to bottom sheet or full-screen
5. Content should be scannable (not a wall of text)

## Accessibility
- `role="dialog"` for interactive popovers
- `aria-expanded` on trigger
- Focus trap for interactive content
- Escape to close
