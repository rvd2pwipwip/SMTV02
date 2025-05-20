import React, { useEffect, useRef } from 'react';
import { ChannelCard, Button } from '@smtv/tv-component-library';
import '../styles/App.css';
import ChannelRow from '../components/ChannelRow';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import KeyboardWrapper from '../components/KeyboardWrapper';
import { Like, SingNow } from 'stingray-icons';
import AdBanner from '../components/AdBanner';

function ChannelInfo({ channel, onBack, onPlay }) {
  // Action button group focus context (not itself focusable, tracks children)
  const { ref: actionGroupRef, focusKey: actionGroupFocusKey } = useFocusable({
    focusable: false,
    trackChildren: true
  });

  // Play button focusable
  const { ref: playRef, focusKey: playFocusKey, focusSelf: focusPlay } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (playRef.current) playRef.current.focus();
      }, 0);
    }
  });
  // Add to Favorites button focusable
  const { ref: favRef, focusKey: favFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (favRef.current) favRef.current.focus();
      }, 0);
    }
  });

  // Filter button group focus context (not itself focusable, tracks children)
  const { ref: filterGroupRef, focusKey: filterGroupFocusKey } = useFocusable({
    focusable: false,
    trackChildren: true
  });

  // Individual filter buttons
  const { ref: allRef, focusKey: allFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (allRef.current) allRef.current.focus();
      }, 0);
    }
  });
  const { ref: popularRef, focusKey: popularFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (popularRef.current) popularRef.current.focus();
      }, 0);
    }
  });
  const { ref: recommendedRef, focusKey: recommendedFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (recommendedRef.current) recommendedRef.current.focus();
      }, 0);
    }
  });
  const { ref: newRef, focusKey: newFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (newRef.current) newRef.current.focus();
      }, 0);
    }
  });
  const { ref: favoritesRef, focusKey: favoritesFocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (favoritesRef.current) favoritesRef.current.focus();
      }, 0);
    }
  });

  // Related channel cards group focus context (not itself focusable, tracks children)
  const { ref: relatedGroupRef, focusKey: relatedGroupFocusKey } = useFocusable({
    focusable: false,
    trackChildren: true
  });

  // Individual related channel cards
  const { ref: relatedCard1Ref, focusKey: relatedCard1FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (relatedCard1Ref.current) relatedCard1Ref.current.focus();
      }, 0);
    }
  });
  const { ref: relatedCard2Ref, focusKey: relatedCard2FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (relatedCard2Ref.current) relatedCard2Ref.current.focus();
      }, 0);
    }
  });
  const { ref: relatedCard3Ref, focusKey: relatedCard3FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (relatedCard3Ref.current) relatedCard3Ref.current.focus();
      }, 0);
    }
  });
  const { ref: relatedCard4Ref, focusKey: relatedCard4FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (relatedCard4Ref.current) relatedCard4Ref.current.focus();
      }, 0);
    }
  });
  const { ref: relatedCard5Ref, focusKey: relatedCard5FocusKey } = useFocusable({
    focusable: true,
    onFocus: () => {
      setTimeout(() => {
        if (relatedCard5Ref.current) relatedCard5Ref.current.focus();
      }, 0);
    }
  });

  // Set initial focus to Play button on mount
  useEffect(() => {
    focusPlay();
  }, [focusPlay]);

  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  return (
    <>
      <div style={{ width: '100%', boxSizing: 'border-box', padding: '100px  100px', display: 'flex', flexDirection: 'column', gap: 15, position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 40, width: '100%', boxSizing: 'border-box', paddingLeft: 0, paddingRight: 0 }}>
          {/* Channel Thumbnail Placeholder */}
          <div
            style={{
              width: 400,
              height: 400,
              background: 'var(--color-outline-secondary)',
              borderRadius: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: 32,
              fontFamily: 'var(--font-family-primary)',
              flexShrink: 0,
            }}
          >
            400x400
          </div>

          {/* Channel Details Group */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 900 }}>
            {/* Channel Title */}
            <h1
              style={{
                fontFamily: 'var(--font-family-secondary)',
                fontSize: 'var(--font-size-h1)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
                margin: 0,
              }}
            >
              {channel?.title || "Sample Channel Title"}
            </h1>
            
            {/* Action Buttons */}
            <div 
              ref={actionGroupRef}
              data-focus-key={actionGroupFocusKey}
              style={{ display: 'flex', gap: 24 }}
            >
              <KeyboardWrapper
                ref={playRef}
                data-focus-key={playFocusKey}
                data-stable-id="channelinfo-action-play"
                onSelect={onPlay}
              >
                <Button
                  icon={<SingNow />}
                  showIcon
                  size="medium"
                  variant="primary"
                  onClick={onPlay}
                >
                  Play
                </Button>
              </KeyboardWrapper>
              <KeyboardWrapper
                ref={favRef}
                data-focus-key={favFocusKey}
                data-stable-id="channelinfo-action-fav"
              >
                <Button
                  icon={<Like />}
                  showIcon
                  size="medium"
                  variant="secondary"
                >
                  Add to Favorites
                </Button>
              </KeyboardWrapper>
            </div>
            
            {/* Channel Description */}
            <div
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-body)',
                color: 'var(--color-text-secondary)',
                maxWidth: 700,
              }}
            >
              {channel?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque."}
            </div>
            
            {/* Filter Buttons */}
            <div
              ref={filterGroupRef}
              data-focus-key={filterGroupFocusKey}
              style={{ display: 'flex', gap: 16 }}
            >
              <KeyboardWrapper
                ref={allRef}
                data-focus-key={allFocusKey}
                data-stable-id="channelinfo-filter-all"
              >
                <Button variant="secondary">All</Button>
              </KeyboardWrapper>
              <KeyboardWrapper
                ref={popularRef}
                data-focus-key={popularFocusKey}
                data-stable-id="channelinfo-filter-popular"
              >
                <Button variant="secondary">Popular</Button>
              </KeyboardWrapper>
              <KeyboardWrapper
                ref={recommendedRef}
                data-focus-key={recommendedFocusKey}
                data-stable-id="channelinfo-filter-recommended"
              >
                <Button variant="secondary">Recommended</Button>
              </KeyboardWrapper>
              <KeyboardWrapper
                ref={newRef}
                data-focus-key={newFocusKey}
                data-stable-id="channelinfo-filter-new"
              >
                <Button variant="secondary">New</Button>
              </KeyboardWrapper>
              <KeyboardWrapper
                ref={favoritesRef}
                data-focus-key={favoritesFocusKey}
                data-stable-id="channelinfo-filter-favorites"
              >
                <Button variant="secondary">Favorites</Button>
              </KeyboardWrapper>
            </div>
          </div>
        </div>
        
        {/* Related Channels */}
        <div style={{ width: '100%', boxSizing: 'border-box', paddingLeft: 0, paddingRight: 0, marginTop: 90 }}>
          <div
            style={{
              fontFamily: 'var(--font-family-secondary)',
              fontSize: 'var(--font-size-h2)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-text-primary)',
              marginBottom: 16,
            }}
          >
            Related
          </div>
          <ChannelRow
            ref={relatedGroupRef}
            data-focus-key={relatedGroupFocusKey}
          >
            <KeyboardWrapper
              ref={relatedCard1Ref}
              data-focus-key={relatedCard1FocusKey}
              data-stable-id="channelinfo-related-card-1"
            >
              <ChannelCard 
                title="Sample Channel 1"    
                thumbnailUrl="https://picsum.photos/300/300?1"
                onSelect={handleChannelSelect} 
              />
            </KeyboardWrapper>
            <KeyboardWrapper
              ref={relatedCard2Ref}
              data-focus-key={relatedCard2FocusKey}
              data-stable-id="channelinfo-related-card-2"
            >
              <ChannelCard 
                title="Sample Channel 2"    
                thumbnailUrl="https://picsum.photos/300/300?2"
                onSelect={handleChannelSelect} 
              />
            </KeyboardWrapper>
            <KeyboardWrapper
              ref={relatedCard3Ref}
              data-focus-key={relatedCard3FocusKey}
              data-stable-id="channelinfo-related-card-3"
            >
              <ChannelCard 
                title="Sample Channel 3"    
                thumbnailUrl="https://picsum.photos/300/300?3"
                onSelect={handleChannelSelect} 
              />
            </KeyboardWrapper>
            <KeyboardWrapper
              ref={relatedCard4Ref}
              data-focus-key={relatedCard4FocusKey}
              data-stable-id="channelinfo-related-card-4"
            >
              <ChannelCard 
                title="Sample Channel 4"    
                thumbnailUrl="https://picsum.photos/300/300?4"
                onSelect={handleChannelSelect} 
              />
            </KeyboardWrapper>
            <KeyboardWrapper
              ref={relatedCard5Ref}
              data-focus-key={relatedCard5FocusKey}
              data-stable-id="channelinfo-related-card-5"
            >
              <ChannelCard 
                title="Sample Channel 5"    
                thumbnailUrl="https://picsum.photos/300/300?5"
                onSelect={handleChannelSelect} 
              />
            </KeyboardWrapper>
          </ChannelRow>
        </div>
      </div>
      <AdBanner />
    </>
  );
}

export default ChannelInfo;