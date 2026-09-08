import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { EVENT_DETAILS } from '@/utils/constants';
import { HeroToran } from '@/components/hero/HeroToran';
import './hero.css';

interface HeroSectionProps {
  isOpening?: boolean;
  isOpened?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isOpening = false, isOpened = false }) => {
  const heroRootRef = useRef<HTMLDivElement | null>(null);
  const bgAtmosphereRef = useRef<HTMLDivElement | null>(null);
  const templeSilhouetteRef = useRef<HTMLDivElement | null>(null);
  const toranRef = useRef<HTMLDivElement | null>(null);
  const sanctumHaloRef = useRef<HTMLDivElement | null>(null);
  const shlokaRingRef = useRef<HTMLDivElement | null>(null);
  const invocationRef = useRef<HTMLDivElement | null>(null);
  const idolWrapperRef = useRef<HTMLDivElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const supportingRef = useRef<HTMLDivElement | null>(null);
  const petalsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // If already opened upon initial render (e.g. test or refresh), mark as animated and stay visible
    if (isOpened && !isOpening && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      return;
    }

    // Only start entrance timeline when curtains begin opening (or if opened)
    if ((!isOpening && !isOpened) || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
          // Release will-change and clear inline transforms so CSS animations take over without conflict
          if (sanctumHaloRef.current) {
            sanctumHaloRef.current.style.willChange = 'auto';
            gsap.set(sanctumHaloRef.current, { clearProps: 'transform' });
          }
          if (idolWrapperRef.current) {
            gsap.set(idolWrapperRef.current, { clearProps: 'transform' });
          }
          if (shlokaRingRef.current) {
            shlokaRingRef.current.style.willChange = 'auto';
            gsap.set(shlokaRingRef.current, { clearProps: 'transform' });
          }
          if (titleContainerRef.current) {
            gsap.set(titleContainerRef.current, { clearProps: 'transform' });
          }
          if (subtitleRef.current) {
            gsap.set(subtitleRef.current, { clearProps: 'transform' });
          }
          if (supportingRef.current) {
            gsap.set(supportingRef.current, { clearProps: 'transform' });
          }
          if (toranRef.current) {
            gsap.set(toranRef.current, { clearProps: 'transform' });
          }
          if (invocationRef.current) {
            gsap.set(invocationRef.current, { clearProps: 'transform' });
          }
          if (petalsRef.current) {
            const petals = petalsRef.current.querySelectorAll<HTMLElement>('.hero-depth-petal');
            petals.forEach((p) => {
              p.style.willChange = 'auto';
              gsap.set(p, { clearProps: 'transform' });
            });
          }
        },
      });

      // 0.00: Background atmosphere fades in
      tl.fromTo(
        bgAtmosphereRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power1.inOut' },
        0.00
      );

      tl.fromTo(
        templeSilhouetteRef.current,
        { opacity: 0, y: 15 },
        { opacity: 0.45, y: 0, duration: 1.0 },
        0.05
      );

      // 0.15: Warm golden halo softly appears
      tl.fromTo(
        sanctumHaloRef.current,
        { scale: 0.82, opacity: 0 },
        { scale: 1, opacity: 0.9, duration: 1.1, ease: 'power2.out' },
        0.15
      );

      // 0.20: Traditional Indian temple jharokha / mandap header gently settles at the top of Hero
      tl.fromTo(
        toranRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' },
        0.20
      );

      // 0.30: Sacred Shloka Ring softly fades in behind Ganpati
      tl.fromTo(
        shlokaRingRef.current,
        { opacity: 0, scale: 0.88, rotation: -8 },
        { opacity: 0.72, scale: 1, rotation: 0, duration: 1.2, ease: 'power2.out' },
        0.30
      );

      // Top Sacred Invocation: "॥ श्री गणेशाय नमः ॥"
      tl.fromTo(
        invocationRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.35
      );

      // 0.45: Transparent Ganpati fades + scales into place (0.94 -> 1)
      // 0.90: Ganpati settles into serene focal majesty
      tl.fromTo(
        idolWrapperRef.current,
        { y: 28, scale: 0.94, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.95, ease: 'power2.out' },
        0.45
      );

      // 1.00: Main calligraphic title "आगमन सोहळा" reveals with subtle depth
      tl.fromTo(
        titleContainerRef.current,
        { y: 22, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: 'back.out(1.15)' },
        1.00
      );

      // 1.20: Subtitle reveals: "तो येतोय... एका नविन स्वरूपात"
      tl.fromTo(
        subtitleRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 },
        1.20
      );

      // 1.35: Supporting copy & gold divider reveals
      tl.fromTo(
        supportingRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 },
        1.35
      );

      // 2.00+: Ambient drifting petals activate
      if (petalsRef.current) {
        const petalElements = petalsRef.current.querySelectorAll('.hero-depth-petal');
        tl.fromTo(
          petalElements,
          { opacity: 0, y: 15 },
          { opacity: 0.8, y: 0, duration: 1.0, stagger: 0.07 },
          1.80
        );
      }
    }, heroRootRef);

    return () => ctx.revert();
  }, [isOpening, isOpened]);

  // Natural scattered temple petals (Rose & Marigold) framing perimeter
  const petals = [
    { left: '7%', top: '24%', size: 14, color: '#D90429', dur: '8.5s', delay: '0s', depth: 'front' },
    { left: '91%', top: '20%', size: 13, color: '#FF7700', dur: '9.2s', delay: '1.4s', depth: 'front' },
    { left: '12%', top: '72%', size: 12, color: '#FFB703', dur: '7.8s', delay: '2.5s', depth: 'back' },
    { left: '88%', top: '74%', size: 14, color: '#C1121F', dur: '9.8s', delay: '0.9s', depth: 'front' },
    { left: '18%', top: '14%', size: 10, color: '#FFD700', dur: '9.0s', delay: '3.2s', depth: 'back' },
    { left: '6%', top: '86%', size: 13, color: '#FF7700', dur: '8.0s', delay: '1.9s', depth: 'back' },
    { left: '93%', top: '84%', size: 13, color: '#C1121F', dur: '8.8s', delay: '2.4s', depth: 'front' },
  ];

  return (
    <section ref={heroRootRef} className="section-hero" aria-label="Ganpati Bappa Aagman Sohala 2026 Hero Presentation">
      {/* 01. Deep Temple Atmosphere & Distant Shikhar Silhouettes */}
      <div ref={bgAtmosphereRef} className="hero-atmosphere-field" aria-hidden="true" />
      
      <div ref={templeSilhouetteRef} className="hero-distant-temple-silhouette" aria-hidden="true">
        <svg viewBox="0 0 1200 320" fill="none" className="temple-shikhar-svg" preserveAspectRatio="xMidYMax meet">
          {/* Subtle antique temple architectural spires (p3-theme inspired) */}
          <g opacity="0.18" fill="#D4AF37">
            {/* Center Shikhara */}
            <path d="M600 40 L620 90 L635 150 L645 220 L655 320 L545 320 L555 220 L565 150 L580 90 Z" />
            <circle cx="600" cy="35" r="5" />
            <path d="M598 15 L602 15 L602 30 L598 30 Z" />
            {/* Left Temple Spires */}
            <path d="M420 85 L435 130 L448 185 L455 250 L465 320 L375 320 L385 250 L392 185 L405 130 Z" />
            <path d="M260 130 L272 170 L282 220 L290 320 L230 320 L238 220 L248 170 Z" />
            {/* Right Temple Spires */}
            <path d="M780 85 L795 130 L808 185 L815 250 L825 320 L735 320 L745 250 L752 185 L765 130 Z" />
            <path d="M940 130 L952 170 L962 220 L970 320 L910 320 L918 220 L928 170 Z" />
          </g>
        </svg>
      </div>

      <div className="hero-vignette-overlay" aria-hidden="true" />

      {/* 02. Temple Corner Filigrees */}
      <div className="hero-corner-filigree top-left" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L60 0 L60 2.5 L2.5 2.5 L2.5 60 L0 60 Z" fill="#C9A227" opacity="0.65" />
          <path d="M8 8 L36 8 L8 36 Z" fill="rgba(201,162,39,0.15)" />
          <circle cx="18" cy="18" r="3" fill="#C9A227" opacity="0.8" />
        </svg>
      </div>

      <div className="hero-corner-filigree top-right" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M0 0 L60 0 L60 2.5 L2.5 2.5 L2.5 60 L0 60 Z" fill="#C9A227" opacity="0.65" />
          <path d="M8 8 L36 8 L8 36 Z" fill="rgba(201,162,39,0.15)" />
          <circle cx="18" cy="18" r="3" fill="#C9A227" opacity="0.8" />
        </svg>
      </div>

      {/* 02B. Traditional Indian Temple Jharokha / Mandap Header Frame */}
      <div ref={toranRef} className="hero-top-toran-wrapper" aria-hidden="true">
        <HeroToran />
      </div>

      {/* 03. Top Sacred Devotional Invocation */}
      <div ref={invocationRef} className="hero-sacred-invocation">
        <span className="invocation-flourish">꧁</span>
        <span className="invocation-text">{EVENT_DETAILS.invocation}</span>
        <span className="invocation-flourish">꧂</span>
      </div>

      {/* 04. Art-Directed Editorial Master Layout */}
      <div className="hero-editorial-grid">
        {/* FOCAL / DEITY STACK: Sacred Halo + Shloka Ring + Transparent Ganpati */}
        <div className="hero-focal-stage">
          {/* Layer A: Warm Golden Atmospheric Halo */}
          <div ref={sanctumHaloRef} className="hero-sanctum-halo" aria-hidden="true" />

          {/* Layer B: Sacred Circular Vector Shloka Ring with Multi-tone Antique Metal Geometry */}
          <div ref={shlokaRingRef} className="hero-shloka-ring-container" aria-hidden="true">
            <svg viewBox="0 0 520 520" fill="none" className="hero-shloka-ring-svg">
              <defs>
                {/* Circular path for clockwise Sanskrit Devanagari typography */}
                <path
                  id="shlokaCirclePath"
                  d="M 260, 260 m -192, 0 a 192,192 0 1,1 384,0 a 192,192 0 1,1 -384,0"
                />
                {/* Inner decorative rim path */}
                <path
                  id="shlokaInnerCirclePath"
                  d="M 260, 260 m -162, 0 a 162,162 0 1,1 324,0 a 162,162 0 1,1 -324,0"
                />

                {/* Multi-tone Antique Metal Gradients */}
                <linearGradient id="shlokaAntiqueGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2B8" />
                  <stop offset="30%" stopColor="#E5C158" />
                  <stop offset="65%" stopColor="#B88A22" />
                  <stop offset="100%" stopColor="#6E4C0D" />
                </linearGradient>

                <linearGradient id="shlokaWarmBronze" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D99E4D" />
                  <stop offset="50%" stopColor="#9C6420" />
                  <stop offset="100%" stopColor="#4E2A08" />
                </linearGradient>

                <radialGradient id="shlokaChampagneGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#E8C776" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#9A6F1C" stopOpacity="0.1" />
                </radialGradient>
              </defs>

              {/* Concentric Celestial Mandala Geometry with Antique Metal Tones */}
              <circle cx="260" cy="260" r="236" stroke="url(#shlokaWarmBronze)" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
              <circle cx="260" cy="260" r="222" stroke="url(#shlokaAntiqueGold)" strokeWidth="1.2" opacity="0.55" />
              <circle cx="260" cy="260" r="204" stroke="url(#shlokaAntiqueGold)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="260" cy="260" r="180" stroke="url(#shlokaWarmBronze)" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
              <circle cx="260" cy="260" r="150" stroke="url(#shlokaAntiqueGold)" strokeWidth="1" opacity="0.3" />

              {/* Surya-Mandal Radiating Golden Solar Rays (16 Points) */}
              <g stroke="url(#shlokaAntiqueGold)" strokeWidth="1.2" opacity="0.4">
                <line x1="260" y1="24" x2="260" y2="44" />
                <line x1="260" y1="476" x2="260" y2="496" />
                <line x1="24" y1="260" x2="44" y2="260" />
                <line x1="476" y1="260" x2="496" y2="260" />
                <line x1="93" y1="93" x2="108" y2="108" />
                <line x1="412" y1="412" x2="427" y2="427" />
                <line x1="93" y1="427" x2="108" y2="412" />
                <line x1="412" y1="108" x2="427" y2="93" />
                <line x1="160" y1="46" x2="169" y2="64" />
                <line x1="360" y1="46" x2="351" y2="64" />
                <line x1="160" y1="474" x2="169" y2="456" />
                <line x1="360" y1="474" x2="351" y2="456" />
                <line x1="46" y1="160" x2="64" y2="169" />
                <line x1="46" y1="360" x2="64" y2="351" />
                <line x1="474" y1="160" x2="456" y2="169" />
                <line x1="474" y1="360" x2="456" y2="351" />
              </g>

              {/* Exact Sacred Shloka Vector Typography */}
              <text className="shloka-ring-devanagari">
                <textPath href="#shlokaCirclePath" startOffset="0%">
                  ॥ वक्रतुंड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥ ❖ ॥ वक्रतुंड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥ ❖
                </textPath>
              </text>
            </svg>
          </div>

          {/* Layer C: Transparent Master Ganpati Cutout (Strictly No Rectangular Box) */}
          <div ref={idolWrapperRef} className="hero-transparent-idol-wrapper">
            <img
              src={EVENT_DETAILS.assets.ganpatiHero}
              alt="Lalbaugcha Raja Shree Ganesha Aagman Sohala 2026"
              className="hero-transparent-idol-image"
              loading="eager"
              fetchPriority="high"
            />
            {/* Grounding Base Shadow beneath the Carved Pedestal */}
            <div className="hero-idol-grounding-shadow" aria-hidden="true" />
          </div>
        </div>

        {/* TYPOGRAPHY / HEADLINE STACK */}
        <div className="hero-typography-stack">
          {/* Master Calligraphic Title: "आगमन सोहळा" */}
          <div ref={titleContainerRef} className="hero-master-title-wrapper">
            <h1 className="hero-master-title font-devanagari">
              <span className="title-word">{EVENT_DETAILS.titleMarathi}</span>
            </h1>
          </div>

          {/* Subtitle: "तो येतोय... एका नविन स्वरूपात" */}
          <div ref={subtitleRef} className="hero-devotional-subtitle">
            <span className="subtitle-flourish">꧁</span>
            <span className="subtitle-content">{EVENT_DETAILS.subtitleMarathi}</span>
            <span className="subtitle-flourish">꧂</span>
          </div>

          {/* Supporting Devotional Copy & Antique Gold Linework */}
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

      {/* 05. Foreground Drifting Petals */}
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

