import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { audioManager, AudioState } from '@/utils/audioManager';

interface AudioControllerProps {
  isOpened: boolean;
}

export const AudioController: React.FC<AudioControllerProps> = ({ isOpened }) => {
  const [audioState, setAudioState] = useState<AudioState>(() => audioManager.getState());

  useEffect(() => {
    const unsubscribe = audioManager.subscribe((state) => {
      setAudioState(state);
    });
    return unsubscribe;
  }, []);

  // Hidden until user taps to open and Intro hands off to Hero
  if (!isOpened) return null;

  const isPlayingAndAudible = audioState.isPlaying && !audioState.isMuted;

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    audioManager.toggleMute();
  };

  return (
    <button
      type="button"
      id="devotional-audio-toggle"
      onClick={handleToggle}
      aria-label={isPlayingAndAudible ? 'Mute devotional music' : 'Unmute devotional music'}
      title={isPlayingAndAudible ? 'Mute devotional music' : 'Unmute devotional music'}
      style={{
        position: 'fixed',
        top: 'calc(var(--safe-top) + 16px)',
        right: 'calc(var(--safe-right) + 16px)',
        zIndex: 1200,
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(20, 3, 6, 0.75)',
        border: '1px solid var(--gold-border)',
        color: 'var(--gold-light)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
      }}
    >
      {isPlayingAndAudible ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};

