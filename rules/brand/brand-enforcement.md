---
description: "Brand system enforcement rules for maintaining consistency across all design output."
globs: ["**/*.tsx", "**/*.jsx", "**/*.html", "**/*.css"]
alwaysApply: false
---

# Brand Enforcement Rules

1. **Token-first colors.** Reference semantic color tokens, never raw hex values. `var(--color-text-primary)` not `#1a1a1a`.

2. **Brand fonts only.** Use only fonts defined in the brand system. No fallback to system fonts without explicit approval.

3. **Voice consistency.** All user-facing copy must match the documented brand voice. Check the voice guide before writing.

4. **Logo usage.** Follow minimum size, clear space, and color variant rules. Never stretch, rotate, or recolor the logo outside defined variants.

5. **Photography standards.** All imagery must meet the defined photography direction guidelines for mood, lighting, and composition.

6. **Pattern library.** Use components from the design system. New patterns require documentation and design review before use.

7. **Naming consistency.** Use branded terminology consistently. Check the word list for preferred terms.
