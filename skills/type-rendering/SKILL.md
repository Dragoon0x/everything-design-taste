---
name: type-rendering
description: Font rendering across platforms, hinting, subpixel rendering, and font loading optimization.
triggers: ["font rendering", "font loading", "web fonts", "font optimization"]
---

# Type Rendering

## Cross-Platform Differences
| Platform | Rendering | Impact |
|----------|-----------|--------|
| macOS | Smooth, slightly heavier | Looks good at all sizes |
| Windows (ClearType) | Sharper, thinner | Thin weights look bad |
| Linux | Varies by distro | Inconsistent |
| iOS | Same as macOS | Excellent |
| Android | Varies by device | Test on budget devices |

## Font Loading Strategy
```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/body.woff2" as="font" type="font/woff2" crossorigin>

<!-- Font display strategy -->
@font-face {
  font-family: 'BodyFont';
  src: url('/fonts/body.woff2') format('woff2');
  font-display: swap; /* Show fallback immediately, swap when loaded */
}
```

## Rules
1. WOFF2 format only (best compression, broadest support)
2. Subset fonts (only include characters you use)
3. Preload above-fold fonts
4. `font-display: swap` for body, `optional` for decorative
5. System font stack as fallback with matching metrics
6. Test on Windows with ClearType (thin weights may be unreadable)
7. Variable fonts: one file for all weights (better performance)
