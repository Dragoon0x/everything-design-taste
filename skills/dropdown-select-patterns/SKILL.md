---
name: dropdown-select-patterns
description: Dropdown menus, select inputs, multi-select, combobox, and contextual menu design.
triggers: ["dropdown", "select", "combobox", "multi-select", "menu"]
---

# Dropdown Select Patterns

## Choosing the Right Pattern

| # of Options | Pattern |
|-------------|---------|
| 2-3 | Radio buttons or segmented control (show all) |
| 4-7 | Simple dropdown select |
| 8-20 | Dropdown with search/filter |
| 20+ | Combobox with autocomplete |
| Multiple selections | Multi-select with checkboxes or tag input |

## Dropdown Rules
- Max visible items: 7-8 before scrolling.
- Selected option visible when dropdown is closed.
- Keyboard navigable: arrow keys, enter to select, escape to close.
- Open direction: prefer downward, flip upward if near bottom of viewport.

## Combobox
- Filter as user types.
- Highlight matching text in options.
- "No matches" state with suggestion to clear or broaden.
- Allow custom entry if the field supports it.

## Context Menus (Right-Click)
- Group actions with dividers.
- Show keyboard shortcuts beside action labels.
- Destructive actions at the bottom, visually separated.
- Max 10-12 items. Beyond that, use submenus.