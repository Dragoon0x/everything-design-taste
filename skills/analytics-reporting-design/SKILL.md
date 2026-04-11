---
name: analytics-reporting-design
description: Analytics and reporting interface design including data visualization, report builder, and metric dashboards.
triggers: ["analytics", "reporting", "metrics", "data visualization", "business intelligence"]
---

# Analytics Reporting Design

## Dashboard Layout
- KPI cards at top (3-5 key metrics).
- Primary visualization below (the story).
- Supporting charts in a grid.
- Date range selector (global).
- Comparison: vs previous period, vs goal.

## Chart Selection
| Data Type | Chart |
|-----------|------|
| Trend over time | Line chart |
| Comparison across categories | Bar chart (horizontal for long labels) |
| Part of whole | Donut chart (max 5 segments) |
| Distribution | Histogram |
| Correlation | Scatter plot |
| Geographic | Choropleth map |

## Report Builder
- Drag-and-drop chart placement.
- Data source selector.
- Filter/dimension picker.
- Export: PDF, CSV, scheduled email.

## Anti-Patterns
- Pie charts with more than 5 slices.
- 3D charts (ever).
- Dual Y-axis charts (confusing).
- Truncated Y-axis that exaggerates trends.
- Auto-refreshing data without indicating the refresh.