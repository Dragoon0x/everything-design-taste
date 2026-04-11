---
name: stepper-wizard
description: Multi-step form patterns, wizard flows, progress indicators, step validation, and linear vs non-linear steps.
triggers: ["stepper", "wizard", "multi-step", "step-by-step", "progress steps"]
---

# Stepper & Wizard Patterns

## When to Use
- Process requires 4+ inputs that can be logically grouped
- Order matters (setup before configuration)
- Users need context about progress and remaining effort

## Design Rules
1. **Show step count and current position** (Step 2 of 4)
2. **Step labels are descriptive** ("Payment Details" not "Step 2")
3. **Allow going back** without losing data
4. **Validate each step** before allowing forward progress
5. **Save progress** so users can return later
6. **Summary/review step** before final submission for important flows

## Linear vs Non-Linear
| Type | When | Example |
|------|------|---------|
| Linear | Steps depend on previous answers | Account setup |
| Non-linear | Steps are independent | Profile completion |
| Branching | Different paths based on answers | Insurance application |

## Progress Indicators
- Horizontal stepper (desktop): numbered circles with labels connected by lines
- Vertical stepper (mobile or many steps): stacked steps with expandable content
- Progress bar: simpler, good when step count may vary

## Step Design
- Each step fits on one screen without scrolling (ideally)
- Primary action: "Continue" or specific label ("Save and continue")
- Secondary action: "Back" (always available except step 1)
- Tertiary: "Save and exit" for long processes
