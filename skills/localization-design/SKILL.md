---
name: localization-design
description: Designing for multiple languages, RTL support, date/number formatting, and cultural considerations.
triggers: ["localization", "i18n", "translation", "RTL", "multilingual"]
---

# Localization Design

## Text Expansion
Translated text is often longer. Plan for it:
| Language | Expansion |
|----------|-----------|
| German | +30-40% |
| French | +15-20% |
| Japanese | -10-20% (but taller) |
| Arabic | -10-20% (RTL) |
| Chinese | -30-50% (but taller) |

## Design Rules
1. Never hardcode text in images
2. Avoid text in buttons that's right at the edge (needs expansion room)
3. Don't use flags for language selection (flags = countries, not languages)
4. Use auto-layout/flexbox (not fixed widths for text containers)
5. Test with the longest translation, not just English

## RTL Support
- Mirror the entire layout (not just text)
- Icons that imply direction must flip (arrows, not universal icons)
- Progress bars go right-to-left
- Navigation order reverses

## Cultural Considerations
- Date formats: MM/DD/YYYY (US), DD/MM/YYYY (most of world), YYYY-MM-DD (ISO)
- Number formats: 1,000.00 (US/UK), 1.000,00 (Europe), 1 000,00 (France)
- Color meanings vary (red = luck in China, danger in West)
- Gestures: thumbs up is offensive in some cultures
- Name formats: given name first (West) vs family name first (East Asia)
