import React from 'react';
import { EVENT_DETAILS } from '@/utils/constants';
import './attraction.css';

export const AttractionSection: React.FC = () => {
  return (
    <section className="section-attraction" aria-label="Main Attraction">
      <div className="sacred-divider">Main Attraction</div>

      <div className="attraction-logo-container">
        <img
          src={EVENT_DETAILS.assets.dholLogo}
          alt="DJ Dhol Tasha Logo"
          className="attraction-logo-img"
          loading="lazy"
        />
      </div>

      <h2 className="attraction-title text-gold-gradient">{EVENT_DETAILS.attractionTitle}</h2>
      <p className="attraction-description">{EVENT_DETAILS.attractionSubtitle}</p>
    </section>
  );
};
