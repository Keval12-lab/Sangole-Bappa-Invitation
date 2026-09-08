import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { EVENT_DETAILS } from '@/utils/constants';
import './event.css';

export const EventSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const dressCodePanelRef = useRef<HTMLDivElement | null>(null);
  const dressCodeLabelRef = useRef<HTMLDivElement | null>(null);
  const dressCodeSwatchRef = useRef<HTMLDivElement | null>(null);
  const dressCodeTitleRef = useRef<HTMLDivElement | null>(null);
  const dressCodeSupportingRef = useRef<HTMLParagraphElement | null>(null);
  const panelsGridRef = useRef<HTMLDivElement | null>(null);

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
                  if (introRef.current) gsap.set(introRef.current, { clearProps: 'transform' });
                  if (dressCodePanelRef.current) gsap.set(dressCodePanelRef.current, { clearProps: 'transform' });
                  if (dressCodeSwatchRef.current) gsap.set(dressCodeSwatchRef.current, { clearProps: 'transform' });
                  if (dressCodeTitleRef.current) gsap.set(dressCodeTitleRef.current, { clearProps: 'transform' });
                  if (dressCodeSupportingRef.current) gsap.set(dressCodeSupportingRef.current, { clearProps: 'transform' });
                  if (panelsGridRef.current) {
                    const panels = panelsGridRef.current.querySelectorAll('.invitation-panel');
                    gsap.set(panels, { clearProps: 'transform' });
                  }
                },
              });

              // 1. Ornamental divider / section intro
              tl.fromTo(
                introRef.current,
                { opacity: 0, y: -14 },
                { opacity: 1, y: 0, duration: 0.65 },
                0
              );

              // 2. Dress Code panel appears
              tl.fromTo(
                dressCodePanelRef.current,
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.7 },
                0.15
              );

              // 3. "DRESS CODE" label fades in
              tl.fromTo(
                dressCodeLabelRef.current,
                { opacity: 0, y: -6 },
                { opacity: 1, y: 0, duration: 0.4 },
                0.35
              );

              // 4. MAROON swatch reveals
              tl.fromTo(
                dressCodeSwatchRef.current,
                { opacity: 0, scale: 0.75 },
                { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' },
                0.5
              );

              // 5. "MAROON" text reveals
              tl.fromTo(
                dressCodeTitleRef.current,
                { opacity: 0, x: -10 },
                { opacity: 1, x: 0, duration: 0.55 },
                0.55
              );

              // 6. Supporting line fades in
              tl.fromTo(
                dressCodeSupportingRef.current,
                { opacity: 0, y: 6 },
                { opacity: 1, y: 0, duration: 0.5 },
                0.7
              );

              // 7. Event details stagger: DATE -> TIME -> LOCATION
              if (panelsGridRef.current) {
                const panels = panelsGridRef.current.querySelectorAll('.invitation-panel');
                tl.fromTo(
                  panels,
                  { opacity: 0, y: 22 },
                  { opacity: 1, y: 0, duration: 0.75, stagger: 0.15, ease: 'power2.out' },
                  0.85
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

  return (
    <section ref={sectionRef} className="section-event" aria-label="Event Details and Dress Code">
      {/* 01. Ceremonial Section Introduction */}
      <div ref={introRef} className="event-section-intro">
        <h2 className="sacred-divider">Invitation Details</h2>
      </div>

      {/* 02. Ceremonial Dress Code Panel */}
      <div ref={dressCodePanelRef} className="dress-code-panel" role="region" aria-label="Dress Code Information">
        <div className="panel-gold-corner top-left" aria-hidden="true" />
        <div className="panel-gold-corner top-right" aria-hidden="true" />
        <div className="panel-gold-corner bottom-left" aria-hidden="true" />
        <div className="panel-gold-corner bottom-right" aria-hidden="true" />

        <div className="dress-code-inner-frame">
          <div ref={dressCodeLabelRef} className="dress-code-label">
            <span className="dress-code-ornament">❖</span>
            <span>DRESS CODE</span>
            <span className="dress-code-ornament">❖</span>
          </div>

          <div className="dress-code-highlight-row">
            <div
              ref={dressCodeSwatchRef}
              className="dress-code-swatch"
              aria-label="Color Swatch: Velvet Maroon"
              title="Velvet Maroon"
            >
              <div className="swatch-velvet-sheen" aria-hidden="true" />
            </div>
            <div ref={dressCodeTitleRef} className="dress-code-title">
              MAROON
            </div>
          </div>

          <p ref={dressCodeSupportingRef} className="dress-code-supporting">
            Wear Maroon &amp; Celebrate With Us
          </p>
        </div>
      </div>

      {/* 03. Invitation-Grade Event Information Panels */}
      <div ref={panelsGridRef} className="event-panels-grid">
        {/* DATE PANEL */}
        <article className="invitation-panel date-panel">
          <div className="panel-gold-corner top-left" aria-hidden="true" />
          <div className="panel-gold-corner top-right" aria-hidden="true" />
          <div className="panel-gold-corner bottom-left" aria-hidden="true" />
          <div className="panel-gold-corner bottom-right" aria-hidden="true" />

          <div className="panel-card-content">
            <div className="panel-icon-medallion" aria-hidden="true">
              <Calendar size={18} className="panel-icon" />
            </div>

            <div className="panel-label">DATE</div>
            <div className="panel-ornament-rule" aria-hidden="true" />

            <div className="panel-val-primary">{EVENT_DETAILS.date}</div>
            <div className="panel-val-secondary">{EVENT_DETAILS.day}</div>
          </div>
        </article>

        {/* TIME PANEL */}
        <article className="invitation-panel time-panel">
          <div className="panel-gold-corner top-left" aria-hidden="true" />
          <div className="panel-gold-corner top-right" aria-hidden="true" />
          <div className="panel-gold-corner bottom-left" aria-hidden="true" />
          <div className="panel-gold-corner bottom-right" aria-hidden="true" />

          <div className="panel-card-content">
            <div className="panel-icon-medallion" aria-hidden="true">
              <Clock size={18} className="panel-icon" />
            </div>

            <div className="panel-label">TIME</div>
            <div className="panel-ornament-rule" aria-hidden="true" />

            <div className="panel-val-primary">{EVENT_DETAILS.time}</div>
            <div className="panel-val-secondary">Auspicious Muhurat</div>
          </div>
        </article>

        {/* LOCATION PANEL */}
        <article className="invitation-panel location-panel">
          <div className="panel-gold-corner top-left" aria-hidden="true" />
          <div className="panel-gold-corner top-right" aria-hidden="true" />
          <div className="panel-gold-corner bottom-left" aria-hidden="true" />
          <div className="panel-gold-corner bottom-right" aria-hidden="true" />

          <div className="panel-card-content">
            <div className="panel-icon-medallion" aria-hidden="true">
              <MapPin size={18} className="panel-icon" />
            </div>

            <div className="panel-label">LOCATION</div>
            <div className="panel-ornament-rule" aria-hidden="true" />

            <div className="panel-val-primary">{EVENT_DETAILS.venueLine1}</div>
            <div className="panel-val-secondary">
              <span className="location-line">{EVENT_DETAILS.venueLine2}</span>
              <span className="location-city-tag">{EVENT_DETAILS.venueCity}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default EventSection;

