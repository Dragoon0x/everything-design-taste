---
name: dashboard-layout
description: Dashboard design, widget layouts, KPI displays, dashboard personalization, and information density.
triggers: ["dashboard", "admin panel", "analytics dashboard", "KPI display"]
---

# Dashboard Layout

## Dashboard Types
| Type | Purpose | Density |
|------|---------|---------|
| Executive | High-level KPIs at a glance | Low |
| Operational | Monitor real-time status | High |
| Analytical | Explore and compare data | Medium-High |
| Personal | Track individual progress | Medium |

## Layout Principles
1. **Most important metrics at the top.** Above the fold, largest cards.
2. **Group related widgets.** Revenue metrics together, user metrics together.
3. **Consistent grid.** Use a 12-column grid, widgets span 3, 4, 6, or 12 columns.
4. **White space between widgets.** 16-24px gaps minimum.
5. **Don't pack everything in.** A focused dashboard with 6-8 widgets beats a cluttered one with 20.

## KPI Cards
```
[Icon]  Label
42,389  ↑ 12.5%
```
- Large number is the focal point
- Trend indicator (up/down arrow + percentage)
- Comparison period label ("vs last month")
- Subtle sparkline for trend visualization (optional)

## Data Refresh
- Show last updated timestamp
- Auto-refresh interval (configurable)
- Visual indicator during refresh (subtle, not disruptive)
- Don't flash or jump when data updates

## Personalization
- Allow widget reordering (drag and drop)
- Show/hide widgets
- Save layout per user
- Offer preset layouts for different roles
