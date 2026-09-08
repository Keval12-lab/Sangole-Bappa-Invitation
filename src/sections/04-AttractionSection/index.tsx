import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { EVENT_DETAILS } from '@/utils/constants';
import './attraction.css';

export const AttractionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const atmosphereRef = useRef<HTMLDivElement | null>(null);
  const silhouetteRef = useRef<HTMLDivElement | null>(null);
  const dholStageRef = useRef<HTMLDivElement | null>(null);
  const logoContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const petalsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctx = gsap.context(() => {
              const tl = gsap.timeline({
                defaults: { ease: 'power2.out' },
                onComplete: () => {
                  if (silhouetteRef.current) gsap.set(silhouetteRef.current, { clearProps: 'transform' });
                  if (dholStageRef.current) gsap.set(dholStageRef.current, { clearProps: 'transform' });
                  if (logoContainerRef.current) gsap.set(logoContainerRef.current, { clearProps: 'transform' });
                  if (titleRef.current) gsap.set(titleRef.current, { clearProps: 'transform' });
                  if (taglineRef.current) gsap.set(taglineRef.current, { clearProps: 'transform' });
                  if (descRef.current) gsap.set(descRef.current, { clearProps: 'transform' });
                  if (petalsRef.current) {
                    const petals = petalsRef.current.querySelectorAll('.dhol-ambient-petal');
                    gsap.set(petals, { clearProps: 'transform' });
                  }
                },
              });

              // 1. Background atmosphere appears
              tl.fromTo(
                atmosphereRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8 },
                0
              );

              // 2. Festival silhouettes reveal
              tl.fromTo(
                silhouetteRef.current,
                { opacity: 0, y: 18 },
                { opacity: 0.9, y: 0, duration: 0.9 },
                0.2
              );

              // 3. Dhol visual stage enters
              tl.fromTo(
                dholStageRef.current,
                { opacity: 0, scale: 0.92 },
                { opacity: 1, scale: 1, duration: 0.8 },
                0.35
              );

              // 4. Logo reveals with resonant dhol beat pulse
              tl.fromTo(
                logoContainerRef.current,
                { opacity: 0, scale: 0.85 },
                { opacity: 1, scale: 1.04, duration: 0.55, ease: 'power2.out' },
                0.5
              ).to(
                logoContainerRef.current,
                { scale: 1.0, duration: 0.4, ease: 'sine.inOut' },
                1.05
              );

              // 5. "DJ ढोल ताशा" reveals
              tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.65 },
                0.8
              );

              // 6. Supporting line reveals ("असीम नाद • असीम ऊर्जा")
              tl.fromTo(
                taglineRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.55 },
                0.95
              );

              // 7. Descriptive copy fades in
              tl.fromTo(
                descRef.current,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.5 },
                1.1
              );

              // 8. Ambient petals activate
              if (petalsRef.current) {
                const petals = petalsRef.current.querySelectorAll('.dhol-ambient-petal');
                tl.fromTo(
                  petals,
                  { opacity: 0, y: 10 },
                  { opacity: 0.85, y: 0, duration: 0.8, stagger: 0.08 },
                  1.2
                );
              }
            }, sectionRef);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      ctx?.revert();
    };
  }, []);

  // Ambient processional petals (saffron & marigold)
  const dholPetals = [
    { left: '10%', top: '25%', size: 13, color: '#D8861B', dur: '7.5s', delay: '0s' },
    { left: '86%', top: '20%', size: 14, color: '#E85D04', dur: '8.2s', delay: '1.2s' },
    { left: '18%', top: '72%', size: 11, color: '#FFB703', dur: '6.8s', delay: '2.4s' },
    { left: '80%', top: '75%', size: 15, color: '#D8861B', dur: '8.5s', delay: '0.8s' },
    { left: '50%', top: '15%', size: 12, color: '#FFD700', dur: '7.0s', delay: '1.8s' },
  ];

  return (
    <section ref={sectionRef} className="section-attraction" aria-label="Main Attraction: DJ Dhol Tasha">
      {/* FAR LAYER: Deep Maroon Atmosphere & Saffron processional glow */}
      <div ref={atmosphereRef} className="dhol-atmosphere-bg" aria-hidden="true">
        <div className="dhol-saffron-radial-glow" />
        <div className="dhol-amber-haze" />
      </div>

      {/* MID LAYER: Authentic Indian Procession Silhouettes (Dhol Pathak, Tutari, Saffron Flags) */}
      <div ref={silhouetteRef} className="dhol-procession-silhouette" aria-hidden="true">
        <svg
          viewBox="0 0 1000 320"
          fill="none"
          className="dhol-silhouette-svg"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id="dholSilhouetteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D8861B" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#8C2B14" stopOpacity="0.32" />
              <stop offset="80%" stopColor="#3A080E" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#160306" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="bhagwaFlagGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="60%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            <linearGradient id="bhagwaFlagGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="60%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* Saffron Procession Flags (Bhagwa Dhwaj) */}
          <g className="dhol-swaying-flags">
            {/* Left Flags */}
            <path d="M120 320 L160 50" stroke="#7A3D12" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M160 50 Q210 75 250 65 Q220 105 260 120 Q195 105 155 125 Z"
              fill="url(#bhagwaFlagGradLeft)"
              className="dhol-flag-wave-left"
              opacity="0.85"
            />

            <path d="M60 320 L90 100" stroke="#7A3D12" strokeWidth="2.5" strokeLinecap="round" />
            <path
              d="M90 100 Q130 120 165 110 Q140 145 170 155 Q125 140 88 158 Z"
              fill="url(#bhagwaFlagGradLeft)"
              className="dhol-flag-wave-left-subtle"
              opacity="0.65"
            />

            {/* Right Flags */}
            <path d="M880 320 L840 50" stroke="#7A3D12" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M840 50 Q790 75 750 65 Q780 105 740 120 Q805 105 845 125 Z"
              fill="url(#bhagwaFlagGradRight)"
              className="dhol-flag-wave-right"
              opacity="0.85"
            />

            <path d="M940 320 L910 100" stroke="#7A3D12" strokeWidth="2.5" strokeLinecap="round" />
            <path
              d="M910 100 Q870 120 835 110 Q860 145 830 155 Q875 140 912 158 Z"
              fill="url(#bhagwaFlagGradRight)"
              className="dhol-flag-wave-right-subtle"
              opacity="0.65"
            />
          </g>

          {/* Procession Heraldry: Traditional Tutari (Curved Marathi Horn) */}
          <g opacity="0.45" stroke="#E5BD47" strokeWidth="2" fill="none">
            <path d="M220 220 Q240 150 280 140 Q310 135 320 120" strokeLinecap="round" />
            <path d="M315 115 L328 126 L320 132 Z" fill="#E5BD47" />
          </g>

          {/* Authentic Indian Procession Silhouette: Dhol Tasha Pathak Players & Devotees */}
          <path
            d="
              M 0 320 
              L 0 260
              Q 30 255 50 240
              Q 70 245 85 230
              Q 105 210 125 215
              L 140 195 Q 155 180 170 182 Q 185 185 190 200
              Q 195 190 205 198 L 195 210
              L 210 225 L 215 250
              Q 235 240 250 260 Q 235 285 210 280
              Q 270 215 285 200 Q 295 205 305 220
              Q 325 240 345 235
              Q 400 255 450 250
              Q 500 245 550 250
              Q 600 255 655 235
              Q 675 240 695 220 Q 705 205 715 200
              L 730 225 L 750 210 L 760 220
              Q 790 190 810 185 Q 830 180 845 195
              L 860 215 Q 875 210 895 230
              Q 915 245 950 240
              Q 970 255 1000 260
              L 1000 320
              Z
            "
            fill="url(#dholSilhouetteGrad)"
          />
        </svg>
      </div>

      {/* SECTION INTRO LABEL */}
      <div className="sacred-divider">Main Attraction</div>

      {/* NEAR LAYER: Dhol Tasha Central Identity */}
      <div ref={dholStageRef} className="dhol-central-stage">
        {/* Sacred Acoustic Resonance Rings (Symbolizing "असीम नाद") */}
        <div className="dhol-acoustic-rings" aria-hidden="true">
          <div className="acoustic-ring ring-1" />
          <div className="acoustic-ring ring-2" />
        </div>

        {/* The Exact Provided Logo */}
        <div ref={logoContainerRef} className="dhol-logo-wrapper">
          <img
            src={EVENT_DETAILS.assets.dholLogo}
            alt="अहिल्यामाई DJ ढोल ताशा"
            className="dhol-logo-image"
            loading="lazy"
          />
          <div className="dhol-logo-glow" aria-hidden="true" />
        </div>
      </div>

      {/* TYPOGRAPHY HIERARCHY */}
      <div className="dhol-typography-stack">
        <h2 ref={titleRef} className="dhol-ceremonial-title font-devanagari text-gold-gradient">
          {EVENT_DETAILS.attractionTitle}
        </h2>

        <p ref={taglineRef} className="dhol-tagline font-devanagari">
          असीम नाद <span className="dhol-bullet">❖</span> असीम ऊर्जा
        </p>

        <p ref={descRef} className="dhol-description">
          गगनभेदी ढोल-ताशांचा गजर आणि जल्लोषात बाप्पाचे आगमन!
        </p>
      </div>

      {/* FRONT LAYER: Ambient Festive Petals */}
      <div ref={petalsRef} className="dhol-ambient-petals" aria-hidden="true">
        {dholPetals.map((petal, index) => (
          <span
            key={index}
            className="dhol-ambient-petal"
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

export default AttractionSection;

