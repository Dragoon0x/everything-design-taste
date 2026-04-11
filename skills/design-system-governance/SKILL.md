---
name: design-system-governance
description: Design system contribution models, decision-making processes, and system maintenance.
triggers: ["design system governance", "contribution model", "system maintenance"]
---

# Design System Governance

## Governance Models

### Centralized
- Dedicated design system team owns everything.
- Product teams request components through a queue.
- Pros: consistency, quality. Cons: bottleneck, disconnected from product needs.

### Federated
- Product teams contribute components.
- Design system team reviews, approves, and maintains.
- Pros: diverse input, faster. Cons: inconsistent quality without strong review.

### Community
- Anyone can contribute.
- RFC process for new components.
- Design system team as curators, not gatekeepers.

## Contribution Process
1. **Proposal:** Need identified, RFC written.
2. **Review:** Design system team + stakeholders evaluate.
3. **Build:** Contributor builds to system standards.
4. **QA:** Design + code review, accessibility audit.
5. **Document:** Usage guidelines, props, examples.
6. **Release:** Versioned, communicated, integrated.

## Health Metrics
- **Adoption rate:** % of product using system components.
- **Override rate:** Custom styles overriding system values.
- **Contribution rate:** Components contributed by product teams.
- **Bug rate:** Issues in system components vs custom.
- **Satisfaction:** Developer and designer NPS.