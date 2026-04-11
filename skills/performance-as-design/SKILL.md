---
name: performance-as-design
description: Web performance as a design decision, Core Web Vitals, perceived performance, and performance budgets.
triggers: ["performance", "web performance", "page speed", "core web vitals"]
---

## Performance as Design

Slow is a design failure. A beautiful page that takes 5 seconds to load is worse than a plain page that loads in 1 second.

### Core Web Vitals
| Metric | Target | What It Measures |
|--------|--------|------------------|
| LCP | < 2.5s | Largest content rendered |
| INP | < 200ms | Interaction responsiveness |
| CLS | < 0.1 | Visual stability (no layout shifts) |

### Performance Budget
Set limits before you start designing:
- Total page weight: < 1MB (ideally < 500KB)
- Fonts: max 2 families, 3-4 weights total
- Images: WebP/AVIF, appropriately sized
- JavaScript: < 200KB gzipped
- First contentful paint: < 1.5s

### Design Decisions That Affect Performance
| Decision | Performance Cost |
|----------|------------------|
| Custom fonts | 20-100KB per font file |
| Hero video | 2-10MB+ |
| Animation library | 20-80KB JS |
| Image carousel | Multiple large images loaded |
| Infinite scroll | Growing DOM, memory usage |
| Real-time features | WebSocket connection, state updates |

### Perceived Performance
- Skeleton screens feel faster than spinners
- Optimistic updates feel faster than waiting for confirmation
- Progressive image loading (blur-up) feels faster than empty space
- Instant navigation (prefetch on hover) feels faster than waiting
