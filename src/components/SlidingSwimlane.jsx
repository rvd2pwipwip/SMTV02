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

      console.log('Focused element:', focusedElement);
      console.log('Focused element data:', {
        stableId: focusedElement.getAttribute('data-stable-id'),
        focusKey: focusedElement.getAttribute('data-focus-key')
      });

      const viewportRect = focusRef.current.getBoundingClientRect();
      const focusedRect = focusedElement.getBoundingClientRect();
      const firstCard = swimlaneRef.current.querySelector('[data-stable-id="home-card-1"]');
      
      if (!firstCard) return;

      const firstCardRect = firstCard.getBoundingClientRect();
      const newOffset = firstCardRect.left - focusedRect.left;

      console.log('Calculated offset:', newOffset);
      console.log('Viewport rect:', viewportRect);
      console.log('Focused rect:', focusedRect);
      console.log('First card rect:', firstCardRect);

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
  }, [focusRef]);

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