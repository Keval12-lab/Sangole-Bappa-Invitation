import React from 'react';
import { ExternalLink, Navigation } from 'lucide-react';
import { EVENT_DETAILS } from '@/utils/constants';
import './location.css';

export const LocationSection: React.FC = () => {
  return (
    <section className="section-location" aria-label="Venue and Location">
      <div className="sacred-divider">Find Us</div>

      <div className="location-card">
        <address className="location-address" style={{ fontStyle: 'normal' }}>
          <div>{EVENT_DETAILS.venueLine1}</div>
          <div>{EVENT_DETAILS.venueLine2}</div>
          <div>{EVENT_DETAILS.venueCity}, Gujarat</div>
        </address>

        <div className="location-coordinates" aria-label="Coordinates">
          {EVENT_DETAILS.coordinates}
        </div>

        <a
          href={EVENT_DETAILS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-maps-btn"
          aria-label="Open event location in Google Maps"
        >
          <Navigation size={18} aria-hidden="true" />
          <span>OPEN IN GOOGLE MAPS</span>
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
