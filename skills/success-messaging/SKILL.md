---
name: success-messaging
description: Writing success states, confirmation messages, celebration moments, and positive feedback.
triggers: ["success messages", "confirmation", "celebration", "positive feedback"]
---

# Success Messaging

## Principles
1. **Be brief.** 'Saved' is better than 'Your changes have been successfully saved.'
2. **Be specific.** 'Email sent to alex@example.com' beats 'Message sent.'
3. **Match the weight.** Big achievements get celebration. Small saves get a quiet confirmation.
4. **Include next steps** when relevant. 'Project created. Invite your team?'

## Calibrating Celebration
| Action | Response Level |
|--------|---------------|
| Save/update | Toast: 'Saved' (auto-dismiss) |
| Create new item | Toast: 'Project created' with link |
| Complete setup | Full-screen celebration + next steps |
| Achieve milestone | Animation + achievement badge |
| Make first sale | Confetti + metrics + share option |

## Anti-Patterns
- Full-page success screens for minor actions
- Confetti for everything
- 'Congratulations!' for logging in
- Success messages that require dismissal for non-critical actions
