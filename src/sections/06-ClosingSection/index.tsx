import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { EVENT_DETAILS } from '@/utils/constants';
import { SanctumDiyas } from '@/components/closing/SanctumDiyas';
import { SanctumPetals } from '@/components/closing/SanctumPetals';
import './closing.css';

export const ClosingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const atmosphereRef = useRef<HTMLDivElement | null>(null);
  const sanctumGlowRef = useRef<HTMLDivElement | null>(null);
  const sacredRingRef = useRef<HTMLDivElement | null>(null);
  const bappaRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const diyasRef = useRef<HTMLDivElement | null>(null);
  const petalsRef = useRef<HTMLDivElement | null>(null);
  const creditRef = useRef<HTMLDivElement | null>(null);
  const sealRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctx = gsap.context(() => {
              const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

              // 0.00: Dark sanctum atmosphere fades in
              tl.fromTo(
                atmosphereRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8 },
                0
              );

              // 0.20: Warm sanctum light begins
              tl.fromTo(
                sanctumGlowRef.current,
                { opacity: 0, scale: 0.82 },
                { opacity: 1, scale: 1, duration: 1.15, ease: 'sine.out' },
                0.20
              );

              // 0.45: Sacred mandala ring reveal
              tl.fromTo(
                sacredRingRef.current,
                { opacity: 0, scale: 0.92, rotation: -4 },
                { opacity: 0.38, scale: 1, rotation: 0, duration: 1.1, ease: 'power2.out' },
                0.45
              );

              // 0.70: Bappa darshan reveal
              tl.fromTo(
                bappaRef.current,
                { opacity: 0, scale: 0.94, y: 12 },
                { opacity: 0.96, scale: 1, y: 0, duration: 1.1, ease: 'power2.out' },
                0.70
              );

              // 1.00: Primary title reveal ("आगमन सोहळा")
              tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.85, ease: 'power2.out' },
                1.00
              );

              // 1.25: Subtitle reveal ("तो येतोय... एका नविन स्वरूपात")
              tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 10 },
                { opacity: 0.92, y: 0, duration: 0.75, ease: 'power2.out' },
                1.25
              );

              // 1.50: Diyas illuminate on sanctum floor
              tl.fromTo(
                diyasRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                1.50
              );

              // 1.75: Subtle petals settle into place
              tl.fromTo(
                petalsRef.current,
                { opacity: 0, y: -10 },
                { opacity: 0.85, y: 0, duration: 0.9, ease: 'power1.out' },
                1.75
              );

              // 2.10: Created by Keval Rathod appears
              tl.fromTo(
                creditRef.current,
                { opacity: 0, y: 6 },
                { opacity: 0.72, y: 0, duration: 0.75, ease: 'power2.out' },
                2.10
              );

              // 2.40: Final ornamental seal settles
              tl.fromTo(
                sealRef.current,
                { opacity: 0, scale: 0.85 },
                { opacity: 0.65, scale: 1, duration: 0.6, ease: 'power2.out' },
                2.40
              );
            }, sectionRef);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <footer ref={sectionRef} className="section-closing" aria-label="Closing Blessing and Darshan">
      {/* 01. Background Atmosphere & Warm Sanctum Illumination */}
      <div ref={atmosphereRef} className="closing-atmosphere" aria-hidden="true">
        <div ref={sanctumGlowRef} className="closing-sanctum-glow" />
        <div className="closing-upper-atmosphere" />
        <div className="closing-floor-ambience" />
      </div>

      {/* 02. Subtle Outer Sanctum Petals (4-6 discrete elements on periphery) */}
      <div ref={petalsRef} className="closing-petals-wrapper" aria-hidden="true">
        <SanctumPetals />
      </div>

      {/* 03. Existing Sacred Antique-Gold Temple Mandala Ring */}
      <div ref={sacredRingRef} className="closing-sacred-ring-wrapper" aria-hidden="true">
        <svg viewBox="0 0 400 400" className="closing-sacred-ring-svg" fill="none">
          {/* Concentric Geometric Temple Borders */}
          <circle cx="200" cy="200" r="190" stroke="#C9A227" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="200" cy="200" r="182" stroke="#FFD700" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.3" />
          <circle cx="200" cy="200" r="160" stroke="#C9A227" strokeWidth="0.8" strokeOpacity="0.22" />
          <circle cx="200" cy="200" r="126" stroke="#C9A227" strokeWidth="0.6" strokeOpacity="0.16" />

          {/* Symmetrical 8-Directional Radiating Temple Rays */}
          <g stroke="#C9A227" strokeWidth="0.8" strokeOpacity="0.3">
            <line x1="200" y1="8" x2="200" y2="24" />
            <line x1="200" y1="376" x2="200" y2="392" />
            <line x1="8" y1="200" x2="24" y2="200" />
            <line x1="376" y1="200" x2="392" y2="200" />
            <line x1="64" y1="64" x2="76" y2="76" />
            <line x1="324" y1="324" x2="336" y2="336" />
            <line x1="64" y1="336" x2="76" y2="324" />
            <line x1="324" y1="76" x2="336" y2="64" />
          </g>

          {/* Symmetrical Subtle Accent Diamond Markers */}
          <g fill="#FFE58F" fillOpacity="0.4">
            <circle cx="200" cy="28" r="2" />
            <circle cx="200" cy="372" r="2" />
            <circle cx="28" cy="200" r="2" />
            <circle cx="372" cy="200" r="2" />
          </g>
        </svg>
      </div>

      {/* 04. Central Sacred Darshan Composition */}
      <div className="closing-content-container">
        {/* Authentic Bappa Idol Presence */}
        <div ref={bappaRef} className="closing-bappa-wrapper">
          <img
            src={EVENT_DETAILS.assets.ganpatiHero}
            alt="Lalbaugcha Raja Shree Ganesha Final Darshan"
            className="closing-bappa-img"
            loading="lazy"
          />
        </div>

        {/* Primary Ceremonial Title */}
        <h2 ref={titleRef} className="closing-title font-devanagari text-gold-gradient">
          आगमन सोहळा
        </h2>

        {/* Supporting Line */}
        <p ref={subtitleRef} className="closing-subtitle font-devanagari">
          तो येतोय... एका नविन स्वरूपात
        </p>
      </div>

      {/* 05. Lower Temple Sanctum Floor with Exactly 3 Brass Diyas */}
      <div ref={diyasRef} className="closing-sanctum-altar-area">
        <SanctumDiyas />
      </div>

      {/* 06. Final Elegant Creator Credit Signature */}
      <div ref={creditRef} className="closing-creator-credit">
        <span>Created By Keval Rathod</span>
      </div>

      {/* 07. Tiny Ceremonial Concluding Seal */}
      <div ref={sealRef} className="closing-concluding-seal" aria-hidden="true">
        <svg viewBox="0 0 64 14" fill="none" className="closing-seal-svg">
          {/* Subtle Wing Lines */}
          <line x1="2" y1="7" x2="22" y2="7" stroke="#C9A227" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="42" y1="7" x2="62" y2="7" stroke="#C9A227" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Flanking Beads */}
          <circle cx="25" cy="7" r="1.2" fill="#E5BD47" fillOpacity="0.7" />
          <circle cx="39" cy="7" r="1.2" fill="#E5BD47" fillOpacity="0.7" />

          {/* Central Sacred Diamond */}
          <path d="M 32 2 L 36 7 L 32 12 L 28 7 Z" fill="#C9A227" fillOpacity="0.85" />
          <circle cx="32" cy="7" r="1.2" fill="#FFFCE6" />
        </svg>
      </div>
    </footer>
  );
};

export default ClosingSection;
