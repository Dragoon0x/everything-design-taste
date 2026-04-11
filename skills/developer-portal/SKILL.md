---
name: developer-portal
description: API documentation, developer portal design, code examples, SDK documentation, and developer experience.
triggers: ["API docs", "developer portal", "SDK documentation", "developer experience"]
---

# Developer Portal Design

## Documentation Structure
- Getting started guide (0 to first API call in 5 minutes)
- Authentication section (clear, with working examples)
- Endpoint reference (complete, searchable)
- Code examples in multiple languages
- Error reference (every error code explained)
- Changelog (what changed, when, migration notes)

## API Reference
- Endpoint: method + path (GET /api/v1/users)
- Description: what it does in one sentence
- Parameters: name, type, required/optional, description
- Request example: complete, copy-paste ready
- Response example: with all fields annotated
- Error responses: every possible error
- Try it: interactive API console

## Code Examples
- Multiple languages (min: cURL, Python, JavaScript)
- Complete and runnable (not snippets that need context)
- Copy button on every code block
- Syntax highlighting
- Show expected output

## Design Principles
- Dark mode default (developers prefer it)
- Monospace font for code, sans-serif for prose
- Left sidebar navigation with search
- Full-page search with instant results
- Versioned docs (v1, v2 with selector)
- Print-friendly / export to PDF

## Developer Experience
- Onboarding: signup → API key → first request in under 5 minutes
- Sandbox/test environment
- Rate limit dashboard
- Status page link (is the API up?)
- Support channels (GitHub issues, Discord, email)
