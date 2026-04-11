---
name: video-background
description: Video background design, hero videos, and video performance.
triggers: ["video background","hero video","background video"]
---

# Video Background

## When to Use
- Brand/mood setting on landing pages
- Product demo as hero
- Event/conference marketing
- NOT on app interfaces or tool pages

## Rules
1. Muted by default (never autoplay audio)
2. No controls visible (it's a background, not a player)
3. Loop seamlessly
4. Fallback poster image for slow connections
5. Reduce motion: show static image for `prefers-reduced-motion`
6. Dark overlay for text readability
7. Compress aggressively (720p max for backgrounds)
8. Lazy load below fold

## Performance
- Max file size: 5-10MB
- Format: MP4 (H.264) for broadest support, WebM as enhancement
- Consider replacing with CSS animation or SVG animation
- Don't autoplay on mobile (data usage + performance)
