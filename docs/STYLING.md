# TV App Styling Guide

## Design System Overview
This document outlines the styling guidelines and theme system for our TV application.

## Viewport Considerations
- Fixed viewport size: 1920x1080 (FHD)
- Safe area margins: 48px on all sides
- Optimal viewing distance: 10ft
- No responsive design needed - TV apps are fixed viewport

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

### Font Sizes (Fixed for 1080p)
- Heading 1: 48px
- Heading 2: 36px
- Heading 3: 24px
- Body: 20px
- Small: 16px (minimum size for TV)

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
- Fixed card sizes (no responsive scaling)

## Component Styles

### Cards
- Fixed width: 200px
- Fixed height: 200px
- Border radius: 8px
- Padding: 16px
- Background: Surface color
- Focus scale: 1.05

### Buttons
- Height: 48px
- Padding: 0 24px
- Border radius: 8px
- Focus ring: 2px
- Minimum width: 120px

### Navigation
- Item height: 56px
- Icon size: 24px
- Active indicator: 4px
- Fixed positioning

## TV Optimization
- No hover states (TV has no mouse)
- Clear focus indicators
- Large touch targets
- Fixed dimensions
- No media queries needed
- No mobile/tablet considerations

## Accessibility
- Minimum contrast ratio: 4.5:1
- Focus visible: Always
- Large text for viewing distance
- Clear focus indicators
- Remote-friendly navigation

## Implementation

### CSS Variables
```css
:root {
  /* Colors */
  --color-primary: #007AFF;
  --color-surface: #1C1C1E;
  
  /* Spacing */
  --spacing-lg: 24px;
  --safe-area: 48px;
  
  /* Fixed Sizes */
  --card-width: 200px;
  --button-height: 48px;
  --nav-height: 56px;
  
  /* Focus */
  --focus-scale: 1.05;
  --focus-ring: 2px;
}
```

### Component Example
```css
.card {
  width: var(--card-width);
  height: var(--card-width);
  margin: var(--spacing-lg);
  background: var(--color-surface);
}

.card:focus-visible {
  transform: scale(var(--focus-scale));
  box-shadow: 0 0 0 var(--focus-ring) var(--color-primary);
}
``` 