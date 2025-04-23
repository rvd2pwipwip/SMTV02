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

  // Card focus contexts
  const { ref: card1Ref, focusKey: card1FocusKey } = useFocusable();
  const { ref: card2Ref, focusKey: card2FocusKey } = useFocusable();
  const { ref: card3Ref, focusKey: card3FocusKey } = useFocusable();

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
            ref={card1Ref}
            data-focus-key={card1FocusKey}
            title="Sample Channel 1"    
            thumbnailUrl="https://picsum.photos/300/300"
            onSelect={handleChannelSelect} 
          />
          <ChannelCard 
            ref={card2Ref}
            data-focus-key={card2FocusKey}
            title="Sample Channel 2"    
            thumbnailUrl="https://picsum.photos/300/300"
            onSelect={handleChannelSelect} 
          />
          <ChannelCard 
            ref={card3Ref}
            data-focus-key={card3FocusKey}
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