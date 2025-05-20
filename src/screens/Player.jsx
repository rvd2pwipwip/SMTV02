import React, { useEffect } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import '../styles/App.css';
import { Info, Like, SkipNext, PauseCircle } from 'stingray-icons';
import stingrayMusicLogo from '../assets/svg/stingrayMusic.svg';
import KeyboardWrapper from '../components/KeyboardWrapper';
import { Button } from '@smtv/tv-component-library';
import { TRANS_BTN_ICON_SIZE } from '../constants/ui';
import AdBanner from '../components/AdBanner';

function Player() {
  // Focusable action buttons for header
  const { ref: infoRef, focusKey: infoFocusKey } = useFocusable({ focusable: true });
  const { ref: likeRef, focusKey: likeFocusKey } = useFocusable({ focusable: true });
  // Controls row (PauseCircle, etc.)
  const { ref: controlsGroupRef, focusKey: controlsGroupFocusKey } = useFocusable({ focusable: false, trackChildren: true });
  const { ref: skipRef, focusKey: skipFocusKey } = useFocusable({ focusable: true });
  const { ref: pauseRef, focusKey: pauseFocusKey, focusSelf: focusPause } = useFocusable({ focusable: true });

  // Always focus PauseCircle on mount
  useEffect(() => {
    focusPause();
  }, [focusPause]);

  return (
    <>
      {/* Player Header */}
      <div style={{
        position: 'relative',
        width: '100vw',
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
        boxSizing: 'border-box',
      }}>
        {/* Absolute logo */}
        <div style={{
          position: 'absolute',
          left: 80,
          top: 40,
          width: 245,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          zIndex: 2,
        }}>
          <img src={stingrayMusicLogo} alt="Stingray Music" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Centered channel title */}
        <h1 style={{
          fontFamily: 'var(--font-family-secondary)',
          fontSize: 'var(--font-size-h3)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
          margin: 0,
          textAlign: 'center',
          zIndex: 1,
        }}>
          Sample Channel Title
        </h1>
        {/* Centered action buttons row */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}>
          <KeyboardWrapper
            ref={infoRef}
            data-focus-key={infoFocusKey}
            data-stable-id="player-header-action-info"
            onSelect={() => {}}
          >
            <Button
              icon={<Info size={TRANS_BTN_ICON_SIZE}/>}
              showIcon
              size="medium"
              variant="transparent"
            >
            </Button>
          </KeyboardWrapper>
          <KeyboardWrapper
            ref={likeRef}
            data-focus-key={likeFocusKey}
            data-stable-id="player-header-action-like"
            onSelect={() => {}}
          >
            <Button
              icon={<Like size={TRANS_BTN_ICON_SIZE}/>}
              showIcon
              size="medium"
              variant="transparent"
            >
            </Button>
          </KeyboardWrapper>
        </div>
      </div>

      {/* Main content below header */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // height: 'calc(100% - 200px)',
        // gap: 40,
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
          360x360
        </div>

        {/* Channel Info Placeholder */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          marginBottom: 30,
        }}>
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

        {/* Logo Placeholder (moved out of main content) */}
      </div>
      <AdBanner />
    </>
  );
}

export default Player; 