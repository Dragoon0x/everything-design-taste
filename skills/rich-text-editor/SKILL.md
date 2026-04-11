---
name: rich-text-editor
description: Rich text editor UX, formatting toolbar, markdown support, block-based editing, and editor patterns.
triggers: ["rich text editor", "text editor", "WYSIWYG", "content editor", "markdown editor"]
---

# Rich Text Editor Patterns

## Toolbar Design
- **Floating toolbar:** Appears on text selection (medium-style). Clean, minimal.
- **Fixed toolbar:** Always visible at top. Better for heavy editing.
- **Slash commands:** Type "/" to insert blocks. Power user friendly.
- Group tools logically: text formatting | alignment | lists | media | blocks

## Essential Formatting
| Priority | Features |
|----------|----------|
| Must have | Bold, italic, headings (H1-H3), links, lists, images |
| Should have | Code blocks, blockquotes, dividers, tables |
| Nice to have | Callouts, toggles, embeds, colors |
| Avoid | Font family picker, font size picker (use heading levels instead) |

## Block-Based Editing
- Each paragraph, heading, image, etc. is a block
- Blocks can be reordered (drag handle)
- Blocks can be converted (paragraph → heading, list → checklist)
- "/" command to insert new block types
- Block-level actions menu (⋮ button on hover)

## Markdown Support
- Typing shortcuts: `#` for heading, `*` for bold, `>` for quote
- Auto-convert markdown syntax as user types
- Export as markdown option

## Collaboration
- Real-time cursor positions
- Selection highlighting per user
- Comments on specific text ranges
- Version history with visual diff
