---
name: mobile-app-patterns
description: Mobile app design patterns, navigation, gestures, and platform-specific conventions.
triggers: ["mobile app", "iOS design", "Android design", "mobile patterns"]
---

# Mobile App Patterns

## Navigation
| Pattern | Platforms | Max Items |
|---------|-----------|----------|
| Bottom tab bar | iOS, Android | 3-5 |
| Hamburger/drawer | Android (primary), iOS (secondary) | Unlimited |
| Top tabs | Both | 3-5 (scrollable for more) |

## Gestures
| Gesture | Common Action |
|---------|---------------|
| Tap | Select, activate |
| Long press | Context menu, drag initiation |
| Swipe left | Delete, archive (with confirmation) |
| Swipe right | Reveal actions, go back |
| Pull down | Refresh content |
| Pinch | Zoom in/out |

## Platform Conventions
| Element | iOS | Android |
|---------|-----|---------|
| Back | Left edge swipe, back button in nav | System back button |
| Primary action | Right side of nav bar | FAB (floating action button) |
| Alerts | Centered modal | Snackbar at bottom |
| Selection | Checkmarks | Checkboxes |
| Switches | iOS-style toggle | Material toggle |

## Touch Targets
- Minimum: 44x44pt (iOS), 48x48dp (Android)
- Comfortable: 48x48pt / 56x56dp
- Spacing between targets: 8px minimum

## Performance
- 60fps scrolling (non-negotiable)
- Optimistic updates for network actions
- Offline support for core features
- Skeleton loading, not spinners
