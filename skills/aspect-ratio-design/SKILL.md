---
name: aspect-ratio-design
description: Image and media aspect ratio standards, responsive aspect ratios, and consistent media sizing.
triggers: ["aspect ratio", "image ratio", "video ratio", "media sizing"]
---

# Aspect Ratio Design

## Common Aspect Ratios

| Ratio | Use Case |
|-------|----------|
| 1:1 | Avatars, thumbnails, social posts |
| 4:3 | Product photos, presentations |
| 3:2 | Photography, cards |
| 16:9 | Video, hero images, banners |
| 21:9 | Ultrawide heroes, cinematic |
| 9:16 | Vertical video (Stories, Reels) |

## Implementation
```css
.media {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
}
```

## Rules
1. **Consistent ratios within a grid.** Mixed ratios in a card grid = visual chaos.
2. **object-fit: cover** for photos (crops to fill). **contain** for logos/icons.
3. **object-position** to control crop focal point.
4. **Responsive ratios:** wider on desktop, taller on mobile (e.g., 21:9 → 16:9 → 4:3).