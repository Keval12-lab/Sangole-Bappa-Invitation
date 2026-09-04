import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioControllerProps {
  isOpened: boolean;
}

export const AudioController: React.FC<AudioControllerProps> = ({ isOpened }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Hidden until user taps to open
  if (!isOpened) return null;

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggleAudio}
      aria-label={isPlaying ? 'Mute devotional music' : 'Play devotional music'}
      style={{
        position: 'fixed',
        top: 'calc(var(--safe-top) + 16px)',
        right: 'calc(var(--safe-right) + 16px)',
        zIndex: 90,
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
        transition: 'transform 0.2s ease',
      }}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};
