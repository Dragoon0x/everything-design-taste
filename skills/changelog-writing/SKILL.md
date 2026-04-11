---
name: changelog-writing
description: Changelog and release notes writing patterns including versioning communication and user-facing updates.
triggers: ["changelog", "release notes", "update notes", "version notes"]
---

# Changelog Writing

## Changelog Format

### User-Facing
- Lead with benefit: "You can now export to PDF" not "Added PDF export module."
- Group: New, Improved, Fixed.
- Skip internal changes users don't care about.
- Link to docs for new features.

### Developer-Facing
- Follow Keep a Changelog format.
- Group: Added, Changed, Deprecated, Removed, Fixed, Security.
- Reference issue/PR numbers.
- Highlight breaking changes prominently.

## Semantic Versioning Communication
- **Major (2.0):** "Big update" — migration guide required.
- **Minor (1.5):** "New features" — backwards compatible.
- **Patch (1.5.1):** "Bug fixes" — no new features.

## Anti-Patterns
- "Various bug fixes and performance improvements" — be specific.
- Technical jargon in user-facing notes.
- No date on entries.
- Changelog that's just git commit messages.