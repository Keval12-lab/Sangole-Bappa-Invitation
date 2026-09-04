import React from 'react';
import { EVENT_DETAILS } from '@/utils/constants';
import './closing.css';

export const ClosingSection: React.FC = () => {
  return (
    <footer className="section-closing" aria-label="Closing Blessing">
      <div className="sacred-divider">॥ श्री गणेशाय नमः ॥</div>
      <h2 className="closing-title text-gold-gradient">{EVENT_DETAILS.titleMarathi}</h2>
      <div className="closing-subtitle">{EVENT_DETAILS.subtitleMarathi}</div>

      <div className="closing-salutation">
        — YOU ARE CORDIALLY INVITED —
      </div>
    </footer>
  );
};
