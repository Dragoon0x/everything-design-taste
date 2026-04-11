---
name: dashboard-data-design
description: Dashboard data display, KPI design, real-time data visualization, and data density.
triggers: ["dashboard data", "KPI display", "real-time data", "data display"]
---

# Dashboard Data Design

## KPI Card Design
```
┌──────────────────────┐
│ [icon]  Metric Name  │
│ 42,389   ↑ 12.5%    │
│ vs last month        │
└──────────────────────┘
```
- Large number = focal point
- Trend arrow + percentage
- Comparison period clearly labeled
- Color: green for positive, red for negative (with icon for color blindness)

## Data Density Guidelines
| Audience | Density | Details |
|----------|---------|----------|
| Executive | Low | 4-6 KPIs, simple charts |
| Manager | Medium | 8-12 metrics, filters, drill-down |
| Analyst | High | Dense tables, complex charts, custom queries |

## Real-Time Data
- Show last updated timestamp
- Subtle refresh animation (not full-page reload)
- Don't flash or jump when data updates
- Historical comparison always available
- Configurable auto-refresh interval

## Drill-Down Pattern
- Overview → click metric → detailed breakdown
- Breadcrumb trail showing drill-down path
- Back button to return to overview
- Filter context preserved across drill-downs
