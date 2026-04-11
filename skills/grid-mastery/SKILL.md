---
name: grid-mastery
description: Advanced grid systems, subgrid, asymmetric grids, breaking the grid intentionally, and CSS Grid strategies.
triggers: ["grid", "CSS grid", "grid layout"]
---

## Grid Mastery

### Beyond 12 Columns
The 12-column grid is a starting point, not a religion. Consider:
- **8-column grid** for editorial content (wider columns, better line lengths)
- **16-column grid** for data-dense dashboards
- **Asymmetric grids** (2:1, 3:2 ratios) for visual tension
- **Modular grids** (rows AND columns) for magazine layouts

### CSS Grid Strategies
```css
/* Named grid areas for semantic layout */
.layout {
  display: grid;
  grid-template-areas:
    'header header header'
    'sidebar main aside'
    'footer footer footer';
  grid-template-columns: 240px 1fr 320px;
}
```

### Breaking the Grid
Intentional grid breaks create focal points:
- Full-bleed images that span beyond the content grid
- Pull quotes that overlap columns
- Hero elements that ignore the underlying structure
- **Rule:** Break the grid for emphasis, never for laziness
