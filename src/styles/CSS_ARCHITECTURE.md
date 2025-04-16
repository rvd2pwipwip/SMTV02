# CSS Architecture for TV App

## Overview

This document outlines the CSS architecture for our TV application, following React best practices while maintaining a consistent design system.

## File Structure

- `design-system.css`: Single source of truth for design tokens, variables, and base styles
- `App.css`: App-specific layout and container styles
- `index.css`: Minimal global styles
- Component-specific CSS files: Located alongside their components

## CSS Organization Principles

### 1. Design System (design-system.css)

- Contains all CSS variables (colors, typography, spacing, etc.)
- Provides base styles for HTML elements
- Includes utility classes for common styling needs
- Contains TV-specific optimizations

### 2. App Layout (App.css)

- Focuses on app container and layout structure
- Handles responsive scaling for TV display
- Manages app-specific components like headers and main content areas

### 3. Global Styles (index.css)

- Minimal global styles that don't fit in the design system
- TV-specific focus and accessibility styles

### 4. Component-Specific CSS

- Each component has its own CSS file (e.g., `ChannelCard.css`)
- CSS is scoped to the component
- Uses design system variables for consistency

## Best Practices

1. **Use CSS Variables**: Always use design system variables for colors, spacing, etc.
2. **Component Scoping**: Keep component styles with their components
3. **Avoid Global Styles**: Minimize global styles to prevent conflicts
4. **TV-Specific Considerations**: Always consider TV viewing distance and remote navigation
5. **Focus Management**: Ensure proper focus styles for TV navigation

## Future Improvements

- Consider migrating to CSS Modules for better scoping
- Evaluate CSS-in-JS solutions for complex components
- Implement a component library with consistent styling 