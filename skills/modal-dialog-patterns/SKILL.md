---
name: modal-dialog-patterns
description: Modal dialogs, drawers, sheets, confirmation patterns, and overlay best practices.
triggers: ["modal", "dialog", "drawer", "overlay", "popup"]
---

# Modal Dialog Patterns

## When to Use What

| Pattern | When | Why |
|---------|------|-----|
| Modal dialog | Confirmation, short forms, critical alerts | Blocks interaction, forces decision |
| Drawer/Sheet | Detailed content, filters, secondary forms | Slides in, partial page context |
| Toast/Snackbar | Success confirmation, minor notifications | Non-blocking, auto-dismisses |
| Inline expansion | Progressive disclosure, details | No context switch |
| Full-page | Complex forms, multi-step flows | Full context, no overlay |

## Modal Rules
1. **One primary action per modal.** If you need two, use a full page.
2. **Always include a close mechanism:** X button, overlay click, Escape key.
3. **Don't stack modals.** A modal opening a modal is a UX failure.
4. **Trap focus inside.** Tab should cycle within the modal, not escape to background.
5. **Prevent background scroll** when modal is open.
6. **Size:** As small as possible. Don't use a modal when an inline confirmation works.

## Confirmation Dialogs
- **Destructive actions only.** Don't confirm saves, non-destructive actions, or navigation.
- Button labels: specific verbs, not "Yes/No." "Delete Project" / "Keep Project."
- Red/destructive styling on the destructive action.
- Never auto-focus the destructive button.

## Bottom Sheets (Mobile)
- Swipe to dismiss. Don't just rely on X button.
- Snap points: collapsed (peek), half-screen, full-screen.
- Handle indicator at top (the little bar).
- Background should dim but remain partially visible for context.