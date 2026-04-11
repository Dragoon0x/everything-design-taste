---
name: keyboard-shortcut-design
description: Designing keyboard shortcut systems, key binding conventions, and shortcut discoverability.
triggers: ["keyboard shortcuts","key bindings","hotkeys"]
---

# Keyboard Shortcut Design

## Conventions to Follow
| Action | Mac | Windows |
|--------|-----|---------|
| Save | Cmd+S | Ctrl+S |
| Undo | Cmd+Z | Ctrl+Z |
| Redo | Cmd+Shift+Z | Ctrl+Y |
| Find | Cmd+F | Ctrl+F |
| Select all | Cmd+A | Ctrl+A |
| Copy/Cut/Paste | Cmd+C/X/V | Ctrl+C/X/V |
| Close | Cmd+W | Ctrl+W |

## App-Specific Shortcuts
- Use single letters for frequent actions (in non-text contexts)
- Modifier + letter for less frequent actions
- Show shortcuts in tooltips and menus
- Command palette (Cmd+K) as discovery mechanism

## Shortcut Cheat Sheet
- Accessible via Cmd+/ or ? key
- Grouped by category
- Searchable
- Shows current key bindings

## Rules
1. Never override browser shortcuts without very good reason
2. Show shortcuts alongside menu items
3. Allow customization for power users
4. Document all shortcuts in a discoverable place
5. Focus states must work perfectly for keyboard users
