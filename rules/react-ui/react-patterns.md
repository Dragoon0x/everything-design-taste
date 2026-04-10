---
description: "React and Tailwind CSS patterns for high-quality UI components."
globs: ["**/*.tsx", "**/*.jsx"]
alwaysApply: false
---

# React UI Rules

1. **Component naming.** PascalCase. Descriptive. No abbreviations. `UserProfileCard` not `UPCard`.

2. **Tailwind class organization.** Order: layout (flex, grid) > sizing (w, h) > spacing (p, m) > typography (text, font) > color (bg, text) > borders > effects (shadow, opacity) > transitions.

3. **No inline styles.** Use Tailwind classes or CSS variables. Exception: dynamic values that can't be expressed as classes.

4. **CSS variables for theming.** All brand colors, spacing scales, and type scales as CSS custom properties. Components reference variables, never hardcoded values.

5. **Component composition.** Prefer small composable components over large monolithic ones. A card should compose from CardHeader, CardBody, CardFooter, not be one giant component with 15 props.

6. **Accessible by default.** Every interactive component includes: proper ARIA attributes, keyboard handlers, focus management, and screen reader testing.

7. **State coverage.** Every component handles: default, hover, active, focus, disabled, loading, error, empty.

8. **No div soup.** Use semantic HTML. `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<button>`, `<a>`. Divs are for layout grouping only.
