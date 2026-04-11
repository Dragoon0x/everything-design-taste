---
name: form-design
description: Form layout, validation patterns, input types, error handling, and multi-step form architecture.
triggers: ["form", "input", "validation", "form design"]
---

# Form Design

## Form Layout

### Single Column vs Multi-Column
- Single column for most forms. Completion rates drop with multi-column.
- Exception: short related fields (city + state, first + last name) can sit side by side.
- Group related fields with section headers, not just spacing.

### Label Placement
| Position | When to Use |
|----------|------------|
| Above input | Default. Best for scanning and mobile. |
| Left-aligned | Data-dense forms with experienced users. |
| Placeholder-only | Never for required fields. Disappears on focus. |

### Validation
- Validate on blur, not on every keystroke (annoying).
- Show errors inline below the field, not in a banner at the top.
- Use green checkmarks sparingly. Only for fields where confirmation helps (password strength, username availability).
- Error text: say what's wrong AND how to fix it. "Invalid email" → "Enter an email like name@example.com."

### Input Types
- Use `type="email"` for email (mobile keyboard changes).
- Use `type="tel"` for phone numbers.
- Use `inputmode="numeric"` for numeric-only fields that aren't real numbers (credit cards, OTPs).
- Date pickers: native on mobile, custom on desktop. Never use 3 separate dropdowns.

### Multi-Step Forms
- Show progress (step 2 of 4), not just a progress bar.
- Allow going back without losing data.
- Put the most important/easiest step first (build momentum).
- Review step before submission on critical forms (payments, applications).

### Buttons
- Primary action button at the bottom right (or full-width on mobile).
- "Submit" is vague. Use specific verbs: "Create Account," "Place Order," "Send Message."
- Disable button during submission. Show loading state.
- Never clear form on validation error.