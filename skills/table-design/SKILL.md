---
name: table-design
description: Data table patterns, sorting, filtering, pagination, responsive tables, and information-dense displays.
triggers: ["table", "data table", "grid", "data display"]
---

# Table Design

## Table Fundamentals

### Column Design
- Left-align text columns. Right-align number columns. Center status indicators.
- Column headers: bold, slightly smaller, uppercase or gray text.
- Sortable columns: show sort indicator. Default sort by most useful column.
- Minimum column width: ensure content doesn't truncate to unreadable lengths.

### Row Design
- Alternate row shading (zebra stripes) for wide tables. Skip for narrow tables.
- Row height: 48-56px for comfortable reading. 36-40px for dense/power-user views.
- Hover state on rows when clickable. No hover state on non-interactive tables.
- Selected state: subtle background highlight + checkbox.

### Pagination vs Infinite Scroll
| Use Pagination | Use Infinite Scroll |
|---------------|-------------------|
| When users search for specific items | When users browse/discover |
| Data tables and results | Social feeds and galleries |
| When URL state matters | When position doesn't matter |

### Responsive Tables
- Under 768px: convert rows to cards. Each card shows one row's data.
- Or: horizontal scroll with first column frozen.
- Never: shrink text to fit. Never: hide columns without user control.
- Priority columns: let users choose which columns to show.

### Filtering
- Filters above the table, not in a sidebar (unless 5+ filter types).
- Show active filter count. One-click to clear all filters.
- Instant filtering (no "Apply" button) for small datasets.