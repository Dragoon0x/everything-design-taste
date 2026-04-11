---
name: contextual-menu
description: Context menus, right-click menus, action menus, and overflow menu patterns.
triggers: ["context menu", "right-click menu", "action menu", "overflow"]
---

# Contextual Menus

## Types
| Type | Trigger | Use |
|------|---------|-----|
| Context menu | Right-click (desktop) | File operations, editing actions |
| Action menu | Click on ⋮ or ⋯ icon | Item-level actions |
| Dropdown menu | Click on button | Navigation, options |
| Command menu | Keyboard shortcut (Cmd+K) | Global search and actions |

## Design Rules
1. Group related actions with dividers
2. Show keyboard shortcuts aligned right
3. Destructive actions at bottom, visually distinct (red text)
4. Max 10-12 items before grouping or restructuring
5. Disabled items: show but gray out (don't hide)
6. Icons optional but helpful for scanning

## Positioning
- Open near the trigger, within viewport
- Flip if near edge of screen
- Submenu: opens to the right (or left if at right edge)

## Accessibility
- `role="menu"` on container
- `role="menuitem"` on each item
- Arrow keys to navigate
- Enter/Space to select
- Escape to close
- Focus returns to trigger on close
