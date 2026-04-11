---
name: filter-sort-patterns
description: Filter and sort UI patterns for list and search interfaces.
triggers: ["filter","sort","faceted search","filter panel"]
---

# Filter & Sort Patterns

## Filter Types
| Type | Best For | Implementation |
|------|----------|----------------|
| Checkbox | Multi-select categories | Expandable sections |
| Radio | Single-select | Expandable sections |
| Range slider | Price, rating, dates | Dual-thumb slider |
| Search | Large option lists | Searchable checkbox list |
| Toggle | Binary filters | Switch or chip |

## Design Patterns
- **Sidebar filters:** Desktop, persistent alongside results
- **Top bar filters:** Horizontal chips/pills above results
- **Filter modal:** Mobile, full-screen or bottom sheet
- **Applied filters:** Show as removable chips above results

## Rules
1. Show result count updating with each filter change
2. "Clear all" button always visible
3. Show active filter count on the filter button (mobile)
4. Persist filter state in URL (shareable, bookmarkable)
5. Remember recent filter combinations
6. Sort: relevance, newest, price, popular as minimum options
