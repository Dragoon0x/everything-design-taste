---
name: design-for-email
description: HTML email design constraints, email client compatibility, and email-specific patterns.
triggers: ["email design", "HTML email", "email template", "email constraints"]
---

# Design for Email

## Technical Constraints
- Use tables for layout (flexbox/grid not supported)
- Inline CSS (many clients strip `<style>` tags)
- Max width: 600px
- No JavaScript
- No video (use GIF or static image with play button)
- Background images: limited support (use `bgcolor` fallback)

## Client-Specific Issues
| Client | Major Issue |
|--------|-------------|
| Outlook (Windows) | Uses Word rendering engine. Tables only. |
| Gmail | Strips `<style>` in non-Google-account views |
| Apple Mail | Most capable, supports most CSS |
| Yahoo | Strips some CSS, adds its own |

## Design Rules
1. Single column layout (reliable everywhere)
2. System fonts + web-safe fallbacks
3. Button: use a padded table cell with background color (not CSS button)
4. Images: always set width, provide alt text
5. Dark mode: test appearance, some clients auto-invert
6. Preview text: first 80-100 characters visible in inbox

## Testing
- Test in: Gmail (web), Outlook (desktop), Apple Mail, mobile Gmail, mobile Mail
- Tools: Litmus, Email on Acid
- Send test emails to yourself on multiple devices
