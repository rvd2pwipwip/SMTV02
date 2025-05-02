import React, { useEffect, useState, useRef } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import '../styles/App.css';

const SlidingSwimlane = React.forwardRef(({ children, ...props }, ref) => {
  const [offset, setOffset] = useState(0);
  const viewportRef = useRef(null);
  const swimlaneRef = useRef(null);

  // Track focus changes
  const { ref: focusRef, focusKey } = useFocusable({
    focusable: false,
    trackChildren: true,
    ref: viewportRef
  });

  // Calculate offset when focus changes
  useEffect(() => {
    if (!focusRef.current || !swimlaneRef.current) return;

    const updateOffset = () => {
      const focusedElement = document.querySelector('[data-focused="true"]');
      if (!focusedElement) return;

      const viewportRect = focusRef.current.getBoundingClientRect();
      const focusedRect = focusedElement.getBoundingClientRect();
      const firstCard = swimlaneRef.current.querySelector('[data-stable-id="home-card-1"]');
      
      if (!firstCard) return;

      const firstCardRect = firstCard.getBoundingClientRect();
      const newOffset = firstCardRect.left - focusedRect.left;

      // Check if the right edge of content-swimlane is within 60px of viewport's right edge
      const contentRect = swimlaneRef.current.getBoundingClientRect();
      const contentRightEdge = contentRect.right - offset; // Current right edge without the new offset
      const viewportRightEdge = viewportRect.right;
      const minRightMargin = 60;

      // If content's right edge would be within 60px of viewport's right edge after applying the new offset, stop offsetting
      if (contentRightEdge + newOffset - viewportRightEdge <= minRightMargin) {
        return;
      }

      setOffset(newOffset);
    };

    // Set up MutationObserver to watch for focus changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-focused') {
          updateOffset();
        }
      });
    });

    // Start observing all cards in the swimlane
    const cards = swimlaneRef.current.querySelectorAll('[data-stable-id^="home-card-"]');
    cards.forEach(card => {
      observer.observe(card, { attributes: true });
    });

    // Initial update
    updateOffset();

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [focusRef, offset]);

  return (
    <div 
      className="swimlane-viewport"
      ref={focusRef}
      data-focus-key={focusKey}
    >
      <div 
        className="content-swimlane"
        ref={swimlaneRef}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  );
});

SlidingSwimlane.displayName = 'SlidingSwimlane';

export default SlidingSwimlane; 