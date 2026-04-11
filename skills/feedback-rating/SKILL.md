---
name: feedback-rating
description: User feedback collection, rating systems, surveys, NPS, and feedback response design.
triggers: ["feedback", "user feedback", "ratings", "reviews", "NPS", "survey"]
---

# Feedback & Rating Patterns

## In-App Feedback
- **Timing:** After a completed task, not during
- **Format:** Simple scale (1-5 or thumbs up/down) + optional text
- **Frequency:** Don't ask more than once per session / once per week
- **Dismissable:** Always allow skipping without penalty

## NPS (Net Promoter Score)
- Single question: "How likely are you to recommend [product] to a colleague?"
- Scale: 0-10
- Follow-up: "What's the main reason for your score?" (open text)
- Don't ask on first visit or during onboarding
- Quarterly or after key milestones

## Review Display
- Show average rating and total count
- Distribution bar chart (how many 5-star, 4-star, etc.)
- Most helpful reviews first, not most recent
- Filter by rating, sort by recency or helpfulness
- Show verified purchase/user badges
- Allow marking reviews as helpful

## Feedback Forms
- Keep it short (3-5 questions max)
- Mix closed (scale, multiple choice) and open (text) questions
- Show progress if multi-step
- Thank the user meaningfully after submission
- Actually follow up on feedback (close the loop)
