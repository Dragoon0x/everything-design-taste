---
name: fintech-design
description: Financial product design patterns including banking UX, trading interfaces, and money management.
triggers: ["fintech", "banking", "financial", "trading UI"]
---

# Fintech Design

## Fintech Design Principles

1. **Trust over novelty.** Users are anxious about money. Calm, stable interfaces reduce anxiety.
2. **Show real numbers.** Don't hide balances, fees, or transaction details.
3. **Explain jargon.** APY, ACH, SWIFT — if a term isn't universally understood, define it inline.
4. **Confirm destructive actions.** Money transfers get confirmation screens with full details.
5. **Show transaction status clearly.** Pending, Processing, Completed, Failed — each needs distinct visual treatment.

## Patterns
- **Balance display:** Large, prominent, always visible. Show pending separately.
- **Transaction list:** Date, description, amount, status. Debit in red, credit in green.
- **Transfer flow:** Amount → Recipient → Review → Confirm → Success.
- **Security:** 2FA prompts, session timeout warnings, suspicious activity alerts.

## Compliance
- Required disclosures must be visible, not buried in footnotes.
- Consent checkboxes for terms (not pre-checked).
- Accessible design is legally required in many jurisdictions.