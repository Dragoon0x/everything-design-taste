---
name: card-patterns
description: Card component design, content hierarchy within cards, card grids, and interactive card behaviors.
triggers: ["card", "card design", "card component", "card grid"]
---

# Card Patterns

## Card Anatomy

### Essential Elements (pick what's needed)
- **Media** (image, video, icon) — visual anchor
- **Title** — the primary information
- **Description** — secondary context (2 lines max, truncate with ellipsis)
- **Metadata** — date, author, category, status
- **Actions** — buttons, links, menu

### Hierarchy Within a Card
1. Media (if present) gets the most visual weight
2. Title is the largest text element
3. Description supports but doesn't compete
4. Metadata is smallest/lightest
5. Actions are at the bottom or contextual (hover/menu)

## Card Grid Layouts
- **Fixed columns:** 2, 3, or 4 columns with consistent card sizes
- **Masonry:** Variable height cards (Pinterest-style). Only for visual/media content.
- **List view alternative:** Always offer list view for content-heavy cards.

## Anti-Patterns
- Cards with only text and no visual anchor — use a list instead
- Cards with 5+ action buttons — too much cognitive load
- Cards with inconsistent heights in a row — use fixed aspect ratios or masonry
- Clickable cards where only part is the click target — make the whole card clickable or clearly define the target