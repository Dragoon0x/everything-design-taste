---
name: drag-drop
description: Drag and drop interaction patterns, sortable lists, kanban boards, and accessible drag and drop.
triggers: ["drag and drop", "sortable", "kanban", "reorder", "drag"]
---

# Drag & Drop Patterns

## When to Use
- Reordering items in a list (priority, sequence)
- Kanban-style board movement (status changes)
- File upload zones
- Widget/layout customization

## Interaction Design
1. **Drag handle:** Use a grip icon (⠿ or ≡), don't make the entire item draggable (interferes with text selection)
2. **Cursor change:** `grab` on hover, `grabbing` while dragging
3. **Drop preview:** Show where the item will land (insertion line or placeholder)
4. **Ghost/shadow:** Semi-transparent copy of the item follows the cursor
5. **Auto-scroll:** Scroll the container when dragging near edges
6. **Snap:** Items snap to valid drop positions

## Feedback
- Source item shows reduced opacity or placeholder
- Valid drop zones highlight
- Invalid drop zones show a "not allowed" indicator
- Animation when item settles into position
- Undo option after drop (toast with "Undo" action)

## Accessibility
Drag and drop MUST have a keyboard alternative:
- Select item (Space/Enter)
- Move with arrow keys
- Drop with Space/Enter
- Cancel with Escape
- Screen reader announcements at each step

## Mobile
- Long press to initiate drag (not immediate)
- Haptic feedback when item lifts and drops
- Larger touch targets for drag handles
- Consider "move to" action as an alternative to dragging
