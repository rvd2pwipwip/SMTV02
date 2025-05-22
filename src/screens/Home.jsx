import React, { useEffect, useRef, useState } from 'react';
import { FocusContext, useFocusable, setFocus } from '@noriginmedia/norigin-spatial-navigation';
import KeyboardWrapper from '../components/KeyboardWrapper';
import { ChannelCard, Button } from '@smtv/tv-component-library';
import '@smtv/tv-component-library/dist/style.css';
import Swimlane from '../components/Swimlane';
import SlidingSwimlane from '../components/SlidingSwimlane';
import FilterSwimlane from '../components/FilterSwimlane';
import '../styles/App.css';
import { useFocusMemory } from '../contexts/FocusMemoryContext';
import AdBanner from '../components/AdBanner';
import { MagnifyingGlass, Info } from 'stingray-icons';
import stingrayMusicLogo from '../assets/svg/stingrayMusic.svg';
import { TRANS_BTN_ICON_SIZE } from '../constants/ui';

const FILTERS = [
  { label: 'Most Popular', stableId: 'filter-btn-most-popular' },
  { label: 'New Releases', stableId: 'filter-btn-new-releases' },
  { label: 'Recommendations', stableId: 'filter-btn-recommendations' },
  { label: 'TV Lineup', stableId: 'filter-btn-tv-lineup' },
];

function Home({ onChannelSelect }) {
  const hasMounted = useRef(false);
  const { restoreFocus, saveFocus } = useFocusMemory();
  const [restoring, setRestoring] = useState(false);

  // FilterSwimlane state and ref
  const [activeFilterId, setActiveFilterId] = useState(FILTERS[0].stableId);
  const [filterOffset, setFilterOffset] = useState(0);
  const filterSwimlaneRef = useRef(null);

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

  // Action buttons focusable refs
  const { ref: searchRef, focusKey: searchFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 0);
    }
  });
  const { ref: infoRef, focusKey: infoFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        infoRef.current?.focus();
      }, 0);
    }
  });

  // Add a ref for SlidingSwimlane to access its imperative handle
  const slidingSwimlaneRef = useRef(null);

  // Set initial focus on first card or restore saved focus
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;

      // Try to restore saved focus and offset
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
      focusCard1();
    }
  }, []);

  // Update handleCardClick to store both focus and offset
  const handleCardClick = (focusKey, channelData, eventType) => {
    // Get the current offset from SlidingSwimlane via imperative handle
    let currentOffset = 0;
    if (slidingSwimlaneRef.current && typeof slidingSwimlaneRef.current.getOffset === 'function') {
      currentOffset = slidingSwimlaneRef.current.getOffset();
    }
    // Get the stableId from the event or channelData
    // We'll use the focusKey to find the element and get its stableId
    // Since this is called from onSelect/onClick, we can get the stableId from the DOM
    let stableId = null;
    // Try to find the element by focusKey
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
    setFocus(focusKey);
    onChannelSelect(channelData);
  };

  // Handle filter change
  const handleFilterChange = (newFilterId) => {
    setActiveFilterId(newFilterId);
    // TODO: update channel swimlane content based on filter
  };

  return (
    <FocusContext.Provider value={{ focusKey }}>
      <div className="app" ref={ref}>
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
            <KeyboardWrapper
              ref={searchRef}
              data-focus-key={searchFocusKey}
              data-stable-id="home-header-action-search"
            >
              <Button
                icon={<MagnifyingGlass size={TRANS_BTN_ICON_SIZE} />}
                showIcon
                size="medium"
                variant="transparent"
                aria-label="Search"
              />
            </KeyboardWrapper>
            <KeyboardWrapper
              ref={infoRef}
              data-focus-key={infoFocusKey}
              data-stable-id="home-header-action-info"
            >
              <Button
                icon={<Info size={TRANS_BTN_ICON_SIZE} />}
                showIcon
                size="medium"
                variant="transparent"
                aria-label="Info"
              />
            </KeyboardWrapper>
          </div>
        </div>
        {/* End Custom Header Row */}
        {/* Filter Swimlane */}
        <FilterSwimlane
          ref={filterSwimlaneRef}
          filters={FILTERS}
          activeFilterId={activeFilterId}
          onFilterChange={handleFilterChange}
          restoring={restoring}
          initialOffset={filterOffset}
        />
        {/* Channel swimlane below (SlidingSwimlane) */}
        <SlidingSwimlane ref={slidingSwimlaneRef} restoring={restoring}>
          <Swimlane ref={swimlaneRef} data-focus-key={swimlaneFocusKey}>
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
          </Swimlane>
        </SlidingSwimlane>
        <AdBanner />
      </div>
    </FocusContext.Provider>
  );
}

export default Home;