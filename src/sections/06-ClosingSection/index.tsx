import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { EVENT_DETAILS } from '@/utils/constants';
import './closing.css';

export const ClosingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const atmosphereRef = useRef<HTMLDivElement | null>(null);
  const sanctumGlowRef = useRef<HTMLDivElement | null>(null);
  const sacredRingRef = useRef<HTMLDivElement | null>(null);
  const bappaRef = useRef<HTMLDivElement | null>(null);
  const topDividerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const bottomDividerRef = useRef<HTMLDivElement | null>(null);
  const creditRef = useRef<HTMLDivElement | null>(null);

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

              // 1. Atmosphere fades in
              tl.fromTo(
                atmosphereRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8 },
                0
              );

              // 2. Sacred mandala ring reveals
              tl.fromTo(
                sacredRingRef.current,
                { opacity: 0, scale: 0.92, rotation: -6 },
                { opacity: 0.35, scale: 1, rotation: 0, duration: 1.1, ease: 'power2.out' },
                0.1
              );

              // 3. Subtle sanctum glow appears
              tl.fromTo(
                sanctumGlowRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1.0, ease: 'sine.out' },
                0.25
              );

              // 4. Subtle Bappa idol presence reveals
              tl.fromTo(
                bappaRef.current,
                { opacity: 0, scale: 0.94, y: 10 },
                { opacity: 0.9, scale: 1, y: 0, duration: 1.1, ease: 'power2.out' },
                0.4
              );

              // 5. Top ornamental divider settles
              tl.fromTo(
                topDividerRef.current,
                { opacity: 0, scaleX: 0.7 },
                { opacity: 0.7, scaleX: 1, duration: 0.7 },
                0.65
              );

              // 6. Final title "आगमन सोहळा" reveals
              tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.85, ease: 'power2.out' },
                0.8
              );

              // 7. Subtitle "तो येतोय... एका नविन स्वरूपात" reveals
              tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 10 },
                { opacity: 0.92, y: 0, duration: 0.75 },
                1.05
              );

              // 8. Bottom sacred ornament settles
              tl.fromTo(
                bottomDividerRef.current,
                { opacity: 0, y: 8 },
                { opacity: 0.65, y: 0, duration: 0.6 },
                1.25
              );

              // 9. Final creator credit appears last
              tl.fromTo(
                creditRef.current,
                { opacity: 0 },
                { opacity: 0.45, duration: 0.9 },
                1.5
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
      {/* 01. Background Atmosphere & Warm Sanctum Glow */}
      <div ref={atmosphereRef} className="closing-atmosphere" aria-hidden="true">
        <div ref={sanctumGlowRef} className="closing-sanctum-glow" />
      </div>

      {/* 02. Restrained Circular Antique-Gold Temple Mandala Ring */}
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

      {/* 03. Central Sacred Darshan Composition */}
      <div className="closing-content-container">
        {/* Subtle, Balanced Bappa Presence */}
        <div ref={bappaRef} className="closing-bappa-wrapper">
          <img
            src={EVENT_DETAILS.assets.ganpatiHero}
            alt="Lalbaugcha Raja Shree Ganesha Final Darshan"
            className="closing-bappa-img"
            loading="lazy"
          />
        </div>

        {/* Top Ornamental Divider */}
        <div ref={topDividerRef} className="closing-ornament-divider" aria-hidden="true">
          <span className="divider-line left" />
          <span className="divider-symbol">❖</span>
          <span className="divider-line right" />
        </div>

        {/* Primary Ceremonial Marathi Title */}
        <h2 ref={titleRef} className="closing-title font-devanagari text-gold-gradient">
          आगमन सोहळा
        </h2>

        {/* Supporting Line */}
        <p ref={subtitleRef} className="closing-subtitle font-devanagari">
          तो येतोय... एका नविन स्वरूपात
        </p>

        {/* Bottom Sacred Temple Clot / Mantra */}
        <div ref={bottomDividerRef} className="closing-bottom-ornament" aria-hidden="true">
          <span className="sacred-mantra-text">॥ श्री गणेशाय नमः ॥</span>
        </div>
      </div>

      {/* 04. Final Elegant Creator Credit Signature */}
      <div ref={creditRef} className="closing-creator-credit">
        <span>Created by Keval Rathod</span>
      </div>
    </footer>
  );
};

export default ClosingSection;
