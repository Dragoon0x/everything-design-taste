---
name: technical-writing
description: Technical documentation patterns including API docs, developer guides, and reference documentation.
triggers: ["technical writing", "documentation", "API docs", "developer docs"]
---

# Technical Writing

## Documentation Structure

### Getting Started (Quickstart)
- Goal: first success in under 5 minutes.
- Prerequisites listed upfront.
- Copy-paste commands that work.
- Expected output shown.

### Guides (How-To)
- Task-oriented. "How to deploy to production."
- Step-by-step with numbered instructions.
- One task per guide.
- Link to related guides at the end.

### Reference
- Every function/endpoint/parameter documented.
- Type information, defaults, constraints.
- Code examples for common use cases.
- Searchable.

### Concepts (Explanation)
- Why things work the way they do.
- Architecture decisions.
- Mental models for understanding the system.

## Writing Rules
- Present tense ("The function returns..." not "The function will return...").
- Active voice ("Call the API" not "The API should be called").
- Code examples that compile and run.
- Version everything. Show which version docs apply to.