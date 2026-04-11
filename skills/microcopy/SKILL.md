---
name: microcopy
description: UI microcopy patterns including button labels, error messages, tooltips, and instructional text.
triggers: ["microcopy", "UI text", "button labels", "error messages"]
---

# Microcopy

## Microcopy Principles

1. **Be specific.** "Save Project" not "Submit."
2. **Use verbs for actions.** Buttons are actions, not descriptions.
3. **Front-load key words.** "Delete 3 files" not "Are you sure you want to delete 3 files?"
4. **Match user's mental model.** "Trash" not "Soft Delete."

## Patterns

### Buttons
- Primary: specific verb + object. "Create Account," "Send Invoice."
- Secondary: shorter. "Cancel," "Skip."
- Destructive: clear consequence. "Delete Project" not "Remove."

### Error Messages
Formula: What happened + Why + What to do.
- "Your password must be at least 8 characters."
- NOT: "Invalid input."
- NOT: "Error 422: Validation failed."

### Empty States
- "No messages yet" + actionable CTA.
- NOT: "There are currently no items to display."

### Confirmations
- "Project deleted." (past tense, brief).
- "Saved." (one word if obvious).
- NOT: "Your changes have been successfully saved!"

### Placeholders
- Example data: "jane@example.com" not "Enter your email."
- Disappears on focus, so never rely on it for instructions.