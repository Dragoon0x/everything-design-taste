---
name: design-system-patterns
description: Token architecture, component design, naming conventions, theming, and scaling design systems that people actually use.
triggers: ["design system", "design tokens", "component library", "theming", "design architecture"]
---

# Design System Patterns

## Token Architecture

### Three-Layer Token System

**Global tokens** (raw values, never used directly)
```
--color-blue-500: #3B82F6;
--space-4: 4px;
--font-size-16: 1rem;
```

**Semantic tokens** (meaning, used in components)
```
--color-text-primary: var(--color-gray-900);
--color-bg-surface: var(--color-white);
--color-border-default: var(--color-gray-200);
--color-interactive-primary: var(--color-blue-600);
--color-interactive-primary-hover: var(--color-blue-700);
--color-feedback-error: var(--color-red-600);
--color-feedback-success: var(--color-green-600);
```

**Component tokens** (scoped to specific components)
```
--button-bg: var(--color-interactive-primary);
--button-text: var(--color-white);
--button-radius: var(--radius-md);
--button-padding-x: var(--space-16);
--button-padding-y: var(--space-8);
```

### Spacing Scale
Base unit: 4px. Scale: 0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128.

```
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Type Scale
Use a consistent ratio. 1.25 (major third) for compact UIs. 1.333 (perfect fourth) for spacious layouts.

```
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

## Component Design Principles

### API Design
- Props should be obvious. If someone needs to read docs to use a button, the API failed.
- Use enums over booleans: `variant="primary"` not `isPrimary={true}`
- Compose over configure: small components that combine > one mega component with 40 props
- Default to the most common use case. Override for the rest.

### State Coverage
Every interactive component must handle:
- Default, Hover, Active, Focus (keyboard), Disabled
- Loading (if async), Error (if validation), Empty (if content-dependent)

### Naming Convention
```
[Component][Variant][Size][State]

Button, ButtonPrimary, ButtonPrimaryLg, ButtonPrimaryLgDisabled
Input, InputError, InputWithIcon
Card, CardCompact, CardInteractive
```

### Composition Patterns
- **Slot pattern** — Named regions within a component (header, body, footer)
- **Compound pattern** — Related components that share state (Tabs + TabPanel)
- **Render prop** — Custom rendering without changing component logic

## Theming

### Dark Mode (not inversion)
Dark mode is not `filter: invert()`. It requires intentional adjustments:
- Backgrounds: dark surfaces (gray-900, gray-800), not pure black
- Text: off-white (gray-100), not pure white
- Elevation: lighter surfaces = higher elevation (opposite of light mode)
- Shadows: reduce or remove (they don't work on dark backgrounds)
- Saturation: reduce color saturation slightly for dark backgrounds
- Borders: use subtle borders where shadows worked in light mode

### Multi-Brand
- All brand decisions live in the token layer
- Components reference semantic tokens only
- Switching brands = swapping the token file
- Never hardcode brand values in component code
