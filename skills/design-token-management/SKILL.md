---
name: design-token-management
description: Advanced design token workflows, token transformation, and multi-platform token distribution.
triggers: ["design tokens", "token management", "style dictionary", "token pipeline"]
---

# Design Token Management

## Token Pipeline

### Source of Truth
- Define tokens in JSON/YAML (platform-agnostic).
- Or define in Figma Variables and export.
- Single source, multiple outputs.

### Transformation
Tokens → Style Dictionary → Platform outputs:
- CSS custom properties (web)
- Swift/Kotlin values (mobile)
- JSON (documentation, tooling)

### Token Structure
```json
{
  "color": {
    "brand": {
      "primary": { "value": "#2563EB", "type": "color" },
      "secondary": { "value": "#7C3AED", "type": "color" }
    },
    "semantic": {
      "text": {
        "primary": { "value": "{color.neutral.900}", "type": "color" },
        "secondary": { "value": "{color.neutral.600}", "type": "color" }
      }
    }
  }
}
```

### Versioning
- Semantic versioning for token packages.
- Breaking changes: removing tokens, renaming tokens.
- Non-breaking: adding tokens, changing values.
- Changelog for every token update.

### Multi-Brand
- Base tokens shared across brands.
- Brand-specific overrides as separate token files.
- Theme tokens (light/dark) as separate layers.
- Compose: base + brand + theme = final token set.