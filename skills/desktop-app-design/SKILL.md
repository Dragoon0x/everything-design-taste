---
name: desktop-app-design
description: Desktop application design patterns including window management, menu bars, and keyboard-first interaction.
triggers: ["desktop app", "desktop design", "native app", "Electron"]
---

# Desktop App Design

## Desktop-Specific Patterns

### Window Management
- Resizable with minimum size constraints.
- Remember window position and size between sessions.
- Multi-window support where appropriate.
- Fullscreen mode.

### Menu Bar
- Standard menu structure: File, Edit, View, Window, Help.
- Platform-consistent keyboard shortcuts.
- Menu items match toolbar actions.

### Keyboard-First
- All actions have keyboard shortcuts.
- Tab navigation through all interactive elements.
- Cmd/Ctrl+Z undo everywhere.
- Right-click context menus.

### Panels and Sidebars
- Collapsible panels for tool palettes.
- Drag to resize panels.
- Dock/undock panels.
- Remember panel configuration.

### System Integration
- Respect OS dark/light mode.
- Native file dialogs for open/save.
- Drag and drop from desktop/Finder.
- System notifications for background tasks.