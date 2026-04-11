---
name: data-visualization
description: Chart selection, data viz best practices, dashboard design, and statistical graphics.
triggers: ["data viz", "charts", "graphs", "data visualization"]
---

# Data Visualization

## Chart Selection

| Question | Chart Type |
|----------|----------|
| How does it change over time? | Line chart |
| How do categories compare? | Bar chart (horizontal for long labels) |
| What's the part-to-whole? | Donut chart (5 categories max) or stacked bar |
| What's the distribution? | Histogram or box plot |
| Is there a correlation? | Scatter plot |
| What's the geographic pattern? | Choropleth or bubble map |
| What's the flow/process? | Sankey or flow diagram |

## Design Rules
1. **Title states the insight,** not the data. "Revenue grew 3x" not "Revenue 2023-2025."
2. **Start Y-axis at zero** for bar charts. Line charts can start at non-zero with clear labeling.
3. **Remove chartjunk:** gridlines, borders, 3D effects, decorative elements.
4. **Color with purpose:** highlight the data point that matters, gray the rest.
5. **Label directly** on the chart when possible (not in a separate legend).
6. **Responsive:** Charts must be readable on mobile (simplify, don't just shrink).

## Anti-Patterns
- Pie charts with more than 5 slices.
- 3D charts (ever).
- Dual Y-axis (almost always confusing).
- Rainbow color schemes (not accessible, not meaningful).
- Truncated axes that exaggerate differences.