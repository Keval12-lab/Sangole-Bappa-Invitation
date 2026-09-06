import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Navigation, ExternalLink, Calendar, Clock, MapPin } from 'lucide-react';
import { EVENT_DETAILS } from '@/utils/constants';
import './location.css';

export const LocationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const mapFrameRef = useRef<HTMLDivElement | null>(null);
  const majorRoadsRef = useRef<SVGGElement | null>(null);
  const routePathRef = useRef<SVGPathElement | null>(null);
  const destinationMarkerRef = useRef<SVGGElement | null>(null);
  const addressCardRef = useRef<HTMLDivElement | null>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement | null>(null);

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

              // 1. Section Intro reveals
              tl.fromTo(
                introRef.current,
                { opacity: 0, y: -12 },
                { opacity: 1, y: 0, duration: 0.6 },
                0
              );

              // 2. Map atmosphere & container appear
              tl.fromTo(
                mapFrameRef.current,
                { opacity: 0, scale: 0.96 },
                { opacity: 1, scale: 1, duration: 0.75 },
                0.15
              );

              // 3. Major road lines fade/draw in
              if (majorRoadsRef.current) {
                tl.fromTo(
                  majorRoadsRef.current,
                  { opacity: 0 },
                  { opacity: 1, duration: 0.7 },
                  0.25
                );
              }

              // 4. Highlighted route draws progressively toward destination
              if (routePathRef.current) {
                const length = routePathRef.current.getTotalLength() || 460;
                gsap.set(routePathRef.current, {
                  strokeDasharray: length,
                  strokeDashoffset: length,
                });

                tl.to(
                  routePathRef.current,
                  { strokeDashoffset: 0, duration: 1.35, ease: 'power1.inOut' },
                  0.45
                );
              }

              // 4. Destination marker reveals with one soft arrival pulse
              if (destinationMarkerRef.current) {
                tl.fromTo(
                  destinationMarkerRef.current,
                  { opacity: 0, scale: 0, transformOrigin: '0px 0px' },
                  { opacity: 1, scale: 1.15, transformOrigin: '0px 0px', duration: 0.45, ease: 'back.out(1.8)' },
                  1.6
                ).to(
                  destinationMarkerRef.current,
                  { scale: 1, transformOrigin: '0px 0px', duration: 0.35, ease: 'sine.inOut' },
                  2.05
                );
              }

              // 5. Address Card reveals
              tl.fromTo(
                addressCardRef.current,
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.65 },
                1.75
              );

              // 6. Google Maps CTA reveals
              tl.fromTo(
                ctaBtnRef.current,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.5 },
                1.95
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
    <section ref={sectionRef} className="section-location" aria-label="Venue and Location">
      {/* 01. Refined Ceremonial Section Heading */}
      <div ref={introRef} className="location-intro">
        <div className="sacred-divider">Find Us</div>
        <h2 className="location-main-heading font-devanagari text-gold-gradient">
          आमच्या घरी या…
        </h2>
        <p className="location-sub-heading">
          बाप्पाच्या आगमनासाठी तुमची उपस्थितीच आमच्यासाठी आशीर्वाद आहे.
        </p>
      </div>

      {/* 02. Unified Master Location Experience Frame */}
      <div className="location-master-container">
        {/* LEFT / TOP: Handcrafted Cinematic Invitation Map */}
        <div ref={mapFrameRef} className="location-map-frame" role="img" aria-label="Ceremonial route map to Hari Om Nagar, Surat">
          <div className="panel-gold-corner top-left" aria-hidden="true" />
          <div className="panel-gold-corner top-right" aria-hidden="true" />
          <div className="panel-gold-corner bottom-left" aria-hidden="true" />
          <div className="panel-gold-corner bottom-right" aria-hidden="true" />

          <svg
            viewBox="0 0 600 380"
            fill="none"
            className="location-map-svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Map Background Gradients */}
              <radialGradient id="mapCanvasGrad" cx="62%" cy="40%" r="75%">
                <stop offset="0%" stopColor="#2E070D" />
                <stop offset="50%" stopColor="#1B0307" />
                <stop offset="100%" stopColor="#120205" />
              </radialGradient>

              {/* Destination Aura Glow */}
              <radialGradient id="destinationAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.45" />
                <stop offset="45%" stopColor="#D8861B" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#D8861B" stopOpacity="0" />
              </radialGradient>

              {/* Gold Route Gradient */}
              <linearGradient id="goldRouteGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D8861B" />
                <stop offset="45%" stopColor="#F5D77F" />
                <stop offset="85%" stopColor="#FFEA8A" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>

              {/* Pin Metallic Gradient */}
              <linearGradient id="pinMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#C9A227" />
                <stop offset="100%" stopColor="#7A580A" />
              </linearGradient>
            </defs>

            {/* Base Parchment Field */}
            <rect width="600" height="380" fill="url(#mapCanvasGrad)" rx="3" />

            {/* Urban Grid Pattern (Subtle Local Blocks) */}
            <g stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.06">
              <line x1="40" y1="0" x2="40" y2="380" />
              <line x1="100" y1="0" x2="100" y2="380" />
              <line x1="170" y1="0" x2="170" y2="380" />
              <line x1="240" y1="0" x2="240" y2="380" />
              <line x1="320" y1="0" x2="320" y2="380" />
              <line x1="400" y1="0" x2="400" y2="380" />
              <line x1="480" y1="0" x2="480" y2="380" />
              <line x1="550" y1="0" x2="550" y2="380" />

              <line x1="0" y1="50" x2="600" y2="50" />
              <line x1="0" y1="110" x2="600" y2="110" />
              <line x1="0" y1="180" x2="600" y2="180" />
              <line x1="0" y1="240" x2="600" y2="240" />
              <line x1="0" y1="310" x2="600" y2="310" />
            </g>

            {/* Subtle River / Waterway Curve */}
            <path
              d="M 0 320 Q 140 280 260 340 Q 380 380 500 350 L 600 370"
              stroke="#331018"
              strokeWidth="16"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Secondary Road Network */}
            <g stroke="#C9A227" strokeWidth="1.2" strokeOpacity="0.14" strokeLinecap="round">
              <path d="M 30 20 L 120 360" />
              <path d="M 120 40 L 460 360" />
              <path d="M 280 20 L 260 210 L 40 280" />
              <path d="M 450 30 L 470 200 L 580 250" />
              <path d="M 210 200 L 590 170" />
              <path d="M 330 90 L 570 120" />
              <path d="M 0 160 L 220 170" />
            </g>

            {/* Major Arterial Roads */}
            <g ref={majorRoadsRef} stroke="#C9A227" strokeWidth="2.5" strokeOpacity="0.22" strokeLinecap="round">
              {/* Amroli Main Cross */}
              <path d="M 0 110 L 240 130 L 600 90" />
              {/* Main South-to-North Boulevard */}
              <path d="M 90 380 L 160 240 L 260 140 L 410 40" />
              {/* New Kosad Road Primary Corridor */}
              <path d="M 160 240 L 320 230 L 460 215 L 590 220" />
            </g>

            {/* Subtle Geographical Context Typography */}
            <text x="75" y="102" fill="#C9A227" fillOpacity="0.38" fontSize="9.5" fontFamily="'Cinzel', serif" letterSpacing="0.12em">
              AMROLI
            </text>
            <text x="280" y="246" fill="#C9A227" fillOpacity="0.38" fontSize="9" fontFamily="'Outfit', sans-serif" letterSpacing="0.08em">
              NEW KOSAD ROAD
            </text>
            <text x="382" y="105" fill="#F3E7C2" fillOpacity="0.5" fontSize="9.5" fontFamily="'Outfit', sans-serif" fontWeight="600" letterSpacing="0.08em">
              HARI OM NAGAR - 2
            </text>

            {/* START Approach Point Flourish */}
            <g transform="translate(90, 360)">
              <circle cx="0" cy="0" r="14" fill="#D8861B" fillOpacity="0.15" />
              <circle cx="0" cy="0" r="6" fill="#C9A227" />
              <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
              <text x="14" y="4" fill="#D4C4A3" fontSize="8" fontFamily="'Cinzel', serif" fontWeight="700" letterSpacing="0.1em">
                START
              </text>
            </g>

            {/* THE SACRED ROUTE (Progressively Drawn on Scroll Reveal) */}
            <path
              d="M 90 360 L 110 320 L 155 245 L 230 238 L 320 230 L 380 226 L 395 175 L 395 142"
              stroke="#D8861B"
              strokeWidth="6"
              strokeOpacity="0.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={routePathRef}
              className="location-route-path"
              d="M 90 360 L 110 320 L 155 245 L 230 238 L 320 230 L 380 226 L 395 175 L 395 142"
              stroke="url(#goldRouteGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Destination Coordinates Marker at x=395, y=142 */}
            <g transform="translate(395, 142)">
              <g
                ref={destinationMarkerRef}
                className="location-destination-marker"
              >
                {/* Radial Warm Sanctum Halo */}
                <circle cx="0" cy="0" r="42" fill="url(#destinationAura)" />

                {/* Grounding Pin Shadow */}
                <ellipse cx="0" cy="4" rx="10" ry="4" fill="#000000" fillOpacity="0.6" />

                {/* Antique Gold Teardrop Location Marker Pin */}
                <path
                  d="M 0 0 C -12 -12 -16 -24 -16 -34 C -16 -46 -7 -54 0 -54 C 7 -54 16 -46 16 -34 C 16 -24 12 -12 0 0 Z"
                  fill="url(#pinMetalGrad)"
                  stroke="#FFE58F"
                  strokeWidth="1.2"
                  filter="drop-shadow(0 4px 8px rgba(0,0,0,0.8))"
                />

                {/* Inner Sacred Medallion with Ganesha Aura Symbol */}
                <circle cx="0" cy="-34" r="10" fill="#2E070D" stroke="#FFE58F" strokeWidth="1" />
                {/* Sacred Golden Dot / Tilak symbol */}
                <path
                  d="M 0 -38 Q 2 -34 0 -30 Q -2 -34 0 -38 Z"
                  fill="#FFD700"
                />
                <circle cx="0" cy="-28" r="1.5" fill="#E85D04" />
              </g>
            </g>
          </svg>

          {/* Conceptual Location Label Tag */}
          <div className="map-destination-badge">
            <span className="badge-dot" />
            <span>{EVENT_DETAILS.latitude}° N, {EVENT_DETAILS.longitude}° E</span>
          </div>
        </div>

        {/* RIGHT / BOTTOM: Luxury Address Block & Dedicated Action Panel */}
        <div ref={addressCardRef} className="location-address-card">
          <div className="panel-gold-corner top-left" aria-hidden="true" />
          <div className="panel-gold-corner top-right" aria-hidden="true" />
          <div className="panel-gold-corner bottom-left" aria-hidden="true" />
          <div className="panel-gold-corner bottom-right" aria-hidden="true" />

          <div className="address-inner-content">
            {/* Header / Venue Tag */}
            <div className="address-venue-badge">
              <MapPin size={15} className="address-pin-icon" aria-hidden="true" />
              <span>VENUE &amp; DESTINATION</span>
            </div>

            {/* Sacred Address Details */}
            <address className="address-lines-block">
              <div className="address-primary-line">
                {EVENT_DETAILS.venueLine1.replace(/,\s*$/, '')}
              </div>
              <div className="address-secondary-line">
                {EVENT_DETAILS.venueLine2.replace(/,\s*$/, '')}
              </div>
              <div className="address-city-line">
                {EVENT_DETAILS.venueCity}, Gujarat
              </div>
            </address>

            {/* Event Timing Reminder Metadata */}
            <div className="address-timing-metadata">
              <div className="timing-meta-row">
                <Calendar size={14} className="meta-icon" aria-hidden="true" />
                <span>Monday • 14 September 2026</span>
              </div>
              <div className="timing-meta-row">
                <Clock size={14} className="meta-icon" aria-hidden="true" />
                <span>10:00 AM onwards</span>
              </div>
            </div>

            {/* Single Prominent Google Maps CTA */}
            <a
              ref={ctaBtnRef}
              href={EVENT_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-cta-btn"
              aria-label="Open event location in Google Maps"
            >
              <Navigation size={18} className="cta-nav-icon" aria-hidden="true" />
              <span>OPEN IN GOOGLE MAPS</span>
              <ExternalLink size={15} className="cta-ext-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

