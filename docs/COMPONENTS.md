# TV App Components

## Component Library Overview
This document outlines the planned component structure for our TV application. Detailed implementations will be added as we develop each component.

## Component Categories

### 1. Navigation Components
- **TVMenu**
  - Purpose: Main navigation menu
  - Key Features:
    - Focus management using Norigin Spatial Navigation
    - Keyboard navigation
    - Visual feedback
  - Planned Props:
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
  - Planned Props:
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
  - Planned Props:
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
  - Planned Props:
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
  - Planned Props:
    - label: Button text
    - onClick: Click handler
    - variant: Style variant
    - size: Button size
  - Spatial Navigation:
    - Leaf node in focus tree
    - Handles enter/select actions
    - Manages focus state

## Component Guidelines

### 1. Focus Management
- Every interactive component must use Norigin Spatial Navigation
- Implement proper focus tree structure
- Follow focus state specifications from [STYLING.md](./STYLING.md)
- Support keyboard navigation
- Handle focus restoration

### 2. Keyboard Navigation
- Support arrow key navigation through Norigin
- Implement Enter/Space for selection
- Handle Escape for closing/canceling
- Maintain focus history
- Support directional navigation

### 3. Accessibility
- Include ARIA labels
- Support screen readers
- Maintain proper focus order
- Ensure clear focus indicators
- Follow TV-specific accessibility guidelines

### 4. Spatial Navigation Integration
- Use `useFocusable` hook for focusable components
- Implement `FocusContext.Provider` for containers
- Handle focus tree hierarchy
- Manage focus restoration
- Support directional navigation
- Implement proper focus styles

## Implementation Notes

### Norigin Spatial Navigation
- Each focusable component must use `useFocusable`
- Containers must provide `FocusContext`
- Focus tree must be properly structured
- Focus styles must be consistent
- Navigation must be smooth and intuitive

### Swimlane Implementation
- Single row of focusable items
- Horizontal scrolling
- Focus restoration on mount
- Clear focus indicators
- Smooth transitions
- Proper focus tree structure

## Component Development Process
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