---
name: scroll-behavior
description: Scroll-based interactions, sticky elements, parallax, scroll-triggered animations, and scroll UX.
triggers: ["scroll", "sticky elements", "parallax", "scroll animation"]
---

## Scroll Behavior

### Sticky Elements
| Element | When to Stick |
|---------|---------------|
| Header/nav | Long pages where nav access matters |
| Table header | Long tables where column context matters |
| Sidebar | When content scrolls but tools should stay visible |
| CTA button | When the primary action needs to be always reachable |
| Tab bar | When tabs scroll away from their content |

### Scroll-Triggered Animations
- Fade-in on scroll: elements appear as they enter viewport
- Parallax: background moves slower than foreground (use sparingly)
- Progress bar: shows reading progress for articles
- Reveal on scroll: elements build in as user scrolls

### Rules
1. Scrolljacking (overriding native scroll behavior) is almost always wrong
2. Parallax: maximum one layer, subtle, and respect prefers-reduced-motion
3. Sticky elements steal screen space, budget carefully on mobile
4. Scroll-triggered animations should only fire once (not re-trigger on scroll up)
5. Back-to-top button: show after scrolling 2+ viewport heights
6. Scroll position should persist on navigation (back button returns to scroll position)
