# TV Component Library

## Overview
This document outlines the component structure, architecture, and implementation guidelines for our TV application components. The components are designed as simple, reusable building blocks that can be composed into more complex UI elements.

## Repository Information
- **Repository**: [tv-component-library](https://github.com/rvd2pwipwip/tv-component-library)
- **Status**: Initial setup phase

## Component Categories

### 1. Navigation Components
- **TVMenu**
  - Purpose: Main navigation menu
  - Key Features:
    - Focus management using Norigin Spatial Navigation
    - Keyboard navigation
    - Visual feedback
  - Props:
    - items: Array of menu items
    - onSelect: Selection handler
    - currentFocus: Active item
  - Spatial Navigation:
    - Uses `useFocusable` hook
    - Implements focus tree structure
    - Handles directional navigation

- **TVMenuItem**
  - Purpose: Individual menu item
  - Key Features:
    - Focus styles
    - Selection feedback
    - Icon support
  - Props:
    - label: Item text
    - icon: Optional icon
    - isSelected: Selection state
    - onSelect: Click handler
  - Spatial Navigation:
    - Leaf node in focus tree
    - Handles enter/select actions
    - Manages focus state

### 2. Content Components
- **TVSwimlane**
  - Purpose: Horizontal scrollable content container
  - Key Features:
    - Single row of focusable items
    - Smooth horizontal scrolling
    - Focus management with Norigin
    - Category-specific content
  - Props:
    - title: Category title
    - items: Array of content items
    - onItemSelect: Selection handler
  - Spatial Navigation:
    - Container node in focus tree
    - Manages child focus items
    - Handles horizontal navigation
    - Implements focus restoration

- **TVCard**
  - Purpose: Content container
  - Key Features:
    - Rounded corners square aspect ratio thumbnail
    - Focus display around thumbnail only
    - Card label text left aligned below thumbnail
    - 2-line max text label
    - Image optimization
    - Metadata display
  - Props:
    - title: Card title
    - content: Main content
    - image: Optional image
    - metadata: Additional info
  - Spatial Navigation:
    - Leaf node in focus tree
    - Handles enter/select actions
    - Manages focus state
    - Implements focus styles

### 3. Interactive Components
- **TVButton**
  - Purpose: Interactive button
  - Key Features:
    - Focus states
    - Keyboard interaction
    - Visual feedback
  - Props:
    - label: Button text
    - onClick: Click handler
    - variant: Style variant
    - size: Button size
  - Spatial Navigation:
    - Leaf node in focus tree
    - Handles enter/select actions
    - Manages focus state

## Design System Integration

### Shared Design Tokens
- Colors
- Typography
- Spacing
- Focus states

### TV-Specific Considerations
- Fixed viewport (1920x1080)
- Remote control navigation
- Clear focus states
- 10ft viewing distance

## Implementation Guidelines

### Component Responsibilities
Components should:
- Handle their own styling and layout
- Manage their internal state
- Provide clear props for customization
- Be accessible and keyboard-focusable
- Not implement complex navigation logic

### Parent Component Responsibilities
Parent components (in consuming applications) should:
- Implement navigation patterns
- Manage focus and keyboard events
- Handle component composition
- Define interaction patterns

### Focus Management
- Every interactive component must use Norigin Spatial Navigation
- Implement proper focus tree structure
- Follow focus state specifications
- Support keyboard navigation
- Handle focus restoration

### Keyboard Navigation
- Support arrow key navigation through Norigin
- Implement Enter/Space for selection
- Handle Escape for closing/canceling
- Maintain focus history
- Support directional navigation

### Accessibility
- Include ARIA labels
- Support screen readers
- Maintain proper focus order
- Ensure clear focus indicators
- Follow TV-specific accessibility guidelines

## Development Workflow

### Current Phase
- Setting up component library structure
- Preparing for component migration
- Establishing documentation

### Component Development Process
1. Create component file
2. Implement basic functionality
3. Add TV-specific features
4. Test keyboard navigation
5. Verify accessibility
6. Document props and usage
7. Add to component library

## Testing Requirements
- Unit tests for component logic
- Integration tests for navigation
- Accessibility testing
- Performance testing
- Remote control testing

## Migration Plan

### Phase 1: Core Components
1. **ChannelCard**
   - Move from `src/components/ChannelCard.jsx`
   - Include styles and stories
   - Document usage and variants

2. **TVSwimlane**
   - Move from `src/components/TVSwimlane.jsx`
   - Include styles and stories
   - Document usage and variants

### Phase 2: Navigation Components
1. **Header**
2. **Category Navigation**
3. **Mode Switcher**

### Phase 3: Player Components
1. **Mini Player**
2. **Player Controls**
3. **Progress Bar**

## Documentation

### Component Library
- Storybook documentation
- Usage examples
- Props documentation
- Accessibility guidelines

### TV App
- Component usage
- Integration patterns
- Customization options
- Migration guides 