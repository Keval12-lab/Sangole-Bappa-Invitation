import React from 'react';

interface MandapToranProps {
  className?: string;
  bellCount?: 2 | 4;
}

export const MandapToran: React.FC<MandapToranProps> = ({ className = '', bellCount = 4 }) => {
  const idPrefix = React.useId().replace(/:/g, '');

  return (
    <div className={`mandap-toran-wrapper ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1000 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mandap-toran-svg"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          {/* Marigold Flower Gradients */}
          <radialGradient id={`${idPrefix}-marigoldOrange`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFA600" />
            <stop offset="50%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#8A2500" />
          </radialGradient>

          <radialGradient id={`${idPrefix}-marigoldYellow`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="50%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#C47D00" />
          </radialGradient>

          {/* Rose Petal Gradients */}
          <radialGradient id={`${idPrefix}-roseRed`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FF3366" />
            <stop offset="45%" stopColor="#C2185B" />
            <stop offset="85%" stopColor="#880E4F" />
            <stop offset="100%" stopColor="#4A0020" />
          </radialGradient>

          {/* Mango Leaf Gradients */}
          <linearGradient id={`${idPrefix}-leafGreen`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="60%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>

          {/* Antique Brass Bell & Chain Gradients */}
          <linearGradient id={`${idPrefix}-brassGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF6CC" />
            <stop offset="25%" stopColor="#E5C158" />
            <stop offset="55%" stopColor="#C9A227" />
            <stop offset="85%" stopColor="#8C6214" />
            <stop offset="100%" stopColor="#4A3206" />
          </linearGradient>

          {/* Toran Rope Gradient */}
          <linearGradient id={`${idPrefix}-ropeGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8D6E63" />
            <stop offset="50%" stopColor="#D7CCC8" />
            <stop offset="100%" stopColor="#8D6E63" />
          </linearGradient>

          {/* Drop Shadows */}
          <filter id={`${idPrefix}-toranShadow`} x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.85" />
          </filter>
        </defs>

        <g filter={`url(#${idPrefix}-toranShadow)`}>
          {/* Main Top Support Rope */}
          <path d="M 0 16 Q 250 26 500 28 Q 750 26 1000 16" stroke={`url(#${idPrefix}-ropeGrad)`} strokeWidth="4" />

          {/* ================================================================
              MANGO LEAVES (BACKGROUND FOLIAGE)
              ================================================================ */}
          {/* Left Wing Leaves */}
          <path d="M 70 20 C 40 45 45 85 65 105 C 80 80 85 45 70 20 Z" fill={`url(#${idPrefix}-leafGreen)`} />
          <path d="M 170 24 C 150 50 155 85 175 105 C 190 80 190 45 170 24 Z" fill={`url(#${idPrefix}-leafGreen)`} />
          <path d="M 270 28 C 255 55 260 90 280 110 C 295 85 295 50 270 28 Z" fill={`url(#${idPrefix}-leafGreen)`} />

          {/* Center Swag Leaves */}
          <path d="M 370 30 C 360 60 365 95 385 115 C 400 90 395 55 370 30 Z" fill={`url(#${idPrefix}-leafGreen)`} />
          <path d="M 480 32 C 480 65 490 105 500 125 C 510 105 520 65 520 32 Z" fill={`url(#${idPrefix}-leafGreen)`} />
          <path d="M 630 30 C 605 55 600 90 615 115 C 635 95 640 60 630 30 Z" fill={`url(#${idPrefix}-leafGreen)`} />

          {/* Right Wing Leaves */}
          <path d="M 730 28 C 705 50 705 85 720 110 C 740 90 745 55 730 28 Z" fill={`url(#${idPrefix}-leafGreen)`} />
          <path d="M 830 24 C 810 45 810 80 825 105 C 845 85 850 50 830 24 Z" fill={`url(#${idPrefix}-leafGreen)`} />
          <path d="M 930 20 C 915 45 920 80 935 105 C 955 85 960 45 930 20 Z" fill={`url(#${idPrefix}-leafGreen)`} />

          {/* ================================================================
              SWAG MARIGOLD GARLANDS (CATENARY CURVES)
              ================================================================ */}
          {/* Left Swag Outer Garland */}
          <path
            d="M 30 20 Q 180 120 330 30"
            stroke={`url(#${idPrefix}-marigoldOrange)`}
            strokeWidth="28"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          {/* Left Swag Inner Garland */}
          <path
            d="M 60 22 Q 180 95 300 30"
            stroke={`url(#${idPrefix}-marigoldYellow)`}
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray="3 2"
          />

          {/* Center Swag Outer Garland */}
          <path
            d="M 320 28 Q 500 145 680 28"
            stroke={`url(#${idPrefix}-marigoldOrange)`}
            strokeWidth="32"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          {/* Center Swag Middle Garland */}
          <path
            d="M 350 30 Q 500 120 650 30"
            stroke={`url(#${idPrefix}-marigoldYellow)`}
            strokeWidth="22"
            strokeLinecap="round"
            strokeDasharray="3 2"
          />
          {/* Center Swag Inner Garland */}
          <path
            d="M 380 32 Q 500 95 620 32"
            stroke={`url(#${idPrefix}-marigoldOrange)`}
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="3 2"
          />

          {/* Right Swag Outer Garland */}
          <path
            d="M 670 30 Q 820 120 970 20"
            stroke={`url(#${idPrefix}-marigoldOrange)`}
            strokeWidth="28"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          {/* Right Swag Inner Garland */}
          <path
            d="M 700 30 Q 820 95 940 22"
            stroke={`url(#${idPrefix}-marigoldYellow)`}
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray="3 2"
          />

          {/* Top Horizontal Dense Marigold Border */}
          <path
            d="M 0 16 Q 500 28 1000 16"
            stroke={`url(#${idPrefix}-marigoldOrange)`}
            strokeWidth="24"
            strokeDasharray="5 2"
          />
          <path
            d="M 0 14 Q 500 26 1000 14"
            stroke={`url(#${idPrefix}-marigoldYellow)`}
            strokeWidth="14"
            strokeDasharray="4 2"
          />

          {/* ================================================================
              VELVET RED ROSES AT ACCENT NODES
              ================================================================ */}
          {/* Left Swag Roses */}
          <circle cx="30" cy="22" r="14" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="100" cy="55" r="12" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="180" cy="75" r="13" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="260" cy="55" r="12" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="325" cy="28" r="14" fill={`url(#${idPrefix}-roseRed)`} />

          {/* Center Swag Roses */}
          <circle cx="410" cy="58" r="13" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="500" cy="88" r="16" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="590" cy="58" r="13" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="675" cy="28" r="14" fill={`url(#${idPrefix}-roseRed)`} />

          {/* Right Swag Roses */}
          <circle cx="740" cy="55" r="12" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="820" cy="75" r="13" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="900" cy="55" r="12" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="970" cy="22" r="14" fill={`url(#${idPrefix}-roseRed)`} />

          {/* Hanging Vertical Marigold Drops on Far Left and Right */}
          <path d="M 25 24 L 25 140" stroke={`url(#${idPrefix}-marigoldOrange)`} strokeWidth="18" strokeDasharray="4 2" />
          <circle cx="25" cy="75" r="11" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="25" cy="140" r="10" fill={`url(#${idPrefix}-roseRed)`} />

          <path d="M 975 24 L 975 140" stroke={`url(#${idPrefix}-marigoldOrange)`} strokeWidth="18" strokeDasharray="4 2" />
          <circle cx="975" cy="75" r="11" fill={`url(#${idPrefix}-roseRed)`} />
          <circle cx="975" cy="140" r="10" fill={`url(#${idPrefix}-roseRed)`} />
        </g>

        {/* ====================================================================
            HANGING BRASS TEMPLE BELLS WITH CHAINS
            ==================================================================== */}
        {/* Bell 1 (Left Outer) */}
        <g className="toran-bell toran-bell-1">
          {/* Chain */}
          <path d="M 180 80 L 180 160" stroke={`url(#${idPrefix}-brassGrad)`} strokeWidth="2.5" strokeDasharray="4 2" />
          {/* Bell Body */}
          <circle cx="180" cy="165" r="4.5" fill={`url(#${idPrefix}-brassGrad)`} />
          <path d="M 175 168 C 175 178 168 188 162 200 L 198 200 C 192 188 185 178 185 168 Z" fill={`url(#${idPrefix}-brassGrad)`} />
          <ellipse cx="180" cy="200" rx="18" ry="4" fill="#6D4C0F" />
          <ellipse cx="180" cy="204" rx="3.5" ry="4" fill={`url(#${idPrefix}-brassGrad)`} />
        </g>

        {/* Bell 2 (Left Inner - Shown on desktop/tablet) */}
        {bellCount === 4 && (
          <g className="toran-bell toran-bell-2">
            <path d="M 330 35 L 330 140" stroke={`url(#${idPrefix}-brassGrad)`} strokeWidth="2.5" strokeDasharray="4 2" />
            <circle cx="330" cy="145" r="4" fill={`url(#${idPrefix}-brassGrad)`} />
            <path d="M 326 148 C 326 157 320 166 315 176 L 345 176 C 340 166 334 157 334 148 Z" fill={`url(#${idPrefix}-brassGrad)`} />
            <ellipse cx="330" cy="176" rx="15" ry="3.5" fill="#6D4C0F" />
            <ellipse cx="330" cy="180" rx="3" ry="3.5" fill={`url(#${idPrefix}-brassGrad)`} />
          </g>
        )}

        {/* Bell 3 (Right Inner - Shown on desktop/tablet) */}
        {bellCount === 4 && (
          <g className="toran-bell toran-bell-3">
            <path d="M 670 35 L 670 140" stroke={`url(#${idPrefix}-brassGrad)`} strokeWidth="2.5" strokeDasharray="4 2" />
            <circle cx="670" cy="145" r="4" fill={`url(#${idPrefix}-brassGrad)`} />
            <path d="M 666 148 C 666 157 660 166 655 176 L 685 176 C 680 166 674 157 674 148 Z" fill={`url(#${idPrefix}-brassGrad)`} />
            <ellipse cx="670" cy="176" rx="15" ry="3.5" fill="#6D4C0F" />
            <ellipse cx="670" cy="180" rx="3" ry="3.5" fill={`url(#${idPrefix}-brassGrad)`} />
          </g>
        )}

        {/* Bell 4 (Right Outer) */}
        <g className="toran-bell toran-bell-4">
          <path d="M 820 80 L 820 160" stroke={`url(#${idPrefix}-brassGrad)`} strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="820" cy="165" r="4.5" fill={`url(#${idPrefix}-brassGrad)`} />
          <path d="M 815 168 C 815 178 808 188 802 200 L 838 200 C 832 188 825 178 825 168 Z" fill={`url(#${idPrefix}-brassGrad)`} />
          <ellipse cx="820" cy="200" rx="18" ry="4" fill="#6D4C0F" />
          <ellipse cx="820" cy="204" rx="3.5" ry="4" fill={`url(#${idPrefix}-brassGrad)`} />
        </g>
      </svg>
    </div>
  );
};

export default MandapToran;
