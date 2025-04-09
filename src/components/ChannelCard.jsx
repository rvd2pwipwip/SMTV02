import React from 'react';
import './ChannelCard.css';

const ChannelCard = ({ title, onSelect }) => {
  return (
    <div 
      className="channel-card tv-focus" 
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
      <div className="channel-thumbnail"></div>
      <div className="channel-title">{title}</div>
    </div>
  );
};

export default ChannelCard; 