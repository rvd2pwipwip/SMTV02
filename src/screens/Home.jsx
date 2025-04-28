import React, { useEffect, useRef } from 'react';
import { FocusContext, useFocusable, setFocus } from '@noriginmedia/norigin-spatial-navigation';
import KeyboardWrapper from '../components/KeyboardWrapper';
import { ChannelCard } from '@smtv/tv-component-library';
import '@smtv/tv-component-library/dist/style.css';
import Header from '../components/Header';
import '../styles/App.css';
import { useFocusMemory } from '../contexts/FocusMemoryContext';

function Home({ onChannelSelect }) {
  const hasMounted = useRef(false);
  const { restoreFocus } = useFocusMemory();

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

  // Test card focus context
  const { ref: testCardRef, focusKey: testCardFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        testCardRef.current?.focus();
      }, 0);
    }
  });

  // Set initial focus on first card or restore saved focus
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;

      // Try to restore saved focus
      const savedStableId = restoreFocus('home');
      if (savedStableId) {
        const element = document.querySelector(`[data-stable-id="${savedStableId}"]`);
        if (element) {
          const focusKey = element.getAttribute('data-focus-key');
          if (focusKey) {
            setFocus(focusKey);
            return;
          }
        }
      }

      // If no saved focus, set initial focus on first card
      focusCard1();
    }
  }, []);

  // Add click handler for focus and channel selection
  const handleCardClick = (focusKey, channelData, eventType) => {
    setFocus(focusKey);
    onChannelSelect(channelData);
  };

  return (
    <FocusContext.Provider value={{ focusKey }}>
      <div className="app" ref={ref}>
        <Header title="TV App" />
        <div className="content-swimlane" 
             ref={swimlaneRef} 
             data-focus-key={swimlaneFocusKey}>

          <KeyboardWrapper
            ref={card1Ref}
            data-focus-key={card1FocusKey}
            data-stable-id="home-card-1"
            onSelect={() => handleCardClick(card1FocusKey, { id: 1, title: "Sample Channel 1" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 1"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card1FocusKey, { id: 1, title: "Sample Channel 1" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card2Ref}
            data-focus-key={card2FocusKey}
            data-stable-id="home-card-2"
            onSelect={() => handleCardClick(card2FocusKey, { id: 2, title: "Sample Channel 2" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 2"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card2FocusKey, { id: 2, title: "Sample Channel 2" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card3Ref}
            data-focus-key={card3FocusKey}
            data-stable-id="home-card-3"
            onSelect={() => handleCardClick(card3FocusKey, { id: 3, title: "Sample Channel 3" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 3"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card3FocusKey, { id: 3, title: "Sample Channel 3" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={testCardRef}
            data-focus-key={testCardFocusKey}
            data-stable-id="home-test-card"
            onSelect={() => handleCardClick(testCardFocusKey, { id: 4, title: "Test Channel" }, 'enter')}
          >
            <ChannelCard
              title="Test Channel"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(testCardFocusKey, { id: 4, title: "Test Channel" }, 'click')}
            />
          </KeyboardWrapper>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default Home;