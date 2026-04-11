---
name: email-design
description: Email template design, responsive email patterns, and email deliverability considerations.
triggers: ["email design", "email template", "newsletter", "email marketing"]
---

# Email Design

## Email Design Constraints
- Table-based layout (CSS grid/flexbox not universally supported).
- Inline CSS (many clients strip <style> tags).
- Max width: 600px.
- Images: hosted externally, alt text required (images blocked by default).
- Fonts: web fonts unreliable. Use web-safe stacks.

## Structure
1. **Pre-header text** (preview in inbox, 40-130 chars).
2. **Header** (logo, minimal navigation).
3. **Hero** (primary message/image).
4. **Body** (content blocks, alternating layout).
5. **CTA** (primary action button, min 44px height).
6. **Footer** (unsubscribe link required by law, contact info).

## Button Design
- HTML buttons, not image buttons (images may be blocked).
- Minimum 44px height, full-width on mobile.
- High contrast, rounded corners via border-radius.
- Bulletproof button technique for Outlook.

## Testing
- Test in: Gmail, Outlook, Apple Mail, Yahoo Mail, mobile clients.
- Dark mode: test color rendering.
- Images-off: ensure content is readable.
- Links: test every link.