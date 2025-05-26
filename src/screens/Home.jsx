import React, { useEffect, useRef, useState } from 'react';
import { FocusContext, useFocusable, setFocus } from '@noriginmedia/norigin-spatial-navigation';
import KeyboardWrapper from '../components/KeyboardWrapper';
import { ChannelCard, Button } from '@smtv/tv-component-library';
import '@smtv/tv-component-library/dist/style.css';
import Swimlane from '../components/Swimlane';
import SlidingSwimlane from '../components/SlidingSwimlane';
import '../styles/App.css';
import { useFocusMemory } from '../contexts/FocusMemoryContext';
import AdBanner from '../components/AdBanner';
import { MagnifyingGlass, Info } from 'stingray-icons';
import stingrayMusicLogo from '../assets/svg/stingrayMusic.svg';
import { TRANS_BTN_ICON_SIZE } from '../constants/ui';

function Home({ onChannelSelect }) {
  const hasMounted = useRef(false);
  const { restoreFocus, saveFocus } = useFocusMemory();
  const [restoring, setRestoring] = useState(false);

  // Ref to track the last-focused card in the swimlane
  const lastSwimlaneFocusKeyRef = useRef(null); // default to first card

  // Card focus contexts first, focusSelf for setting initial focus
  const { ref: card1Ref, focusKey: card1FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 1', card1FocusKey);
      lastSwimlaneFocusKeyRef.current = card1FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card1FocusKey, { id: 1, title: "Sample Channel 1" }, 'enter'),
  });
  const { ref: card2Ref, focusKey: card2FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 2', card2FocusKey);
      lastSwimlaneFocusKeyRef.current = card2FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card2FocusKey, { id: 2, title: "Sample Channel 2" }, 'enter'),
  });
  const { ref: card3Ref, focusKey: card3FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 3', card3FocusKey);
      lastSwimlaneFocusKeyRef.current = card3FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card3FocusKey, { id: 3, title: "Sample Channel 3" }, 'enter'),
  });
  const { ref: card4Ref, focusKey: card4FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 4', card4FocusKey);
      lastSwimlaneFocusKeyRef.current = card4FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card4FocusKey, { id: 4, title: "Sample Channel 4" }, 'enter'),
  });
  const { ref: card5Ref, focusKey: card5FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 5', card5FocusKey);
      lastSwimlaneFocusKeyRef.current = card5FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card5FocusKey, { id: 5, title: "Sample Channel 5" }, 'enter'),
  });
  const { ref: card6Ref, focusKey: card6FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 6', card6FocusKey);
      lastSwimlaneFocusKeyRef.current = card6FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card6FocusKey, { id: 6, title: "Sample Channel 6" }, 'enter'),
  });
  const { ref: card7Ref, focusKey: card7FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 7', card7FocusKey);
      lastSwimlaneFocusKeyRef.current = card7FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card7FocusKey, { id: 7, title: "Sample Channel 7" }, 'enter'),
  });
  const { ref: card8Ref, focusKey: card8FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 8', card8FocusKey);
      lastSwimlaneFocusKeyRef.current = card8FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card8FocusKey, { id: 8, title: "Sample Channel 8" }, 'enter'),
  });
  const { ref: card9Ref, focusKey: card9FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 9', card9FocusKey);
      lastSwimlaneFocusKeyRef.current = card9FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card9FocusKey, { id: 9, title: "Sample Channel 9" }, 'enter'),
  });
  const { ref: card10Ref, focusKey: card10FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 10', card10FocusKey);
      lastSwimlaneFocusKeyRef.current = card10FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card10FocusKey, { id: 10, title: "Sample Channel 10" }, 'enter'),
  });
  const { ref: card11Ref, focusKey: card11FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 11', card11FocusKey);
      lastSwimlaneFocusKeyRef.current = card11FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card11FocusKey, { id: 11, title: "Sample Channel 11" }, 'enter'),
  });
  const { ref: card12Ref, focusKey: card12FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      console.log('Focused card 12', card12FocusKey);
      lastSwimlaneFocusKeyRef.current = card12FocusKey;
      console.log('lastSwimlaneFocusKeyRef set to', lastSwimlaneFocusKeyRef.current);
    },
    onEnterPress: () => handleCardClick(card12FocusKey, { id: 12, title: "Sample Channel 12" }, 'enter'),
  });

  // Root level focus context
  const { ref, focusKey } = useFocusable({
    focusable: false,
    trackChildren: true
  });
  
  // Swimlane focus context
  const { ref: swimlaneRef, focusKey: swimlaneFocusKey } = useFocusable({
    focusable: false,
    trackChildren: true,
    autoRestoreFocus: true
  });

  // Action buttons focusable refs
  const { ref: searchRef, focusKey: searchFocusKey } = useFocusable({
    focusable: true,
    onEnterPress: () => {
      console.log('Enter pressed: Search Button');
      // handle search button enter
    },
  });
  const { ref: infoRef, focusKey: infoFocusKey } = useFocusable({
    focusable: true,
    onEnterPress: () => {
      console.log('Enter pressed: Info Button');
      // handle info button enter
    },
  });

  // Norigin focusable for the test primary button
  const { ref: testButtonRef, focusKey: testButtonFocusKey } = useFocusable({
    focusable: true,
    onEnterPress: () => {
      console.log('Enter pressed: Test Primary Button');
      // handle test button enter
    },
    onArrowDown: () => {
      console.log('onArrowDown fired on Test Primary Button. lastSwimlaneFocusKeyRef.current:', lastSwimlaneFocusKeyRef.current);
      setFocus(lastSwimlaneFocusKeyRef.current);
      return false; // Prevent default Norigin navigation
    },
  });

  // Add a ref for SlidingSwimlane to access its imperative handle
  const slidingSwimlaneRef = useRef(null);

  // Set initial focus on first card or restore saved focus
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;

      // Try to restore saved focus and offset (only when returning to this screen)
      const saved = restoreFocus('home');
      // Debug: Log what is being restored
      console.log('Restoring focus:', saved);
      if (saved) {
        setRestoring(true); // Start restoration phase
        const { stableId, offset } = saved;
        // Set the swimlane offset directly using the imperative handle
        if (slidingSwimlaneRef.current && typeof slidingSwimlaneRef.current.setOffset === 'function' && offset !== undefined) {
          slidingSwimlaneRef.current.setOffset(offset);
        }
        // Use the stableId to find the element and get its current focusKey
        if (stableId) {
          const element = document.querySelector(`[data-stable-id="${stableId}"]`);
          if (element) {
            const focusKey = element.getAttribute('data-focus-key');
            if (focusKey) {
              setFocus(focusKey);
              // End restoration phase after this tick
              setTimeout(() => setRestoring(false), 0);
              return;
            }
          }
        }
        // End restoration phase if we didn't return above
        setTimeout(() => setRestoring(false), 0);
      }

      // If no saved focus, set initial focus on first card
      setTimeout(() => {
        setFocus(card1FocusKey);
      }, 0);
    }
  }, []);

  // Update handleCardClick to only save focus/offset for restoration after navigation away
  const handleCardClick = (focusKey, channelData, eventType) => {
    // Only save focus/offset for restoration after navigation away
    let currentOffset = 0;
    if (slidingSwimlaneRef.current && typeof slidingSwimlaneRef.current.getOffset === 'function') {
      currentOffset = slidingSwimlaneRef.current.getOffset();
    }
    let stableId = null;
    const element = document.querySelector(`[data-focus-key="${focusKey}"]`);
    if (element) {
      stableId = element.getAttribute('data-stable-id');
    }
    // Debug: Log what is being saved
    console.log('Saving focus:', { stableId, offset: currentOffset });
    saveFocus('home', {
      stableId,
      offset: currentOffset
    });
    // Do NOT call setFocus here for up/down/left/right navigation; let Norigin handle it
    onChannelSelect(channelData);
  };

  return (
    <FocusContext.Provider value={{ focusKey }}>
      {/* Custom Header Row */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--screen-side-padding) var(--screen-side-padding) 0 var(--screen-side-padding)',
          minHeight: 90,
          boxSizing: 'border-box',
        }}
      >
        {/* Left: Logo */}
        <div style={{ width: 245, height: 70, display: 'flex', alignItems: 'center' }}>
          <img src={stingrayMusicLogo} alt="Stingray Music" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Right: Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 24, alignItems: 'center' }}>
          <Button
            ref={searchRef}
            data-focus-key={searchFocusKey}
            data-stable-id="home-header-action-search"
            icon={<MagnifyingGlass size={TRANS_BTN_ICON_SIZE} />}
            showIcon
            size="medium"
            variant="transparent"
            aria-label="Search"
          />
          <Button
            ref={infoRef}
            data-focus-key={infoFocusKey}
            data-stable-id="home-header-action-info"
            icon={<Info size={TRANS_BTN_ICON_SIZE} />}
            showIcon
            size="medium"
            variant="transparent"
            aria-label="Info"
          />
        </div>
      </div>
      {/* End Custom Header Row */}
      {/* 100% wide div with a primary button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
        <Button
          ref={testButtonRef}
          data-focus-key={testButtonFocusKey}
          data-stable-id="home-test-primary-button"
          variant="primary"
          size="medium"
        >
          Test Primary Button
        </Button>
      </div>
      {/* Swimlane */}
      <SlidingSwimlane ref={slidingSwimlaneRef} restoring={restoring}>
        <Swimlane ref={swimlaneRef} data-focus-key={swimlaneFocusKey}>
          <ChannelCard
            ref={card1Ref}
            data-focus-key={card1FocusKey}
            data-stable-id="home-card-1"
            title="Sample Channel 1"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card1FocusKey, { id: 1, title: "Sample Channel 1" }, 'click')}
          />
          <ChannelCard
            ref={card2Ref}
            data-focus-key={card2FocusKey}
            data-stable-id="home-card-2"
            title="Sample Channel 2"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card2FocusKey, { id: 2, title: "Sample Channel 2" }, 'click')}
          />
          <ChannelCard
            ref={card3Ref}
            data-focus-key={card3FocusKey}
            data-stable-id="home-card-3"
            title="Sample Channel 3"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card3FocusKey, { id: 3, title: "Sample Channel 3" }, 'click')}
          />
          <ChannelCard
            ref={card4Ref}
            data-focus-key={card4FocusKey}
            data-stable-id="home-card-4"
            title="Sample Channel 4"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card4FocusKey, { id: 4, title: "Sample Channel 4" }, 'click')}
          />
          <ChannelCard
            ref={card5Ref}
            data-focus-key={card5FocusKey}
            data-stable-id="home-card-5"
            title="Sample Channel 5"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card5FocusKey, { id: 5, title: "Sample Channel 5" }, 'click')}
          />
          <ChannelCard
            ref={card6Ref}
            data-focus-key={card6FocusKey}
            data-stable-id="home-card-6"
            title="Sample Channel 6"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card6FocusKey, { id: 6, title: "Sample Channel 6" }, 'click')}
          />
          <ChannelCard
            ref={card7Ref}
            data-focus-key={card7FocusKey}
            data-stable-id="home-card-7"
            title="Sample Channel 7"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card7FocusKey, { id: 7, title: "Sample Channel 7" }, 'click')}
          />
          <ChannelCard
            ref={card8Ref}
            data-focus-key={card8FocusKey}
            data-stable-id="home-card-8"
            title="Sample Channel 8"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card8FocusKey, { id: 8, title: "Sample Channel 8" }, 'click')}
          />
          <ChannelCard
            ref={card9Ref}
            data-focus-key={card9FocusKey}
            data-stable-id="home-card-9"
            title="Sample Channel 9"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card9FocusKey, { id: 9, title: "Sample Channel 9" }, 'click')}
          />
          <ChannelCard
            ref={card10Ref}
            data-focus-key={card10FocusKey}
            data-stable-id="home-card-10"
            title="Sample Channel 10"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card10FocusKey, { id: 10, title: "Sample Channel 10" }, 'click')}
          />
          <ChannelCard
            ref={card11Ref}
            data-focus-key={card11FocusKey}
            data-stable-id="home-card-11"
            title="Sample Channel 11"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card11FocusKey, { id: 11, title: "Sample Channel 11" }, 'click')}
          />
          <ChannelCard
            ref={card12Ref}
            data-focus-key={card12FocusKey}
            data-stable-id="home-card-12"
            title="Sample Channel 12"
            thumbnailUrl="https://picsum.photos/300/300"
            onClick={() => handleCardClick(card12FocusKey, { id: 12, title: "Sample Channel 12" }, 'click')}
          />
        </Swimlane>
      </SlidingSwimlane>
      <AdBanner />
    </FocusContext.Provider>
  );
}

export default Home;