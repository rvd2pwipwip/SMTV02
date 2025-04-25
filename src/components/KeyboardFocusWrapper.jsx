import React from 'react';

/**
 * KeyboardFocusWrapper - A generic wrapper component for keyboard navigation and focus management
 * 
 * This component is based on the working EnterKeyWrapper pattern but made generic.
 * It will:
 * 1. Accept any child component
 * 2. Handle keyboard events
 * 3. Manage focus properly
 * 4. Forward refs correctly
 */

const KeyboardFocusWrapper = React.forwardRef((props, ref) => {
  const { children, onSelect, ...restProps } = props;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSelect) {
      onSelect();
    }
  };

  return (
    <div 
      ref={ref}
      onKeyDown={handleKeyDown}
      {...restProps}
    >
      {children}
    </div>
  );
});

KeyboardFocusWrapper.displayName = 'KeyboardFocusWrapper';

export default KeyboardFocusWrapper; 