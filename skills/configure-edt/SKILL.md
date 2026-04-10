---
name: configure-edt
description: Interactive setup wizard for Everything Design Code. Guides installation and configuration of agents, skills, rules, and hooks.
triggers: ["setup edt", "configure edt", "install edt", "edt setup", "design code setup"]
---

# Configure EDT

## Interactive Setup

### Step 1: Identify Your Context
What type of work are you doing?
- **Product design** — Install: design-system-patterns, layout-principles, responsive-craft, design-spec-writing, product-framing
- **Brand design** — Install: brand-voice, color-systems, typography-craft, photography-direction, icon-systems
- **Strategic design** — Install: founder-communication, pitch-deck-patterns, case-study-writing, competitive-teardown, design-economics
- **Design leadership** — Install: design-critique, design-org-structure, all strategic skills
- **Full stack** — Install everything

### Step 2: Install Core (always)
These are always installed regardless of context:
- `anti-slop` (quality gate)
- `taste-audit` (automated checks)
- Rules: `common/taste.md`, `common/writing-quality.md`, `common/accessibility.md`
- Agents: `design-reviewer`, `copy-editor`

### Step 3: Install Context-Specific
Based on Step 1 selection, copy relevant skills and agents.

### Step 4: Configure Hooks
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "tool == 'Edit' && tool_input.file_path matches '\\.(tsx|jsx|html|css)$'",
        "hooks": [{"type": "command", "command": "node scripts/hooks/check-ai-slop.js"}]
      }
    ]
  }
}
```

### Step 5: Verify Installation
Run `node tests/run-all.js` to confirm all components are properly installed.

## Manual Installation

```bash
# Clone the repo
git clone https://github.com/0xDragoon/everything-design-taste.git
cd everything-design-taste

# Install dependencies
npm install

# Full install (all skills, agents, rules)
./install.sh --profile full

# Selective install
./install.sh --profile product-design
./install.sh --profile brand-design
./install.sh --profile strategic
./install.sh --profile leadership
```

## File Locations
- User-level: `~/.claude/` (applies to all projects)
- Project-level: `.claude/` (applies to current project only)
- Skills: `~/.claude/skills/` or `.claude/skills/`
- Rules: `~/.claude/rules/` or `.claude/rules/`
- Agents: `~/.claude/agents/` or `.claude/agents/`
