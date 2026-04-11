---
name: profile-page
description: User profile page design, account settings, and personal information display.
triggers: ["profile page","account page","user profile"]
---

# Profile Page Design

## Structure
1. **Header:** Avatar + name + bio/role + primary action (Edit, Follow)
2. **Stats:** Key metrics (followers, projects, contributions)
3. **Tabs:** Content sections (Posts, Projects, Activity, About)
4. **Content:** Tab-specific content grid or list

## Own Profile vs Others
| Element | Own | Other |
|---------|-----|-------|
| Avatar | Edit overlay | Static |
| Bio | Inline edit | Read only |
| Primary action | Edit Profile | Follow / Connect |
| Settings | Visible | Hidden |
| Private content | Visible | Hidden |

## Avatar
- Click to upload new (own profile)
- Fallback: initials on colored background
- Sizes: 96-128px on profile page
- Crop tool for upload (circular mask)

## Edit Profile
- Modal or separate page
- Preview changes before saving
- Auto-save where possible
- Validation inline
