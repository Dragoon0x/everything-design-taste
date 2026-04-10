# Contributing to Everything Design Taste

Contributions are welcome. This project is meant to be a community resource for anyone who cares about design quality in AI-assisted workflows.

## What We Need

### Skills
Domain knowledge packaged for reuse. If you're an expert in something design-related and you find yourself repeating the same guidance, it should be a skill.

Requirements:
- Create a directory in `skills/your-skill-name/`
- Include a `SKILL.md` with YAML frontmatter (name, description, triggers)
- Content should be actionable, not theoretical
- Include examples, patterns, and anti-patterns

### Agents
Specialized reviewers with clear scope and output format.

Requirements:
- Create a markdown file in `agents/your-agent.md`
- Include YAML frontmatter (name, description, tools, model)
- Define what the agent checks, how it gives feedback, and its output format

### Rules
Always-on constraints that prevent common quality failures.

Requirements:
- Add to the appropriate directory in `rules/`
- Include YAML frontmatter (description, globs, alwaysApply)
- Each rule should be one clear, enforceable statement

### Design Templates
Pre-built design systems for common aesthetics.

Requirements:
- Create a directory in `design-templates/your-template/`
- Include a `DESIGN.md` with color tokens, typography, spacing, radius, motion, and personality description

## How to Contribute

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-contribution`
3. Make your changes
4. Run tests: `npm test`
5. Submit a PR with a clear description of what you added and why

## Quality Standards

- No AI-generated filler content. Write like a person.
- No buzzwords. Plain language.
- Be specific. "Improve design quality" is too vague. "Detect and flag hardcoded hex values that should be design tokens" is specific.
- Test your contribution. Does it actually help?

## Code of Conduct

Be respectful. Be constructive. Be specific. Design is subjective, but quality isn't. Focus feedback on the work, not the person.
