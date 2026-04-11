---
name: badge-tag-chip
description: Badge design, tag systems, chip components, status indicators, and label patterns.
triggers: ["badge", "tag", "chip", "label", "status indicator"]
---

# Badge, Tag & Chip Patterns

## Badge (notification count)
- Position: top-right corner of icon
- Shape: circle for single digit, rounded pill for 2+ digits
- Color: red for urgent, brand color for neutral
- Max display: "99+" or "9+"
- Size: small enough to not obscure the icon

## Tag (categorization)
- Purpose: classify or categorize content
- Style: outlined or subtle background, rounded corners
- Removable: include X button if user-applied
- Color-coded: consistent colors for consistent categories
- Text: short (1-3 words), sentence case

## Chip (selection/filter)
- Purpose: compact interactive elements for selection
- States: unselected (outlined), selected (filled)
- Include avatar or icon prefix where helpful
- Removable: X to deselect
- Wrap naturally in a group

## Status Indicators
| Status | Color | Example |
|--------|-------|---------|
| Success/Active | Green | "Published", "Online" |
| Warning/Pending | Yellow/Amber | "Under review", "Expiring" |
| Error/Failed | Red | "Failed", "Declined" |
| Info/Neutral | Blue/Gray | "Draft", "New" |
| Inactive | Gray | "Archived", "Disabled" |

Always pair color with text label. Never rely on color alone.
