---
name: glassmorphism-effects
description: Glass effects, blur techniques, frosted glass UI, and translucency in interface design.
triggers: ["glassmorphism", "blur", "frosted glass", "backdrop blur", "translucent UI"]
---

# Glassmorphism Effects

## Glassmorphism

### Properties
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
}
```

### When It Works
- Overlays on colorful or photographic backgrounds.
- Navigation bars over content.
- Card overlays on media.
- Modal backgrounds.

### When It Doesn't
- On solid color backgrounds (nothing to blur = no effect).
- Dense text content (readability suffers).
- Low-end devices (backdrop-filter is expensive).

## Performance
- `backdrop-filter` is GPU-intensive.
- Provide fallback: solid semi-transparent background.
- Test on older devices.
- Limit the area affected (don't blur the entire viewport).

## Accessibility
- Ensure text contrast meets WCAG even with blur.
- Test with blur disabled (graceful degradation).
- High-contrast mode should override glass effects.