import React from 'react';
import { ChannelCard as LibraryChannelCard } from '@smtv/tv-component-library/dist/index.umd.js';
import '@smtv/tv-component-library/dist/style.css';
import ChannelCard from '../components/ChannelCard';
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
        <LibraryChannelCard 
          title="Sample Channel" 
          thumbnailUrl="https://picsum.photos/300/300"
          onSelect={handleChannelSelect} 
        />
        <ChannelCard 
          title="Sample Channel" 
          onSelect={handleChannelSelect} 
        />
        <ChannelCard 
          title="Sample Channel" 
          onSelect={handleChannelSelect} 
        />
      </div>
    </div>
  );
}

export default Home;