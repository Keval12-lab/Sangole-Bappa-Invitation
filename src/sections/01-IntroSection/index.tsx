import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { EVENT_DETAILS } from '@/utils/constants';
import { GaneshaEmblem } from '@/components/common/GaneshaEmblem';
import { MandapToran } from '@/components/intro/MandapToran';
import './intro.css';

interface IntroSectionProps {
  isOpened: boolean;
  onOpen: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ isOpened, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const leftCurtainRef = useRef<HTMLDivElement | null>(null);
  const rightCurtainRef = useRef<HTMLDivElement | null>(null);
  const centerContentRef = useRef<HTMLDivElement | null>(null);
  const invocationRef = useRef<HTMLDivElement | null>(null);
  const emblemRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const centerGlowRef = useRef<HTMLDivElement | null>(null);
  const seamGlowRef = useRef<HTMLDivElement | null>(null);
  const petalsRef = useRef<HTMLDivElement | null>(null);

  // Gentle initial load animation for the Ganesha Emblem & ambient scene
  useEffect(() => {
    if (emblemRef.current && !isOpened) {
      gsap.fromTo(
        emblemRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out', delay: 0.15 }
      );
    }
  }, [isOpened]);

  const handleTapToOpen = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onOpen();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        onOpen();
      },
    });

    // 1. CTA Plaque press and smooth fade/contract
    tl.to(ctaRef.current, {
      opacity: 0,
      scale: 0.94,
      duration: 0.35,
      ease: 'power2.in',
    });

    // 2. Emblem gains a warm-gold highlight & subtle scale before parting
    tl.to(
      emblemRef.current,
      {
        scale: 0.94,
        filter: 'drop-shadow(0 0 35px rgba(255, 220, 90, 0.95)) drop-shadow(0 0 25px rgba(217, 4, 41, 0.85))',
        duration: 0.4,
        ease: 'power2.out',
      },
      '<'
    );

    // 3. Invocation and Emblem fade out smoothly as curtain parts
    tl.to(
      [invocationRef.current, emblemRef.current],
      {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in',
      },
      '+=0.08'
    );

    // 4. Seam glow flares and central divine sanctum light blooms
    tl.to(
      seamGlowRef.current,
      {
        opacity: 0.9,
        width: '12px',
        duration: 0.45,
        ease: 'power2.out',
      },
      '-=0.2'
    );

    tl.to(
      centerGlowRef.current,
      {
        opacity: 0.98,
        scale: 2.3,
        duration: 0.9,
        ease: 'power2.out',
      },
      '<0.1'
    );

    // 5. Left & Right Heavy Velvet Curtains part smoothly with heavy fabric physics easing
    tl.to(
      leftCurtainRef.current,
      {
        xPercent: -105,
        duration: 1.8,
        ease: 'power2.inOut',
      },
      '-=0.25'
    );

    tl.to(
      rightCurtainRef.current,
      {
        xPercent: 105,
        duration: 1.8,
        ease: 'power2.inOut',
      },
      '<'
    );

    // 6. Release delicate floating flower petals
    if (petalsRef.current) {
      const petalElements = petalsRef.current.querySelectorAll('.curtain-petal');
      tl.to(
        petalElements,
        {
          opacity: 0.9,
          y: 'random(60, 220)',
          x: 'random(-80, 80)',
          rotation: 'random(-100, 100)',
          duration: 1.8,
          stagger: 0.04,
          ease: 'power1.out',
        },
        '-=1.5'
      );
    }

    // 7. Smooth fade of entire root container to reveal Ganpati Hero underneath
    tl.to(
      rootRef.current,
      {
        opacity: 0,
        duration: 0.55,
        ease: 'power2.out',
      },
      '-=0.35'
    );
  };

  // 8 natural scattered flower petals (Kesari, Gold, Rose)
  const petals = [
    { color: '#FF7700', left: '47%', width: 14, height: 16 },
    { color: '#FFB703', left: '51%', width: 12, height: 14 },
    { color: '#C1121F', left: '49%', width: 15, height: 17 },
    { color: '#FF7700', left: '53%', width: 13, height: 15 },
    { color: '#FFB703', left: '45%', width: 11, height: 13 },
    { color: '#C1121F', left: '52%', width: 14, height: 16 },
    { color: '#FFA200', left: '48%', width: 13, height: 14 },
    { color: '#FF7700', left: '50%', width: 15, height: 15 },
  ];

  return (
    <section
      ref={rootRef}
      className={`curtain-entry-root ${isOpened ? 'is-opened' : ''}`}
      aria-label="Ceremonial Royal Indian Temple Mandap Entrance"
      aria-hidden={isOpened}
    >
      {/* 01. Sacred Divine Sanctum Interior Glow behind the curtains */}
      <div ref={centerGlowRef} className="curtain-sanctum-glow" aria-hidden="true" />

      {/* 02. Left Heavy Velvet Curtain Panel */}
      <div ref={leftCurtainRef} className="curtain-panel left-curtain">
        <div className="curtain-velvet-photo left-photo" />
        <div className="curtain-velvet-ambient-shadow" />
      </div>

      {/* 03. Vertical Center Seam Light (Subtle sacred architectural seam) */}
      <div ref={seamGlowRef} className="curtain-center-seam-glow" aria-hidden="true" />

      {/* 04. Right Heavy Velvet Curtain Panel */}
      <div ref={rightCurtainRef} className="curtain-panel right-curtain">
        <div className="curtain-velvet-photo right-photo" />
        <div className="curtain-velvet-ambient-shadow" />
      </div>

      {/* 05. Ancient Carved Temple Stone Pillars (Framing Left & Right) */}
      <div className="temple-arch-pillar pillar-left" aria-hidden="true" />
      <div className="temple-arch-pillar pillar-right" aria-hidden="true" />

      {/* 06. Realistic Mandap Toran Archway & Hanging Antique Brass Bells */}
      <div className="temple-top-archway" aria-hidden="true">
        <div className="temple-cornice-bar" />
        <MandapToran className="temple-mandap-toran" />
      </div>

      {/* 07. Sacred Center Stack: Mantra, Emblem, and Luxury Invitation Plaque */}
      <div ref={centerContentRef} className="curtain-center-content entry-center-stack">
        {/* Mantra Invocation */}
        <div ref={invocationRef} className="curtain-invocation">
          <span className="invocation-mark">꧁</span>
          <span className="invocation-mantra">{EVENT_DETAILS.invocation}</span>
          <span className="invocation-mark">꧂</span>
        </div>

        {/* Custom Sacred Ganesha Emblem with Multi-Layered Glow & Contrast Backplate */}
        <div ref={emblemRef} className="curtain-ganesha-emblem-container">
          <GaneshaEmblem className="entry-ganesha-emblem" isPressed={isOpening} />
        </div>

        {/* Luxury Ceremonial Invitation Plaque */}
        <button
          ref={ctaRef}
          type="button"
          className="curtain-cta-plaque"
          onClick={handleTapToOpen}
          disabled={isOpening}
          aria-label="Tap to open royal invitation"
        >
          {/* Subtle engraved corner filigree notches */}
          <span className="plaque-corner top-left" aria-hidden="true" />
          <span className="plaque-corner top-right" aria-hidden="true" />
          <span className="plaque-corner bottom-left" aria-hidden="true" />
          <span className="plaque-corner bottom-right" aria-hidden="true" />

          {/* Shimmer reflection layer */}
          <span className="plaque-shimmer-sweep" aria-hidden="true" />

          <span className="curtain-cta-title">TAP TO OPEN</span>
          <span className="curtain-cta-sub">— INVITATION —</span>

          <div className="curtain-pointer-wrapper" aria-hidden="true">
            <span className="curtain-pointer-ripple" />
            <div className="curtain-pointer-circle">
              <svg
                className="curtain-pointer-icon"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* 08. Ceremonial Temple Stone Floor & Diya Glow at Bottom */}
      <div className="temple-bottom-floor" aria-hidden="true">
        <div className="temple-floor-shadow" />
        <div className="temple-floor-reflection" />
      </div>

      {/* 09. Celebration Floating Petals */}
      <div ref={petalsRef} className="curtain-petals-container" aria-hidden="true">
        {petals.map((petal, index) => (
          <span
            key={index}
            className="curtain-petal"
            style={{
              left: petal.left,
              width: `${petal.width}px`,
              height: `${petal.height}px`,
              backgroundColor: petal.color,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
