---
name: error-page-design
description: Error pages (404, 500, 403), error states, and graceful failure design.
triggers: ["error page", "404", "500", "error state", "error design"]
---

# Error Page Design

## Error Page Hierarchy

### 404 — Not Found
- Acknowledge the error clearly: "This page doesn't exist."
- Offer: Search bar, popular pages, homepage link.
- Don't blame the user.
- Optional: brand-appropriate illustration.

### 500 — Server Error
- Acknowledge without technical jargon: "Something went wrong on our end."
- Offer: Retry button, status page link, support contact.
- Log the error automatically.
- Don't say "We're working on it" unless you actually are.

### 403 — Forbidden
- Explain why: "You don't have permission to view this page."
- Offer: Login link, request access button, contact admin.

### Offline
- Detect offline state.
- Show cached content if available.
- "You're offline. Some features aren't available."
- Auto-retry when connection returns.

## Principles
1. Every error needs: What happened + What to do next.
2. Use the brand voice. Error pages are touchpoints.
3. Never show stack traces or error codes to users.
4. Include a way to report the issue.