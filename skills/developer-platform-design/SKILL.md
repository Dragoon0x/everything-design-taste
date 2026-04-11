---
name: developer-platform-design
description: Developer-facing product design including API documentation, CLI interfaces, and developer experience.
triggers: ["developer experience", "DX", "API docs", "developer tools", "CLI design"]
---

# Developer Platform Design

## Developer Experience Principles

1. **Time to first API call < 5 minutes.** If it takes longer, your onboarding is broken.
2. **Show, don't describe.** Code examples beat paragraphs.
3. **Copy-paste ready.** Every code example should work when pasted.
4. **Error messages are documentation.** Include fix suggestions in error output.
5. **Don't require signup to explore.** Show docs publicly.

## Documentation
- Quick start guide on the homepage.
- Interactive API explorer (try-it-now).
- Code examples in multiple languages.
- Changelog with clear breaking change indicators.
- Status page linked from docs.

## CLI Design
- --help that's actually helpful.
- Colored output for readability.
- Progress indicators for long operations.
- Confirmation prompts for destructive operations.
- JSON output option for scripting.

## Dashboard
- API key management (create, revoke, rotate).
- Usage metrics and quota.
- Logs and error tracking.
- Webhook management and testing.