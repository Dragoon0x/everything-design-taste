---
name: media-publishing
description: Content publishing platforms, CMS design, article layouts, reader experience, and editorial tools.
triggers: ["publishing", "CMS design", "article layout", "editorial", "magazine"]
---

# Media & Publishing Design

## Article Layout
- **Optimal reading width:** 600-700px for body text
- **Font size:** 18-20px for comfortable reading
- **Line height:** 1.6-1.7 for body text
- **Paragraph spacing:** More than line spacing, less than section spacing
- **Pull quotes:** Full-width interruptions that break reading rhythm intentionally
- **Image captions:** Always. Context matters.

## Typography-First Design
- Headline hierarchy: Article title > Section heads > Subheads
- Byline and date: near title, subtle but findable
- Drop caps: optional, sets editorial tone
- Block quotes: visually distinct, attributed

## Reading Experience
- Estimated reading time
- Progress indicator (subtle bar or percentage)
- Dark mode / reader mode toggle
- Share buttons (at top and bottom, not floating)
- Related articles at the end
- Comment section (if applicable, moderated)

## CMS for Authors
- Distraction-free writing mode
- Real-time preview
- Scheduled publishing
- Version history
- SEO preview (title, description, URL)
- Image management with alt text prompts

## Performance
- Critical CSS inlined for first render
- Lazy load below-fold images
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Font loading: display swap, preload critical fonts
