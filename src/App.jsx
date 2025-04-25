import React, { useState, useEffect } from 'react';
import Home from './screens/Home';
import ChannelInfo from './screens/ChannelInfo';
import './styles/App.css';

function App() {
  // Screen stack state
  const [screenStack, setScreenStack] = useState(['home']);
  const [selectedChannel, setSelectedChannel] = useState(null);

  // Screen navigation functions
  const pushScreen = (screen, data = null) => {
    setScreenStack([...screenStack, screen]);
    if (data) setSelectedChannel(data);
  };

  const popScreen = () => {
    setScreenStack(screenStack.slice(0, -1));
    setSelectedChannel(null);
  };

  // Global 'B' key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle 'B' key when not on home screen
      if (e.key.toLowerCase() === 'b' && screenStack.length > 1) {
        e.preventDefault(); // Prevent default browser behavior
        popScreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [screenStack]); // Re-run effect when screen stack changes

  // Get current screen
  const currentScreen = screenStack[screenStack.length - 1];

  return (
    <div className="app">
      {currentScreen === 'home' && (
        <Home 
          onChannelSelect={(channel) => pushScreen('channelInfo', channel)}
        />
      )}
      {currentScreen === 'channelInfo' && (
        <ChannelInfo 
          channel={selectedChannel}
          onBack={popScreen}
        />
      )}
    </div>
  );
}

export default App;