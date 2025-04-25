import React, { useEffect } from 'react';
import { FocusContext, useFocusable, setFocus } from '@noriginmedia/norigin-spatial-navigation';
import { EnterKeyWrapper } from '../components/EnterKeyWrapper';
import KeyboardWrapper from '../components/KeyboardWrapper';
import { ChannelCard } from '@smtv/tv-component-library';
import '@smtv/tv-component-library/dist/style.css';
import Header from '../components/Header';
import '../styles/App.css';

function Home({ onChannelSelect }) {
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

  // Set initial focus on first card
  useEffect(() => {
    focusCard1();
  }, []);

  // Add click handler for focus and channel selection
  const handleCardClick = (focusKey, channelData, eventType) => {
    console.log('Card interaction:', {
      focusKey,
      channelData,
      eventType,
      isFocused: document.activeElement === document.querySelector(`[data-focus-key="${focusKey}"]`)
    });
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
          <EnterKeyWrapper 
            ref={card1Ref}
            data-focus-key={card1FocusKey}
            title="Sample Channel 1"    
            thumbnailUrl="https://picsum.photos/300/300"
            onSelect={() => handleCardClick(card1FocusKey, { id: 1, title: "Sample Channel 1" }, 'enter')}
            onClick={() => handleCardClick(card1FocusKey, { id: 1, title: "Sample Channel 1" }, 'click')}
            onFocus={() => {
              console.log('Card 1 focused');
              setTimeout(() => {
                card1Ref.current?.focus();
              }, 0);
            }}
          />
          <EnterKeyWrapper 
            ref={card2Ref}
            data-focus-key={card2FocusKey}
            title="Sample Channel 2"    
            thumbnailUrl="https://picsum.photos/300/300"
            onSelect={() => handleCardClick(card2FocusKey, { id: 2, title: "Sample Channel 2" }, 'enter')}
            onClick={() => handleCardClick(card2FocusKey, { id: 2, title: "Sample Channel 2" }, 'click')}
            onFocus={() => {
              console.log('Card 2 focused');
              setTimeout(() => {
                card2Ref.current?.focus();
              }, 0);
            }}
          />
          <EnterKeyWrapper 
            ref={card3Ref}
            data-focus-key={card3FocusKey}
            title="Sample Channel 3"    
            thumbnailUrl="https://picsum.photos/300/300"
            onSelect={() => handleCardClick(card3FocusKey, { id: 3, title: "Sample Channel 3" }, 'enter')}
            onClick={() => handleCardClick(card3FocusKey, { id: 3, title: "Sample Channel 3" }, 'click')}
            onFocus={() => {
              console.log('Card 3 focused');
              setTimeout(() => {
                card3Ref.current?.focus();
              }, 0);
            }}
          />
          {/* Test our new KeyboardFocusWrapper */}
          <KeyboardWrapper
            ref={testCardRef}
            data-focus-key={testCardFocusKey}
            onSelect={() => handleCardClick(testCardFocusKey, { id: 4, title: "Test Channel" }, 'enter')}
            onClick={() => handleCardClick(testCardFocusKey, { id: 4, title: "Test Channel" }, 'click')}
            onFocus={() => {
              console.log('Test Card focused');
              setTimeout(() => {
                testCardRef.current?.focus();
              }, 0);
            }}
          >
            <ChannelCard
              title="Test Channel"    
              thumbnailUrl="https://picsum.photos/300/300"
            />
          </KeyboardWrapper>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default Home;