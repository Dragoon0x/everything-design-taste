---
name: chart-selection
description: Choosing the right chart type for your data, chart anatomy, and common chart mistakes.
triggers: ["chart selection", "data visualization", "chart types"]
---

# Chart Selection

## Choosing the Right Chart

| Data Relationship | Best Chart |
|-------------------|------------|
| Change over time | Line chart, area chart |
| Comparison | Bar chart (horizontal for many categories) |
| Part of whole | Pie/donut (max 5 slices), stacked bar |
| Distribution | Histogram, box plot |
| Correlation | Scatter plot |
| Geographic | Map (choropleth, point map) |
| Flow/process | Sankey diagram, funnel |
| Hierarchy | Treemap, sunburst |

## Chart Anatomy
- **Title:** States the insight, not the data ('Revenue grew 40% in Q3' not 'Revenue Q1-Q4')
- **Axes:** Labeled with units, starting at zero for bars (not for lines)
- **Legend:** Only when multiple series, positioned near the data
- **Gridlines:** Minimal, light gray, horizontal only
- **Annotations:** Call out key points directly on the chart

## Common Mistakes
1. Pie charts with more than 5 slices (unreadable)
2. 3D charts (distort perception)
3. Dual Y-axes (confusing, usually misleading)
4. Truncated Y-axis on bar charts (exaggerates differences)
5. Too many colors (use one hue with variations for most charts)
6. Missing context (what's the benchmark? trend? target?)
