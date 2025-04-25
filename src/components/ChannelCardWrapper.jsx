import React from 'react';
import { ChannelCard } from '@smtv/tv-component-library';

export const ChannelCardWrapper = ({ onSelect, ...props }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSelect) {
      onSelect();
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <ChannelCard {...props} />
    </div>
  );
}; 