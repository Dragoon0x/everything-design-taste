---
name: voice-ui-design
description: Voice user interface design, conversational design, and voice-first interaction patterns.
triggers: ["voice UI", "VUI", "conversational design", "voice assistant", "chatbot"]
---

# Voice Ui Design

## Conversational Design Principles

1. **Be brief.** Voice responses longer than 15 seconds lose users.
2. **Be relevant.** Answer the question first, then offer options.
3. **Be transparent.** Tell users what you can and can't do.
4. **Provide escape hatches.** "You can say 'stop' at any time."
5. **Confirm destructive actions.** "Delete all reminders. Are you sure?"

## Prompt Design
- **Open prompts:** "What would you like to do?" (broad, intimidating)
- **Closed prompts:** "Would you like to order the same as last time?" (specific, easy)
- **Guided prompts:** "You can say 'reorder,' 'browse menu,' or 'check order.'" (helps discovery)

## Error Handling
- "I didn't catch that. Could you say it again?"
- After 2 failures: "Let me show you some options instead."
- After 3 failures: transfer to screen-based UI or human.

## Multimodal
- Voice + screen: show what you're saying.
- Allow switching between voice and touch mid-task.
- Visual confirmation of voice commands.