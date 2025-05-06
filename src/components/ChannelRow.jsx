import React, { useMemo } from 'react';

const ChannelRow = ({
  children,
  cardWidth = 300,      // px, adjust as needed
  maxCards = 5,         // max number of cards in a row
  containerWidth = 1600, // px, adjust as needed or make responsive
  style,
  ...props
}) => {
  // Calculate the gap
  const gap = useMemo(() => {
    if (maxCards < 2) return 0;
    return (containerWidth - (cardWidth * maxCards)) / (maxCards - 1);
  }, [containerWidth, cardWidth, maxCards]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: containerWidth,
        gap,
        flexWrap: 'nowrap',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { style: { width: cardWidth, ...child.props.style } })
      )}
    </div>
  );
};

export default ChannelRow; 