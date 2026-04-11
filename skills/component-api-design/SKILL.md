---
name: component-api-design
description: Designing component APIs, prop interfaces, and developer experience for design systems.
triggers: ["component API","prop design","developer experience"]
---

# Component API Design

## Principles
1. **Consistent naming:** Same prop name means same thing across components
2. **Sensible defaults:** Most common use case needs zero props
3. **Composition over config:** Prefer children/slots over massive prop objects
4. **Type safety:** TypeScript interfaces for all props
5. **Documentation:** Every prop has a description and example

## Naming Conventions
| Prop | Type | Convention |
|------|------|------------|
| variant | string union | 'primary','secondary','ghost' |
| size | string union | 'sm','md','lg' |
| disabled | boolean | true/false |
| onAction | function | on + PascalCase event |
| className | string | Custom CSS classes |
| children | ReactNode | Component content |
| asChild | boolean | Render as child element |

## Anti-Patterns
- Boolean props that control unrelated things
- Props that conflict with each other
- More than 10-12 props (component does too much)
- String props where a union type would be safer
