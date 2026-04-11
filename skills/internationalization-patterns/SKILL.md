---
name: internationalization-patterns
description: Designing for global audiences, cultural considerations, and international UX.
triggers: ["internationalization", "global design", "cultural design", "i18n patterns"]
---

# Internationalization Patterns

## Text Direction
- **LTR:** English, French, German, Hindi, Chinese, Japanese
- **RTL:** Arabic, Hebrew, Persian, Urdu
- Use `dir="auto"` for user-generated content
- Test with mirrored layout for RTL

## Currency & Numbers
| Region | Number | Currency |
|--------|--------|----------|
| US/UK | 1,234.56 | $1,234.56 |
| EU | 1.234,56 | 1.234,56 EUR |
| India | 1,23,456.78 | ₹1,23,456.78 |
| Japan | 1234 | ¥1,234 |

## Date & Time
| Region | Date | Time |
|--------|------|------|
| US | 04/11/2026 | 3:45 PM |
| EU | 11/04/2026 | 15:45 |
| ISO | 2026-04-11 | 15:45:00 |

When ambiguous, use named months: 11 Apr 2026

## Cultural Considerations
- Names: don't assume first/last name structure
- Addresses: format varies wildly by country
- Phone numbers: different lengths and formats
- Colors: meaning varies by culture (white = mourning in some Asian cultures)
- Imagery: gestures, symbols, and scenarios that are universal vs. local

## Design System Impact
- Build components that handle text expansion (German is 30% longer)
- Test with long words (German compound nouns)
- Font stacks with CJK fallbacks
- Icon metaphors that work globally (not US-centric)
