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
  const { ref: card4Ref, focusKey: card4FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card4Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card5Ref, focusKey: card5FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card5Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card6Ref, focusKey: card6FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card6Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card7Ref, focusKey: card7FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card7Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card8Ref, focusKey: card8FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card8Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card9Ref, focusKey: card9FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card9Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card10Ref, focusKey: card10FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card10Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card11Ref, focusKey: card11FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card11Ref.current?.focus();
      }, 0);
    }
  });
  const { ref: card12Ref, focusKey: card12FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        card12Ref.current?.focus();
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

  // Set initial focus on first card or restore saved focus
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;

      // Reset scroll position to ensure first card is visible
      if (swimlaneRef.current) {
        swimlaneRef.current.scrollLeft = 0;
      }

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
            ref={card4Ref}
            data-focus-key={card4FocusKey}
            data-stable-id="home-card-4"
            onSelect={() => handleCardClick(card4FocusKey, { id: 4, title: "Sample Channel 4" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 4"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card4FocusKey, { id: 4, title: "Sample Channel 4" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card5Ref}
            data-focus-key={card5FocusKey}
            data-stable-id="home-card-5"
            onSelect={() => handleCardClick(card5FocusKey, { id: 5, title: "Sample Channel 5" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 5"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card5FocusKey, { id: 5, title: "Sample Channel 5" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card6Ref}
            data-focus-key={card6FocusKey}
            data-stable-id="home-card-6"
            onSelect={() => handleCardClick(card6FocusKey, { id: 6, title: "Sample Channel 6" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 6"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card6FocusKey, { id: 6, title: "Sample Channel 6" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card7Ref}
            data-focus-key={card7FocusKey}
            data-stable-id="home-card-7"
            onSelect={() => handleCardClick(card7FocusKey, { id: 7, title: "Sample Channel 7" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 7"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card7FocusKey, { id: 7, title: "Sample Channel 7" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card8Ref}
            data-focus-key={card8FocusKey}
            data-stable-id="home-card-8"
            onSelect={() => handleCardClick(card8FocusKey, { id: 8, title: "Sample Channel 8" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 8"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card8FocusKey, { id: 8, title: "Sample Channel 8" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card9Ref}
            data-focus-key={card9FocusKey}
            data-stable-id="home-card-9"
            onSelect={() => handleCardClick(card9FocusKey, { id: 9, title: "Sample Channel 9" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 9"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card9FocusKey, { id: 9, title: "Sample Channel 9" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card10Ref}
            data-focus-key={card10FocusKey}
            data-stable-id="home-card-10"
            onSelect={() => handleCardClick(card10FocusKey, { id: 10, title: "Sample Channel 10" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 10"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card10FocusKey, { id: 10, title: "Sample Channel 10" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card11Ref}
            data-focus-key={card11FocusKey}
            data-stable-id="home-card-11"
            onSelect={() => handleCardClick(card11FocusKey, { id: 11, title: "Sample Channel 11" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 11"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card11FocusKey, { id: 11, title: "Sample Channel 11" }, 'click')}
            />
          </KeyboardWrapper>

          <KeyboardWrapper
            ref={card12Ref}
            data-focus-key={card12FocusKey}
            data-stable-id="home-card-12"
            onSelect={() => handleCardClick(card12FocusKey, { id: 12, title: "Sample Channel 12" }, 'enter')}
          >
            <ChannelCard
              title="Sample Channel 12"    
              thumbnailUrl="https://picsum.photos/300/300"
              onClick={() => handleCardClick(card12FocusKey, { id: 12, title: "Sample Channel 12" }, 'click')}
            />
          </KeyboardWrapper>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default Home;