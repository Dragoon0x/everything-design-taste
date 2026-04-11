---
name: notification-patterns
description: Toast notifications, in-app alerts, badge systems, push notification UX, and notification preferences.
triggers: ["notifications", "toast", "alerts", "badges", "push notifications"]
---

# Notification Patterns

## Types

| Type | Duration | User Action | Use For |
|------|----------|-------------|---------|
| Toast | 3-5 sec auto-dismiss | None required | Success, info, non-critical |
| Banner | Until dismissed | Dismiss or act | Warnings, updates, promos |
| Inline alert | Persistent | Context-dependent | Form errors, status messages |
| Badge | Until cleared | Open to clear | Unread counts, new items |
| Push | N/A | Open or dismiss | Time-sensitive, actionable |

## Toast Rules
- Position: top-right (desktop) or top-center (mobile)
- Stack new toasts above old ones
- Auto-dismiss after 3-5 seconds for success/info
- Don't auto-dismiss errors (users need time to read)
- Include undo action for destructive operations ("Item deleted. Undo")
- Maximum 3 visible at once

## Notification Preferences
- Default to minimal (don't spam)
- Group by category (marketing, product updates, activity)
- Allow per-category opt-out
- Distinguish between in-app and push/email
- "Quiet hours" setting for push notifications

## Badge Design
- Red for urgent/unread, gray for neutral
- Show count for small numbers (1-99), "99+" for more
- Position: top-right corner of the icon
- Clear badge when content is viewed, not when notification center is opened
