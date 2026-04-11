---
name: tab-patterns
description: Tab navigation, tab bar design, scrollable tabs, and tab content management.
triggers: ["tabs", "tab bar", "tab navigation", "tab design"]
---

# Tab Patterns

## Tab Types

| Type | Use Case | Platform |
|------|----------|----------|
| Horizontal tabs | 2-6 sections at same hierarchy level | Desktop, tablet |
| Scrollable tabs | 6+ sections | Mobile, responsive |
| Vertical tabs | Deep settings, documentation sidebar | Desktop |
| Bottom tab bar | Primary app navigation | Mobile apps |
| Segmented control | 2-3 toggle options (not navigation) | Any |

## Tab Rules
1. **Tab labels should be short.** 1-2 words. If longer, tabs aren't the right pattern.
2. **Don't use tabs for sequential steps.** That's a stepper/wizard.
3. **Content should be independent.** Switching tabs shouldn't affect other tabs.
4. **Active tab indicator:** bottom border (horizontal), left border (vertical), or filled background.
5. **Keyboard navigation:** arrow keys to switch, focus visible on active tab.

## Scrollable Tabs
- Show fade/gradient at scroll edges to indicate more tabs.
- Scroll active tab into view on load.
- Swipe gesture on mobile.
- Don't use scroll arrows on desktop unless necessary.