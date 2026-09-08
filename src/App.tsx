import React, { useState, useEffect } from 'react';
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
  const [isOpening, setIsOpening] = useState(false);

  // Prevent background page scrolling while the Entry Gate curtains are closed
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpened]);

  const handleOpeningStart = () => {
    setIsOpening(true);
  };

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  return (
    <>
      {/* Devotional Audio Ambience Control */}
      <AudioController isOpened={isOpened} />

      {/* 01. Intro / Tap to Open Gate */}
      <IntroSection
        isOpened={isOpened}
        onOpeningStart={handleOpeningStart}
        onOpen={handleOpenInvitation}
      />

      {/* Main Mobile-First Invitation Experience */}
      <main className="app-container">
        {/* 02. Main Ganpati Hero */}
        <HeroSection isOpening={isOpening} isOpened={isOpened} />

        <div className="section-ceremonial-bridge" aria-hidden="true" />

        {/* 03. Event Details */}
        <EventSection />

        <div className="section-ceremonial-bridge" aria-hidden="true" />

        {/* 04. Main Attraction / Dhol Tasha */}
        <AttractionSection />

        <div className="section-ceremonial-bridge" aria-hidden="true" />

        {/* 05. Location / Maps */}
        <LocationSection />

        <div className="section-ceremonial-bridge" aria-hidden="true" />

        {/* 06. Final Aagman Sohala Closing */}
        <ClosingSection />
      </main>
    </>
  );
};

export default App;
