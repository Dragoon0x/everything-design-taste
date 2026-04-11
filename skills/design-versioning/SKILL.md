---
name: design-versioning
description: Design file versioning, change documentation, design history, and collaboration workflows.
triggers: ["design versioning", "version control", "design history"]
---

# Design Versioning

## File Naming
```
[Project]-[Page/Feature]-[Version]
Example: Dashboard-Analytics-v2.1

v1.0 = First complete version
v1.1 = Minor iteration
v2.0 = Major redesign
```

## Change Documentation
Every significant version change gets a note:
```
## v2.1 (2026-04-10)
- Updated chart colors for accessibility
- Added empty state for new users
- Simplified filter panel (removed 3 rarely-used filters)

## v2.0 (2026-03-28)
- Complete redesign of analytics dashboard
- New card-based layout replacing table view
- Added date range picker
```

## Branching Strategy
- **Main:** Current approved design
- **Exploration branches:** Named explorations (exploration/new-nav)
- **Feature branches:** Specific features in progress
- Merge back to main after approval
- Archive old explorations (don't delete)

## Collaboration Rules
1. One designer per page/flow at a time
2. Communicate when editing shared components
3. Pull latest before starting work
4. Review component changes with the team
5. Don't modify the design system without consensus
