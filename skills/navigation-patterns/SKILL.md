---
name: navigation-patterns
description: Navigation architecture, menu design, wayfinding, breadcrumbs, and navigation hierarchy for web and mobile.
triggers: ["navigation", "menu", "nav design", "wayfinding"]
---

# Navigation Patterns

## Navigation Hierarchy

### Primary Navigation
- 5-7 items maximum. Beyond that, users can't scan effectively.
- Use clear, action-oriented labels. "Products" not "Our Offerings."
- Highlight the current page/section.
- Don't hide primary navigation in a hamburger on desktop.

### Secondary Navigation
- Sidebar for apps with deep hierarchy (settings, documentation).
- Tab bar for 3-5 peer-level sections (mobile apps).
- In-page tabs for related content within a page.

### Breadcrumbs
- Use for sites with 3+ levels of hierarchy.
- Each level is a clickable link except the current page.
- Separator: ">" or "/" (not "»").
- Don't use breadcrumbs AND tabs. Pick one.

### Mobile Navigation
| Pattern | Best For |
|---------|----------|
| Bottom tab bar | Core app with 3-5 sections |
| Hamburger menu | Content sites with many sections |
| Full-screen menu | Brand-heavy sites with few pages |
| Gesture nav | Media-focused apps (swipe between content) |

### Search as Navigation
- If your site has 100+ pages, search is navigation.
- Autocomplete with categorized results.
- Show recent searches and popular queries.
- Empty state: suggest popular content.