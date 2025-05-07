import React, { useEffect, useRef } from 'react';
import { ChannelCard, Button } from '@smtv/tv-component-library';
import Header from '../components/Header';
import '../styles/App.css';
import ChannelRow from '../components/ChannelRow';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import KeyboardWrapper from '../components/KeyboardWrapper';

function ChannelInfo({ channel }) {
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

  // Set initial focus to Play button on mount
  useEffect(() => {
    focusPlay();
  }, [focusPlay]);

  const handleChannelSelect = () => {
    console.log('Channel selected');
  };

  return (
    <div className="app" style={{ padding: '100px 100px 0px', display: 'flex', flexDirection: 'column', gap: 15 }}>
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
            >
              <Button>
                Play
              </Button>
            </KeyboardWrapper>
            <KeyboardWrapper
              ref={favRef}
              data-focus-key={favFocusKey}
              data-stable-id="channelinfo-action-fav"
            >
              <Button variant="secondary">
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
          <div style={{ display: 'flex', gap: 16 }}>
            <Button variant="secondary">All</Button>
            <Button variant="secondary">Popular</Button>
            <Button variant="secondary">Recommended</Button>
            <Button variant="secondary">New</Button>
            <Button variant="secondary">Favorites</Button>
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
        <ChannelRow>
          <ChannelCard 
            title="Sample Channel 1"    
            thumbnailUrl="https://picsum.photos/300/300?1"
            onSelect={handleChannelSelect} 
          />
          <ChannelCard 
            title="Sample Channel 2"    
            thumbnailUrl="https://picsum.photos/300/300?2"
            onSelect={handleChannelSelect} 
          />
          <ChannelCard 
            title="Sample Channel 3"    
            thumbnailUrl="https://picsum.photos/300/300?3"
            onSelect={handleChannelSelect} 
          />
          <ChannelCard 
            title="Sample Channel 4"    
            thumbnailUrl="https://picsum.photos/300/300?4"
            onSelect={handleChannelSelect} 
          />
          <ChannelCard 
            title="Sample Channel 5"    
            thumbnailUrl="https://picsum.photos/300/300?5"
            onSelect={handleChannelSelect} 
          />
        </ChannelRow>
      </div>
    </div>
  );
}

export default ChannelInfo;