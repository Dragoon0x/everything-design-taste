---
name: accessibility-deep
description: WCAG compliance deep dive, screen reader patterns, keyboard navigation, and inclusive design.
triggers: ["accessibility", "WCAG", "screen reader", "inclusive design", "a11y"]
---

## Accessibility Deep Dive

### ARIA Patterns
| Component | Key ARIA |
|-----------|----------|
| Modal | role=dialog, aria-modal=true, aria-labelledby |
| Tab panel | role=tablist, role=tab, role=tabpanel, aria-selected |
| Accordion | aria-expanded, aria-controls |
| Menu | role=menu, role=menuitem, aria-haspopup |
| Combobox | role=combobox, aria-expanded, aria-activedescendant |
| Alert | role=alert, aria-live=assertive |
| Status | role=status, aria-live=polite |
| Progress | role=progressbar, aria-valuenow, aria-valuemin, aria-valuemax |

### Focus Management
1. Focus order follows visual order (or logical reading order)
2. Focus trap inside modals and dialogs
3. Return focus to trigger when modal closes
4. Skip links for repetitive navigation
5. Focus visible: always show, never remove `:focus-visible`

### Screen Reader Testing
- Test with VoiceOver (Mac), NVDA (Windows), TalkBack (Android)
- Every interactive element has an accessible name
- Dynamic content changes are announced (aria-live)
- Images have meaningful alt text (or alt="" if decorative)
- Form errors are announced when they appear

### Cognitive Accessibility
- Plain language (no jargon without explanation)
- Consistent navigation and layout across pages
- Clear error messages with recovery instructions
- Avoid timeouts (or provide extension option)
- Don't rely on memory (show information in context)
