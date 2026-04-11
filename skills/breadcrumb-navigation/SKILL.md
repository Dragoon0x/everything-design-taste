---
name: breadcrumb-navigation
description: Breadcrumb design, hierarchical navigation, and location indicators.
triggers: ["breadcrumb", "hierarchical navigation", "location indicator"]
---

# Breadcrumb Navigation

## Structure
Home > Category > Subcategory > Current Page

## Rules
1. Last item is current page (not clickable, styled differently)
2. Separator: / or > (not >>)
3. Don't use on flat sites (no hierarchy = no breadcrumbs)
4. Truncate long paths with ellipsis: Home > ... > Subcategory > Page
5. Mobile: show only parent level or collapse
6. Schema markup for SEO (BreadcrumbList)

## Accessibility
- Wrapped in `<nav aria-label="Breadcrumb">`
- Ordered list `<ol>` for semantics
- Current page marked with `aria-current="page"`
- Separators are decorative (CSS, not text)
