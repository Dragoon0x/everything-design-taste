---
name: ux-writing-systems
description: UX writing systems, content guidelines, and text component patterns for consistent product language.
triggers: ["UX writing", "content design", "writing system", "product writing"]
---

# Ux Writing Systems

## Building a UX Writing System

### Content Components
- **Headings:** H1 = page purpose, H2 = section topics.
- **Body text:** 16px minimum, 45-75 char line length.
- **Labels:** Short, specific, consistent terminology.
- **Descriptions:** Support labels when needed. One sentence.
- **Help text:** Below inputs, before the user needs it.
- **Status text:** Present tense for current state, past tense for completed.

### Terminology Database
- Canonical terms for features (don't call it "workspace" in one place and "project" in another).
- Acronym definitions.
- Prohibited terms (brand-specific no-go words).

### String Templates
- `{User} shared {item} with you.`
- `{Count} items selected.`
- Handle pluralization: 1 item / 2 items.
- Handle zero: "No items" not "0 items."

### Tone Matrix
| Context | Tone |
|---------|------|
| Success | Brief, satisfied |
| Error | Empathetic, helpful |
| Warning | Clear, non-alarming |
| Onboarding | Patient, encouraging |
| Empty state | Friendly, actionable |