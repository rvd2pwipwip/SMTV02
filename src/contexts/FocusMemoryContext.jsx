import React, { createContext, useContext, useState } from 'react';

const FocusMemoryContext = createContext();

export function FocusMemoryProvider({ children }) {
  const [focusMemory, setFocusMemory] = useState({});
  const [currentScreen, setCurrentScreen] = useState('home');

  const saveFocus = (screenName, focusKey) => {
    console.log('Saving focus:', { screenName, focusKey });
    setFocusMemory(prev => ({
      ...prev,
      [screenName]: focusKey
    }));
  };

  const restoreFocus = (screenName) => {
    const focusKey = focusMemory[screenName];
    console.log('Restoring focus:', { screenName, focusKey });
    return focusKey;
  };

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