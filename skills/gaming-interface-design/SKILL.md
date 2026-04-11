---
name: gaming-interface-design
description: Game UI design patterns including HUDs, menus, inventory systems, and achievement displays.
triggers: ["game UI", "HUD", "game interface", "gaming UX"]
---

# Gaming Interface Design

## HUD Design
- Minimal during gameplay. Health, ammo, minimap, objectives.
- Screen edges only. Never block center of screen.
- Opacity/size adjustable in settings.
- Fade out during cutscenes.

## Menu Design
- Fast to navigate with controller or keyboard.
- Clear back/cancel path from any submenu.
- Save state visible (autosave indicator, manual save option).
- Settings preview: show changes before applying.

## Inventory
- Grid view for visual items. List view for text-heavy items.
- Sort and filter options.
- Item details on hover/select.
- Drag to equip/use/combine.
- Clear indication of equipped items.

## Achievement/Progress
- Toast notification on unlock (non-intrusive).
- Progress tracker for in-progress achievements.
- Celebrate completion without blocking gameplay.
- Historical view of all achievements.