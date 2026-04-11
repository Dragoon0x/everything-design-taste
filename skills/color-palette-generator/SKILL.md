---
name: color-palette-generator
description: Building cohesive color palettes from a single brand color.
triggers: ["color palette","palette generation","color system"]
---

# Color Palette Generation

## From One Color to Full System

### Step 1: Choose your primary
One color that carries the brand's emotional weight.

### Step 2: Generate the scale
```
50:  Almost white with a hint of hue
100: Very light tint
200: Light tint
300: Light-medium
400: Medium-light
500: Your primary color ← start here
600: Medium-dark
700: Dark
800: Very dark
900: Near-black with hue
950: Darkest
```

### Step 3: Add neutrals
Warm gray if brand is warm, cool gray if cool, true gray if neutral.
Same 50-950 scale.

### Step 4: Add semantic colors
- Success: Green that doesn't clash with primary
- Warning: Amber/yellow
- Error: Red distinct from any brand red
- Info: Blue distinct from any brand blue

### Step 5: Verify
- All text colors pass WCAG AA on their intended backgrounds
- Status colors are distinguishable from each other
- Dark mode versions work with adjusted lightness
