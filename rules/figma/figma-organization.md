---
description: "Figma file structure, naming conventions, and component organization standards."
globs: ["*.fig"]
alwaysApply: false
---

# Figma Organization Rules

1. **Page structure.** Cover page > Designs (by feature) > Components > Tokens > Archive. Every file, every time.

2. **Frame naming.** [Feature] / [Screen] / [State]. Example: `Onboarding / Step 2 / Error`. No "Frame 47".

3. **Component naming.** [Category] / [Name] / [Variant]. Example: `Button / Primary / Large`. Use slash hierarchy.

4. **Auto layout everything.** No absolute positioning unless explicitly required for overlapping elements. If it needs to be responsive, it needs auto layout.

5. **Color styles.** Every color is a style. No raw hex values in designs. Use semantic naming: `text/primary`, `bg/surface`, `border/default`.

6. **Type styles.** Every text element uses a defined text style. No one-off font sizes.

7. **Consistent spacing.** Use spacing tokens from the design system. Don't eyeball it.

8. **Version management.** Use branches for major changes. Main branch is always the source of truth.
