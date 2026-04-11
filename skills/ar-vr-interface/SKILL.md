---
name: ar-vr-interface
description: AR/VR interface design, spatial UI, 3D interaction patterns, and immersive UX.
triggers: ["AR design", "VR interface", "spatial UI", "immersive UX"]
---

# AR/VR Interface Design

## Spatial UI Principles
1. **Ergonomic placement:** UI at comfortable viewing distance (1-2m in VR)
2. **Follow the user:** UI can be world-locked or head-locked
3. **Depth cues:** Use shadows and layering for 3D hierarchy
4. **Avoid UI in peripheral vision** (hard to read, causes nausea)

## VR-Specific
- **Field of view:** Place primary UI in center 60 degrees
- **Text size:** Minimum 1 degree of arc (roughly 1.7cm per meter of distance)
- **Interaction:** Ray casting (point and click), grab, or gaze + dwell
- **Motion sickness:** Avoid moving the user's viewpoint without their control

## AR-Specific
- **Anchor to real world:** UI elements attached to surfaces or objects
- **Contrast:** Ensure readability against variable real-world backgrounds
- **Occlusion:** Handle when real objects block virtual UI
- **Lighting:** Match virtual element lighting to environment

## Common Patterns
- **Panel:** Floating 2D surface in 3D space (settings, menus)
- **Tooltip:** Anchored to object, shows info on gaze/proximity
- **Radial menu:** Circular menu around controller/hand
- **Spatial layout:** Items arranged in 3D space for browsing
