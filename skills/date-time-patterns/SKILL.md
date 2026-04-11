---
name: date-time-patterns
description: Date picker, time picker, calendar views, date range selection, and relative time display.
triggers: ["date picker", "time picker", "calendar", "date range"]
---

# Date Time Patterns

## Date Picker
- Native picker on mobile (better UX, keyboard integration).
- Custom picker on desktop for more control.
- Show selected date in the input formatted per locale.
- Allow manual text entry alongside picker.
- Disable past dates for future-only selections.

## Time Picker
- Dropdown with 15 or 30-minute intervals for scheduling.
- Free text input with validation for precise times.
- 12h vs 24h based on locale.
- Show timezone when relevant.

## Date Range
- Two inputs (start/end) with calendar showing both months.
- Click start date, then end date. Highlight range between.
- Preset ranges: Today, Last 7 days, This month, Custom.

## Relative Time Display
| Age | Display |
|-----|--------|
| < 1 min | "Just now" |
| 1-59 min | "5 min ago" |
| 1-24 hr | "3 hours ago" |
| 1-7 days | "2 days ago" |
| > 7 days | Absolute date (Jan 15, 2026) |