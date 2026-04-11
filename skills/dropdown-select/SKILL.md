---
name: dropdown-select
description: Dropdown menus, select inputs, comboboxes, multi-select patterns, and accessible dropdown implementation.
triggers: ["dropdown", "select input", "combobox", "multi-select", "picker"]
---

# Dropdown & Select Patterns

## When to Use What

| Options | Pattern | Why |
|---------|---------|-----|
| 2-3 | Radio buttons or segmented control | All options visible |
| 4-7 | Dropdown select | Manageable list |
| 8-15 | Dropdown with search | Finding options quickly |
| 15+ | Combobox (searchable input) | Must be able to search |
| Multi-select needed | Checkbox list or tag input | Clear selection state |

## Dropdown Design
- Max visible items: 6-8 (then scroll)
- Selected item shown in the trigger
- Checkmark or highlight on selected item
- Keyboard navigation: type to jump, arrows to move, Enter to select
- Group long lists into labeled sections
- Close on selection (single-select) or have an explicit "Done" (multi-select)

## Combobox
- Filter results as user types
- Highlight matching text in results
- Allow custom values if appropriate
- Show "no matches" state with suggestions
- Clear button to reset selection

## Multi-Select
- Show selected count in trigger ("3 selected")
- Show selected items as tags/chips that can be individually removed
- "Select all" and "Clear all" for long lists
- Don't close on selection (users need to select multiple)

## Accessibility
- `role="listbox"` for the options container
- `role="option"` for each item
- `aria-selected` for current selection
- `aria-expanded` on the trigger
- Full keyboard support (Tab, Arrow, Enter, Escape)
