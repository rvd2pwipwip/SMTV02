import React from 'react';
import ChannelCard from './ChannelCard';
import './TVSwimlane.css';

/**
 * TVSwimlane Component
 * 
 * A horizontal scrollable content container for TV navigation.
 * Displays a single row of focusable items with smooth scrolling.
 * 
 * @param {Object} props
 * @param {string} props.title - Category title
 * @param {Array} props.items - Array of content items
 * @param {Function} props.onItemSelect - Selection handler
 */
const TVSwimlane = ({ title, items, onItemSelect }) => {
  return (
    <div className="tv-swimlane">
      <h2 className="tv-swimlane__title">{title}</h2>
      <div className="tv-swimlane__container">
        {items.map((item, index) => (
          <ChannelCard
            key={item.id || index}
            title={item.title}
            onSelect={() => onItemSelect?.(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default TVSwimlane; 