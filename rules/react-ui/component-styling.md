---
description: "Styling patterns for React/Tailwind UI components"
globs: ["**/*.tsx", "**/*.jsx"]
alwaysApply: false
---

# React UI Styling Rules

1. Use CSS custom properties (variables) for all brand and semantic colors. Never hardcode hex values in component files.
2. Tailwind utility classes for layout and spacing. CSS variables for theming and brand tokens.
3. Component files: one component per file, named to match the export.
4. Prefer composition over configuration. Small composable components beat large prop-heavy ones.
5. All interactive components must handle: default, hover, active, focus, disabled states.
6. Use `clamp()` for fluid typography and spacing where appropriate.
7. Always add `prefers-reduced-motion` media query when using animations.
8. Loading states: use skeleton screens that match the content layout, not generic spinners.
9. Empty states: design them. Never show a blank page.
10. Error states: specific messages with recovery actions, not generic "something went wrong."
