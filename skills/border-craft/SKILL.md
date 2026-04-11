---
name: border-craft
description: Border design patterns, dividers, separators, and using borders as primary design elements.
triggers: ["borders", "dividers", "separators", "border design"]
---

## Border Craft

### Borders as Information
Borders separate, group, contain, and emphasize. They carry meaning:
- **Thin (1px):** Subtle separation, table cells, list dividers
- **Medium (2px):** Emphasis, active states, selected items
- **Thick (3-4px):** Strong emphasis, section dividers, brand accent

### Border Styles
| Style | Use | Avoid |
|-------|-----|-------|
| Solid | Default for everything | N/A |
| Dashed | Drag targets, placeholder areas | Decoration |
| Dotted | Input suggestions, optional boundaries | Heavy use |
| Double | Editorial emphasis, retro/classic feel | UI components |

### Alternatives to Borders
- Background color change
- Spacing/gap increase
- Shadow (creates depth instead of line)
- Indent (hierarchy through position)

### Border Radius Scale
```css
--radius-none: 0px;      /* Sharp, editorial, industrial */
--radius-sm: 4px;        /* Subtle softening */
--radius-md: 8px;        /* Standard UI */
--radius-lg: 12px;       /* Cards, containers */
--radius-xl: 16px;       /* Large components */
--radius-full: 9999px;   /* Pills, avatars */
```
