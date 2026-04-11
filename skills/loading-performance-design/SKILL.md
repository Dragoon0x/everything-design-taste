---
name: loading-performance-design
description: Perceived performance design, skeleton screens, optimistic updates, and speed perception.
triggers: ["perceived performance", "optimistic UI", "performance design", "speed"]
---

# Loading Performance Design

## Perceived vs Actual Performance

Users don't measure milliseconds. They measure whether the app feels fast.

### Techniques
1. **Optimistic updates:** Show the result immediately, sync in background.
   - Like button: heart fills instantly, API call happens after.
   - Delete: item disappears instantly, undo available for 5s.

2. **Progressive loading:** Show content as it arrives.
   - Text before images.
   - Above-fold before below-fold.
   - Skeleton → content replacement.

3. **Pre-loading:** Anticipate next action.
   - Prefetch next page on link hover.
   - Preload resources for likely next steps.

4. **Instant feedback:** Acknowledge every interaction.
   - Button state change on click (don't wait for server).
   - Input validation on blur (don't wait for submit).

## Timing Thresholds
| Duration | Perception | Action |
|----------|-----------|--------|
| < 100ms | Instant | No feedback needed |
| 100-300ms | Slight delay | Show state change |
| 300ms-1s | Noticeable | Show loading indicator |
| 1-5s | Slow | Show progress + message |
| > 5s | Broken | Show progress + cancel option |