---
name: progress-indicator
description: Progress bars, step indicators, loading progress, and progress feedback patterns.
triggers: ["progress bar", "progress indicator", "loading progress", "step indicator"]
---

# Progress Indicators

## Types
| Type | When |
|------|------|
| Determinate bar | Known progress (file upload, multi-step form) |
| Indeterminate bar | Unknown duration but brief |
| Circular/ring | Space-constrained, or for completion percentage |
| Step indicator | Multi-step processes with discrete steps |
| Skeleton | Content loading placeholder |

## Design Rules
1. Show percentage for determinate progress
2. Estimated time remaining for long operations
3. Use animation direction to indicate activity
4. Color: brand color for normal, green for complete
5. Don't show progress for operations under 1 second
6. For >10 seconds: show what's happening ("Uploading file 3 of 7")

## Step Indicators
- Completed steps: filled circle + checkmark
- Current step: filled circle + number
- Future steps: outlined circle + number
- Connected by a line (filled to current point)
