---
name: map-visualization
description: Choropleth maps, point maps, heat maps, and geographic data visualization.
triggers: ["map visualization", "choropleth", "heat map", "geographic data"]
---

# Map Visualization

## Types
| Type | Data | Example |
|------|------|---------|
| Choropleth | Values per region | Election results by state |
| Point/Dot | Locations | Store locations |
| Heat map | Density | Crime hotspots |
| Flow | Movement | Migration patterns |
| Bubble | Location + magnitude | City population |

## Rules
1. Use sequential color scales for quantitative data (light to dark)
2. Use diverging scales for data with a meaningful midpoint
3. Provide a legend with clear labels
4. Zoom and pan for interactive maps
5. Tooltips on hover showing exact values
6. Don't use rainbow color scales (perceptually misleading)

## Accessibility
- Don't rely on color alone (add patterns or labels)
- Provide data table alternative
- Keyboard navigable map markers
- Screen reader announcements for key data points
