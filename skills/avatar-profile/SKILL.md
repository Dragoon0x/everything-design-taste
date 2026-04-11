---
name: avatar-profile
description: Avatar design, profile displays, user representation, initials fallback, and presence indicators.
triggers: ["avatar", "profile picture", "user avatar", "initials"]
---

# Avatar & Profile Patterns

## Avatar Sizes
| Size | Use Case | Pixels |
|------|----------|--------|
| XS | Dense lists, inline mentions | 24px |
| SM | Comments, chat messages | 32px |
| MD | Cards, list items | 40px |
| LG | Profile headers, sidebars | 56-64px |
| XL | Profile pages, account settings | 96-128px |

## Fallback Chain
1. User-uploaded photo
2. Initials on colored background (derived from name hash for consistency)
3. Generic silhouette icon (absolute last resort)

## Initials
- Use first letter of first and last name (JD for John Doe)
- Single name: use first two letters (JO for John)
- Background color: derive from a hash of the name (same person = same color always)
- Text color: white on dark backgrounds, dark on light

## Presence Indicators
- Green dot: online/active
- Yellow dot: idle/away
- Red dot: busy/do not disturb
- Gray dot or no dot: offline
- Position: bottom-right corner of avatar
- Size: 25-30% of avatar diameter

## Group Avatars
- Stack with overlap (show 3, "+5 more")
- Overlap from left to right
- Most recent or most relevant on top
- Click to expand full list
