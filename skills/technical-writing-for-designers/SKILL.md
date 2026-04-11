---
name: technical-writing-for-designers
description: Writing design documentation, component specs, and design decision records for technical audiences.
triggers: ["technical writing", "design docs", "component specs"]
---

# Technical Writing for Designers

## Component Documentation
```
## ComponentName

### Purpose
One sentence: what problem this solves.

### When to Use
- Specific scenarios (not 'when appropriate')

### When NOT to Use
- Common misuse cases with alternatives

### Props/API
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Visual style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Component size |
| disabled | boolean | false | Disables interaction |

### States
- Default, Hover, Active, Focus, Disabled, Loading, Error

### Accessibility
- ARIA role and attributes
- Keyboard behavior
- Screen reader expectations

### Examples
[Code examples for common usage patterns]
```

## Design Decision Records (DDR)
```
## DDR-001: [Decision Title]

Date: YYYY-MM-DD
Status: Accepted / Proposed / Deprecated

### Context
What situation prompted this decision?

### Decision
What did we decide?

### Alternatives Considered
What else was considered and why was it rejected?

### Consequences
What are the implications of this decision?
```
