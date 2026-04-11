---
name: progressive-web-app-design
description: PWA design patterns including offline support, install experience, and app-like behavior.
triggers: ["PWA", "progressive web app", "offline", "installable web"]
---

# Progressive Web App Design

## PWA Design Considerations

### Install Experience
- Show install prompt at a relevant moment (not immediately).
- Explain value: "Install for offline access and faster loading."
- Custom install banner with app icon and description.
- Don't block content with install prompts.

### Offline Support
- Cache critical content for offline access.
- Show what's available offline vs online-only.
- Queue actions performed offline, sync when connected.
- "You're offline" banner — non-intrusive, persistent until reconnected.

### App-Like Behavior
- Standalone display mode (no browser chrome).
- Custom splash screen.
- Theme color matching app header.
- Push notifications (with permission prompt that explains value).
- Smooth page transitions (no full page reloads).