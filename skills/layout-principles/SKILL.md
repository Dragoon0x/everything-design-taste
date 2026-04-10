---
name: layout-principles
description: Grid systems, spatial rhythm, whitespace as information, and layout strategies that create meaning through structure.
triggers: ["layout", "grid system", "whitespace", "spatial design", "page layout", "responsive layout"]
---

# Layout Principles

## Whitespace Is Not Empty

Whitespace is an active design element. It creates hierarchy, groups related items, separates unrelated items, and gives the eye a place to rest. More whitespace usually means more perceived quality.

### Proximity Principle
Items closer together are perceived as related. This is the most powerful layout tool you have. The space between a heading and its paragraph should be smaller than the space between sections.

```
Section gap:     48-64px (clear separation)
Heading to body: 8-16px  (clearly connected)
Paragraph gap:   16-24px (related but distinct)
List item gap:   8-12px  (tightly grouped)
```

## Grid Systems

### When to Use a Grid
- Content-heavy layouts (dashboards, feeds, catalogs)
- Marketing pages with repeating patterns
- Multi-column layouts

### When to Break the Grid
- Hero sections (let them breathe)
- Feature highlights (asymmetry creates emphasis)
- Transitional moments (between major sections)

### Common Grid Structures
- **12-column** — Maximum flexibility, standard for web
- **8-column** — Good for content-focused layouts
- **Modular grid** — Both columns and rows for dense UIs
- **Baseline grid** — Vertical rhythm based on line-height

## Layout Patterns Beyond Cards-in-a-Grid

### Bento Grid
Mixed-size cells in a grid. Creates visual hierarchy through size difference rather than position alone. Use larger cells for primary content, smaller for supporting.

### Split Screen
50/50 or 60/40 vertical split. Image one side, content the other. Works well for product pages and comparison layouts.

### Overlapping Layers
Elements that break out of their containers and overlap neighboring sections. Creates depth and energy. Use sparingly.

### Asymmetric Balance
Intentionally uneven layouts that still feel balanced through visual weight distribution. A large image balanced by a small block of text with generous whitespace.

### Full-Bleed Sections
Content that extends to viewport edges, alternating with contained content. Creates rhythm and breaks monotony.

### Editorial Layout
Magazine-style layouts with mixed column widths, pull quotes, marginal notes, and varied image sizes. Best for long-form content.

## Responsive Strategy

### Content-First, Not Breakpoint-First
Instead of designing for specific screen sizes, ask: "At what width does this content start to look bad?" That's your breakpoint.

### Responsive Patterns
- **Stack** — Multi-column to single-column (most common)
- **Reorder** — Change visual order for different contexts
- **Reveal/hide** — Show additional context on larger screens
- **Transform** — Navigation becomes drawer, table becomes card list

### Container Queries > Media Queries
Components should respond to their container, not the viewport. A card in a sidebar should behave differently than the same card in a main content area, regardless of viewport width.
