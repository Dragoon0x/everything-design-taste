---
name: project-management
description: Project management tool design, task views, timeline design, board layouts, and team collaboration UX.
triggers: ["project management", "task manager", "kanban board", "timeline", "project tool"]
---

# Project Management Design

## View Types
| View | Best For | Key Features |
|------|----------|-------------|
| Board/Kanban | Visual workflow, status tracking | Drag between columns, card design |
| List | Quick scanning, bulk editing | Sortable columns, inline edit |
| Timeline/Gantt | Scheduling, dependencies | Date ranges, milestones, drag to reschedule |
| Calendar | Date-based work | Day/week/month views, drag to reschedule |
| Table | Data-heavy, custom fields | Spreadsheet-like with typed columns |

## Task Design
- Title (primary), description (expandable)
- Status, priority, assignee, due date (visible on card/row)
- Labels/tags for categorization
- Subtasks/checklist for breaking down work
- Comments/activity feed
- File attachments
- Custom fields per project

## Board (Kanban)
- Columns = statuses (To Do, In Progress, Review, Done)
- Drag cards between columns to update status
- Column: show count, collapsible, add new card
- Card: title, assignee avatar, due date, priority indicator
- WIP limits per column (optional)

## Collaboration
- Real-time updates (no refresh needed)
- @mentions in comments
- Activity feed per task and per project
- Notifications (configurable: all, mentions only, none)
- Assignee workload view (who has too much/too little)

## Timeline
- Horizontal time axis (days/weeks/months)
- Tasks as bars spanning their duration
- Drag to resize (change dates)
- Dependencies as arrows between tasks
- Milestones as diamonds
- Critical path highlighting
