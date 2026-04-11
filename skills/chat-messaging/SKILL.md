---
name: chat-messaging
description: Chat interface design, message bubbles, conversation patterns, typing indicators, and real-time messaging UX.
triggers: ["chat interface", "messaging", "conversation UI", "chat design"]
---

# Chat & Messaging Patterns

## Message Bubbles
- **Sent messages:** Right-aligned, brand/accent color background
- **Received messages:** Left-aligned, neutral/gray background
- **Status indicators:** Sent (single check), Delivered (double check), Read (blue/colored check)
- **Timestamps:** Show for each message or group by time (messages within 5 minutes share a timestamp)

## Input Area
- Multi-line text input that grows with content (up to ~4 lines, then scroll)
- Attachment button (files, images, audio)
- Emoji picker
- Send button (enabled only when input has content)
- Shift+Enter for new line, Enter to send

## Typing Indicator
- Show "[Name] is typing..." with animated dots
- Position: bottom of message list, left-aligned
- Show for 3-5 seconds after last keystroke
- Multiple users: "[Name] and [Name] are typing..."

## Real-Time
- New messages appear at the bottom
- Auto-scroll to bottom on new message (only if already at bottom)
- "New messages" indicator if user scrolled up
- Optimistic send (show message immediately, confirm silently)

## Message Types
| Type | Display |
|------|---------|
| Text | Bubble with rendered markdown |
| Image | Thumbnail with lightbox on click |
| File | File icon + name + size, click to download |
| Audio | Mini waveform player |
| Link | Rich preview (OG image, title, description) |
| System | Centered, muted text, no bubble |
