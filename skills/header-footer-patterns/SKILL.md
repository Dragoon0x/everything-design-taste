---
name: header-footer-patterns
description: Header design, footer architecture, sticky headers, and global navigation patterns.
triggers: ["header", "footer", "navbar", "app bar", "sticky header"]
---

# Header Footer Patterns

## Header Patterns

### Marketing Site
- Logo (left) + Nav items (center or right) + CTA button (right).
- Transparent on hero, solid on scroll.
- Height: 64-80px.
- Hamburger on mobile (< 768px).

### Web App
- Logo + Breadcrumb/page title (left) + Search (center) + Actions + User menu (right).
- Always solid background. Fixed/sticky on scroll.
- Height: 48-64px.

### Sticky Header
- Reduce height on scroll (80px → 56px).
- Hide on scroll down, show on scroll up (smart hide).
- Never sticky on mobile for content-reading pages.

## Footer Patterns

### Minimal
- Copyright + Legal links (Privacy, Terms) + Social links.
- Single row. Used for apps and simple sites.

### Standard
- 3-4 column grid with link groups.
- Newsletter signup.
- Social icons.
- Logo + copyright at bottom.

### Extended
- Full sitemap-style navigation.
- Contact information.
- App download badges.
- Trust badges (security, certifications).