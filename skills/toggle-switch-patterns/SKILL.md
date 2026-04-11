---
name: toggle-switch-patterns
description: Toggle switches, checkbox patterns, radio button groups, and boolean input design.
triggers: ["toggle", "switch", "checkbox", "radio button"]
---

# Toggle Switch Patterns

## Choosing the Right Control

| Need | Control | Why |
|------|---------|-----|
| On/off, immediate effect | Toggle switch | Visual, instant feedback |
| On/off, needs save | Checkbox | Part of a form, explicit submission |
| One from few options | Radio group | All options visible |
| One from many options | Dropdown | Space-efficient |
| Multiple from few | Checkbox group | All options visible |
| Multiple from many | Multi-select dropdown | Space-efficient |

## Toggle Switch Rules
- **Takes effect immediately.** No save button needed.
- **Label describes the ON state.** "Enable notifications" (not "Disable notifications").
- **Show current state clearly.** Color change + position + optional ON/OFF text.
- **Minimum size:** 48px wide, 24px tall (larger on mobile).

## Checkbox Rules
- Use when selection is not immediately applied.
- Indeterminate state for parent checkboxes with mixed children.
- Group related checkboxes. Max 7 before switching to multi-select.

## Radio Rules
- Always show all options. If too many, use dropdown.
- One option pre-selected (don't leave all unselected).
- Vertical layout preferred. Horizontal only for 2-3 short options.