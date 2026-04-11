---
name: glass-morphism
description: Glassmorphism patterns, backdrop blur, frosted glass effects, and when to use (and avoid) glass effects.
triggers: ["glassmorphism", "frosted glass", "backdrop blur", "glass effect"]
---

## Glassmorphism

### When It Works
- Floating toolbars/navigation over visual content
- Cards overlaying image backgrounds
- Status bars and overlays in media apps
- Modal overlays that maintain background context

### When It Fails
- On solid color backgrounds (pointless, no background to show through)
- When readability is compromised
- Overuse: if everything is glass, nothing has visual weight
- On low-power devices (backdrop-filter is expensive)

### Implementation
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
}
```

### Rules
1. Always add a semi-transparent border (defines the edge)
2. Background opacity: 5-20% (more = less glass effect)
3. Blur radius: 12-24px (less = too noisy, more = solid looking)
4. Ensure text contrast meets WCAG on worst-case backgrounds
5. Fallback for browsers without backdrop-filter support
6. Test on various backgrounds (the effect changes dramatically)
