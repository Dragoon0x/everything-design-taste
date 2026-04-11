---
name: sidebar-panel
description: Sidebar design, panel patterns, collapsible sidebars, detail panels, and split-view layouts.
triggers: ["sidebar", "side panel", "detail panel", "split view"]
---

# Sidebar & Panel Patterns

## Sidebar Types
| Type | Purpose | Width |
|------|---------|-------|
| Navigation | Primary app navigation | 240-280px |
| Tool panel | Tools, properties, settings | 280-360px |
| Detail panel | Selected item details | 320-480px |
| Chat/activity | Conversations, activity feed | 320-400px |

## Collapsible Sidebar
- Collapsed state: icons only (48-64px wide)
- Expanded state: icons + labels
- Toggle button always visible
- Remember preference (localStorage)
- On mobile: overlay with backdrop, swipe to dismiss

## Detail Panel
- Opens from the right side
- Shows details of selected item from a list
- Doesn't navigate away from the list view
- Close button (X) in top-right
- Can resize (drag handle on the left edge)

## Rules
1. **Left sidebar for navigation**, right panel for details/properties
2. **Main content area is never less than 50%** of the viewport
3. **Sidebar content scrolls independently** from main content
4. **Pin important actions** to the bottom of the sidebar (log out, settings)
5. **Responsive:** Sidebar becomes an overlay on mobile, not a squeezed column
