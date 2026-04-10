# EDC Hooks

Hooks fire automatically on file edits to catch quality issues in real time.

## Available Hooks

| Hook | Trigger | What It Checks |
|------|---------|---------------|
| check-ai-slop | .tsx/.jsx/.html/.css edits | Generic font usage, slop patterns, default layouts |
| check-writing-quality | .md/.mdx/.txt edits | AI tone markers, buzzwords, em-dash overuse |
| check-accessibility | .tsx/.jsx/.html edits | Contrast issues, missing alt text, focus states |
| check-token-consistency | .tsx/.jsx/.css edits | Raw hex values, non-token spacing, hardcoded fonts |

## Configuration

Copy `hooks.json` to your Claude Code settings or install via the plugin.

## Disabling Hooks

```bash
export EDC_DISABLED_HOOKS="check-ai-slop,check-writing-quality"
```
