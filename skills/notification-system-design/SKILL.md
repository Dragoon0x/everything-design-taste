---
name: notification-system-design
description: Designing notification systems, notification centers, and multi-channel notification architecture.
triggers: ["notification system","notification center","alert system"]
---

# Notification System Design

## Multi-Channel Architecture
| Channel | Urgency | User Control |
|---------|---------|-------------|
| In-app toast | Low | Auto-dismiss |
| In-app notification center | Medium | Read/dismiss |
| Email | Medium | Unsubscribe per category |
| Push notification | High | OS-level control |
| SMS | Critical | Opt-in only |

## Notification Center
- Accessible from persistent icon in header
- Badge count for unread (red dot or number)
- Grouped by type or time
- Mark individual or all as read
- Click to navigate to relevant context
- Filter: All, Unread, by category
- Settings link: manage notification preferences

## Rules
1. Default to minimal: only essential notifications enabled
2. Group related notifications (not one per event)
3. Respect quiet hours
4. Easy to manage: per-category, per-channel toggles
5. Never send marketing without explicit opt-in
6. Include unsubscribe in every email
