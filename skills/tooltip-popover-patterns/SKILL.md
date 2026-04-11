---
name: tooltip-popover-patterns
description: Tooltip content, popover design, hover cards, and contextual information display.
triggers: ["tooltip", "popover", "hover card", "info popup"]
---

# Tooltip Popover Patterns

## Tooltips vs Popovers

| Feature | Tooltip | Popover |
|---------|---------|---------|
| Trigger | Hover/focus | Click/tap |
| Content | Short text (1-2 lines) | Rich content, links, actions |
| Dismissal | On mouse leave | Click outside or X button |
| Mobile | Doesn't work well (no hover) | Works with tap |

## Tooltip Rules
- Delay: 300-500ms before showing. Prevents flicker on accidental hover.
- Dismiss: immediately on mouse leave.
- Position: above by default, auto-flip to avoid viewport edges.
- Arrow pointing to trigger element.
- Max width: 200-280px.
- Never put interactive content in tooltips.

## Popover Rules
- Close on click outside or Escape key.
- Focus trap if it contains interactive elements.
- Mobile: use bottom sheet instead of popover.
- Don't nest popovers.