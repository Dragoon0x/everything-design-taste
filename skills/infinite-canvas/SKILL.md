---
name: infinite-canvas
description: Infinite canvas interfaces, whiteboard UX, spatial design, zoom and pan patterns.
triggers: ["canvas", "whiteboard", "infinite canvas", "spatial UI", "zoom and pan"]
---

# Infinite Canvas Patterns

## Core Interactions
| Action | Input | Touch |
|--------|-------|-------|
| Pan | Middle-click drag, Space+drag | Two-finger drag |
| Zoom | Scroll wheel, Cmd+/- | Pinch |
| Select | Click | Tap |
| Multi-select | Shift+click, drag selection box | Long press + drag |
| Create | Double-click, toolbar action | Double tap, toolbar |

## Navigation
- Minimap in corner showing viewport position
- Zoom controls (+/- buttons with percentage display)
- "Fit to screen" / "Zoom to selection" shortcuts
- Breadcrumb for nested frames/groups

## Performance
- Only render visible elements (viewport culling)
- Level-of-detail: simplify elements at low zoom levels
- Lazy load off-screen content
- Debounce pan/zoom events for rendering

## Grid & Snapping
- Optional grid overlay (toggle on/off)
- Snap to grid while dragging
- Smart guides (alignment lines showing relation to other elements)
- Distance indicators between selected and nearby elements

## Collaboration
- Real-time cursor positions of other users
- User name labels on cursors
- Selection highlighting per user
- Viewport indicators on minimap for each user
