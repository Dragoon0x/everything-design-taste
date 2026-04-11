---
name: design-system-migration
description: Migrating between design systems, component replacement strategies, and gradual adoption.
triggers: ["design system migration", "component migration", "system migration"]
---

# Design System Migration

## Migration Strategy

### Strangler Fig Pattern
1. New components built in new system.
2. Old components wrapped with new system API.
3. Gradually replace wrappers with native new components.
4. Old system removed when no references remain.

### Page-by-Page
1. Identify the least complex page.
2. Migrate all components on that page to new system.
3. Move to next page in complexity order.
4. Each page is fully migrated before moving on.

## Migration Checklist
- [ ] Inventory all existing components and their usage count.
- [ ] Map old components to new components.
- [ ] Identify gaps (components in old system with no new equivalent).
- [ ] Build missing components before starting migration.
- [ ] Create a migration guide for each component.
- [ ] Visual regression tests for migrated pages.
- [ ] Deprecation warnings on old components.

## Timing
- Never migrate during a feature sprint.
- Dedicate sprints specifically for migration.
- Celebrate milestones (10% migrated, 50%, 90%).
- Track migration progress publicly.