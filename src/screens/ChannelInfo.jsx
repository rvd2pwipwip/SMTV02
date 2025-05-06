import React from 'react';
import { ChannelCard, Button } from '@smtv/tv-component-library';
import Header from '../components/Header';
import '../styles/App.css';
import ChannelRow from '../components/ChannelRow';

function ChannelInfo({ channel }) {
  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  return (
    <div className="app" style={{ padding: '100px 100px 0px', display: 'flex', flexDirection: 'column', gap: 30 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 900 }}>
        {/* Channel Title */}
        <h1 style={{ margin: 0 }}>{channel?.title || "Sample Channel Title"}</h1>
        
        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 24 }}>
          <Button>Play</Button>
          <Button variant="secondary">Add to Favorites</Button>
        </div>
        
        {/* Channel Description */}
        <div style={{ fontSize: 20, color: '#ccc', maxWidth: 700 }}>
          {channel?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque."}
        </div>
        
        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: 16 }}>
          <Button variant="secondary">Cooking</Button>
          <Button variant="secondary">Love</Button>
          <Button variant="secondary">Third</Button>
          <Button variant="secondary">Fourth Tag</Button>
          <Button variant="secondary">Fifth</Button>
        </div>
      </div>
      
      {/* Related Channels */}
      <ChannelRow style={{ marginTop: 90 }}>
        <ChannelCard 
          title="Sample Channel 1"    
          thumbnailUrl="https://picsum.photos/300/300?1"
          onSelect={handleChannelSelect} 
        />
        <ChannelCard 
          title="Sample Channel 2"    
          thumbnailUrl="https://picsum.photos/300/300?2"
          onSelect={handleChannelSelect} 
        />
        <ChannelCard 
          title="Sample Channel 3"    
          thumbnailUrl="https://picsum.photos/300/300?3"
          onSelect={handleChannelSelect} 
        />
        <ChannelCard 
          title="Sample Channel 4"    
          thumbnailUrl="https://picsum.photos/300/300?4"
          onSelect={handleChannelSelect} 
        />
        <ChannelCard 
          title="Sample Channel 5"    
          thumbnailUrl="https://picsum.photos/300/300?5"
          onSelect={handleChannelSelect} 
        />
      </ChannelRow>
    </div>
  );
}

export default ChannelInfo;