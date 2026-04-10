---
name: typography-craft
description: Type scale systems, font pairing strategies, hierarchy principles, and typographic details that separate amateur from professional work.
triggers: ["typography", "font pairing", "type scale", "text styling", "font selection", "heading hierarchy"]
---

# Typography Craft

## Font Pairing Strategy

### The 2-Font Rule
Most projects need exactly two fonts. One display, one body. That's it.

### Pairing Approaches

**Contrast pairing** (most reliable)
Serif display + Sans body, or vice versa. The contrast creates natural hierarchy.
- Playfair Display + Source Sans 3
- Fraunces + Inter (if Inter is justified for readability)
- Clash Display + DM Sans

**Superfamily pairing** (safest)
Same type family with different optical sizes or weights.
- IBM Plex Sans + IBM Plex Serif
- Source Sans + Source Serif
- Noto Sans + Noto Serif

**Character match** (hardest, highest reward)
Different fonts that share structural DNA (x-height, stroke width, character width).
- Satoshi + Instrument Serif
- General Sans + Newsreader

### Pairing Anti-Patterns
- Two geometric sans serifs together (they fight)
- Two high-personality display fonts (visual noise)
- Mixing more than 2 families without clear purpose
- Using a display font for body text
- Using a body font for display text

## Hierarchy System

### The Squint Test
Squint at your layout until you can't read the words. You should still see 3 clear levels of visual weight. If everything blurs together, your hierarchy has failed.

### Hierarchy Tools (in order of impact)
1. **Size** — Biggest impact. Use sparingly.
2. **Weight** — Bold vs regular creates hierarchy without size change
3. **Color/contrast** — Lighter text = less important
4. **Case** — ALL CAPS for labels, sentence case for content
5. **Position** — Top/left = seen first (in LTR layouts)
6. **Spacing** — More space above = new section. Less space = related content.

### Practical Scale
Don't use more than 5-6 sizes in a single interface:
- Display (hero headings): 48-72px
- H1 (page titles): 30-36px
- H2 (section headers): 24px
- H3 (subsection): 20px
- Body: 16px
- Caption/label: 12-14px

## Typographic Details

### Line Height
- Headings: 1.1-1.2 (tight)
- Body text: 1.5-1.6 (comfortable)
- UI labels: 1.2-1.3 (compact)

### Line Length
- Optimal: 60-75 characters per line
- Minimum: 45 characters
- Maximum: 90 characters
- Use max-width on text containers, not viewport width

### Letter Spacing
- Large headings (36px+): tighten slightly (-0.01 to -0.02em)
- ALL CAPS text: loosen (+0.05 to +0.1em)
- Body text: leave alone (0)
- Small text (12px): slight loosening (+0.01em)

### Hanging Punctuation
Quotation marks and bullets that start a line should hang outside the text block so the text edge stays straight.

### Widows and Orphans
- Never leave a single word on the last line of a paragraph (widow)
- Never leave a heading as the last element before a page break (orphan)
- Use `text-wrap: balance` in CSS for headings
