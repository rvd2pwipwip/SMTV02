import React from 'react';
import { ChannelCard, Button } from '@smtv/tv-component-library';
import Header from '../components/Header';
import '../styles/App.css';

function ChannelInfo({ channel }) {
  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  return (
    <div className="app">
      <Header title={channel?.title || "Channel Info"} />
      <div className="content-swimlane buttons">
        <Button>Play</Button>
        <Button variant="secondary">Add to Favorites</Button>
      </div>
      <div className="content-swimlane related-channels">
        <ChannelCard 
          title="Sample Channel 1"    
          thumbnailUrl="https://picsum.photos/300/300"
          onSelect={handleChannelSelect} 
        />
        <ChannelCard 
          title="Sample Channel 2"    
          thumbnailUrl="https://picsum.photos/300/300"
          onSelect={handleChannelSelect} 
        />
        <ChannelCard 
          title="Sample Channel 3"    
          thumbnailUrl="https://picsum.photos/300/300"
          onSelect={handleChannelSelect} 
        />
      </div>
    </div>
  );
}

export default ChannelInfo;