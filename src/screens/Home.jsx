import React from 'react';
import { ChannelCard } from '@smtv/tv-component-library/dist/index.umd.js';
import '@smtv/tv-component-library/dist/style.css';
import Header from '../components/Header';
import '../styles/App.css';

function Home() {
  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  return (
    <div className="app">
      <Header title="TV App" />
      <div className="content-swimlane">
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

export default Home;