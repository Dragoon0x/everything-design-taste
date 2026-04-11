---
name: design-handoff
description: Design-to-development handoff workflows, spec tooling, and developer-designer collaboration.
triggers: ["design handoff", "dev handoff", "design to code", "developer collaboration"]
---

# Design Handoff

## Handoff Checklist

### What Developers Need
- [ ] All states designed (default, hover, focus, disabled, loading, error, empty)
- [ ] Responsive behavior specified (mobile, tablet, desktop)
- [ ] Spacing values (use tokens, not arbitrary pixel values)
- [ ] Typography specs (font, size, weight, line-height, color)
- [ ] Color values (token names preferred over hex)
- [ ] Animation specs (duration, easing, properties)
- [ ] Edge cases (long text, no data, many items, error recovery)
- [ ] Accessibility notes (focus order, ARIA labels, keyboard behavior)

### What Developers Don't Need
- Pixel-perfect mockups of every possible state combination.
- Detailed redlines (modern tools provide inspection).
- A 50-page spec document nobody will read.

## Collaboration Model
1. **Include developers early.** Feasibility check during design, not after.
2. **Pair on complex interactions.** Sometimes building together is faster than specifying.
3. **Design review in browser.** Final QA in the actual implementation, not in Figma.
4. **Shared language.** Use design system token names in conversation.
5. **Fast feedback loops.** Small PRs, quick design reviews, iterate.