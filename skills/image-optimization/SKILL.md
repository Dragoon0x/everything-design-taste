---
name: image-optimization
description: Image format selection, responsive images, lazy loading, and image performance optimization.
triggers: ["image optimization", "image format", "responsive images", "lazy loading"]
---

# Image Optimization

## Format Selection

| Format | Best For | Notes |
|--------|----------|------|
| WebP | Photos, illustrations | 30% smaller than JPEG, wide support |
| AVIF | Photos (next-gen) | 50% smaller than JPEG, growing support |
| SVG | Icons, logos, simple graphics | Scalable, tiny file size |
| PNG | Screenshots with text, transparency | Lossless, larger files |
| JPEG | Fallback for photos | Universal support |

## Responsive Images
```html
<img
  srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  src="image-800.webp"
  alt="Descriptive text"
  loading="lazy"
  decoding="async"
/>
```

## Performance Rules
1. **Lazy load below-fold images.** `loading="lazy"` on img tags.
2. **Size images to display size.** Don't serve 4000px images in 400px containers.
3. **Preload hero images.** `<link rel="preload" as="image">` for above-fold.
4. **Use CDN.** Serve images from edge locations.
5. **Set explicit dimensions.** Prevent layout shift (CLS).