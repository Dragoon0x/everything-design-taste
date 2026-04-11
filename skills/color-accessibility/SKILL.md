---
name: color-accessibility
description: Color blindness accommodation, contrast checking, and inclusive color design.
triggers: ["color blindness", "color accessibility", "contrast", "inclusive color"]
---

# Color Accessibility

## Color Vision Deficiency

### Types (approximate prevalence in males)
- **Deuteranopia** (green-blind): 1% — red/green confusion.
- **Protanopia** (red-blind): 1% — red/green confusion.
- **Tritanopia** (blue-blind): 0.003% — blue/yellow confusion.
- **Achromatopsia** (no color): 0.003% — gray only.

### Design Rules
1. **Never use color as the only indicator.** Pair with icons, text, patterns.
2. **Red + green:** Always pair with icons (checkmark/X) not just color.
3. **Test with simulators:** Chrome DevTools > Rendering > Emulate vision deficiency.
4. **Use colorblind-safe palettes:** Blue + Orange works for almost everyone.
5. **Charts:** Use patterns/textures alongside colors. Label directly.

### Safe Color Combinations
- Blue + Orange (safe for all types).
- Blue + Yellow (safe for most types).
- Dark Blue + Light Blue (value contrast).

### Dangerous Combinations
- Red + Green (most common confusion).
- Red + Brown (deuteranopia).
- Blue + Purple (tritanopia).