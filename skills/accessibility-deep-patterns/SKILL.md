---
name: accessibility-deep-patterns
description: Advanced accessibility patterns including ARIA, screen reader optimization, cognitive accessibility, and motor impairment design.
triggers: ["accessibility deep", "ARIA", "screen reader", "cognitive accessibility"]
---

# Accessibility Deep Patterns

## ARIA Patterns

### Live Regions
```html
<div aria-live="polite">  <!-- Non-urgent updates -->
<div aria-live="assertive">  <!-- Urgent: errors, alerts -->
```

### Landmark Roles
- `<main>` — primary content
- `<nav>` — navigation blocks
- `<aside>` — supplementary content
- `<form>` — form regions
- `aria-label` on landmarks when multiple exist

### Dynamic Content
- Announce new content additions to screen readers.
- Focus management: move focus to new content (modals, expanded sections).
- Loading states: `aria-busy="true"` on containers.

## Cognitive Accessibility
- Simple language (aim for 8th-grade reading level).
- Consistent navigation patterns across all pages.
- Don't rely on memory (show information, don't expect recall).
- Break complex tasks into simple steps.
- Allow undo instead of requiring confirmation.

## Motor Impairment
- Large click/touch targets (minimum 44px, ideally 48px+).
- Sufficient spacing between targets (8px minimum gap).
- Support for switch control and voice control.
- No time-limited interactions unless adjustable.
- Sticky/fixed action buttons (reduce mouse travel).