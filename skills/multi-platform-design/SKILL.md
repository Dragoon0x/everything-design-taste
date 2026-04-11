---
name: multi-platform-design
description: Designing across web, mobile, tablet, desktop apps, and maintaining platform consistency.
triggers: ["multi-platform", "cross-platform", "platform consistency"]
---

# Multi-Platform Design

## Shared vs Platform-Specific
| Share Across Platforms | Adapt Per Platform |
|-----------------------|--------------------|
| Brand identity | Navigation patterns |
| Color tokens | Touch vs mouse interactions |
| Typography scale | Platform UI conventions |
| Content structure | Input methods |
| Business logic | Screen density |

## Platform Conventions
| Element | Web | iOS | Android |
|---------|-----|-----|---------|
| Primary action | Button in UI | Nav bar right | FAB |
| Navigation | Top/side nav | Tab bar bottom | Drawer + bottom nav |
| Back | Browser back | Left swipe/back button | System back |
| Selection | Checkbox | Checkmark | Checkbox |
| Alert | Modal/banner | Alert controller | Snackbar/dialog |

## Design System Strategy
- **Token layer:** Shared across all platforms
- **Component layer:** Platform-specific implementations
- **Pattern layer:** Shared patterns, platform-specific interactions
- **Brand layer:** Identical everywhere

## Rules
1. Respect platform conventions (don't put iOS patterns on Android)
2. Core experience should be consistent (same features, same content)
3. Each platform should feel native, not a port
4. Design system tokens bridge the platforms
5. Test on real devices (simulators miss performance and feel)
