---
name: dark-mode-design
description: Dark mode implementation, color remapping, and dual-theme design strategies.
triggers: ["dark mode", "dark theme", "theme switching", "night mode"]
---

# Dark Mode Design

## Dark Mode Is Not Inversion

Don't just flip black and white. Dark mode requires a complete color re-evaluation.

### Color Adjustments
- **Background:** #121212 to #1A1A1A (not pure black #000000).
- **Text:** #E0E0E0 to #F0F0F0 (not pure white — causes halation).
- **Surfaces:** Lighter shades for elevation (no shadows needed).
- **Brand colors:** Desaturate 10-20% (vivid colors vibrate on dark backgrounds).
- **Status colors:** Adjust lightness for dark backgrounds (green, red, yellow all need tweaking).

### Elevation in Dark Mode
Light mode: elevated = lighter + shadow.
Dark mode: elevated = lighter surface color (no shadow).
```css
[data-theme="dark"] {
  --surface-0: #121212;
  --surface-1: #1E1E1E;  /* cards */
  --surface-2: #252525;  /* dropdowns */
  --surface-3: #2C2C2C;  /* modals */
}
```

### Images
- Reduce brightness/contrast slightly on photos.
- Swap light-background illustrations for dark-background versions.
- UI screenshots need dark mode versions.

### Testing
- Test in actual dark environments.
- Check contrast ratios again (they change).
- Test with f.lux/Night Shift (warm tint affects colors).