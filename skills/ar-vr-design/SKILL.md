---
name: ar-vr-design
description: Augmented and virtual reality interface design including spatial UI, 3D interaction, and immersive experience patterns.
triggers: ["AR", "VR", "spatial design", "augmented reality", "virtual reality"]
---

# Ar Vr Design

## AR Design Principles
- **World-anchored:** UI elements attached to real-world surfaces.
- **Minimal HUD:** Don't clutter the real-world view.
- **Lighting-aware:** UI adapts to environment brightness.
- **Occlusion:** Virtual objects hidden behind real objects.

## VR Design Principles
- **Comfort first:** Avoid motion sickness. Fixed reference points.
- **Spatial audio:** Sound direction matches visual position.
- **Readable text:** Minimum 1.5° angular size (~32px at arm's length).
- **Interaction range:** Content within arm's reach for interaction.

## UI Placement
- **Head-locked:** Moves with user's head. Use sparingly (HUD, notifications).
- **World-locked:** Fixed in 3D space. Use for spatial content.
- **Body-locked:** Follows user but with lag. Use for menus.
- **Gaze-following:** Faces the user. Use for information panels.

## Input Methods
- Gaze + dwell (look at button for 1-2s to activate).
- Hand tracking (pinch, grab, point).
- Controller (ray-casting, trigger, grip).
- Voice commands (hands-free interaction).