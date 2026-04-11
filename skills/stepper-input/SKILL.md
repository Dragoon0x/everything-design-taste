---
name: stepper-input
description: Numeric stepper inputs, quantity selectors, and increment/decrement patterns.
triggers: ["stepper input", "quantity selector", "number input", "increment"]
---

# Stepper Input

## When to Use
- Quantity selection (e-commerce: add to cart)
- Small number adjustments (1-10 range)
- Settings with discrete values
- NOT for large number ranges (use slider or text input)

## Design
```
[ - ]  4  [ + ]
```
- Minus and plus buttons flanking the value
- Value is editable by direct typing
- Min and max boundaries (gray out button at limit)
- Hold button to rapid-increment
- Step size: 1 by default, configurable

## Rules
1. Minimum touch target: 44x44px per button
2. Show current value prominently between buttons
3. Disable minus at minimum, plus at maximum
4. Allow direct keyboard input for quick jumps
5. Debounce rapid clicks to prevent over-counting

## Accessibility
- `role="spinbutton"`
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Arrow keys to increment/decrement
- Type a number directly
