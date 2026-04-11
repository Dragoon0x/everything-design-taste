---
name: android-design-patterns
description: Android design conventions, Material Design patterns, and Google platform-specific design.
triggers: ["Android", "Material Design", "Google", "Android design"]
---

# Android Design Patterns

## Material Design 3
- **Dynamic color:** Color scheme derived from user's wallpaper.
- **Elevated surfaces:** Tonal elevation (color shift, not just shadow).
- **Large touch targets:** 48dp minimum.

## Navigation
- Bottom navigation bar (3-5 destinations).
- Navigation drawer for 5+ destinations.
- Top app bar: title + actions + navigation icon.
- FAB (Floating Action Button) for primary creation action.

## Components
- Cards with rounded corners (12dp radius).
- Chips for filters and selections.
- Bottom sheets for secondary actions.
- Snackbars for brief feedback (bottom of screen).

## Typography
- Roboto as system font (or product-specific typeface).
- Type scale: Display, Headline, Title, Body, Label.

## Key Differences from iOS
- Back button in navigation bar (not edge swipe).
- FAB for primary action (iOS uses nav bar buttons).
- Bottom sheets more common than action sheets.
- Hardware back button support.