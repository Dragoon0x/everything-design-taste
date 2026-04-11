---
name: skeleton-component-library
description: Common skeleton screen patterns for different component types.
triggers: ["skeleton components","loading skeletons","placeholder patterns"]
---

# Skeleton Component Library

## Component Skeletons
```
Text paragraph:
████████████████████████████████████
██████████████████████████████
████████████████████████████████████████

Card:
┌─────────────────┐
│ ████████████████ │  ← Image placeholder
│ ████████████     │  ← Title
│ ██████████████   │  ← Description line 1
│ ████████████     │  ← Description line 2
│ ██████           │  ← Metadata
└─────────────────┘

Avatar + Name:
(●) ████████████

Table Row:
████ │ ████████ │ ██████████ │ █████
```

## Rules
1. Match real content dimensions exactly
2. Vary text line widths (not all same length)
3. Shimmer animation: left to right, 1.5s cycle
4. Show 3-5 skeleton items, not 20
5. Transition: fade in real content, don't replace instantly
