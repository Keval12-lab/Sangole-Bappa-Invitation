import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { EVENT_DETAILS } from '@/utils/constants';
import { MandapToran } from '@/components/intro/MandapToran';
import { CeremonialMedallion } from '@/components/intro/CeremonialMedallion';
import { audioManager } from '@/utils/audioManager';
import './intro.css';

interface IntroSectionProps {
  isOpened: boolean;
  onOpeningStart?: () => void;
  onOpen: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ isOpened, onOpeningStart, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const leftCurtainRef = useRef<HTMLDivElement | null>(null);
  const rightCurtainRef = useRef<HTMLDivElement | null>(null);
  const centerContentRef = useRef<HTMLDivElement | null>(null);
  const invocationRef = useRef<HTMLDivElement | null>(null);
  const emblemRef = useRef<HTMLDivElement | null>(null);
  const highlightGlowRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const centerGlowRef = useRef<HTMLDivElement | null>(null);
  const seamGlowRef = useRef<HTMLDivElement | null>(null);
  const leftGatherRef = useRef<HTMLDivElement | null>(null);
  const rightGatherRef = useRef<HTMLDivElement | null>(null);

  // Gentle initial load animation for Ganesha Emblem
  useEffect(() => {
    if (emblemRef.current && !isOpened) {
      gsap.fromTo(
        emblemRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', delay: 0.1 }
      );
    }
  }, [isOpened]);

  const handleTapToOpen = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);
    onOpeningStart?.();

    // Prepare / unlock devotional audio playback within user gesture context (safe isolation)
    try {
      audioManager.prepare();
    } catch {
      // Audio is an enhancement, never block curtain opening
    }

    // FIX: Safely remove focus from the CTA before the Intro root becomes aria-hidden.
    // This prevents the Chrome accessibility warning: "Blocked aria-hidden on an element because its descendant retained focus."
    try {
      if (ctaRef.current) {
        ctaRef.current.blur();
      }
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    } catch {
      // Safe fallback
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Release will-change hints upon completion to conserve GPU memory
        if (leftCurtainRef.current) leftCurtainRef.current.style.willChange = 'auto';
        if (rightCurtainRef.current) rightCurtainRef.current.style.willChange = 'auto';
        if (centerGlowRef.current) centerGlowRef.current.style.willChange = 'auto';

        // Exact timeline milestone: curtain opening completes, hands off to Hero
        try {
          audioManager.play();
        } catch {
          // Safe fallback
        }

        onOpen();
      },
    });

    // 0.00s: CTA tactile press
    tl.to(
      ctaRef.current,
      {
        scale: 0.95,
        duration: 0.1,
        ease: 'power1.inOut',
      },
      0
    );

    // 0.10s: Ambient loops paused via .is-opening class

    // 0.12s - 0.24s: STAGE 1 — TENSION / PRE-PULL
    // Center edges pull inward by a tiny amount before opening (physical fabric tension)
    tl.to(
      leftCurtainRef.current,
      {
        scaleX: 1.015,
        xPercent: 1.2,
        duration: 0.12,
        ease: 'power1.in',
      },
      0.12
    );

    tl.to(
      rightCurtainRef.current,
      {
        scaleX: 1.015,
        xPercent: -1.2,
        duration: 0.12,
        ease: 'power1.in',
      },
      0.12
    );

    // CTA fades out smoothly
    tl.to(
      ctaRef.current,
      {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      },
      0.15
    );

    // Center seam separates naturally and fades out
    if (seamGlowRef.current) {
      tl.to(
        seamGlowRef.current,
        {
          opacity: 0,
          scaleX: 0.5,
          duration: 0.2,
          ease: 'power2.in',
        },
        0.24
      );
    }

    // 0.24s - 1.55s: STAGE 2 & 3 — INITIAL PARTING & FABRIC GATHERING
    // Left curtain: Outer edge anchored at 0% 0%.
    // Travels left and gathers: xPercent to -72%, scaleX to 0.72 (compresses by 28%, keeping lush fold density)
    tl.to(
      leftCurtainRef.current,
      {
        scaleX: 0.72,
        xPercent: -72,
        duration: 1.35,
        ease: 'power3.inOut',
        force3D: true,
      },
      0.24
    );

    // Right curtain: Outer edge anchored at 100% 0%.
    // Travels right and gathers: xPercent to +72%, scaleX to 0.72
    tl.to(
      rightCurtainRef.current,
      {
        scaleX: 0.72,
        xPercent: 72,
        duration: 1.35,
        ease: 'power3.inOut',
        force3D: true,
      },
      0.24
    );

    // Secondary motion: Bottom fringe / tassel inertia (lagging behind pull, then swinging forward)
    tl.to(
      leftCurtainRef.current,
      {
        skewY: 1.8,
        duration: 0.55,
        ease: 'power2.out',
      },
      0.25
    );
    tl.to(
      leftCurtainRef.current,
      {
        skewY: -0.6,
        duration: 0.55,
        ease: 'power2.inOut',
      },
      0.80
    );
    tl.to(
      leftCurtainRef.current,
      {
        skewY: 0,
        duration: 0.45,
        ease: 'power2.out',
      },
      1.35
    );

    tl.to(
      rightCurtainRef.current,
      {
        skewY: -1.8,
        duration: 0.55,
        ease: 'power2.out',
      },
      0.25
    );
    tl.to(
      rightCurtainRef.current,
      {
        skewY: 0.6,
        duration: 0.55,
        ease: 'power2.inOut',
      },
      0.80
    );
    tl.to(
      rightCurtainRef.current,
      {
        skewY: 0,
        duration: 0.45,
        ease: 'power2.out',
      },
      1.35
    );

    // Gather shadows deepen as fabric bunches up into dense folds
    if (leftGatherRef.current && rightGatherRef.current) {
      tl.to(
        [leftGatherRef.current, rightGatherRef.current],
        {
          opacity: 0.7,
          duration: 1.0,
          ease: 'power2.inOut',
        },
        0.35
      );
    }

    // 0.30s: Center sacred warm light softly illuminates behind opening (subtle, non-dominant)
    if (centerGlowRef.current) {
      tl.to(
        centerGlowRef.current,
        {
          opacity: 0.4,
          scale: 1.15,
          duration: 0.7,
          ease: 'power2.out',
        },
        0.30
      );
    }

    // 0.35s: Sacred Invocation fades smoothly with slight upward drift
    if (invocationRef.current) {
      tl.to(
        invocationRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.35,
          ease: 'power2.out',
        },
        0.35
      );
    }

    // 0.38s: Intro emblem and aura fade smoothly as curtains part to unveil the Hero portrait underneath
    tl.to(
      [emblemRef.current, highlightGlowRef.current],
      {
        opacity: 0,
        scale: 0.95,
        duration: 0.35,
        ease: 'power2.out',
      },
      0.38
    );

    // 1.55s - 1.95s: STAGE 4 — HEAVY-FABRIC FOLLOW THROUGH & SETTLE (Inertia overshoot)
    // Left curtain overshoots slightly to -75% / scaleX 0.69, then settles to -71% / scaleX 0.72
    // Leaving approximately 14% of the curtain visible as a ceremonial frame!
    tl.to(
      leftCurtainRef.current,
      {
        scaleX: 0.69,
        xPercent: -75,
        duration: 0.2,
        ease: 'power1.out',
      },
      1.59
    );
    tl.to(
      leftCurtainRef.current,
      {
        scaleX: 0.72,
        xPercent: -71,
        duration: 0.25,
        ease: 'power2.inOut',
      },
      1.79
    );

    // Right curtain overshoots slightly to +75% / scaleX 0.69, then settles to +71% / scaleX 0.72
    tl.to(
      rightCurtainRef.current,
      {
        scaleX: 0.69,
        xPercent: 75,
        duration: 0.2,
        ease: 'power1.out',
      },
      1.59
    );
    tl.to(
      rightCurtainRef.current,
      {
        scaleX: 0.72,
        xPercent: 71,
        duration: 0.25,
        ease: 'power2.inOut',
      },
      1.79
    );

    // Center glow softens to 0 as curtains finish settling
    if (centerGlowRef.current) {
      tl.to(
        centerGlowRef.current,
        {
          opacity: 0,
          duration: 0.35,
          ease: 'power2.out',
        },
        1.65
      );
    }

    // Temple floor shadows fade to clear the view for HeroSection
    const floorEl = rootRef.current?.querySelector('.temple-bottom-floor');
    if (floorEl) {
      tl.to(
        floorEl,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        1.65
      );
    }
  };

  return (
    <section
      ref={rootRef}
      className={`curtain-entry-root ${isOpening ? 'is-opening' : ''} ${isOpened ? 'is-opened' : ''}`}
      aria-label="Ceremonial Royal Indian Temple Mandap Entrance"
      aria-hidden={isOpened}
    >
      {/* 01. Sacred Divine Sanctum Interior Glow behind the curtains */}
      <div ref={centerGlowRef} className="curtain-sanctum-glow" aria-hidden="true" />

      {/* 02. Left Heavy Velvet Curtain Panel */}
      <div ref={leftCurtainRef} className="curtain-panel left-curtain">
        <div className="curtain-velvet-photo left-photo" />
        <div className="curtain-velvet-ambient-shadow" />
        <div ref={leftGatherRef} className="curtain-velvet-gather-shadow left-gather" />
      </div>

      {/* 03. Vertical Center Seam Light */}
      <div ref={seamGlowRef} className="curtain-center-seam-glow" aria-hidden="true" />

      {/* 04. Right Heavy Velvet Curtain Panel */}
      <div ref={rightCurtainRef} className="curtain-panel right-curtain">
        <div className="curtain-velvet-photo right-photo" />
        <div className="curtain-velvet-ambient-shadow" />
        <div ref={rightGatherRef} className="curtain-velvet-gather-shadow right-gather" />
      </div>

      {/* 05. Ancient Carved Temple Stone Pillars (Framing Left & Right) */}
      <div className="temple-arch-pillar pillar-left" aria-hidden="true" />
      <div className="temple-arch-pillar pillar-right" aria-hidden="true" />

      {/* 06. Realistic Mandap Toran Archway & Hanging Antique Brass Bells */}
      <div className="temple-top-archway" aria-hidden="true">
        <div className="temple-cornice-bar" />
        <MandapToran className="temple-mandap-toran" />
      </div>

      {/* 07. Sacred Center Stack: Refined Mantra Invocation & Circular Ceremonial Medallion */}
      <div ref={centerContentRef} className="curtain-center-content entry-center-stack">
        {/* Sacred Mantra Invocation with Symmetrical Ornamental Lines */}
        <div ref={invocationRef} className="curtain-invocation-container">
          <div className="invocation-flourish-bar top" aria-hidden="true">
            <span className="flourish-line left" />
            <span className="flourish-diamond">❖</span>
            <span className="flourish-line right" />
          </div>

          <div className="curtain-invocation-pill">
            <span className="invocation-mantra font-devanagari">{EVENT_DETAILS.invocation}</span>
          </div>

          <div className="invocation-flourish-bar bottom" aria-hidden="true">
            <span className="flourish-line left" />
            <span className="flourish-diamond">❖</span>
            <span className="flourish-line right" />
          </div>
        </div>

        {/* Circular Ceremonial Temple Door Medallion (Interactive CTA) */}
        <div ref={emblemRef} className="curtain-medallion-container">
          <div ref={highlightGlowRef} className="emblem-gold-highlight-glow" aria-hidden="true" />
          <button
            ref={ctaRef}
            type="button"
            className="curtain-cta-plaque curtain-cta-medallion"
            onClick={handleTapToOpen}
            disabled={isOpening}
            aria-label="Tap to open royal invitation and enter the sacred sanctum"
          >
            <CeremonialMedallion isPressed={isOpening} />
          </button>
        </div>
      </div>

      {/* 08. Ceremonial Temple Stone Floor & Diya Glow at Bottom */}
      <div className="temple-bottom-floor" aria-hidden="true">
        <div className="temple-floor-shadow" />
        <div className="temple-floor-reflection" />
      </div>
    </section>
  );
};

export default IntroSection;
