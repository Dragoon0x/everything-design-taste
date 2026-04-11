---
name: notification-design
description: Notification systems, alert hierarchy, toast patterns, badges, and notification center design.
triggers: ["notification", "alert", "toast", "badge", "notification design"]
---

# Notification Design

## Notification Types

| Type | Urgency | Persistence | Example |
|------|---------|-------------|---------|
| Toast/Snackbar | Low | Auto-dismiss (3-5s) | "File saved" |
| Banner | Medium | Dismissible | "New version available" |
| Inline alert | Medium | Persistent | Form validation error |
| Modal alert | High | Requires action | "Delete all data?" |
| System notification | Varies | OS-level | Push notification |

## Toast Design
- Position: top-right (desktop), top-center (mobile).
- Auto-dismiss: 3-5 seconds. Pause on hover.
- Stack limit: max 3 visible. Queue the rest.
- Include undo action for destructive operations.
- Don't use toasts for errors that need user action.

## Alert Colors
| Color | Meaning | Icon |
|-------|---------|------|
| Blue/Info | Informational, neutral | Info circle |
| Green/Success | Positive outcome | Checkmark |
| Yellow/Warning | Caution, needs attention | Warning triangle |
| Red/Error | Something failed, action needed | X circle or exclamation |

## Notification Center
- Badge count on bell icon (never show 99+, cap at 9+ or show exact).
- Group by time: Today, Yesterday, This Week, Older.
- Mark as read on click. Mark all as read option.
- Empty state: "You're all caught up" with relevant illustration.
- Don't mix notification types (system alerts vs social activity).