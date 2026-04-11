---
name: responsive-email
description: Responsive email design, mobile email optimization, and email-specific media queries.
triggers: ["responsive email", "mobile email", "email media queries"]
---

# Responsive Email Design

## Strategy
- Design mobile-first (most emails opened on mobile)
- Single column layout works everywhere
- Stack multi-column content on small screens

## Fluid vs Responsive
- **Fluid:** Percentage widths, scales with viewport. Simpler, broader support.
- **Responsive:** Media queries for breakpoints. Better control, less support.

## Mobile Optimization
- Minimum font size: 16px (prevents iOS zoom)
- Minimum tap target: 44x44px
- CTA button: full-width on mobile
- Reduce padding on mobile (more content visible)
- Hide non-essential content on mobile
- Preheader text: optimize for mobile inbox preview

## Media Query Support
```css
@media screen and (max-width: 600px) {
  .column { width: 100% !important; }
  .mobile-hidden { display: none !important; }
  .mobile-full-width { width: 100% !important; }
}
```
Note: Gmail App supports media queries. Outlook does not.
