---
name: data-input-patterns
description: Specialized input patterns: date pickers, color pickers, sliders, rating inputs, and file uploads.
triggers: ["date picker", "color picker", "slider", "file upload", "rating input"]
---

# Specialized Input Patterns

## Date Picker
- Calendar view for single date selection
- Range picker for start/end dates
- Allow manual text input alongside calendar
- Format hint in placeholder: "MM/DD/YYYY"
- Disable invalid dates (past dates for future bookings, etc.)
- Relative shortcuts: "Today", "Tomorrow", "Next week"

## Slider
- Use for ranges, not precise values (use number input for precision)
- Show current value above/beside the thumb
- Define min, max, and step size
- Snap to meaningful increments
- Consider a dual-thumb slider for ranges (min-max price)

## File Upload
- Drag-and-drop zone with click fallback
- Show accepted file types and size limit before upload
- Preview thumbnails for images
- Progress bar per file
- Cancel/remove before and during upload
- Error messages for rejected files (too large, wrong type)

## Rating Input
- Stars, hearts, or thumbs depending on context
- Half-star precision if needed
- Show rating value as number alongside visual
- Hover preview of rating before committing
- Allow clearing/resetting

## Color Picker
- Predefined palette for brand consistency
- Custom color input (hex, RGB, HSL)
- Preview swatch showing selected color
- Contrast checker if color is used with text
- Recent colors history
