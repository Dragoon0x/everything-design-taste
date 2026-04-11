---
name: responsive-email-design
description: Responsive email design patterns, fluid layouts, and mobile-first email approaches.
triggers: ["responsive email", "mobile email", "email responsive"]
---

# Responsive Email Design

## Mobile Email Strategy
- **60%+ of email is opened on mobile.** Design mobile-first.
- Single-column layout adapts best.
- Stack multi-column content vertically on mobile.
- Buttons: full-width on mobile, inline on desktop.

## Fluid vs Responsive
- **Fluid:** Percentage-based widths, works everywhere but less control.
- **Responsive:** Media queries, more control but not all clients support.
- **Hybrid:** Fluid with conditional comments for Outlook. Best of both.

## Mobile-Specific
- Font size: 16px minimum body (prevents auto-zoom on iOS).
- Links: 44px touch target minimum.
- Images: 100% width, max-width for desktop.
- Preheader text: visible on mobile, hidden on desktop.
- Single CTA per section.