---
name: icon-systems
description: Icon consistency, metaphor selection, optical sizing, and building icon systems that scale.
triggers: ["icon design", "icon system", "iconography", "icon set", "icon guidelines"]
---

# Icon Systems

## Consistency Rules

### Grid and Size
- Design on a consistent grid (24x24 is standard for UI)
- Maintain consistent stroke width across all icons (1.5px or 2px)
- Same corner radius across the set
- Same optical weight (a circle and a square at the same pixel size look different)

### Style
Pick one and stick to it:
- **Outlined** — Clean, modern, works at small sizes
- **Filled** — Bold, high contrast, good for active states
- **Duotone** — Two-tone fills, distinctive, higher complexity
- **Outlined + filled pair** — Outlined for default, filled for active/selected

Never mix styles in the same context.

### Optical Sizing
- Circle icons appear larger than square icons at the same dimensions
- Compensate: make circles slightly smaller or squares slightly larger
- Horizontal icons (arrow) appear smaller than square icons (home)
- Some icons need padding adjustment to feel the same size

## Metaphor Selection

### Rules
- Use universally understood metaphors where they exist (trash can = delete, magnifying glass = search)
- Avoid metaphors that are culturally specific without testing
- Avoid skeuomorphic metaphors that no longer make sense (floppy disk for save)
- When in doubt, pair icon with text label

### Common Metaphor Problems
- Hamburger menu: not universally understood, but too established to fight
- Heart vs star for "favorite": hearts imply emotional, stars imply quality
- Gear for settings: works, but consider "sliders" for adjustment-focused settings
- Bell for notifications: universal enough

## Icon in UI

### Sizing
- Navigation: 24px
- Inline with text: match x-height of adjacent text
- Action buttons: 20px with adequate padding
- Feature icons: 32-48px
- Decorative/hero: 64px+

### Color
- Icons follow text color by default (use `currentColor`)
- Accent-colored icons only for primary actions or active states
- Avoid multicolor icons in UI (save for illustrations)
- Ensure 3:1 contrast ratio against background

### Spacing
- Icon to label: 8px minimum
- Icon-only buttons: include aria-label, minimum 44px touch target
