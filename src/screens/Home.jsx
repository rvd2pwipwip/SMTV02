import React, { useEffect } from 'react';
import { FocusContext, useFocusable, setFocus } from '@noriginmedia/norigin-spatial-navigation';
import { ChannelCard } from '@smtv/tv-component-library';
import '@smtv/tv-component-library/dist/style.css';
import Header from '../components/Header';
import '../styles/App.css';

function Home() {
  // Card focus contexts first, focusSelf for setting initial focus
  const { ref: card1Ref, focusKey: card1FocusKey, focusSelf: focusCard1 } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card1Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card2Ref, focusKey: card2FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card2Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card3Ref, focusKey: card3FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card3Ref.current?.focus();
      }, 0);
    }
  });

  // Root level focus context
  const { ref, focusKey } = useFocusable({
    focusable: false,
    trackChildren: true
  });
  
  // Swimlane focus context
  const { ref: swimlaneRef, focusKey: swimlaneFocusKey } = useFocusable({
    focusable: false,
    trackChildren: true
  });

  // Set initial focus on first card
  useEffect(() => {
    focusCard1();
  }, []);

  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  // Add click handler for focus
  const handleCardClick = (focusKey) => {
    console.log('Card clicked with focus key:', focusKey);
    setFocus(focusKey);
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
            onClick={() => handleCardClick(card1FocusKey)}
            onFocus={() => {
              setTimeout(() => {
                card1Ref.current?.focus();
              }, 0);
            }}
          />
          <ChannelCard 
            ref={card2Ref}
            data-focus-key={card2FocusKey}
            title="Sample Channel 2"    
            thumbnailUrl="https://picsum.photos/300/300"
            onSelect={handleChannelSelect}
            onClick={() => handleCardClick(card2FocusKey)}
            onFocus={() => {
              setTimeout(() => {
                card2Ref.current?.focus();
              }, 0);
            }}
          />
          <ChannelCard 
            ref={card3Ref}
            data-focus-key={card3FocusKey}
            title="Sample Channel 3"    
            thumbnailUrl="https://picsum.photos/300/300"
            onSelect={handleChannelSelect}
            onClick={() => handleCardClick(card3FocusKey)}
            onFocus={() => {
              setTimeout(() => {
                card3Ref.current?.focus();
              }, 0);
            }}
          />
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default Home;