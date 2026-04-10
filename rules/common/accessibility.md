---
description: "Accessibility baseline for all design output. WCAG AA minimum."
alwaysApply: true
---

# Accessibility Rules

1. **Color contrast.** Body text: 4.5:1 minimum. Large text (18px+): 3:1 minimum. UI elements: 3:1 minimum. Test both themes.

2. **Never color alone.** Don't use color as the only means to convey information. Add icons, labels, or patterns.

3. **Focus indicators.** All interactive elements must have visible focus states. Never `outline: none` without a replacement.

4. **Semantic HTML.** Use proper heading hierarchy (H1 > H2 > H3, no skips). Use landmark elements (nav, main, aside, footer). Use button for actions, anchor for navigation.

5. **Touch targets.** Minimum 44x44px for all interactive elements. 8px minimum spacing between targets.

6. **Alt text.** All meaningful images need descriptive alt text. Decorative images get `alt=""`.

7. **Reduced motion.** Respect `prefers-reduced-motion`. All animations must have a no-motion fallback.

8. **Keyboard navigation.** All functionality must be accessible via keyboard. Tab order must be logical. No keyboard traps.

9. **Text sizing.** Use relative units (rem, em). Users must be able to scale text to 200% without layout breaking.
