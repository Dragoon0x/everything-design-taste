---
name: skeleton-loading
description: Skeleton screen design, loading state patterns, progressive loading, and perceived performance.
triggers: ["skeleton", "loading state", "skeleton screen", "loading pattern"]
---

# Skeleton Loading

## Skeleton Principles

1. **Match the actual content layout.** A skeleton should preview the structure of what's loading.
2. **Animate subtly.** Pulse or shimmer animation at 1-2 second intervals.
3. **Show within 300ms.** If content loads faster than 300ms, skip the skeleton entirely.
4. **Progressive loading.** Show content as it arrives. Don't wait for everything.

## Skeleton Patterns

### Text Content
```
[████████████████████████] ← title (wider)
[██████████████] ← subtitle (narrower)
[████████████████████████████████████] ← body line 1
[██████████████████████████████] ← body line 2
[████████████████████] ← body line 3 (shorter)
```

### Cards
- Rounded rectangle for image area.
- 2-3 lines of varying width for text.
- Same dimensions as the loaded card.

### Tables
- Rows with cells matching column widths.
- 5-8 skeleton rows.

## Anti-Patterns
- Generic spinner for content-heavy pages.
- Skeleton that doesn't match the loaded layout (content shift).
- Skeleton showing for less than 200ms (flash).
- Loading the skeleton and content simultaneously (defeats the purpose).