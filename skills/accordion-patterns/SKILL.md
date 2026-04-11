---
name: accordion-patterns
description: Accordion and collapsible content patterns, FAQ layouts, and progressive disclosure.
triggers: ["accordion", "collapsible", "expandable", "FAQ"]
---

# Accordion Patterns

## Accordion Rules
1. **Only one open at a time** for simple content (FAQ). Allow multiple open for settings/forms.
2. **Header is the full click target.** Not just the chevron.
3. **Chevron rotates** on open (down → up or right → down).
4. **Smooth animation** on expand/collapse (200-300ms).
5. **Default state:** first item open, or all closed.

## When to Use
- FAQ pages (classic accordion use case).
- Settings with grouped options.
- Mobile navigation with sub-items.
- Long forms with optional sections.

## When NOT to Use
- Content that most users need to see (don't hide important information).
- Fewer than 3 items (just show them all).
- Sequential content (use tabs or stepper instead).