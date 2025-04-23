# Norigin Spatial Navigation Implementation Guide

## Overview
This guide documents the step-by-step process of implementing Norigin Spatial Navigation in a TV application, including common mistakes and their solutions.

## Table of Contents
1. [Basic Setup](#basic-setup)
2. [Common Mistakes](#common-mistakes)
3. [Correct Implementation](#correct-implementation)
4. [How It Works](#how-it-works)
5. [Next Steps](#next-steps)

## Basic Setup

### 1. Installation
```bash
npm install @noriginmedia/norigin-spatial-navigation
```

### 2. Initialization
In your main application file (e.g., `src/main.jsx`):
```jsx
import { init } from '@noriginmedia/norigin-spatial-navigation';

// Initialize spatial navigation
init({
  debug: false,
  visualDebug: false
});
```

### 3. Required Imports
```jsx
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
```

## Common Mistakes

### 1. Incorrect Import Path
❌ **Wrong:**
```jsx
import { Focusable } from '@noriginmedia/norigin-spatial-navigation/src/components/Focusable';
```

✅ **Correct:**
```jsx
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
```

### 2. Using Focusable Component
❌ **Wrong:**
```jsx
<Focusable focusKey={swimlaneFocusKey} ref={swimlaneRef}>
  <div className="content-swimlane">
    {/* content */}
  </div>
</Focusable>
```

✅ **Correct:**
```jsx
<div className="content-swimlane" ref={swimlaneRef} data-focus-key={swimlaneFocusKey}>
  {/* content */}
</div>
```

### 3. Incorrect Prop Usage
❌ **Wrong:**
```jsx
<div className="content-swimlane" ref={swimlaneRef} focusKey={swimlaneFocusKey}>
```

✅ **Correct:**
```jsx
<div className="content-swimlane" ref={swimlaneRef} data-focus-key={swimlaneFocusKey}>
```

## Correct Implementation

### Basic Component Structure
```jsx
function Home() {
  // Root level focus context
  const { ref, focusKey } = useFocusable();
  
  // Swimlane focus context
  const { ref: swimlaneRef, focusKey: swimlaneFocusKey } = useFocusable();

  return (
    <FocusContext.Provider value={{ focusKey }}>
      <div className="app" ref={ref}>
        <Header title="TV App" />
        <div className="content-swimlane" 
             ref={swimlaneRef} 
             data-focus-key={swimlaneFocusKey}>
          {/* Channel cards or other content */}
        </div>
      </div>
    </FocusContext.Provider>
  );
}
```

## How It Works

### 1. Focusable Elements
- Each focusable element needs its own `useFocusable` hook instance
- The hook returns:
  - `ref`: Used to attach to DOM elements
  - `focusKey`: A unique identifier for the focusable element

### 2. Focus Hierarchy
- `FocusContext.Provider` establishes a focus hierarchy
- Parent elements provide focus context to their children
- Focus moves naturally through the hierarchy

### 3. Focus Management
- `data-focus-key` tells Norigin which elements can receive focus
- The system automatically handles:
  - Focus movement between elements
  - Focus restoration
  - Focus tree hierarchy

## Key Learning Points

1. **Hook Usage**
   - Always use `useFocusable` hook instead of importing `Focusable` component
   - Each focusable element needs its own hook instance

2. **DOM Attributes**
   - Use `data-focus-key` for DOM elements, not `focusKey` prop
   - This follows React's convention for custom DOM attributes

3. **Focus Hierarchy**
   - Maintain proper focus hierarchy with `FocusContext.Provider`
   - Parent elements should provide context to their children

4. **Focus Management**
   - The system handles focus movement automatically
   - Focus restoration works out of the box
   - Focus tree hierarchy is maintained automatically

## Next Steps

### 1. Add Focus Styles
```css
.focused {
  transform: scale(1.05);
  box-shadow: 0 0 0 2px var(--color-primary);
  transition: all 0.2s ease-in-out;
}
```

### 2. Set Initial Focus
```jsx
const { ref, focusKey, focusSelf } = useFocusable();

useEffect(() => {
  focusSelf();
}, []);
```

### 3. Implement Focus Movement
- Add focus handlers to channel cards
- Implement directional navigation
- Handle focus restoration

## ChannelCard Integration Plan

### Overview
This section outlines the implementation plan for integrating Norigin Spatial Navigation with the existing ChannelCard component from `@smtv/tv-component-library`.

### Implementation Steps

1. **Initial Focus Setup**
   - Add `focusSelf` to the root level focus context
   - Create an `useEffect` hook to set initial focus on the first ChannelCard
   - Ensure focus restoration works after navigation

2. **Mouse Navigation Integration**
   - Since ChannelCard already handles mouse clicks, we need to:
     - Ensure mouse hover events don't interfere with keyboard focus
     - Maintain the existing click-to-focus behavior
     - Test the interaction between mouse and keyboard navigation

3. **Focus Management**
   - Add proper focus movement between cards
   - Implement directional navigation (up/down/left/right)
   - Handle edge cases (first/last items)
   - Ensure focus state is properly synchronized between Norigin and ChannelCard

4. **Testing Requirements**
   - Verify initial focus works on app load
   - Test that ChannelCard's existing focus ring appears with keyboard navigation
   - Validate mouse click behavior still works as expected
   - Check focus restoration after navigation
   - Test edge cases and error states

### Key Points
- ChannelCard has existing focus ring implementation
- Focus on proper integration rather than style implementation
- Maintain existing mouse click behavior
- Ensure smooth transition between mouse and keyboard navigation

## Troubleshooting

### Common Issues
1. **Focus Not Working**
   - Check if `data-focus-key` is properly set
   - Verify focus hierarchy with `FocusContext.Provider`
   - Ensure proper ref attachment

2. **Focus Styles Not Showing**
   - Verify CSS selectors
   - Check if focus state is being applied
   - Ensure proper CSS specificity

3. **Focus Movement Issues**
   - Verify focus hierarchy
   - Check for missing `data-focus-key` attributes
   - Ensure proper focus context

## Best Practices

1. **Component Structure**
   - Keep focus hierarchy shallow
   - Use meaningful focus keys
   - Maintain consistent focus patterns

2. **Performance**
   - Minimize focusable elements
   - Use proper focus restoration
   - Implement lazy loading for large lists

3. **Accessibility**
   - Ensure clear focus indicators
   - Maintain proper focus order
   - Support keyboard navigation

## Resources
- [Norigin Spatial Navigation Documentation](https://github.com/NoriginMedia/Norigin-Spatial-Navigation)
- [TV App Best Practices](https://www.w3.org/TR/2016/REC-html51-20161101/)
- [React Focus Management](https://react.dev/learn/managing-state) 