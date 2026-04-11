---
name: table-patterns
description: Data table design, sorting, filtering, pagination, responsive tables, and dense data display.
triggers: ["data table", "table design", "data grid", "tabular data"]
---

# Table Patterns

## When to Use Tables
- Comparing multiple items across the same attributes
- Displaying structured data that users need to scan, sort, or filter
- NOT for layout. NOT when a card list would be more scannable.

## Column Design
1. **Left-align text, right-align numbers.** Decimal points should line up vertically.
2. **First column is the identifier.** Name, title, ID, whatever uniquely identifies the row.
3. **Action column goes last.** Edit, delete, view buttons on the right.
4. **Pin the identifier column on horizontal scroll.** Users need context when scrolling wide tables.

## Sorting
- Default sort should be the most useful order (usually most recent first or alphabetical)
- Show sort direction with an arrow icon
- Allow sorting on any column that makes sense
- Remember sort preference across sessions

## Pagination vs Infinite Scroll vs Virtual Scroll
| Method | Best For | Avoid When |
|--------|----------|------------|
| Pagination | Large datasets, precise navigation | Quick browsing |
| Infinite scroll | Feed-like content, browsing | Users need to reach the footer, precise navigation |
| Virtual scroll | Very large lists (1000+), performance | Simple short lists |

## Responsive Tables
- **Under 768px:** Convert to card list, stacked key-value pairs, or horizontal scroll
- Never just shrink the table until text wraps into unreadable blocks
- Priority columns: show the most important 2-3 columns, hide rest behind expansion

## Density
- **Compact:** 32px row height, 12px padding. For power users, data-heavy dashboards.
- **Default:** 48px row height, 16px padding. Most contexts.
- **Comfortable:** 64px row height, 24px padding. When rows have multiple lines or images.
- Offer a density toggle for data-heavy applications.
