import React, { useState } from 'react';
import { IntroSection } from '@/sections/01-IntroSection';
import { HeroSection } from '@/sections/02-HeroSection';
import { EventSection } from '@/sections/03-EventSection';
import { AttractionSection } from '@/sections/04-AttractionSection';
import { LocationSection } from '@/sections/05-LocationSection';
import { ClosingSection } from '@/sections/06-ClosingSection';
import { AudioController } from '@/components/common/AudioController';
import '@/styles/globals.css';

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  return (
    <>
      {/* Devotional Audio Ambience Control */}
      <AudioController isOpened={isOpened} />

      {/* 01. Intro / Tap to Open Gate */}
      <IntroSection isOpened={isOpened} onOpen={handleOpenInvitation} />

      {/* Main Mobile-First Invitation Experience */}
      <main className="app-container">
        {/* 02. Main Ganpati Hero */}
        <HeroSection />

        {/* 03. Event Details */}
        <EventSection />

        {/* 04. Main Attraction / Dhol Tasha */}
        <AttractionSection />

        {/* 05. Location / Maps */}
        <LocationSection />

        {/* 06. Final Aagman Sohala Closing */}
        <ClosingSection />
      </main>
    </>
  );
};

export default App;
