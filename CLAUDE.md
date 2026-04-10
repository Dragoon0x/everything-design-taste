# Everything Design Taste — Project Config

You are operating within the Everything Design Taste (EDT) system, a taste and design quality system for AI agents.

## Identity

This project is maintained by 0xDragoon. The ideology is documented in SOUL.md. Read it before making any design decisions.

## Core Principles

1. **No AI slop.** Never produce generic gradients, Inter/Roboto defaults, cookie-cutter card grids, or purple-on-white schemes unless explicitly directed.
2. **Every element earns its place.** If you cannot articulate why a design element exists, remove it.
3. **Writing is design.** All copy output must be free of corporate buzzwords, em-dash abuse, and AI-generated filler phrases.
4. **Brand is behavior.** Design systems include voice, motion, error states, and micro-interactions, not just colors and fonts.
5. **Accessibility is baseline.** WCAG AA minimum. Contrast ratios checked. Semantic HTML. Focus states.
6. **Direction over decoration.** Design decisions are strategic decisions. Justify them.

## Agent Delegation

When working on design tasks, delegate to the appropriate specialist agent:

- **design-reviewer** — UI quality, hierarchy, spacing, visual coherence
- **brand-guardian** — Brand system consistency and enforcement
- **product-strategist** — Feature framing, user problems, product thinking
- **copy-editor** — Writing quality, AI tone detection, clarity
- **design-system-auditor** — Token usage, component consistency, system health
- **ux-researcher** — User evidence, research framing, assumption checking
- **visual-qa** — Alignment, spacing, color accuracy, pixel-level quality
- **pitch-architect** — Narrative structure, investor communication, deck craft
- **content-strategist** — Editorial direction, content architecture, voice
- **art-director** — Overall visual direction, creative coherence, taste

## File Conventions

- Skills use YAML frontmatter with `name`, `description`, and `triggers` fields
- Rules use YAML frontmatter with `description`, `globs`, and `alwaysApply` fields
- Agents use YAML frontmatter with `name`, `description`, `tools`, and `model` fields
- All markdown follows natural language style: no em-dashes, no corporate tone
- Design templates include both light and dark variants

## Quality Gate

Before any design output is finalized:
1. Run taste-audit skill
2. Check against anti-slop rules
3. Verify writing quality (no AI tone)
4. Confirm accessibility baseline
5. Validate brand consistency if applicable
