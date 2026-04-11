---
name: search-ux
description: Search interface design, autocomplete, filters, results display, and zero-results handling.
triggers: ["search", "search UX", "autocomplete", "search results"]
---

# Search Ux

## Search Input
- Prominent placement. Top of page or header bar.
- Placeholder text: specific to content. "Search products..." not "Search..."
- Magnifying glass icon inside or beside the input.
- Clear button appears when text is entered.
- Keyboard shortcut (Cmd+K or /) for power users.

## Autocomplete
- Show suggestions after 2-3 characters.
- Debounce: 200-300ms after last keystroke.
- Categorize results (Products, Articles, Users).
- Highlight the matching text in suggestions.
- Recent searches above suggestions.
- Max 7-10 suggestions visible.

## Results Page
- Show result count. "42 results for 'design systems'"
- Snippet/preview for each result with query terms highlighted.
- Sort options: Relevance (default), Date, Popularity.
- Filters: sidebar on desktop, drawer on mobile.

## Zero Results
Never show just "No results found." Always provide:
1. Spelling suggestions ("Did you mean...?")
2. Related categories or tags
3. Popular/trending content
4. Clear search and browse option
5. Contact support link if appropriate