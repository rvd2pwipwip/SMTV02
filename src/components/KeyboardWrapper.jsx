import React from 'react';

/**
 * KeyboardWrapper - A generic wrapper component for keyboard navigation
 * 
 * This component works exactly like EnterKeyWrapper but accepts any component as a child.
 * It will:
 * 1. Accept any child component
 * 2. Handle Enter key events
 * 3. Forward all props and ref to the child component
 * 4. On Norigin focus, set DOM focus to the child
 */

const KeyboardWrapper = React.forwardRef(({ onSelect, onFocus, children, ...props }, ref) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSelect) {
      onSelect();
    }
  };

  // When Norigin focuses this wrapper, set DOM focus to the child
  const handleFocus = (e) => {
    if (onFocus) onFocus(e);
    if (ref && ref.current && typeof ref.current.focus === 'function') {
      ref.current.focus();
    }
  };

  return (
    <div onKeyDown={handleKeyDown} onFocus={handleFocus}>
      {React.cloneElement(children, { ref, ...props })}
    </div>
  );
});

export default KeyboardWrapper; 