---
name: toggle-switch
description: Toggle switch design, on/off states, and toggle vs checkbox decisions.
triggers: ["toggle switch", "switch", "toggle", "on off"]
---

# Toggle Switch Design

## Toggle vs Checkbox
| Toggle | Checkbox |
|--------|----------|
| Immediate effect (no save button) | Requires form submission |
| Binary on/off | One of many selections |
| Settings, preferences | Forms, filters |
| One at a time | Groups of options |

## Design Rules
1. Clear on/off visual (color change + position change)
2. Label on the left (describes what it controls)
3. On = right, Off = left (reading direction)
4. On state: brand/accent color. Off state: gray.
5. Optional: show On/Off text inside toggle for clarity
6. Size: 40-48px wide, 24px tall minimum for touch
7. Transition: 200ms ease

## Accessibility
- `role="switch"` with `aria-checked`
- Keyboard: Space/Enter to toggle
- Label associated via `for` attribute
- Focus ring visible
