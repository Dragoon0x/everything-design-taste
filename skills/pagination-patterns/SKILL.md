---
name: pagination-patterns
description: Pagination, infinite scroll, load more, cursor-based navigation, and virtual scrolling.
triggers: ["pagination", "infinite scroll", "load more", "paging"]
---

# Pagination Patterns

## Choosing a Pattern

| Pattern | Best For | Drawbacks |
|---------|----------|-----------|
| Numbered pages | Search results, reference data | Doesn't scale well past 100 pages |
| Infinite scroll | Social feeds, discovery | Can't reach footer, loses position |
| Load more button | Galleries, blog posts | Manual effort, but controlled |
| Virtual scrolling | Massive lists (1000+ items) | Complex implementation |

## Numbered Pagination
- Show: First, Prev, [current-2]...[current+2], Next, Last.
- Highlight current page.
- Show total items: "Showing 21-40 of 342 results."
- Per-page selector: 10, 25, 50, 100.
- Keyboard navigable.

## Infinite Scroll Rules
- Show loading indicator at bottom when fetching.
- Remember scroll position on back navigation.
- Provide "Back to top" button after scrolling 3+ screens.
- Estimate total: "Showing 40 of ~200 results."

## Virtual Scrolling
- Render only visible rows + buffer (20-50 items above/below viewport).
- Fixed row height makes calculation simpler.
- Dynamic row height: measure once, cache heights.