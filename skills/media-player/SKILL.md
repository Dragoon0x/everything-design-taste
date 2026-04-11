---
name: media-player
description: Audio and video player UX, playback controls, timeline design, and media player patterns.
triggers: ["media player", "video player", "audio player", "playback controls"]
---

# Media Player Patterns

## Video Player
- **Controls:** Play/pause, timeline scrubber, volume, fullscreen, speed, captions
- **Auto-hide controls:** Fade out after 3 seconds of no mouse movement, show on hover/tap
- **Thumbnail preview:** Show frame preview on timeline hover
- **Keyboard shortcuts:** Space (play/pause), arrows (skip 5/10s), F (fullscreen), M (mute)

## Audio Player
- **Minimal:** Play/pause, timeline, current time / duration
- **Standard:** Add volume, speed control, skip 15s buttons
- **Podcast:** Add chapter markers, show notes, clip sharing

## Timeline Design
- Show buffered range (lighter fill behind playhead)
- Chapters/segments as markers on timeline
- Click anywhere to seek
- Drag playhead for precise seeking
- Show elapsed / remaining time

## Playback Speed
- Options: 0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x
- Persist preference across sessions
- Show current speed when not 1x

## Mobile
- Large touch targets for play/pause
- Swipe left/right on video to seek
- Swipe up/down for volume (right side) and brightness (left side)
- Lock orientation option for landscape videos
