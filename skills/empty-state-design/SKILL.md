---
name: empty-state-design
description: Empty state patterns, zero data states, first-run states, error states, and no-results states.
triggers: ["empty state", "zero state", "no data", "first run"]
---

# Empty State Design

## Types of Empty States

| Type | When | Goal |
|------|------|------|
| First-run | User hasn't created anything yet | Guide to first action |
| No results | Search/filter returned nothing | Help refine or broaden |
| Cleared | User deleted/completed everything | Celebrate or suggest next |
| Error | Data failed to load | Explain and offer retry |
| Permission | User doesn't have access | Explain why, offer path |

## Design Rules
1. **Be specific.** "No projects" is okay. "No projects yet. Create your first one." is better.
2. **Include a CTA.** Always give the user something to do.
3. **Match the page context.** An empty state on a dashboard looks different from a settings page.
4. **Skip decoration.** A helpful message + CTA is better than a cute illustration + vague text.
5. **Don't blame the user.** "You haven't created any projects" → "No projects yet."

## Templates
First-run: [Illustration optional] + "No [items] yet" + "Create your first [item]" [Button]
No results: "No results for '[query]'" + "Try a different search term" + [Clear Search]
Error: "Couldn't load [items]" + "Check your connection and try again" + [Retry Button]