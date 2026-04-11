---
name: command-palette-patterns
description: Command palette (Cmd+K), keyboard shortcuts, and power user navigation patterns.
triggers: ["command palette", "cmd k", "keyboard shortcuts", "power user"]
---

# Command Palette Patterns

## Command Palette Design

### Trigger
- Cmd+K (Mac) / Ctrl+K (Windows).
- Also accessible from a search icon in the header.
- Show keyboard shortcut hint near the search icon.

### Structure
- Search input at top (auto-focused).
- Results grouped by type: Pages, Actions, Recent, Settings.
- Keyboard navigation: arrow keys, Enter to execute.
- Recent/frequent actions shown before typing.

### Result Design
- Icon + Label + Category + Keyboard shortcut.
- Fuzzy matching (tolerate typos).
- Max 8-10 visible results, scrollable.
- "No results" with suggestions.

## Keyboard Shortcuts
- Document all shortcuts in a discoverable location.
- Show shortcut hints in tooltips and menus.
- Don't override browser defaults (Cmd+T, Cmd+W).
- ? key opens shortcut reference sheet.