---
name: data-table-design
description: Advanced data table patterns, sortable columns, inline editing, and data-dense table design.
triggers: ["data table", "sortable table", "inline editing", "data-dense"]
---

# Advanced Data Table Design

## Column Types
| Type | Alignment | Format |
|------|-----------|--------|
| Text | Left | Natural case |
| Number | Right | Thousand separator, fixed decimals |
| Currency | Right | Symbol + formatted number |
| Date | Left or center | Consistent format, relative when recent |
| Status | Left or center | Badge with color + label |
| Boolean | Center | Checkbox or icon |
| Action | Right | Icon buttons or overflow menu |

## Inline Editing
- Click cell to edit (or pencil icon)
- Show input/select matching the data type
- Save on blur or Enter
- Cancel on Escape
- Visual feedback on save (brief highlight)
- Validate before save

## Performance
- Virtual scrolling for 1000+ rows
- Column virtualization for 20+ columns
- Debounced search and filter
- Server-side pagination for large datasets

## Bulk Actions
- Checkbox column for row selection
- Select all (current page or all results)
- Action bar appears on selection
- Show selected count
- Clear selection button
