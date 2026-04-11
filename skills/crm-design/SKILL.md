---
name: crm-design
description: CRM interface design including contact management, deal pipelines, and relationship tracking.
triggers: ["CRM", "contact management", "pipeline", "sales tool"]
---

# Crm Design

## Contact Management
- Contact card: name, company, email, phone, last interaction.
- Activity timeline: calls, emails, meetings, notes.
- Tags/segments for grouping.
- Merge duplicates with conflict resolution.

## Pipeline (Kanban)
- Columns = stages (Lead → Qualified → Proposal → Negotiation → Won/Lost).
- Card = deal (company, value, probability, close date).
- Drag between stages.
- Weighted pipeline value per stage.
- Color coding by deal health (at risk, on track).

## Data Entry
- Inline editing in tables and cards.
- Auto-enrichment from email/social.
- Activity auto-logging (email opens, call duration).
- Minimal required fields (don't block workflow with mandatory data).

## Reporting
- Won/lost analysis.
- Sales velocity (time per stage).
- Rep performance comparison.
- Forecast vs actual.