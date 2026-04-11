---
name: settings-preferences
description: Settings page architecture, preference management, feature toggles, and account management UX.
triggers: ["settings", "preferences", "account settings", "configuration"]
---

# Settings & Preferences

## Architecture
- Group settings by category (Account, Notifications, Appearance, Privacy, Billing)
- Use a sidebar or tab navigation for categories
- Search within settings for large apps
- Show current values without opening each setting

## Rules
1. **Sensible defaults.** Most users never change settings. The defaults ARE the product for 80% of users.
2. **Save automatically** where possible (toggles, selects). "Save" buttons only for text inputs and multi-field forms.
3. **Confirm destructive changes.** Deleting account, revoking access, changing email.
4. **Show consequences.** "Turning this off means you won't receive..." not just a toggle.
5. **Undo where possible.** Deactivate instead of delete. Grace periods before permanent actions.

## Common Mistakes
- Burying important settings (notification preferences, privacy)
- Settings that require a restart to take effect (without telling the user)
- No way to reset to defaults
- Settings pages that look different from the rest of the product
- Toggle switches with unclear on/off states
