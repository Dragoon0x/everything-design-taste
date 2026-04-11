---
name: map-interface
description: Map UI patterns, markers, clustering, search on maps, location pickers, and map interaction design.
triggers: ["map design", "map interface", "location picker", "map markers"]
---

# Map Interface Patterns

## Map Controls
- Zoom: buttons (+/-) and scroll/pinch
- Current location: "locate me" button
- Map type toggle: satellite/terrain/standard
- Search: geocoding input for address/place lookup
- Fullscreen toggle

## Markers
- Cluster dense markers at low zoom (show count)
- Selected marker is visually distinct (larger, different color, elevated)
- Hover shows tooltip with preview info
- Click opens detail card/panel
- Consistent marker style within categories

## Info Cards
- Appear on marker click as card overlay or side panel
- Include: name, address, rating, image, action buttons
- Close on clicking elsewhere on map
- Mobile: bottom sheet sliding up from bottom

## Location Picker
- Click to place marker
- Drag to adjust position
- Search to jump to address
- Show coordinates for precision use
- Confirm button to finalize selection

## Performance
- Limit visible markers (cluster or viewport-filter)
- Lazy load marker details on click
- Use vector tiles for smooth zoom
- Debounce search-as-you-pan requests
