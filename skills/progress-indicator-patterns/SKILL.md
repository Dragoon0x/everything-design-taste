---
name: progress-indicator-patterns
description: Progress bars, spinners, step indicators, and loading feedback design.
triggers: ["progress bar", "spinner", "loading indicator", "progress"]
---

# Progress Indicator Patterns

## Choosing a Pattern

| Know the percentage? | Duration | Pattern |
|---------------------|----------|--------|
| Yes | Any | Determinate progress bar |
| No | < 3 sec | Spinner |
| No | 3-10 sec | Spinner + message |
| No | > 10 sec | Skeleton or progress with steps |

## Progress Bar Rules
- Never go backwards. If progress recalculates, pause at current position.
- Show percentage OR "X of Y" alongside the bar.
- Stripe/pulse animation for indeterminate progress.
- Color change at completion (brand color → green).

## Spinner Rules
- Only show if operation takes > 300ms.
- Don't use spinners for content loading (use skeletons).
- Center in the container they're loading.
- Include text for operations > 3 seconds: "Loading your dashboard..."

## Anti-Patterns
- Spinners that spin forever with no timeout or error state.
- Progress bars that jump from 10% to 90% then sit at 99%.
- Multiple spinners visible at once.