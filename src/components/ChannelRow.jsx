import React, { useMemo, useRef, useState, useEffect } from 'react';

const ChannelRow = ({
  children,
  cardWidth = 300,      // px, adjust as needed
  minGap = 32,          // px, minimum gap between cards
  style,
  ...props
}) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width on resize
  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      setContainerWidth(containerRef.current.offsetWidth);
    };
    handleResize();
    const resizeObserver = new window.ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const cardCount = React.Children.count(children);

  // Calculate max number of cards that can fit and the gap
  const { maxCards, gap } = useMemo(() => {
    if (cardCount < 2 || containerWidth === 0) {
      return { maxCards: cardCount, gap: minGap };
    }
    // Try to fit as many cards as possible with at least minGap
    let possibleCards = Math.min(cardCount, Math.floor((containerWidth + minGap) / (cardWidth + minGap)));
    if (possibleCards < 2) possibleCards = 2;
    // Calculate the gap for the actual number of cards
    const totalCardWidth = cardWidth * possibleCards;
    const gapValue = possibleCards > 1 ? (containerWidth - totalCardWidth) / (possibleCards - 1) : 0;
    return { maxCards: possibleCards, gap: gapValue };
  }, [containerWidth, cardWidth, cardCount, minGap]);

  // Only render up to maxCards
  const visibleChildren = React.Children.toArray(children).slice(0, maxCards);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        gap,
        flexWrap: 'nowrap',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      {visibleChildren.map(child =>
        React.cloneElement(child, { style: { width: cardWidth, ...child.props.style } })
      )}
    </div>
  );
};

export default ChannelRow; 