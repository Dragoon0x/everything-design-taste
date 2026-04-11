---
name: animation-choreography
description: Page transition choreography, staggered animations, and orchestrated motion sequences.
triggers: ["animation choreography", "page transition", "staggered animation", "motion sequence"]
---

# Animation Choreography

## Page Transitions

### Types
- **Fade:** Universal, safe, minimal. 200-300ms.
- **Slide:** Directional relationship (forward/back, up/down). 300-400ms.
- **Shared element:** Element morphs between pages (photo expanding to detail). 400-500ms.
- **None:** Sometimes the best transition. Instant is fine for quick navigation.

### Rules
1. Exits are faster than enters (150ms exit, 250ms enter).
2. Direction indicates hierarchy (slide right = deeper, slide left = back).
3. Don't transition between unrelated pages (just cut).
4. Shared element transitions only when there's a clear visual connection.

## Stagger Patterns
```css
.item { animation: fadeInUp 300ms ease-out both; }
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 50ms; }
.item:nth-child(3) { animation-delay: 100ms; }
/* Max 8-10 items staggered, then batch the rest */
```

### Stagger Rules
- 30-80ms delay between items.
- Cap at 8-10 items (total sequence under 500ms).
- Items beyond the cap appear together at the end.
- Stagger direction: top-to-bottom or left-to-right (match reading order).