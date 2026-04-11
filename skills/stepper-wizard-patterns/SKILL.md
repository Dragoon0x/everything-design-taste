---
name: stepper-wizard-patterns
description: Multi-step flows, wizard design, progress indicators, and step validation.
triggers: ["stepper", "wizard", "multi-step", "progress indicator"]
---

# Stepper Wizard Patterns

## Stepper Design

### Progress Indication
- Step numbers + labels (Step 1: Account Details).
- Current step highlighted, completed steps checked, upcoming steps dimmed.
- Horizontal on desktop (top of form), vertical on mobile (left sidebar or inline).

### Rules
1. **3-7 steps maximum.** More than 7 = break into sections or simplify.
2. **Allow back navigation** without losing data.
3. **Validate per step**, not at the end.
4. **Save progress** for long forms. Allow resuming later.
5. **Final review step** for important flows (purchases, applications).

### Step Content
- One topic per step. Don't combine "Account Details" with "Billing."
- Front-load easy steps (build momentum with completion).
- Put optional steps last (or allow skipping).

### Buttons
- "Next" / "Back" at the bottom of each step.
- Final step: specific action verb ("Create Account," "Place Order").
- "Save and Continue Later" for long forms.