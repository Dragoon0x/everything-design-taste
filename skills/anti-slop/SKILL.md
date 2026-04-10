---
name: anti-slop
description: Detecting and eliminating generic AI-generated aesthetics, writing patterns, and design defaults. The core quality gate for all EDC output.
triggers: ["ai slop", "generic design", "ai aesthetic", "default design", "cookie cutter", "taste check"]
---

# Anti-Slop Detection

The number one problem with AI-generated design and content is convergence toward the average. This skill identifies and eliminates it.

## Visual Slop Patterns

### Typography Defaults (flag and replace)
| Slop Font | Why It's Slop | Alternatives |
|-----------|--------------|-------------|
| Inter | AI default, zero personality | Satoshi, General Sans, Switzer, Cabinet Grotesk |
| Roboto | Android default, bland | Plus Jakarta Sans, DM Sans, Outfit |
| Arial/Helvetica | System fallback, lazy | Neue Haas Grotesk, Akkurat, Suisse |
| Open Sans | "Safe" choice, invisible | Source Sans 3, Nunito Sans, Figtree |
| Poppins | Overused geometric, trending slop | Lexend, Urbanist, Sora |
| Space Grotesk | AI favorite, oversaturated | JetBrains Mono (code), Geist, Fira Code |
| Montserrat | 2018 called | Clash Display, Manrope, Instrument Sans |

### Color Slop (flag on sight)
- Purple-to-blue gradient on white background
- Teal + coral accent combo
- Generic "tech blue" (#4A90D9 vicinity)
- Indigo primary with gray secondary
- Any gradient that looks like a Stripe marketing page clone

### Layout Slop (restructure)
- Hero section: big text, subtitle, two buttons, background image/gradient
- Three-column feature grid with icons
- Alternating left-right content blocks
- Testimonial carousel with headshots and quotes
- Footer with 4 link columns
- "Trusted by" logo bar

### Copy Slop (rewrite)
- "Designed for [broad audience]"
- "The all-in-one platform for..."
- "Powerful yet simple"
- "Join thousands of [users] who..."
- "Get started in minutes"
- "Built for teams of all sizes"

## Detection Process

1. **Scan** — Check output against known slop patterns above
2. **Score** — Count violations (0 = clean, 1-3 = mild, 4+ = full slop)
3. **Diagnose** — Identify root cause (lazy default? wrong reference? no creative brief?)
4. **Prescribe** — Provide specific alternatives that serve the same function with actual personality
5. **Verify** — Check replacement isn't just different slop

## The Test

Ask: "If I showed this to someone without context, could they tell if it was made by a human designer or an AI?" If the answer is AI, it's slop. Start over.

## What Anti-Slop Is NOT

- It's not anti-simplicity. Minimal design is great. Generic design is not.
- It's not anti-convention. Conventions exist for good reasons. But they should be chosen, not defaulted to.
- It's not chaos for chaos's sake. Weird isn't automatically good. Intentional is.
