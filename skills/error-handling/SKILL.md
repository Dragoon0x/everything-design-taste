---
name: error-handling
description: Error states, error messages, recovery flows, error prevention, and graceful degradation.
triggers: ["error handling", "error states", "error messages", "error UX"]
---

# Error Handling

## Error Message Formula
**What happened** + **Why** (if useful) + **What to do now**

### Bad
"Error 500: Internal server error"

### Good
"We couldn't save your changes. Our servers are having trouble. Try again in a few minutes, or your changes will be saved automatically when we're back."

## Error Types & Treatment

| Error | Show Where | Persist | User Action |
|-------|-----------|---------|-------------|
| Field validation | Inline next to field | Until fixed | Fix input |
| Form submission | Top of form + inline | Until fixed | Fix and resubmit |
| Network error | Banner or toast | Until resolved | Retry or wait |
| Auth error | Full page or modal | Until resolved | Log in again |
| Not found | Full page | N/A | Go back or search |
| Server error | Full page or banner | Until resolved | Retry later |

## Prevention Over Recovery
1. **Inline validation** catches errors before submission
2. **Confirmation dialogs** prevent accidental destructive actions
3. **Autosave** prevents data loss
4. **Undo** is better than "Are you sure?"
5. **Smart defaults** reduce wrong inputs
6. **Input masks** format data as users type

## Rules
- Never use technical jargon (error codes, stack traces)
- Never blame the user ("You entered an invalid...")
- Always provide a path forward
- Preserve user input on error (never clear the form)
- Use appropriate severity (red for errors, yellow for warnings, blue for info)
- Log errors for debugging even if users don't see details
