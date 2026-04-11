---
name: snackbar-toast
description: Snackbar and toast notification design, positioning, auto-dismiss, and action patterns.
triggers: ["snackbar", "toast notification", "brief notification"]
---

# Snackbar & Toast

## Position
- Desktop: top-right corner
- Mobile: bottom-center (above bottom nav if present)
- Stack: newest on top, max 3 visible

## Timing
| Content | Duration |
|---------|----------|
| Success confirmation | 3 seconds auto-dismiss |
| Information | 4 seconds auto-dismiss |
| Warning | 5 seconds or manual dismiss |
| Error | Manual dismiss only |
| With action (Undo) | 5-8 seconds |

## Design
- Dark background for contrast with page (even on light themes)
- Single line preferred, two lines maximum
- One optional action button ("Undo", "View", "Retry")
- Optional close X button
- Enter: slide in from edge. Exit: fade out.

## Rules
1. Never block important content
2. Never require user action for non-critical info
3. Group related notifications ("3 files uploaded" not 3 separate toasts)
4. Don't use for errors that need detailed explanation (use inline instead)
5. Pause auto-dismiss timer on hover
