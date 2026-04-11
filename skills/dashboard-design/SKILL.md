---
name: dashboard-design
description: Dashboard layout, data visualization placement, widget patterns, and information density management.
triggers: ["dashboard", "admin panel", "analytics dashboard"]
---

# Dashboard Design

## Dashboard Types

| Type | Purpose | Density |
|------|---------|---------|
| Operational | Monitor real-time status | High, live data |
| Analytical | Explore trends and patterns | Medium, interactive |
| Strategic | Track KPIs and goals | Low, focused metrics |

## Layout Patterns
- **KPI bar** at top: 3-5 key metrics with trend indicators.
- **Primary chart** below: the most important visualization, large.
- **Supporting widgets** in grid: secondary data in smaller containers.
- **Activity feed** in sidebar or bottom: recent events, logs.

## Widget Design
- Title + value + trend indicator (up/down + percentage).
- Consistent sizing: widgets should snap to a grid (2-col, 3-col, 4-col).
- Hover/click for drill-down. Don't try to show all detail at once.
- Loading state per widget (skeleton), not a full-page loader.

## Information Density
- Offer density toggle: Compact / Comfortable / Spacious.
- Default to comfortable. Power users will switch to compact.
- Time range selector: global (affects all widgets) + per-widget override.

## Anti-Patterns
- Dashboards that show everything with no hierarchy (wall of charts).
- Pie charts for more than 5 categories (use bar charts).
- 3D charts (never, ever).
- Auto-refreshing charts that cause layout shifts.