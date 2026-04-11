---
name: ab-testing-design
description: A/B test design, experiment setup, variant design, and statistical analysis for designers.
triggers: ["A/B testing", "experiment", "variant", "split test"]
---

# Ab Testing Design

## Experiment Design

### What to Test
- **High impact, easy to change:** Copy, color, layout, CTA.
- **Clear hypothesis:** "Changing the CTA from 'Sign Up' to 'Start Free Trial' will increase conversions because it communicates zero commitment."

### What Not to Test
- Preferences ("Do users prefer blue or green?").
- Everything at once (test one variable).
- Insignificant elements (button border-radius doesn't matter).

## Variant Design
- Control (A) = current experience.
- Variant (B) = one change with a hypothesis.
- Don't create wildly different variants (you won't know what caused the difference).

## Statistical Rigor
- **Sample size calculator** before starting.
- **Run for full weeks** (not 2 days — behavior varies by day).
- **95% confidence minimum** before declaring a winner.
- **Watch for novelty effects** (new things get more clicks initially).

## Reporting
- State the hypothesis.
- Show the numbers (conversion rate, confidence interval).
- State the winner with context.
- Document learnings for future tests.