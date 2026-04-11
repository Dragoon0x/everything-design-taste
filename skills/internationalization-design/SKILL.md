---
name: internationalization-design
description: Internationalization and localization design patterns including RTL support, text expansion, and cultural adaptation.
triggers: ["i18n", "localization", "internationalization", "RTL", "multilingual"]
---

# Internationalization Design

## Text Expansion
Translated text is often longer than English:
| Language | Expansion |
|----------|----------|
| German | +30% |
| French | +20% |
| Japanese | -10 to +10% |
| Arabic | +25% |

Design with expansion in mind. Don't fix button widths.

## RTL Support
- Mirror the entire layout (left↔right).
- Icons with direction: flip arrows, skip/back controls.
- Icons without direction: don't flip (search, close, check).
- Text alignment: right-aligned for RTL content.
- Bidirectional text: handle mixed LTR/RTL content.

## Cultural Adaptation
- Color meanings vary (red = luck in China, danger in West).
- Icons: mailbox, hand gestures, animals have different meanings.
- Date formats: MM/DD/YYYY vs DD/MM/YYYY vs YYYY-MM-DD.
- Name formats: family name first in many Asian cultures.
- Currency: symbol position, decimal separators.

## Technical
- Use `lang` attribute on html and content blocks.
- Use `dir="rtl"` for RTL content.
- Unicode support throughout.
- Don't concatenate translated strings (grammar differs between languages).