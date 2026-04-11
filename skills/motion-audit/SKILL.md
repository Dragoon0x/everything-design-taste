---
name: motion-audit
description: Motion design review, animation performance, and motion consistency checking.
triggers: ["motion audit","animation review"]
---

# Motion Audit

## Checklist
- [ ] Every animation has a purpose (orient, focus, express, teach, delight)
- [ ] Durations follow the timing scale (100-500ms)
- [ ] Easing is consistent (same easing for same type of motion)
- [ ] `prefers-reduced-motion` is respected
- [ ] Performance: only transform/opacity animated
- [ ] No animation blocks user interaction
- [ ] Loading indicators appear after 300ms delay
- [ ] Page transitions are under 400ms total
- [ ] Stagger delays are 50-100ms (not 200+)
- [ ] No infinite animations without purpose
