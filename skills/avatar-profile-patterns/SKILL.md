---
name: avatar-profile-patterns
description: Avatar display, profile cards, user representation, and identity design patterns.
triggers: ["avatar", "profile", "user card"]
---

# Avatar Profile Patterns

## Avatar Design
- Sizes: 24px (inline), 32px (list), 40px (comment), 64px (profile), 128px (settings).
- Fallback order: photo → initials (first + last) → generic icon.
- Circle shape (most common) or rounded square (Slack-style).
- Border: optional, use when avatar sits on varying backgrounds.
- Status indicator: small circle (green/yellow/red) at bottom-right.
- Group avatars: overlap with z-index stacking, show "+3" for overflow.

## Profile Cards
- Avatar + Name + Role/Title + Status.
- Hover card on avatar: quick profile preview without navigation.
- Action buttons: Message, Follow, View Profile.
- Keep cards compact. Full profile lives on its own page.