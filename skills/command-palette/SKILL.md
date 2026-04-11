---
name: command-palette
description: Command palette design, keyboard shortcuts, quick actions, and power user interfaces.
triggers: ["command palette", "keyboard shortcuts", "quick actions", "power user"]
---

# Command Palette

## When to Build One
- Users perform repeated actions that could be faster
- App has many features across many sections
- Target users are comfortable with keyboard-first interaction
- Navigation is deep enough that mouse navigation is slow

## Design
- **Trigger:** Cmd+K (Mac) / Ctrl+K (Windows). Universal convention.
- **Appearance:** Centered modal with search input at top
- **Results:** Grouped by type (Actions, Pages, Recent, Settings)
- **Keyboard navigation:** Arrow keys to move, Enter to select, Escape to close
- **No results:** Show helpful suggestions or common actions

## Search Behavior
- Fuzzy matching (typo tolerance)
- Recency bias (recent commands ranked higher)
- Frequency bias (commonly used commands ranked higher)
- Show keyboard shortcut next to each action
- Highlight matching characters in results

## Categories
| Category | Examples |
|----------|---------|
| Navigation | Go to Dashboard, Go to Settings |
| Actions | Create Project, Export Data |
| Recent | Recently visited pages or actions |
| Settings | Toggle dark mode, Change language |
| Help | Docs, Keyboard shortcuts, Support |

## Accessibility
- Full keyboard navigation
- `role="combobox"` on the input
- `role="listbox"` on results
- `aria-activedescendant` for keyboard position
- Screen reader announces result count changes
