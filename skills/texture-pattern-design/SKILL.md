---
name: texture-pattern-design
description: Background textures, patterns, noise overlays, and surface treatment in digital design.
triggers: ["texture", "pattern", "noise", "grain", "background texture"]
---

# Texture Pattern Design

## Texture Types

| Type | Effect | Use |
|------|--------|----|
| Noise/grain | Organic warmth, depth | Hero backgrounds, dark surfaces |
| Dot pattern | Structure, rhythm | Subtle backgrounds, decorative |
| Line pattern | Direction, movement | Accents, section dividers |
| Geometric | Order, precision | Technical/developer products |
| Organic | Warmth, approachability | Lifestyle/creative brands |

## Implementation
```css
/* Noise overlay */
.textured {
  position: relative;
}
.textured::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  opacity: 0.03;
  pointer-events: none;
}
```

## Rules
1. Textures should be barely perceptible. If it's distracting, it's too strong.
2. Reduce opacity to 2-5% for most textures.
3. Ensure text remains readable over textured backgrounds.
4. Performance: use CSS patterns or tiny tileable images, not large files.
5. Don't combine multiple texture types on the same surface.