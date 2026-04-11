---
name: messaging-chat-design
description: Chat and messaging interface design including conversations, message types, and real-time communication.
triggers: ["chat", "messaging", "conversation", "real-time", "chat UI"]
---

# Messaging Chat Design

## Conversation List
- Avatar + name + last message preview + timestamp.
- Unread indicator (bold text + badge count).
- Pinned conversations at top.
- Search conversations.

## Chat Interface
- Messages: left-aligned (others) and right-aligned (you).
- Bubble style with subtle background differentiation.
- Timestamps: grouped by day, inline for gaps > 30 min.
- Read receipts: sent → delivered → read (optional).
- Typing indicator: "Alex is typing..."

## Message Types
- Text with link previews.
- Images (tap to fullscreen, gallery for multiple).
- Files (icon + filename + size + download).
- Voice messages (waveform + duration + play button).
- Reactions (emoji on long-press/hover).
- Reply/thread (quote original message).

## Input Area
- Multiline text input that grows.
- Attachment button (image, file, camera).
- Emoji picker.
- Send on Enter (Shift+Enter for newline).
- Character/file size limits shown when approaching.