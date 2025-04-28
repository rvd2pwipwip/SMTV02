import React, { useState, useEffect } from 'react';
import Home from './screens/Home';
import ChannelInfo from './screens/ChannelInfo';
import { FocusMemoryProvider, useFocusMemory } from './contexts/FocusMemoryContext';
import './styles/App.css';

function AppContent() {
  const [screenStack, setScreenStack] = useState(['home']);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const { saveFocus, restoreFocus, updateCurrentScreen } = useFocusMemory();

  // Screen navigation functions
  const pushScreen = (screen, data = null) => {
    // Save focus before leaving current screen
    const currentScreen = screenStack[screenStack.length - 1];
    const focusedElement = document.querySelector('[data-focus-key]:focus');
    if (focusedElement) {
      saveFocus(currentScreen, focusedElement.getAttribute('data-focus-key'));
    }

    setScreenStack([...screenStack, screen]);
    if (data) setSelectedChannel(data);
    updateCurrentScreen(screen);
  };

  const popScreen = () => {
    // Save focus before leaving current screen
    const currentScreen = screenStack[screenStack.length - 1];
    const focusedElement = document.querySelector('[data-focus-key]:focus');
    if (focusedElement) {
      saveFocus(currentScreen, focusedElement.getAttribute('data-focus-key'));
    }

    setScreenStack(screenStack.slice(0, -1));
    setSelectedChannel(null);
    const previousScreen = screenStack[screenStack.length - 2];
    updateCurrentScreen(previousScreen);
    
    // Restore focus on the previous screen
    restoreFocus(previousScreen);
  };

  // Global 'B' key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'b' && screenStack.length > 1) {
        e.preventDefault();
        popScreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [screenStack]);

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

function App() {
  return (
    <FocusMemoryProvider>
      <AppContent />
    </FocusMemoryProvider>
  );
}

export default App;