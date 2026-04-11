---
name: tag-input
description: Tag input design, multi-select inputs, chip inputs, and token inputs.
triggers: ["tag input", "chip input", "token input", "multi-select input"]
---

# Tag & Token Input

## Behavior
- Type text → press Enter or comma → creates a tag/chip
- Tags appear as removable chips inside the input
- Backspace removes the last tag when input is empty
- Autocomplete suggestions appear while typing
- Click X on any tag to remove it

## Design
- Tags flow and wrap within the input container
- Input grows vertically to accommodate tags
- Tag style: rounded pill or rounded rectangle with X button
- Consistent tag color (or color-coded by category)
- Maximum tag count if applicable

## Autocomplete
- Show matching existing tags/options while typing
- Highlight matching characters
- Allow creating new tags ("Create 'new-tag'" option at bottom)
- Recently used tags shown when input is focused but empty

## Validation
- Prevent duplicate tags (highlight existing one briefly)
- Character/length limits per tag
- Invalid tag format feedback
- Max tags limit with message
