import React, { useState } from 'react';
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