---
name: status-page-design
description: System status page design, incident communication, and uptime display.
triggers: ["status page","incident page","uptime","system status"]
---

# Status Page Design

## Components
1. Overall status: "All Systems Operational" or summary
2. Component list: each service with individual status
3. Incident history: timeline of recent issues
4. Uptime metrics: 99.9% over last 90 days

## Status Levels
| Status | Color | Icon | Meaning |
|--------|-------|------|---------|
| Operational | Green | ✓ | Everything working |
| Degraded | Yellow | ⚠ | Reduced performance |
| Partial outage | Orange | ✗ | Some features affected |
| Major outage | Red | ✗ | Significant impact |
| Maintenance | Blue | 🔧 | Planned downtime |

## Incident Updates
- Identified → Investigating → Monitoring → Resolved
- Timestamped updates every 30-60 minutes during incidents
- Plain language (not technical jargon)
- Include: what's affected, what we're doing, estimated resolution
