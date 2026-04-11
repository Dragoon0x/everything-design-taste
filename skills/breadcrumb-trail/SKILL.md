---
name: breadcrumb-trail
description: Breadcrumb navigation patterns for complex hierarchies.
triggers: ["breadcrumbs","navigation trail","hierarchy navigation"]
---

# Breadcrumb Trail

## When to Use
- Sites with 3+ levels of hierarchy
- E-commerce category browsing
- Documentation with nested sections
- File management interfaces

## Design
```
Home / Products / Electronics / Headphones
```
- Separator: / or > (consistent throughout)
- Last item: current page, not clickable, visually distinct (bold or darker)
- Truncation: Home / ... / Grandparent / Parent / Current
- Mobile: show only parent level

## Accessibility
- `<nav aria-label="Breadcrumb">`
- `<ol>` for ordered list semantics
- `aria-current="page"` on last item
- Separators via CSS (not inline text)
