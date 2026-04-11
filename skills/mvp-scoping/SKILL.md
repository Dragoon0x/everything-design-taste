---
name: mvp-scoping
description: Defining minimum viable products, feature scoping, launch criteria, and iterative design.
triggers: ["MVP", "minimum viable product", "feature scoping", "launch criteria"]
---

# MVP Scoping

## What MVP Actually Means
Not the worst possible version. The smallest version that proves the core hypothesis.

## Scoping Framework
1. **What's the hypothesis?** 'Users will [behavior] because [reason]'
2. **What's the minimum to test it?** Strip to the core value proposition
3. **What can be manual?** Automate later, validate first (Wizard of Oz)
4. **What can be borrowed?** Use existing tools/services, don't build infrastructure
5. **What can wait?** Settings, admin, edge cases, polish

## Feature Triage
```
CORE: Without this, the hypothesis can't be tested
  → Build it

SUPPORTING: Makes the core better but isn't essential
  → Build only if fast (<2 days)

NICE: Users might want it eventually
  → Cut it. Add after validation.

PREMATURE: Scaling, admin, optimization
  → Definitely cut it.
```

## Launch Criteria
- Core user flow works end-to-end
- Critical errors handled gracefully
- Performance is acceptable (not optimized, acceptable)
- One complete use case is satisfying
- Measurement is in place (can you tell if it's working?)

## Post-MVP
- Watch what users actually do (not what they said they'd do)
- Measure the hypothesis metric
- Iterate based on evidence, not feature requests
