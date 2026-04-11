---
name: design-documentation
description: Documenting design decisions, maintaining design docs, and design knowledge management.
triggers: ["design documentation", "design docs", "knowledge management"]
---

# Design Documentation

## What to Document
| Document | Purpose | Update Frequency |
|----------|---------|------------------|
| Design principles | Guide decisions | Rarely |
| Design system docs | Component reference | Per release |
| Design decision records | Why we chose X over Y | Per decision |
| User research findings | Evidence base | Per study |
| Competitive analysis | Market awareness | Quarterly |
| Pattern library | Reusable solutions | As patterns emerge |

## Design Decision Record (DDR)
```
## DDR-[number]: [Title]

Date: [date]
Status: Proposed / Accepted / Deprecated / Superseded
Deciders: [who decided]

### Context
What situation prompted this decision?

### Decision
What we decided and why.

### Alternatives Considered
What else was considered and why it was rejected.

### Consequences
Positive and negative implications.
```

## Rules
1. Write for your future self (you'll forget context in 6 months)
2. Include the WHY, not just the WHAT
3. Link to evidence (research, data, user quotes)
4. Keep it findable (same tool as everything else, searchable)
5. Update or archive, never leave stale docs
