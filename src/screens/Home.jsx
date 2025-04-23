import React, { useEffect } from 'react';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { ChannelCard } from '@smtv/tv-component-library';
import '@smtv/tv-component-library/dist/style.css';
import Header from '../components/Header';
import '../styles/App.css';

function Home() {
  // Root level focus context
  const { ref, focusKey, focusSelf: focusRoot } = useFocusable();
  
  // Swimlane focus context
  const { ref: swimlaneRef, focusKey: swimlaneFocusKey, focusSelf: focusSwimlane } = useFocusable();

  // Set initial focus when component mounts
  useEffect(() => {
    // Focus the swimlane first
    focusSwimlane();
  }, []);

  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  return (
    <FocusContext.Provider value={{ focusKey }}>
      <div className="app" ref={ref}>
        <Header title="TV App" />
        <div className="content-swimlane" 
             ref={swimlaneRef} 
             data-focus-key={swimlaneFocusKey}>
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
    </FocusContext.Provider>
  );
}

export default Home;