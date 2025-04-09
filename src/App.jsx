import React from 'react';
import ChannelCard from './components/ChannelCard';
import './styles/App.css';

function App() {
  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  return (
    <div className="app">
      <h1 className="app-title">TV App</h1>
      <div className="content-container">
        <ChannelCard 
          title="Sample Channel" 
          onSelect={handleChannelSelect} 
        />
      </div>
    </div>
  );
}

export default App; 