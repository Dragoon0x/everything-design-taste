---
name: shadow-elevation
description: Shadow design, elevation systems, depth and layering in UI design.
triggers: ["shadow", "elevation", "depth", "layering", "box shadow"]
---

# Shadow Elevation

## Elevation System

### Define Levels
```css
--elevation-0: none;                              /* Flat, same plane */
--elevation-1: 0 1px 3px rgba(0,0,0,0.08);        /* Slight lift: cards, buttons */
--elevation-2: 0 4px 8px rgba(0,0,0,0.12);        /* Medium: dropdowns, popovers */
--elevation-3: 0 8px 24px rgba(0,0,0,0.16);       /* High: modals, dialogs */
--elevation-4: 0 16px 48px rgba(0,0,0,0.20);      /* Highest: floating panels */
```

### Rules
1. **Higher = closer to user.** Modals above dropdowns above cards.
2. **Shadows go down.** Light source is always from above.
3. **Larger shadows are softer.** Spread increases with elevation.
4. **Dark mode:** Reduce shadow opacity OR use surface color lightening instead.
5. **Consistent across the product.** Same elevation level = same shadow value.

## Anti-Patterns
- Shadows on elements that don't need elevation (flat is fine).
- Multiple light sources (shadows going different directions).
- Too-dark shadows (looks like a 2012 skeuomorphic app).
- Using shadows instead of borders for separation (pick one system).