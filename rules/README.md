# EDC Rules

Rules are always-follow guidelines that shape every design decision. They are organized into common (universal) and domain-specific directories.

## Installation

```bash
# Copy common rules (always)
cp -r rules/common ~/.claude/rules/

# Copy domain-specific rules as needed
cp -r rules/react-ui ~/.claude/rules/
cp -r rules/figma ~/.claude/rules/
cp -r rules/brand ~/.claude/rules/
```

## Structure
- `common/` — Universal design principles (always install)
- `react-ui/` — React and Tailwind UI rules
- `figma/` — Figma file organization rules
- `brand/` — Brand system enforcement rules
