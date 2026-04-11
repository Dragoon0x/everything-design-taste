---
name: tablet-design-patterns
description: Tablet-specific design patterns including split views, multitasking, and adaptive layouts.
triggers: ["tablet", "iPad", "tablet design", "adaptive layout"]
---

# Tablet Design Patterns

## Tablet-Specific Considerations

### Layout
- Don't just scale up the phone layout. Use the space.
- Split view: list on left (320px), detail on right.
- Master-detail pattern is the tablet default.
- Multi-column grids (2-3 columns for content).

### Multitasking
- Support split-screen with other apps (iPad).
- Adaptive layout that works at half-width.
- Slide-over support.
- Drag and drop between apps.

### Input
- Touch and keyboard/trackpad simultaneously.
- Hover states for trackpad users.
- Apple Pencil / stylus support where relevant.
- Larger touch targets than phone (more space available).

### Orientation
- Support both portrait and landscape.
- Adjust layout for each (not just rotate).
- Remember user's preferred orientation.