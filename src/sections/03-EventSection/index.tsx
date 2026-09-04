import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { EVENT_DETAILS } from '@/utils/constants';
import './event.css';

export const EventSection: React.FC = () => {
  return (
    <section className="section-event" aria-label="Event Details">
      <div className="sacred-divider">Event Details</div>

      <div className="event-cards-grid">
        {/* Date Card */}
        <div className="event-card">
          <Calendar className="event-card-icon" size={24} aria-hidden="true" />
          <h2 className="event-card-label">Date</h2>
          <div className="event-card-val-primary">{EVENT_DETAILS.date}</div>
          <div className="event-card-val-secondary">{EVENT_DETAILS.day}</div>
        </div>

        {/* Time Card */}
        <div className="event-card">
          <Clock className="event-card-icon" size={24} aria-hidden="true" />
          <h2 className="event-card-label">Time</h2>
          <div className="event-card-val-primary">{EVENT_DETAILS.time}</div>
        </div>

        {/* Location Card */}
        <div className="event-card">
          <MapPin className="event-card-icon" size={24} aria-hidden="true" />
          <h2 className="event-card-label">Location</h2>
          <div className="event-card-val-primary">{EVENT_DETAILS.venueLine1}</div>
          <div className="event-card-val-secondary">
            {EVENT_DETAILS.venueLine2} {EVENT_DETAILS.venueCity}
          </div>
        </div>
      </div>
    </section>
  );
};
