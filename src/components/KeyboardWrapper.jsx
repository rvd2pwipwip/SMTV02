import React from 'react';

/**
 * KeyboardWrapper - A generic wrapper component for keyboard navigation
 * 
 * This component works exactly like EnterKeyWrapper but accepts any component as a child.
 * It will:
 * 1. Accept any child component
 * 2. Handle Enter key events
 * 3. Forward all props to the child component
 */

const KeyboardWrapper = ({ onSelect, children, ...props }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSelect) {
      onSelect();
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      {React.cloneElement(children, props)}
    </div>
  );
};

export default KeyboardWrapper; 