---
name: tooltip-popover
description: Tooltip design, popover patterns, hover cards, contextual help, and accessible tooltips.
triggers: ["tooltip", "popover", "hover card", "contextual help"]
---

# Tooltip & Popover Patterns

## Tooltips
- **Purpose:** Brief label or description for an element
- **Trigger:** Hover (desktop), long-press (mobile)
- **Content:** 1-2 lines max, plain text only
- **Delay:** Show after 300-500ms hover, hide immediately on mouse leave
- **Position:** Above the element by default, flip if near viewport edge

### When to Use
- Explaining icon-only buttons
- Showing full text of truncated content
- Describing form fields with brief guidance

### When NOT to Use
- Critical information (users may never hover)
- Rich content (links, images, forms)
- Mobile-primary interfaces (hover doesn't exist)

## Popovers
- **Purpose:** Rich contextual content
- **Trigger:** Click (not hover)
- **Content:** Can include text, links, buttons, small forms
- **Dismiss:** Click outside, Escape key, or explicit close button
- **Position:** Near the trigger, within viewport

## Hover Cards
- Preview content without navigating (user profiles, link previews)
- Show after 500ms hover delay
- Keep visible while hovering over the card itself
- Include a way to navigate to the full content

## Accessibility
- Tooltips: `role="tooltip"`, `aria-describedby` on trigger
- Popovers: `role="dialog"`, focus trap, Escape to close
- Both: visible to screen readers, keyboard accessible
