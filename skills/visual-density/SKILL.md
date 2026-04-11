---
name: visual-density
description: Information density design, compact modes, and density management in data-heavy interfaces.
triggers: ["density", "compact", "information density", "dense UI"]
---

# Visual Density

## Density Levels

| Level | Row Height | Font Size | Padding | Best For |
|-------|-----------|-----------|---------|----------|
| Spacious | 56-64px | 16px | 16-24px | Consumer apps, content reading |
| Comfortable | 44-52px | 14-16px | 12-16px | Default for most apps |
| Compact | 32-40px | 13-14px | 8-12px | Data tables, power user tools |

## Implementation
- Use CSS custom properties for density-dependent values.
- Toggle between density levels in settings.
- Remember user preference across sessions.

```css
[data-density="compact"] {
  --row-height: 36px;
  --cell-padding: 8px 12px;
  --font-size-body: 13px;
}
```

## Rules
- Never sacrifice readability for density.
- Compact mode doesn't mean removing information — it means tighter spacing.
- Touch targets must remain 44px minimum even in compact mode (add padding without visual change).
- Test compact mode at all breakpoints.