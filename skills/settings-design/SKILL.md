---
name: settings-design
description: Settings page architecture, preference organization, toggle patterns, and configuration UX.
triggers: ["settings", "preferences", "configuration", "settings page"]
---

# Settings Design

## Organization

### Group by Domain
- Account (profile, email, password)
- Appearance (theme, language, density)
- Notifications (email, push, in-app)
- Privacy & Security (2FA, data, permissions)
- Integrations (connected apps, API)
- Billing (plan, payment, invoices)

### Navigation
- Sidebar with sections on desktop.
- Stacked list on mobile.
- Search within settings for 20+ options.

## Patterns
- **Toggles** for on/off binary choices. Apply immediately, no save button.
- **Radio groups** for mutually exclusive options (theme: light/dark/system).
- **Dropdowns** for 4+ options in a list.
- **Save button** only when changes are complex and need review before applying.

## Feedback
- Confirmation after saving: inline "Saved" text, not a modal.
- Preview for visual changes (theme, layout) before committing.
- Undo for accidental changes.
- Warning before destructive settings (delete account, revoke access).

## Anti-Patterns
- Settings that require a page reload to take effect (apply instantly).
- Nested settings pages more than 2 levels deep.
- Toggle labels that don't clearly state what on/off means.
- "Advanced settings" that contain commonly needed options.