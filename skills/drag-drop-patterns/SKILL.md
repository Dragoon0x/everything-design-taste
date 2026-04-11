---
name: drag-drop-patterns
description: Drag and drop interaction design, sortable lists, kanban boards, and file upload drop zones.
triggers: ["drag and drop", "sortable", "kanban", "reorder"]
---

# Drag Drop Patterns

## Drag Patterns

### Sortable List
- Drag handle (grip icon) on the left of each item.
- Ghost/placeholder showing where item will drop.
- Subtle animation as items reorder.
- Touch: long press to initiate drag.

### Kanban Board
- Cards draggable between columns.
- Column scroll independent of board scroll.
- Drop zone highlights when dragging over.
- Auto-scroll when dragging near edges.

### File Upload Drop Zone
- Dashed border, muted background.
- "Drop files here or click to upload" text.
- Active state: solid border, highlighted background when file hovers.
- Show file list with progress bars after drop.
- Support: drag from desktop, click to browse, paste from clipboard.

## Accessibility
- All drag-and-drop must have keyboard alternatives.
- Sortable: arrow keys to move, Enter to confirm.
- Announce position changes to screen readers.