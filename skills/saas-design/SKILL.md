---
name: saas-design
description: SaaS product design patterns including multi-tenant architecture, feature gating, and subscription management.
triggers: ["saas", "software as a service", "subscription", "multi-tenant"]
---

# Saas Design

## SaaS-Specific Patterns

### Feature Gating
- Show locked features with upgrade prompts, don't hide them.
- Lock icon + "Upgrade to Pro" tooltip.
- Don't tease with detailed views of features they can't use.

### Multi-Tenant
- Workspace/organization switcher in sidebar or header.
- Clear indication of current workspace.
- Member management: invite, roles, remove.
- Data isolation: never leak data between tenants.

### Subscription Management
- Current plan clearly displayed.
- Easy upgrade/downgrade path.
- Usage meters for metered features.
- Billing history with downloadable invoices.
- Cancellation flow: ask why, offer alternatives, confirm.

### Trial Experience
- Show days remaining prominently but not annoyingly.
- Remove friction during trial (don't require credit card upfront if possible).
- Clear conversion path as trial ends.