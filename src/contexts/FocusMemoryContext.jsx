import React, { createContext, useContext, useState } from 'react';

const FocusMemoryContext = createContext();

export function FocusMemoryProvider({ children }) {
  // Store only stable IDs for each screen
  // Example: { "home": "home-card-2", "channelInfo": "info-1" }
  const [focusMemory, setFocusMemory] = useState({});
  const [currentScreen, setCurrentScreen] = useState('home');

  // Save the stable ID of the focused element for the current screen
  const saveFocus = (screenName, stableId) => {
    console.log('Saving focus:', { screenName, stableId });
    setFocusMemory(prev => ({
      ...prev,
      [screenName]: stableId
    }));
  };

  // Get the stable ID of the last focused element for a screen
  const restoreFocus = (screenName) => {
    const stableId = focusMemory[screenName];
    console.log('Restoring focus:', { screenName, stableId });
    return stableId;
  };

  // Update which screen is currently active
  const updateCurrentScreen = (screenName) => {
    console.log('Updating current screen:', screenName);
    setCurrentScreen(screenName);
  };

  return (
    <FocusMemoryContext.Provider value={{
      focusMemory,
      currentScreen,
      saveFocus,
      restoreFocus,
      updateCurrentScreen
    }}>
      {children}
    </FocusMemoryContext.Provider>
  );
}

export function useFocusMemory() {
  const context = useContext(FocusMemoryContext);
  if (!context) {
    throw new Error('useFocusMemory must be used within a FocusMemoryProvider');
  }
  return context;
} 