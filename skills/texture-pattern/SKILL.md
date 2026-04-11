---
name: texture-pattern
description: Using textures, patterns, noise, and grain in digital design for depth and character.
triggers: ["textures", "patterns", "grain", "noise texture"]
---

## Texture & Pattern

### Adding Depth with Texture
- **Noise/grain:** Adds warmth, reduces digital flatness. Use at 2-5% opacity.
- **Paper texture:** Editorial, artisanal feel. Subtle, never overpowering.
- **Geometric patterns:** Brand element, backgrounds, section dividers.
- **Dot grids:** Technical, precise, blueprint feel.

### CSS Noise
```css
.textured {
  position: relative;
}
.textured::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml,...'); /* noise SVG */
  opacity: 0.03;
  pointer-events: none;
  mix-blend-mode: overlay;
}
```

### Pattern Rules
1. Patterns should be subtle enough to not interfere with content
2. Use one pattern style per brand (not geometric AND organic)
3. Patterns work best on large background areas, not small components
4. Test pattern readability: put text on it, can you read comfortably?
5. Provide a no-pattern fallback for print and accessibility
