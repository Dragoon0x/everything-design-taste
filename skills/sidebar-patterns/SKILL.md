---
name: sidebar-patterns
description: Sidebar navigation, collapsible sidebars, drawer patterns, and sidebar content architecture.
triggers: ["sidebar", "side navigation", "drawer navigation", "sidebar design"]
---

# Sidebar Patterns

## Sidebar Types

### App Sidebar (Always Visible)
- Fixed width: 240-280px expanded, 48-64px collapsed (icon-only).
- Toggle between expanded and collapsed.
- Show active section with background highlight.
- Group items with section labels.

### Content Sidebar
- Right side for supplementary information (properties, details, chat).
- Resizable if content varies.
- Collapsible to maximize main content area.

### Mobile Drawer
- Off-canvas, slides in from left.
- Overlay dims the background.
- Swipe to dismiss.
- Full-height, 280-320px width.

## Information Architecture
- Top: logo/brand + collapse toggle.
- Primary navigation items (5-8 max at top level).
- Grouped with section dividers or headers.
- Bottom: user avatar/settings, help, logout.
- Badge counts for items needing attention.
- Nested items: expand/collapse with arrow indicator, max 2 levels deep.