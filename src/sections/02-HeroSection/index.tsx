import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { EVENT_DETAILS } from '@/utils/constants';
import './hero.css';

export const HeroSection: React.FC = () => {
  const heroRootRef = useRef<HTMLDivElement | null>(null);
  const bgAtmosphereRef = useRef<HTMLDivElement | null>(null);
  const templeSilhouetteRef = useRef<HTMLDivElement | null>(null);
  const sanctumBloomRef = useRef<HTMLDivElement | null>(null);
  const mandalaHaloRef = useRef<HTMLDivElement | null>(null);
  const invocationRef = useRef<HTMLDivElement | null>(null);
  const idolFrameRef = useRef<HTMLDivElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const supportingRef = useRef<HTMLDivElement | null>(null);
  const petalsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
      });

      // 01. Deep Atmosphere & Temple Silhouette Fade In
      tl.fromTo(
        bgAtmosphereRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }
      );

      tl.fromTo(
        templeSilhouetteRef.current,
        { opacity: 0, y: 15 },
        { opacity: 0.6, y: 0, duration: 1.4 },
        '-=0.8'
      );

      // 02. Warm Center Illumination & Mandala Halo
      tl.fromTo(
        sanctumBloomRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 0.85, duration: 1.5, ease: 'power1.out' },
        '-=1.0'
      );

      tl.fromTo(
        mandalaHaloRef.current,
        { rotation: -15, scale: 0.88, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 0.7, duration: 1.6, ease: 'power2.out' },
        '-=1.2'
      );

      // 03. Sacred Invocation: "॥ श्री गणेशाय नमः ॥"
      tl.fromTo(
        invocationRef.current,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=1.1'
      );

      // 04. Ganpati Artwork (bapp.png) rises smoothly into position (0 -> 1, scale 0.94 -> 1)
      tl.fromTo(
        idolFrameRef.current,
        { y: 35, scale: 0.94, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1.3, ease: 'power2.out' },
        '-=0.9'
      );

      // 05. Master Calligraphic Title reveals with slight stagger & back ease
      tl.fromTo(
        titleContainerRef.current,
        { y: 26, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.95, ease: 'back.out(1.2)' },
        '-=0.7'
      );

      // 06. Subtitle: "तो येतोय... एका नविन स्वरूपात"
      tl.fromTo(
        subtitleRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );

      // 07. Supporting Devotional Copy
      tl.fromTo(
        supportingRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );

      // 08. Ambient Floating Petals begin after elements settle
      if (petalsRef.current) {
        const petalElements = petalsRef.current.querySelectorAll('.hero-depth-petal');
        tl.fromTo(
          petalElements,
          { opacity: 0, y: 20 },
          { opacity: 0.75, y: 0, duration: 1.2, stagger: 0.08 },
          '-=0.3'
        );
      }
    }, heroRootRef);

    return () => ctx.revert();
  }, []);

  // Multi-layered atmospheric petals (foreground and midground depth)
  const petals = [
    { left: '7%', top: '20%', size: 16, color: '#FF7700', dur: '7.5s', delay: '0s', depth: 'front' },
    { left: '89%', top: '16%', size: 14, color: '#C1121F', dur: '8.2s', delay: '1.2s', depth: 'front' },
    { left: '15%', top: '64%', size: 12, color: '#FFB703', dur: '6.8s', delay: '2.4s', depth: 'back' },
    { left: '84%', top: '66%', size: 15, color: '#E85D04', dur: '9.0s', delay: '0.8s', depth: 'front' },
    { left: '46%', top: '10%', size: 10, color: '#FFD700', dur: '8.5s', delay: '3.1s', depth: 'back' },
    { left: '5%', top: '82%', size: 14, color: '#C1121F', dur: '7.0s', delay: '1.8s', depth: 'back' },
    { left: '94%', top: '80%', size: 13, color: '#FF7700', dur: '8.0s', delay: '2.2s', depth: 'front' },
    { left: '50%', top: '90%', size: 12, color: '#FFB703', dur: '6.5s', delay: '4.0s', depth: 'back' },
  ];

  return (
    <section ref={heroRootRef} className="section-hero" aria-label="Ganpati Bappa Aagman Sohala Hero Composition">
      {/* 01. Deep Atmospheric Background & Silhouette */}
      <div ref={bgAtmosphereRef} className="hero-atmosphere-field" aria-hidden="true" />
      <div ref={templeSilhouetteRef} className="hero-distant-temple-silhouette" aria-hidden="true" />
      <div className="hero-vignette-overlay" aria-hidden="true" />

      {/* 02. Sacred Radial Sanctum Bloom & Celestial Mandala Halo */}
      <div ref={sanctumBloomRef} className="hero-sanctum-bloom" aria-hidden="true" />
      
      <div ref={mandalaHaloRef} className="hero-mandala-halo" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" className="mandala-halo-svg">
          <circle cx="200" cy="200" r="185" stroke="#C9A227" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="200" cy="200" r="158" stroke="#E5BD47" strokeWidth="1.5" opacity="0.5" />
          <circle cx="200" cy="200" r="132" stroke="#C9A227" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
          <g stroke="#FFD700" strokeWidth="1" opacity="0.25">
            <line x1="200" y1="8" x2="200" y2="38" />
            <line x1="200" y1="362" x2="200" y2="392" />
            <line x1="8" y1="200" x2="38" y2="200" />
            <line x1="362" y1="200" x2="392" y2="200" />
            <line x1="64" y1="64" x2="86" y2="86" />
            <line x1="314" y1="314" x2="336" y2="336" />
            <line x1="64" y1="336" x2="86" y2="314" />
            <line x1="314" y1="86" x2="336" y2="64" />
          </g>
        </svg>
      </div>

      {/* 03. Antique Temple Corner Filigrees */}
      <div className="hero-corner-filigree top-left" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L60 0 L60 3 L3 3 L3 60 L0 60 Z" fill="#C9A227" opacity="0.7" />
          <path d="M10 10 L40 10 L10 40 Z" fill="rgba(201,162,39,0.18)" />
          <circle cx="20" cy="20" r="3.5" fill="#C9A227" />
        </svg>
      </div>

      <div className="hero-corner-filigree top-right" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L60 0 L60 3 L3 3 L3 60 L0 60 Z" fill="#C9A227" opacity="0.7" />
          <path d="M10 10 L40 10 L10 40 Z" fill="rgba(201,162,39,0.18)" />
          <circle cx="20" cy="20" r="3.5" fill="#C9A227" />
        </svg>
      </div>

      {/* 04. Top Sacred Devotional Invocation */}
      <div ref={invocationRef} className="hero-sacred-invocation">
        <span className="invocation-flourish">꧁</span>
        <span className="invocation-text">॥ श्री गणेशाय नमः ॥</span>
        <span className="invocation-flourish">꧂</span>
      </div>

      {/* 05. Art-Directed Editorial Master Layout */}
      <div className="hero-editorial-grid">
        {/* LEFT / FOCAL: Seamlessly Integrated Ganpati Artwork */}
        <div ref={idolFrameRef} className="hero-idol-integration-wrapper">
          <div className="hero-idol-glow-backplate" aria-hidden="true" />
          
          <img
            src={EVENT_DETAILS.assets.ganpatiHero}
            alt="Lalbaugcha Raja Shree Ganesha Aagman Sohala 2026"
            className="hero-idol-image"
            loading="eager"
            fetchPriority="high"
          />

          <div className="hero-idol-base-shadow" aria-hidden="true" />
        </div>

        {/* RIGHT / HEADLINE: Master Typography Stack */}
        <div className="hero-typography-stack">
          {/* Master Calligraphic Title: "आगमन सोहळा" with Red Hibiscus */}
          <div ref={titleContainerRef} className="hero-master-title-wrapper">
            <h1 className="hero-master-title font-devanagari">
              <span className="title-word">{EVENT_DETAILS.titleMarathi}</span>
            </h1>

            {/* Vibrant Hibiscus (Jaswand) Floral Accent */}
            <div className="hero-hibiscus-crest" aria-hidden="true">
              <svg viewBox="0 0 60 60" fill="none" width="100%" height="100%">
                <defs>
                  <radialGradient id="heroHibiscusPetal" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#FF3355" />
                    <stop offset="50%" stopColor="#D90429" />
                    <stop offset="85%" stopColor="#7A0512" />
                    <stop offset="100%" stopColor="#380106" />
                  </radialGradient>
                  <linearGradient id="heroHibiscusStamen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF280" />
                    <stop offset="100%" stopColor="#FFB300" />
                  </linearGradient>
                </defs>
                <path d="M30 30 C 22 15, 24 4, 34 8 C 42 12, 38 24, 30 30 Z" fill="url(#heroHibiscusPetal)" />
                <path d="M30 30 C 44 20, 56 22, 54 32 C 50 40, 38 36, 30 30 Z" fill="url(#heroHibiscusPetal)" />
                <path d="M30 30 C 42 42, 46 54, 36 56 C 28 56, 32 42, 30 30 Z" fill="url(#heroHibiscusPetal)" />
                <path d="M30 30 C 18 42, 6 48, 8 36 C 10 28, 22 32, 30 30 Z" fill="url(#heroHibiscusPetal)" />
                <path d="M30 30 C 14 26, 8 14, 18 10 C 26 8, 26 22, 30 30 Z" fill="url(#heroHibiscusPetal)" />
                <path d="M30 30 Q 40 16 50 8" stroke="url(#heroHibiscusStamen)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="50" cy="8" r="2.8" fill="#FFEB3B" />
                <circle cx="46" cy="12" r="2" fill="#FFEB3B" />
                <circle cx="42" cy="16" r="2" fill="#FFEB3B" />
              </svg>
            </div>
          </div>

          {/* Subtitle: "तो येतोय... एका नविन स्वरूपात" */}
          <div ref={subtitleRef} className="hero-devotional-subtitle">
            <span className="subtitle-flourish">꧁</span>
            {EVENT_DETAILS.subtitleMarathi}
            <span className="subtitle-flourish">꧂</span>
          </div>

          {/* Devotional Supporting Copy & Antique Gold Linework */}
          <div ref={supportingRef} className="hero-supporting-group">
            <div className="hero-gold-ornament-divider" aria-hidden="true">
              <span className="ornament-line" />
              <span className="ornament-symbol">❖</span>
              <span className="ornament-line" />
            </div>

            <p className="hero-invitation-tagline">{EVENT_DETAILS.tagline}</p>
          </div>
        </div>
      </div>

      {/* 06. Ambient Floating Petals (Multi-plane Depth) */}
      <div ref={petalsRef} className="hero-ambient-petals-layer" aria-hidden="true">
        {petals.map((petal, index) => (
          <span
            key={index}
            className={`hero-depth-petal petal-${petal.depth}`}
            style={{
              left: petal.left,
              top: petal.top,
              width: `${petal.size}px`,
              height: `${petal.size * 1.15}px`,
              backgroundColor: petal.color,
              animationDuration: petal.dur,
              animationDelay: petal.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
