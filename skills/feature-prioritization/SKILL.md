---
name: feature-prioritization
description: Feature prioritization frameworks, scoring models, roadmap design, and saying no to features.
triggers: ["feature prioritization", "roadmap", "backlog", "feature scoring"]
---

# Feature Prioritization

## Frameworks

### RICE Score
- **Reach:** How many users affected per quarter?
- **Impact:** How much will it move the needle? (3=massive, 2=high, 1=medium, 0.5=low)
- **Confidence:** How sure are we? (100%, 80%, 50%)
- **Effort:** Person-months to build
- Score = (Reach × Impact × Confidence) / Effort

### Impact vs Effort Matrix
```
           Low Effort    High Effort
High       Quick Wins     Big Bets
Impact     (do first)     (plan carefully)

Low        Fill-ins       Avoid
Impact     (if time)      (time sinks)
```

### MoSCoW
- **Must have:** Product doesn't work without it
- **Should have:** Important but not critical
- **Could have:** Nice but can live without
- **Won't have:** Explicitly out of scope (this matters)

## Saying No
- 'Not now' is better than 'no' (less confrontational)
- Explain the tradeoff: 'If we build X, we delay Y by 3 weeks'
- Ask: 'What would you cut to make room for this?'
- Document the decision and reasoning (prevents re-litigation)
