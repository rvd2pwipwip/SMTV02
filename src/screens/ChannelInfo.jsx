import React from 'react';
import ChannelCard from '../components/ChannelCard';
import Header from '../components/Header';
import '../styles/App.css';

function ChannelInfo() {
  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  return (
    <div className="app">
      <Header title="Channel Info" />
      <div className="content-swimlane">
        <ChannelCard 
          title="Sample Channel" 
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

export default ChannelInfo;