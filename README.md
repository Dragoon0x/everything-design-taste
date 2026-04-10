# Everything Design Taste

> **A taste system for AI agents.** Skills, agents, rules, and hooks that turn generic AI output into work with genuine design quality.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-22-green.svg)](#whats-inside)
[![Agents](https://img.shields.io/badge/agents-10-orange.svg)](#whats-inside)
[![Rules](https://img.shields.io/badge/rules-8-red.svg)](#whats-inside)

---

Not a style guide. Not a component library. A system that gives AI agents something resembling taste, so they stop producing the visual equivalent of elevator music.

Works with **Claude Code**, **Cursor**, **Codex**, and any AI agent that reads markdown.

---

## The Guides

| | |
|---|---|
| [The Shortform Guide](docs/the-shortform-guide.md) | [The Longform Guide](docs/the-longform-guide.md) |
| Philosophy, quick start, profiles. **Read this first.** | Deep dives on agents, skills, rules, hooks, customization. |

| |
|---|
| [The Taste Guide](docs/the-taste-guide.md) |
| What taste is, how to develop it, how to encode it for AI. |

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/0xDragoon/everything-design-taste.git
cd everything-design-taste

# Install with a profile
./install.sh --profile standard

# Or install everything
./install.sh --profile full
```

That's it. Your AI agent now has opinions about typography, a zero-tolerance policy for "In today's fast-paced world," and a scoring system for taste.

---

## What Problem This Solves

AI agents produce the statistical average of everything they've seen. The average of everything is mediocre.

Left to their own devices, AI agents will generate:
- Purple gradients on white backgrounds
- Inter font for everything
- 3-column card grids with rounded corners and drop shadows
- "Get Started" buttons that don't say what you're starting
- Copy that reads like a LinkedIn post written by a committee

This system fights that with specific, opinionated, actionable knowledge about what makes design work.

---

## What's Inside

```
everything-design-taste/
├── agents/              # 10 specialized design/product subagents
├── skills/              # 22 domain knowledge workflows
├── rules/               # 8 always-on quality constraints
│   ├── common/          # Universal principles (always install)
│   ├── react-ui/        # React/Tailwind specific
│   ├── figma/           # Figma file organization
│   └── brand/           # Brand system enforcement
├── hooks/               # 4 automated quality gate scripts
├── contexts/            # 4 mode-switching contexts
├── design-templates/    # 5 ready-to-use design systems
├── examples/            # 4 project configuration examples
├── docs/                # 3 comprehensive guides
├── scripts/             # Hook implementations and utilities
├── tests/               # Validation suite
├── SOUL.md              # The ideology document
├── CLAUDE.md            # Project-level AI config
└── install.sh           # Profile-based installer
```

### Agents

| Agent | What It Does |
|-------|-------------|
| **design-reviewer** | Reviews UI for taste, hierarchy, spacing, and coherence. Catches AI slop. |
| **brand-guardian** | Enforces brand system consistency across visual and verbal output. |
| **product-strategist** | Frames features as user problems. Connects design to business outcomes. |
| **copy-editor** | Catches AI tone, corporate speak, and dead language. Makes text sound human. |
| **design-system-auditor** | Audits token consistency, component coverage, and documentation quality. |
| **ux-researcher** | Separates evidence from assumption. Structures research questions. |
| **visual-qa** | Pixel-level checks for alignment, spacing, color, responsive behavior. |
| **pitch-architect** | Structures narratives for investors, stakeholders, and founders. |
| **content-strategist** | Editorial direction, content architecture, and voice systems. |
| **art-director** | Overall visual direction, creative coherence, and aesthetic vision. |

### Skills

| Category | Skills |
|----------|--------|
| **Core** | anti-slop, design-system-patterns, typography-craft, color-systems, layout-principles |
| **Brand** | brand-voice, photography-direction, icon-systems |
| **Product** | product-framing, case-study-writing, pitch-deck-patterns, founder-communication |
| **Craft** | design-critique, motion-principles, responsive-craft |
| **Strategy** | competitive-teardown, design-economics, design-org-structure |
| **System** | design-spec-writing, web3-design-patterns, taste-audit, configure-edt |

### Rules (Always-On Quality Gates)

| Rule | What It Enforces |
|------|-----------------|
| **taste** | Every element justifies its existence. Direction over decoration. |
| **hierarchy** | One primary action per page. Visual weight communicates importance. |
| **anti-ai-aesthetic** | No Inter defaults, no purple gradients, no generic card grids. |
| **writing-quality** | Front-load the point. Cut filler. Be specific. No nominalizations. |
| **accessibility** | WCAG AA contrast. Semantic HTML. Focus states. Touch targets. |
| **intentionality** | No defaults. Every choice is a choice, not a fallback. |
| **component-styling** | CSS variables for tokens. State coverage. Skeleton loading. |
| **consistency** | Brand token enforcement. Visual language coherence. |

### Hooks

| Hook | Trigger | What It Catches |
|------|---------|----------------|
| **check-ai-tone** | Text edits | "Leverage," "synergy," "In today's fast-paced world" |
| **check-contrast** | CSS/HTML edits | Potential WCAG contrast violations |
| **check-consistency** | Component edits | Hardcoded values that should be design tokens |
| **check-naming** | React components | Generic names like "Component," "Wrapper," "Container" |

### Design Templates

| Template | Aesthetic | Key Traits |
|----------|-----------|------------|
| **minimal-saas** | Clean, functional | Plus Jakarta Sans, blue accent, light default |
| **luxury-brand** | Dark, premium | Cormorant Garamond, gold accent, sharp corners |
| **retro-computing** | Terminal-inspired | Space Mono, window chrome, borders as structure |
| **editorial-magazine** | Print-inspired | Playfair Display, serif-forward, high contrast |
| **developer-tool** | Dense, precise | Geist Sans/Mono, dark default, information-dense |

---

## Installation Profiles

| Profile | Best For | Skills | Rules | Agents |
|---------|----------|--------|-------|--------|
| **minimal** | Getting started | 3 | common | 2 |
| **standard** | Most users | 8 | common + react-ui | 4 |
| **full** | Design leaders | 22 | all | 10 |
| **product** | Founders, PMs | 7 | common | 3 |

```bash
./install.sh --profile minimal     # Start small
./install.sh --profile standard    # Recommended
./install.sh --profile full        # Everything
./install.sh --profile product     # Product/strategy focus
```

### Custom Installation

```bash
# Pick specific components
./install.sh --skills anti-slop,typography-craft --rules common --agents design-reviewer,copy-editor
```

### Manual Installation

```bash
# Copy only what you need
cp -r skills/anti-slop ~/.claude/skills/
cp -r rules/common ~/.claude/rules/
cp agents/design-reviewer.md ~/.claude/agents/
```

---

## Which Agent Should I Use?

| I want to... | Use this agent |
|-------------|---------------|
| Review a UI design | design-reviewer |
| Check brand compliance | brand-guardian |
| Frame a feature properly | product-strategist |
| Fix AI-sounding copy | copy-editor |
| Audit my design system | design-system-auditor |
| Validate my assumptions | ux-researcher |
| Do pixel-level QA | visual-qa |
| Structure a pitch deck | pitch-architect |
| Design content systems | content-strategist |
| Set creative direction | art-director |

### Common Workflows

**Starting a new product:**
```
1. product-strategist → Frame the problem and user
2. art-director → Set the creative direction
3. design-reviewer → Review initial designs
4. copy-editor → Clean up all text
5. taste-audit skill → Final quality gate
```

**Redesigning an existing product:**
```
1. competitive-teardown skill → Understand the landscape
2. design-system-auditor → Audit current system health
3. art-director → Set new direction
4. design-reviewer → Review iterations
5. visual-qa → Pixel-level polish
```

**Building a pitch deck:**
```
1. product-strategist → Frame the narrative
2. pitch-architect → Structure the deck
3. copy-editor → Tighten all language
4. art-director → Visual direction for slides
```

---

## The Taste Audit

The `taste-audit` skill provides a structured scoring system that evaluates design output across five dimensions:

| Dimension | Weight | What It Measures |
|-----------|--------|-----------------|
| Intentionality | 30% | Is every element deliberate? |
| Craft Quality | 25% | Is execution precise and consistent? |
| AI Slop Check | 20% | Are generic AI patterns present? |
| Writing Quality | 15% | Does the copy sound human? |
| Accessibility | 10% | Are baseline standards met? |

**Rating Scale:**
- **4.5-5.0:** Exceptional. Ship with pride.
- **4.0-4.4:** Strong. Ship, polish later.
- **3.5-3.9:** Acceptable. Ship if timeline demands.
- **3.0-3.4:** Below bar. Revise before shipping.
- **Below 3.0:** Not ready. Significant rework needed.

---

## Running Tests

```bash
npm test
```

Validates all agents, skills, rules, hooks, templates, examples, and AI tone detection patterns.

---

## Customization

This system is opinionated by design. But it's your system to modify.

1. **Fork the repo**
2. **Edit rules** to match your standards
3. **Add skills** for your domain
4. **Modify agents** to match your review style
5. **Create design templates** for your brand
6. **Submit a PR** if your contribution would help others

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Philosophy

Read [SOUL.md](SOUL.md) for the full ideology. The short version:

- **Design is direction, not decoration.** Every design decision is a strategic decision.
- **Taste is a skill, not a gift.** It can be learned, encoded, and systematized.
- **AI produces averaged-out slop by default.** This system fights it.
- **Every element earns its place.** Nothing exists because it's expected.
- **Writing quality is design quality.** Bad copy ruins good design.
- **Honest over polished.** Authenticity is a design principle.

---

## FAQ

**Does this work with Cursor / Codex / other tools?**
Yes. The agents, skills, and rules are markdown files. Any tool that reads markdown instructions can use them. Copy the relevant files to your tool's config directory.

**Can I use only some components?**
Yes. Use manual installation and copy only what you need. Each component is independent.

**Is this only for web design?**
The core principles (taste, hierarchy, anti-slop, writing quality) apply to any design context. Some skills are web-specific (responsive-craft, react-ui rules) but most are universal.

**How do I add my own skills?**
Create a directory in `skills/your-skill-name/` with a `SKILL.md` file. Follow the YAML frontmatter format. See [docs/the-longform-guide.md](docs/the-longform-guide.md) for details.

**My team has different design standards. Can I override the rules?**
Yes. Fork the repo and modify `rules/` to match your standards. Or disable specific rules by removing them from your installation.

---

## Contributing

Contributions welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

Ideas for contributions:
- Skills for specific domains (mobile design, data visualization, design for print)
- Agents for specific review contexts (motion review, content accessibility)
- Design templates for additional aesthetics
- Rules for additional tech stacks (Vue, Svelte, Flutter)
- Translations

---

## License

MIT. Use freely, modify as needed, contribute back if you can.

---

**By [0xDragoon](https://github.com/0xDragoon). Star this repo if it helps. Read the guides. Build something with taste.**
