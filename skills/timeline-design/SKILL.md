---
name: timeline-design
description: Timeline UI patterns for activity feeds, history, and chronological displays.
triggers: ["timeline","activity feed","history","chronological"]
---

# Timeline Design

## Types
| Type | Layout | Use Case |
|------|--------|----------|
| Vertical | Default | Activity feeds, history |
| Horizontal | Alternate | Milestones, roadmap |
| Alternating | Left/right zigzag | Case studies, about pages |
| Compact | List-style | Audit logs, commit history |

## Vertical Timeline
```
● Title                    [Date]
  Description text
  [Optional media/action]
│
● Title                    [Date]
  Description text
│
```

## Design Rules
1. Most recent first (unless it's a roadmap)
2. Group by date (Today, Yesterday, This Week)
3. Clear visual line connecting events
4. Nodes mark each event on the line
5. Differentiate event types with icons or colors
6. Collapse old events ("Show older")
