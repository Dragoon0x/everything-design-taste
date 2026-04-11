---
name: onboarding-patterns
description: User onboarding flows, progressive disclosure, first-run experience, empty states, and activation strategies.
triggers: ["onboarding", "first run", "activation", "welcome flow", "setup wizard"]
---

# Onboarding Patterns

## The Goal
Get users to their first value moment as fast as possible. Not to explain every feature.

## First Value Moment
- Identify the ONE action that makes users understand the product's value
- Design every onboarding step to get them there
- Measure time-to-value, not completion rate

## Patterns

### Progressive Onboarding
Don't explain everything upfront. Introduce features when the user first encounters them.
- Contextual tooltips on first encounter
- Empty states that teach by showing the first action
- Feature discovery that unfolds over days, not minutes

### Setup Wizard
For products that require configuration before use.
- Maximum 3-5 steps
- Show progress
- Allow skipping (with sensible defaults)
- Save progress automatically
- The easiest step first (build momentum)

### Product Tour
- Maximum 3-5 stops
- Highlight one feature per stop
- Allow skipping at any point
- Never block the UI
- Show only on first visit (or after major updates)

## Empty States
Empty states ARE onboarding. Design them as invitations:
- **Illustration** (optional): Set the mood
- **Headline**: What this area is for
- **Body**: One sentence on the benefit
- **CTA**: The single action to start ("Create your first project")

## Anti-Patterns
- Forcing account creation before showing any value
- Asking for unnecessary permissions upfront
- Multi-screen feature tours nobody reads
- Collecting profile info that isn't needed yet
- Video tutorials as the only onboarding method
