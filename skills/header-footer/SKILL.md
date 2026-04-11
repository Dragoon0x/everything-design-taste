---
name: header-footer
description: Header design, footer architecture, sticky headers, responsive headers, and footer content strategy.
triggers: ["header design", "footer design", "site header", "page footer", "sticky header"]
---

# Header & Footer Patterns

## Header
- **Height:** 48-64px (compact apps), 64-80px (marketing sites)
- **Contents:** Logo (left), navigation (center or right), actions (right)
- **Sticky:** Consider sticky for long-scroll pages, but it steals vertical space
- **Compact on scroll:** Reduce height and hide secondary items when scrolling down

## Header Hierarchy
| Element | Priority | Position |
|---------|----------|----------|
| Logo/brand | Always visible | Left |
| Primary nav | Always visible (desktop) | Center or left |
| Search | Visible or icon-toggle | Center or right |
| User menu | Always visible (logged in) | Right |
| CTA | Optional | Right |

## Footer
- **Not a junk drawer.** Only include useful navigation and legal requirements.
- **Column layout:** 3-4 columns of links, grouped by category
- **Required:** Copyright, privacy policy, terms of service
- **Useful:** Contact info, social links, newsletter signup
- **Skip:** Links that duplicate the main navigation

## Mobile Header
- Logo left, hamburger right (or vice versa)
- Important action (cart, search) visible as icon
- Sticky bottom bar for primary actions (not header)

## Dark Footer on Light Sites
Works well. The visual weight anchors the page and separates content from legal/navigation.
