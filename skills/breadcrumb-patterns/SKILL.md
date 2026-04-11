---
name: breadcrumb-patterns
description: Breadcrumb navigation, path display, and hierarchical wayfinding design.
triggers: ["breadcrumb", "path navigation", "wayfinding"]
---

# Breadcrumb Patterns

## Breadcrumb Rules
1. Show the full path from root to current page.
2. Each level except current is a link.
3. Current page: bold text, not a link.
4. Separator: "/" or ">" between levels.
5. Truncate middle levels for deep hierarchies: Home / ... / Category / Product.
6. Mobile: show only parent level as a back link ("← Category").

## When to Use
- Sites with 3+ levels of hierarchy.
- E-commerce (Home > Category > Subcategory > Product).
- Documentation (Docs > Section > Page).
- File managers.

## When NOT to Use
- Flat sites with only 1-2 levels.
- Apps where navigation is primarily lateral (tabs).
- Single-page applications with no hierarchy.