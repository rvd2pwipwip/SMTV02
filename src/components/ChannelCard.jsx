import React from 'react';
import './ChannelCard.css';

const ChannelCard = ({ title, onSelect }) => {
  return (
    <div 
      className="channel-card" 
      tabIndex="0"
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      role="button"
      aria-label={title}
    >
      <div className="channel-card__thumbnail"></div>
      <div className="channel-card__title">{title}</div>
    </div>
  );
};

export default ChannelCard; 