---
name: button-design
description: Button hierarchy, states, sizing, labeling, and button group patterns.
triggers: ["button", "button design", "CTA", "call to action"]
---

# Button Design

## Button Hierarchy

### Three Levels
1. **Primary** — One per view. The main action. Filled, brand color.
2. **Secondary** — Supporting actions. Outlined or muted fill.
3. **Tertiary** — Least important. Text-only or ghost button.

### Sizing
| Size | Height | Use Case |
|------|--------|----------|
| Small | 32px | Inline actions, table rows, tags |
| Medium | 40px | Default for most contexts |
| Large | 48px | Hero CTAs, primary actions, mobile |

## Labels
- **Use verbs.** "Save," "Delete," "Create Project" not "OK," "Submit," "Yes."
- **Be specific.** "Add to Cart" not "Continue."
- **2-4 words.** If longer, the action is too complex for a button.
- **No ALL CAPS** unless it's part of the brand system.

## States
Every button needs: Default → Hover → Active/Pressed → Focus → Disabled → Loading

### Loading State
- Replace label with spinner + "Saving..." (keep button width stable).
- Disable the button during loading.
- Never lose the user's click.

## Icon Buttons
- Always include a tooltip or aria-label.
- Minimum 44x44px touch target even if icon is 20px.
- Common: close (X), menu (hamburger), more (three dots), back (arrow).