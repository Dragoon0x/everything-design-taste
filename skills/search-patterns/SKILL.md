---
name: search-patterns
description: Search UX, autocomplete, filters, search results, empty states, and search analytics.
triggers: ["search design", "search UX", "autocomplete", "search results"]
---

# Search Patterns

## Search Input
- Prominent placement (top of page or easily accessible)
- Placeholder text: "Search [what they're searching]" not just "Search"
- Magnifying glass icon (universal, don't reinvent)
- Clear button (X) appears after typing
- Search on submit (Enter key), not on every keystroke (unless autocomplete)

## Autocomplete
- Show after 2-3 characters minimum
- Highlight matching text in suggestions
- Limit to 5-8 suggestions
- Include category/type labels for mixed results
- Keyboard navigation (up/down arrows, Enter to select)
- Show recent searches when input is focused but empty

## Search Results
- Show result count
- Highlight matched terms in results
- Show clear content type (article, product, person)
- Include enough context to evaluate relevance without clicking
- Sort by relevance by default, offer sort options

## No Results
Never show just "No results found." Instead:
1. Confirm what they searched for
2. Check for typos and suggest corrections
3. Suggest related terms or categories
4. Offer a way to browse instead
5. If applicable, suggest they try different filters

## Filters
- Show active filter count on the filter button
- Allow combining filters (AND logic, not OR)
- Show result count update as filters change
- Clear all filters with one action
- Remember filter state within a session
