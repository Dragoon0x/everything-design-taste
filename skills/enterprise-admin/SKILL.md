---
name: enterprise-admin
description: Enterprise admin panel design, role management, audit logs, organizational hierarchy, and enterprise UX patterns.
triggers: ["enterprise admin", "admin dashboard", "role management", "audit log"]
---

# Enterprise Admin Design

## User Management
- User list: name, email, role, status, last active
- Bulk actions: invite, deactivate, change role
- Search and filter by role, department, status
- User detail: profile, permissions, activity, sessions
- Impersonate user (for support debugging)

## Role & Permission Management
- Role list with permission count
- Role detail: grouped permissions with toggles
- Custom role creation from template
- Permission inheritance (org-level, team-level, project-level)
- Visual permission matrix (roles × permissions)

## Audit Log
- Chronological event list
- Filter: user, action type, resource, date range
- Event detail: who, what, when, where, before/after values
- Export as CSV/JSON
- Retention policy display

## Organization
- Org hierarchy visualization (tree or nested list)
- Department/team management
- SSO/SAML configuration
- Domain verification
- Billing per department or centralized

## Design Principles
- Information density appropriate for admin power users
- Confirmation for destructive actions (with specific detail of what's affected)
- Undo where possible
- Clear feedback on bulk operations (success count, failure reasons)
- Keyboard shortcuts for frequent admin tasks
