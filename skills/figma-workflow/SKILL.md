---
name: figma-workflow
description: Advanced Figma workflows, auto-layout mastery, component architecture, and team collaboration.
triggers: ["Figma workflow", "Figma tips", "auto-layout", "Figma components"]
---

# Figma Workflow

## Auto-Layout Mastery
- Use auto-layout on everything (not just buttons)
- Nest auto-layouts for complex components
- Absolute position for overlapping elements within auto-layout
- Hug contents vs fill container: understand the difference

## Component Architecture
1. **Atoms:** Smallest elements (icon, text, badge)
2. **Molecules:** Combined atoms (input field = label + input + helper text)
3. **Organisms:** Combined molecules (form = multiple input fields + button)
4. **Templates:** Page layouts using organisms

## Naming Convention
- Component: Category / Name / Variant
- Example: Button / Primary / Default, Button / Primary / Hover
- Layers: Descriptive names, never 'Frame 234'

## Collaboration
- Branch for major explorations
- Comments for async feedback
- Dev mode for engineering handoff
- Design tokens via variables
- Regular library updates with changelog
