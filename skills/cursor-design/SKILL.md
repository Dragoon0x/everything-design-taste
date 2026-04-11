---
name: cursor-design
description: Custom cursor design, cursor states, and pointer interaction feedback.
triggers: ["cursor", "custom cursor", "pointer", "cursor state"]
---

# Cursor Design

## Cursor States

| Cursor | When |
|--------|------|
| default (arrow) | Normal interaction |
| pointer (hand) | Clickable elements (links, buttons) |
| text (I-beam) | Text content, input fields |
| grab / grabbing | Draggable elements |
| not-allowed | Disabled or unavailable actions |
| wait / progress | Loading (avoid — prefer inline indicators) |
| zoom-in / zoom-out | Zoomable images |
| crosshair | Precise selection (drawing, cropping) |
| col-resize / row-resize | Resizable borders |

## Custom Cursors
- Use sparingly. Custom cursors can confuse users.
- Maximum size: 32x32px (128x128 on high-DPI).
- Maintain the hotspot in the expected position.
- Portfolio/creative sites: custom cursors can be a signature element.
- Apps/tools: stick with system cursors.

## Rules
- Every interactive element should have cursor: pointer.
- Never hide the cursor (except in fullscreen media/games).
- Disabled elements: cursor: not-allowed + reduced opacity.