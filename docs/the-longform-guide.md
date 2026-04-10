# The Longform Guide to Everything Design Taste

## Table of Contents

1. Philosophy and Ideology
2. Agent Architecture
3. Skill Deep Dives
4. Rules System
5. Hook Pipeline
6. Design Templates
7. Context Switching
8. Customization
9. Building Your Own Skills
10. Contributing

---

## 1. Philosophy and Ideology

Read SOUL.md first. Everything in this system flows from those beliefs.

The core tension: AI agents are trained on the average of everything. The average of everything is mediocre. This system introduces bias toward quality, intentionality, and craft.

We do this through three mechanisms:
- **Rules** that prevent the worst patterns (anti-slop, AI tone detection)
- **Skills** that encode expert knowledge (typography, color, layout, product thinking)
- **Agents** that apply judgment (design review, brand checking, copy editing)

## 2. Agent Architecture

Agents are specialists. Each has a narrow focus and a specific output format. They don't try to do everything.

**When to use which agent:**

| Situation | Agent | Why |
|-----------|-------|-----|
| Reviewing a UI design | design-reviewer | Comprehensive design quality check |
| Checking brand compliance | brand-guardian | Token, voice, and pattern verification |
| Framing a feature | product-strategist | User problem and business outcome framing |
| Editing copy | copy-editor | AI tone detection and language quality |
| Auditing a design system | design-system-auditor | Token, component, and documentation health |
| Validating assumptions | ux-researcher | Evidence-based decision support |
| Pixel-level QA | visual-qa | Alignment, spacing, color, responsive checks |
| Structuring a pitch | pitch-architect | Narrative structure for investors and stakeholders |
| Content architecture | content-strategist | Editorial direction and content systems |
| Creative direction | art-director | Overall visual coherence and aesthetic vision |

## 3. Skill Deep Dives

Skills are domain knowledge packaged for reuse. Each skill follows a consistent format:

```yaml
---
name: skill-name
description: What this skill covers
triggers: [when to activate]
---
```

**Core skills** (install these first):
- anti-slop: The foundation. Detecting and eliminating generic AI patterns.
- typography-craft: Font selection, type scale, hierarchy, pairing.
- color-systems: Palette generation, semantic tokens, dark mode, accessibility.

**Product skills** (for founders and PMs):
- product-framing: JTBD, positioning, feature narratives
- pitch-deck-patterns: Slide design, narrative structure, data presentation
- competitive-teardown: Systematic competitor analysis
- design-economics: ROI of design, measuring impact

**System skills** (for design leaders):
- design-system-patterns: Token architecture, component design, theming
- design-org-structure: Team models, hiring, culture
- design-spec-writing: Specs that engineers want to read

## 4. Rules System

Rules are always-on constraints. They fire on every output.

Rules are organized into directories:
- `common/` — Universal principles (always install)
- `react-ui/` — React/Tailwind specific patterns
- `figma/` — Figma file organization
- `brand/` — Brand system enforcement

Install by copying to your Claude Code rules directory:
```bash
cp -r rules/common ~/.claude/rules/
cp -r rules/react-ui ~/.claude/rules/   # if using React
```

## 5. Hook Pipeline

Hooks fire automatically on tool events (file edits, writes).

| Hook | What It Catches | When It Fires |
|------|----------------|---------------|
| check-ai-tone | AI language patterns | On any text edit |
| check-contrast | Potential WCAG violations | On CSS/HTML edits |
| check-consistency | Hardcoded values that should be tokens | On CSS/component edits |
| check-naming | Generic component names | On React component edits |

## 6. Design Templates

Pre-built design systems for common aesthetics:
- **minimal-saas** — Clean, functional, Plus Jakarta Sans
- **luxury-brand** — Dark, premium, Cormorant Garamond + gold accents
- **retro-computing** — Terminal-inspired, Space Mono, window chrome
- **editorial-magazine** — Print-inspired, Playfair Display, serif-forward
- **developer-tool** — Dark, dense, Geist Sans/Mono

Use as starting points. Customize aggressively.

## 7. Context Switching

Load a context to shift the agent's focus:
- `product-thinking` — Frame everything as user problems
- `brand-review` — Evaluate against brand system
- `design-critique` — Structured feedback mode
- `founder-mode` — Ship fast, cut scope, prove the idea

## 8. Customization

This system is opinionated by design. But your opinions might differ.

**To customize:**
1. Fork the repo
2. Edit rules to match your standards
3. Add skills for your domain
4. Modify agents to match your review style
5. Create design templates for your brand

**To extend:**
1. Create a new skill in `skills/your-skill-name/SKILL.md`
2. Follow the YAML frontmatter format
3. Add triggers that describe when the skill should activate
4. Submit a PR if it's useful to others

## 9. Building Your Own Skills

A skill needs three things:
1. **Clear scope** — What does this skill cover? What does it NOT cover?
2. **Actionable knowledge** — Not theory. Specific patterns, rules, and examples.
3. **Triggers** — When should this skill activate?

Template:
```yaml
---
name: your-skill-name
description: One sentence describing what this skill does
triggers: ["keyword1", "keyword2", "when to use phrase"]
---

# Skill Title

## When to Use
[Specific situations]

## The Knowledge
[Patterns, rules, examples, frameworks]

## Common Mistakes
[What to avoid]
```

## 10. Contributing

See CONTRIBUTING.md. The short version: fork, build something useful, submit a PR.
