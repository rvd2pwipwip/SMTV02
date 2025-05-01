import React, { useEffect, useState, useRef } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import '../styles/App.css';

const SlidingSwimlane = React.forwardRef(({ children, ...props }, ref) => {
  const [offset, setOffset] = useState(0);
  const [measurements, setMeasurements] = useState({
    viewportWidth: 0,
    contentWidth: 0,
    currentOffset: 0,
    maxOffset: 0
  });
  const viewportRef = useRef(null);
  const swimlaneRef = useRef(null);

  // Track focus changes
  const { ref: focusRef, focusKey } = useFocusable({
    focusable: false,
    trackChildren: true,
    ref: viewportRef
  });

  // Update measurements when content changes
  useEffect(() => {
    if (!viewportRef.current || !swimlaneRef.current) return;

    const updateMeasurements = () => {
      const viewportWidth = viewportRef.current.getBoundingClientRect().width;
      const contentWidth = swimlaneRef.current.scrollWidth;
      const currentOffset = offset;
      const maxOffset = contentWidth - viewportWidth + 60; // 60px margin from right

      console.log('Measurements:', {
        viewportWidth,
        contentWidth,
        currentOffset,
        maxOffset
      });

      setMeasurements({
        viewportWidth,
        contentWidth,
        currentOffset,
        maxOffset
      });
    };

    // Initial measurement
    updateMeasurements();

    // Set up ResizeObserver to track size changes
    const resizeObserver = new ResizeObserver(updateMeasurements);
    resizeObserver.observe(viewportRef.current);
    resizeObserver.observe(swimlaneRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [offset]);

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

      // Clamp the offset to the maximum allowed value
      const clampedOffset = Math.min(newOffset, measurements.maxOffset);
      
      console.log('Offset calculation:', {
        newOffset,
        clampedOffset,
        maxOffset: measurements.maxOffset
      });

      setOffset(clampedOffset);
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
  }, [focusRef, measurements.maxOffset]);

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