# TV App Styling Guide

## Design System Overview
This document outlines the styling guidelines and theme system for our TV application.

## Color Palette

### Primary Colors
- Primary: `#007AFF`
- Secondary: `#5856D6`
- Accent: `#FF2D55`

### Neutral Colors
- Background: `#000000`
- Surface: `#1C1C1E`
- Text: `#FFFFFF`
- Text Secondary: `#8E8E93`

### State Colors
- Success: `#34C759`
- Warning: `#FF9500`
- Error: `#FF3B30`

## Typography

### Font Family
- Primary: System UI
- Monospace: SF Mono

### Font Sizes
- Heading 1: 48px
- Heading 2: 36px
- Heading 3: 24px
- Body: 20px
- Small: 16px

### Font Weights
- Regular: 400
- Medium: 500
- Bold: 700

## Spacing

### Base Unit
- 4px (0.25rem)

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

## TV-Specific Styles

### Focus States
```css
.focused {
  transform: scale(1.05);
  box-shadow: 0 0 0 2px var(--color-primary);
  transition: all 0.2s ease-in-out;
}
```

### Animations
- Transition duration: 200ms
- Easing: ease-in-out
- Scale factor: 1.05

### Layout
- Grid gap: 24px
- Content padding: 32px
- Safe area margins: 48px

## Component Styles

### Cards
- Border radius: 8px
- Padding: 16px
- Background: Surface color
- Hover scale: 1.02

### Buttons
- Height: 48px
- Padding: 0 24px
- Border radius: 8px
- Focus ring: 2px

### Navigation
- Item height: 56px
- Icon size: 24px
- Active indicator: 4px

## Responsive Design
- Base size: 1920x1080
- Scale factor: 1.5x for 4K
- Minimum text size: 16px
- Maximum container width: 1440px

## Accessibility
- Minimum contrast ratio: 4.5:1
- Focus visible: Always
- Text scaling: Supported
- High contrast mode: Supported

## Implementation

### CSS Modules
```css
/* Component.module.css */
.container {
  padding: var(--spacing-lg);
  background: var(--color-surface);
}

.focused {
  transform: scale(1.05);
  box-shadow: 0 0 0 2px var(--color-primary);
}
```

### Theme Variables
```css
:root {
  --color-primary: #007AFF;
  --spacing-lg: 24px;
  /* ... other variables */
}
``` 