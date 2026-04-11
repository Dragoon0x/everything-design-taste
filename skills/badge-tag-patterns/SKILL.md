---
name: badge-tag-patterns
description: Badge, tag, chip, and label component design for status indication and categorization.
triggers: ["badge", "tag", "chip", "label", "status"]
---

# Badge Tag Patterns

## Badge Types
| Type | Purpose | Example |
|------|---------|--------|
| Count badge | Quantity indicator | Notification count (5) |
| Status badge | State indicator | Active, Inactive, Pending |
| Label/Tag | Categorization | "Design," "Engineering" |
| Chip | Filterable selection | Selected filters, recipients |

## Design Rules
- **Count badges:** Red dot for presence, number for count. Cap at 99+.
- **Status badges:** Use consistent colors across the app. Green=active, yellow=warning, red=error, gray=inactive.
- **Tags:** Allow removal (X button). Truncate long text with ellipsis.
- **Chips:** Include avatar/icon for people. Show selected state.

## Sizing
- Badges: 16-20px height, tight padding.
- Tags: 24-28px height, comfortable padding.
- Chips: 32px height, includes interactive elements.