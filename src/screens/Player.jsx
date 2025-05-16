import React, { useEffect, useRef } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import '../styles/App.css';
import { Info, Like, SkipNext, PauseCircle } from 'stingray-icons';
import KeyboardWrapper from '../components/KeyboardWrapper';

function Player() {
  // Controls group (row) focus context
  const { ref: controlsGroupRef, focusKey: controlsGroupFocusKey } = useFocusable({
    focusable: false,
    trackChildren: true,
  });

  // Individual control buttons
  const { ref: infoRef, focusKey: infoFocusKey } = useFocusable({ focusable: true });
  const { ref: likeRef, focusKey: likeFocusKey } = useFocusable({ focusable: true });
  const { ref: skipRef, focusKey: skipFocusKey } = useFocusable({ focusable: true });
  const { ref: pauseRef, focusKey: pauseFocusKey, focusSelf: focusPause } = useFocusable({ focusable: true });

  // Always focus PauseCircle on mount
  useEffect(() => {
    focusPause();
  }, [focusPause]);

  return (
    <div className="app" style={{ position: 'relative', width: '100%', height: '100%', background: '#313131' }}>
      {/* Background gradient overlay (placeholder) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 44%, rgba(0,0,0,0.6) 100%)',
        zIndex: 1,
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 40,
        paddingTop: 60,
      }}>
        {/* Cover Art Placeholder */}
        <div style={{
          width: 360,
          height: 360,
          background: 'var(--color-outline-secondary)',
          borderRadius: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#888',
          fontSize: 32,
          fontFamily: 'var(--font-family-primary)',
          marginBottom: 30,
        }}>
        </div>

        {/* Channel Info Placeholder */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          marginBottom: 30,
        }}>
          <h1 style={{
            fontFamily: 'var(--font-family-secondary)',
            fontSize: 'var(--font-size-h1)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
            margin: 0,
          }}>
            Sample Channel Title
          </h1>
          <div style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-secondary)',
            maxWidth: 700,
            textAlign: 'center',
          }}>
            Sample channel description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        {/* Controls Row */}
        <div
          ref={controlsGroupRef}
          data-focus-key={controlsGroupFocusKey}
          style={{ display: 'flex', flexDirection: 'row', gap: 40, marginBottom: 30 }}
        >
          <KeyboardWrapper
            ref={infoRef}
            data-focus-key={infoFocusKey}
            data-stable-id="player-control-info"
          >
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <Info style={{ width: 64, height: 64, color: 'white' }} />
            </button>
          </KeyboardWrapper>
          <KeyboardWrapper
            ref={likeRef}
            data-focus-key={likeFocusKey}
            data-stable-id="player-control-like"
          >
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <Like style={{ width: 64, height: 64, color: 'white' }} />
            </button>
          </KeyboardWrapper>
          <KeyboardWrapper
            ref={skipRef}
            data-focus-key={skipFocusKey}
            data-stable-id="player-control-skip"
          >
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <SkipNext style={{ width: 64, height: 64, color: 'white' }} />
            </button>
          </KeyboardWrapper>
          <KeyboardWrapper
            ref={pauseRef}
            data-focus-key={pauseFocusKey}
            data-stable-id="player-control-pause"
          >
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <PauseCircle style={{ width: 64, height: 64, color: 'white' }} />
            </button>
          </KeyboardWrapper>
        </div>

        {/* Banner Ad Placeholder */}
        <div style={{
          width: 900,
          height: 80,
          background: 'rgba(255,255,255,0.5)',
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#222',
          fontSize: 40,
          fontWeight: 900,
          marginBottom: 30,
        }}>
          Banner Ad
        </div>

        {/* Logo Placeholder */}
        <div style={{
          position: 'absolute',
          top: 90,
          left: 90,
          width: 120,
          height: 40,
          background: '#fff',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#222',
          fontWeight: 700,
          fontSize: 24,
        }}>
          Logo
        </div>
      </div>
    </div>
  );
}

export default Player; 