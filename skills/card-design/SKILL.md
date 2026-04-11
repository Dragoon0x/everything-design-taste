---
name: card-design
description: Card component patterns, card layouts, content cards, action cards, and card grid systems.
triggers: ["card design", "card component", "card layout", "card grid"]
---

# Card Design

## Anatomy
```
┌─────────────────────┐
│  [Media/Image]      │  Optional: visual anchor
│                     │
│  Category Label     │  Optional: metadata
│  Heading           │  Required: primary info
│  Description text  │  Optional: supporting info
│                     │
│  [Metadata/Footer]  │  Optional: date, author, tags
│  [Actions]          │  Optional: buttons, links
└─────────────────────┘
```

## Rules
1. **Consistent height in grids** or use masonry. Mixed heights in regular grids look broken.
2. **One primary action per card.** The whole card can be clickable, or have a single CTA.
3. **Don't overload.** If a card needs more than 4-5 pieces of information, it might need a different format.
4. **Image ratios matter.** Pick one ratio (16:9, 4:3, 1:1) and stick with it across the grid.
5. **Hover states** should indicate interactivity (subtle lift, border change, or background shift).

## Card Variants
| Variant | Use Case |
|---------|----------|
| Content card | Blog posts, articles, products |
| Action card | Dashboard widgets, quick actions |
| Profile card | Team members, user profiles |
| Stat card | KPIs, metrics, numbers |
| Media card | Video, image, audio thumbnails |

## Grid Layouts
- **2 columns:** Side-by-side comparison, editorial
- **3 columns:** Product listings, blog archives (most common)
- **4 columns:** Dense grids, small cards, dashboards
- **Masonry:** Pinterest-style, variable height content

## Anti-Patterns
- Cards with 3 different clickable areas (confusing targets)
- Drop shadows so heavy they dominate the page
- Border-radius: 24px (too much, 8-12px is usually right)
- Cards that are just styled divs with no interactive purpose
