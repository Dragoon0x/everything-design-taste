---
description: "Figma file organization and naming conventions"
globs: ["**/*.fig"]
alwaysApply: false
---

# Figma File Structure Rules

1. Page naming: use clear categories (Components, Patterns, Pages, Archive, Sandbox).
2. Frame naming: descriptive and hierarchical (e.g., "Login / Default", "Login / Error", "Login / Loading").
3. Layer naming: rename every layer. No "Frame 847" or "Group 12" in shipped files.
4. Auto-layout: use it everywhere. Absolute positioning only when auto-layout genuinely cannot handle the case.
5. Components: create for anything used more than twice. Use variants for states.
6. Styles: define text styles, color styles, and effect styles. Don't use raw values.
7. Variables: use Figma variables for spacing, colors, and breakpoints when available.
8. Handoff: include a page with specs, states, edge cases, and interaction notes.
9. Prototype: connect key flows so engineers can click through behavior.
10. Version history: meaningful descriptions for each version save.
