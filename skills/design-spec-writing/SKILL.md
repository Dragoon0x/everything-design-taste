---
name: design-spec-writing
description: Writing design specifications that engineers actually read, reference, and build from accurately.
triggers: ["design spec", "design handoff", "developer handoff", "implementation spec", "engineering spec", "design documentation"]
---

# Design Spec Writing

## Why Most Specs Fail

Engineers don't read specs because specs are usually:
1. Too long (nobody reads 40 pages)
2. Too vague ("the button should feel responsive")
3. Out of date (the design changed but the spec didn't)
4. Redundant with the Figma file (so why bother?)

## What a Good Spec Contains

### 1. Overview (1 paragraph)
What this feature is, who it's for, and why it exists. Link to the product brief.

### 2. User Flow (visual)
Flowchart or numbered steps showing the complete path. Include error paths and edge cases.

### 3. Screen-by-Screen Spec
For each screen:
```
## [Screen Name]

**Entry point:** How does the user get here?
**Primary action:** What's the main thing they do?
**Exit points:** Where can they go from here?

### States
- Default: [description + link to Figma frame]
- Loading: [description]
- Empty: [description]
- Error: [description + error messages]
- Success: [description]

### Interactions
- [Element]: [Behavior on click/hover/focus]
- [Element]: [Behavior on click/hover/focus]

### Content
- [Field]: [Character limits, formatting rules]
- [Field]: [Validation rules, error messages]

### Edge Cases
- What happens when [unlikely but possible scenario]?
- What if the user [does something unexpected]?
```

### 4. Component Inventory
List of design system components used and any new components introduced.

### 5. Responsive Behavior
How the layout adapts. Not "it stacks on mobile." Specific decisions: what changes, what hides, what reorders.

### 6. Animation Spec
```
[Element]: [Trigger] → [Property] from [start] to [end]
Duration: [Xms], Easing: [curve], Delay: [Xms]
```

### 7. Acceptance Criteria
Testable statements:
- [ ] User can [action] and sees [result]
- [ ] When [condition], the system [behavior]
- [ ] Error state shows when [trigger]

## Writing Style
- Use numbered steps, not paragraphs
- Link to specific Figma frames, not "see designs"
- Include actual copy, not "TBD"
- State exact values (16px, not "some padding")
- Update the spec when the design changes
