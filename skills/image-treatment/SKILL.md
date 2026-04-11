---
name: image-treatment
description: Image optimization, aspect ratios, art direction, responsive images, and image loading strategies.
triggers: ["image optimization", "aspect ratios", "responsive images", "image loading"]
---

## Image Treatment

### Aspect Ratios
| Ratio | Use |
|-------|-----|
| 1:1 | Avatars, product thumbnails, app icons |
| 4:3 | Standard photos, cards |
| 3:2 | Photography, landscape |
| 16:9 | Hero banners, video thumbnails |
| 21:9 | Cinematic banners, ultra-wide heroes |

### Responsive Images
```html
<picture>
  <source media="(min-width: 1024px)" srcset="large.webp">
  <source media="(min-width: 768px)" srcset="medium.webp">
  <img src="small.webp" alt="Descriptive text" loading="lazy">
</picture>
```

### Loading Strategy
1. **Above fold:** Eager loading, preload critical images
2. **Below fold:** `loading="lazy"` native lazy loading
3. **Placeholders:** Blurred thumbnail (LQIP) or dominant color
4. **Progressive JPEG:** Loads blurry then sharp
5. **WebP/AVIF** with JPEG fallback

### Art Direction
- Different crops for different viewports (not just resize)
- Mobile: tighter crop focused on subject
- Desktop: wider crop with context
- `object-fit: cover` with considered `object-position`
