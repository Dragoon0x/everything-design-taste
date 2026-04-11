---
name: loading-states
description: Skeleton screens, progress indicators, optimistic updates, and perceived performance design.
triggers: ["loading states", "skeleton screen", "progress bar", "loading UX", "perceived performance"]
---

# Loading States

## The Three Rules
1. **Under 200ms:** Don't show anything. It feels instant.
2. **200ms - 2s:** Show a skeleton screen or subtle indicator.
3. **Over 2s:** Show a progress bar or determinate indicator with context.

## Skeleton Screens
- Match the actual content layout (not a generic spinner)
- Animate with a shimmer effect (left-to-right pulse)
- Show 3-5 skeleton items max (not 20)
- Transition smoothly to real content (no flash)

## Progress Indicators
| Type | When | Example |
|------|------|---------|
| Determinate bar | Known duration/steps | File upload (45% complete) |
| Indeterminate bar | Unknown duration, short wait | Page loading |
| Spinner | Unknown duration, small area | Button loading state |
| Skeleton | Page/section loading | Dashboard loading |

## Optimistic Updates
Show the result immediately, sync in the background:
- Toggle switches: flip immediately, revert on error
- Like/bookmark: show filled state instantly
- Message sending: show in chat immediately with "sending..." status
- Use only when failure is rare and reversible

## Anti-Patterns
- Full-page spinners blocking all interaction
- Loading spinners that appear for 100ms (use a delay of 300ms before showing)
- No loading state at all (user wonders if their action worked)
- Different loading patterns on the same page
- "Loading..." text without context (loading what?)
