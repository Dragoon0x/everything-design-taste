---
name: micro-interactions
description: Small interaction details that communicate state changes, provide feedback, and add delight.
triggers: ["micro-interactions", "interaction details", "UI feedback"]
---

## Micro-Interactions

### The Four Parts
1. **Trigger:** User action or system event
2. **Rules:** What happens
3. **Feedback:** What the user sees/feels
4. **Loops & Modes:** Ongoing behavior

### Essential Micro-Interactions
| Interaction | Feedback | Duration |
|------------|----------|----------|
| Button click | Scale down 95%, opacity change | 100ms |
| Toggle switch | Slide + color change | 200ms |
| Checkbox | Scale + checkmark draw | 150ms |
| Like/heart | Scale up + color + particle | 300ms |
| Delete | Slide out + height collapse | 250ms |
| Add to cart | Item flies to cart icon | 400ms |
| Copy to clipboard | Tooltip confirms | 200ms |
| Error shake | Horizontal shake 3x | 300ms |

### Rules
1. Every user action gets feedback (even if subtle)
2. Feedback is immediate (under 100ms for direct manipulation)
3. Match the energy: destructive actions feel different from creative ones
4. Don't animate things that happen frequently (typing, scrolling)
5. Delight sparingly: if every interaction is delightful, none are
