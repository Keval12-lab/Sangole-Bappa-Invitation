import React from 'react';

interface MandapToranProps {
  className?: string;
  bellCount?: 2 | 3;
}

export const MandapToran: React.FC<MandapToranProps> = ({ className = '', bellCount = 3 }) => {
  const idPrefix = React.useId().replace(/:/g, '');

  return (
    <div className={`mandap-toran-wrapper ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1000 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mandap-toran-svg"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          {/* Realistic Marigold Saffron & Gold Gradients */}
          <radialGradient id={`${idPrefix}-marigoldDeep`} cx="38%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="25%" stopColor="#FFA000" />
            <stop offset="65%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#7F1D00" />
          </radialGradient>

          <radialGradient id={`${idPrefix}-marigoldBright`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="35%" stopColor="#FFD54F" />
            <stop offset="75%" stopColor="#FF8F00" />
            <stop offset="100%" stopColor="#B24700" />
          </radialGradient>

          {/* Realistic Velvet Rose Petal Gradients */}
          <radialGradient id={`${idPrefix}-roseVelvet`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FF4D6D" />
            <stop offset="30%" stopColor="#C9184A" />
            <stop offset="70%" stopColor="#800F2F" />
            <stop offset="100%" stopColor="#3F0414" />
          </radialGradient>

          {/* Fresh Temple Mango Leaf Gradients */}
          <linearGradient id={`${idPrefix}-leafFresh`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43A047" />
            <stop offset="50%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#14461A" />
          </linearGradient>

          {/* Antique Brass Temple Bell Gradients */}
          <linearGradient id={`${idPrefix}-brassBell`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8D6" />
            <stop offset="20%" stopColor="#E5C158" />
            <stop offset="55%" stopColor="#C9A227" />
            <stop offset="80%" stopColor="#875E14" />
            <stop offset="100%" stopColor="#422D07" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-brassChain`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#875E14" />
            <stop offset="50%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#422D07" />
          </linearGradient>

          {/* Soft Depth Drop Shadow */}
          <filter id={`${idPrefix}-elementShadow`} x="-15%" y="-15%" width="130%" height="135%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* ====================================================================
            01. SUBTLE CARVED TEMPLE CORNICE / LINTEL MOLDING
            ==================================================================== */}
        <g filter={`url(#${idPrefix}-elementShadow)`}>
          {/* Top Brass / Antique Gold Cornice Molding Strip */}
          <rect x="0" y="0" width="1000" height="12" fill="url(#heroSanctumGlowGrad)" opacity="0" />
          <line x1="0" y1="12" x2="1000" y2="12" stroke={`url(#${idPrefix}-brassBell)`} strokeWidth="1.5" opacity="0.65" />
          <line x1="0" y1="14" x2="1000" y2="14" stroke="#875E14" strokeWidth="0.8" opacity="0.4" />
          
          {/* Subtle Carved Temple Medallion at Center of Cornice */}
          <path
            d="M 485 12 Q 500 24 515 12 Z"
            fill={`url(#${idPrefix}-brassBell)`}
            opacity="0.8"
          />
          <circle cx="500" cy="18" r="2.5" fill="#FFF8D6" opacity="0.9" />
        </g>

        {/* ====================================================================
            02. LEFT REALISTIC FLORAL CLUSTER (At Left Pillar Junction)
            ==================================================================== */}
        <g filter={`url(#${idPrefix}-elementShadow)`} className="floral-cluster-left">
          {/* Organic Mango Leaves Fan */}
          <path d="M 90 12 C 60 22 55 50 72 68 C 88 52 95 30 90 12 Z" fill={`url(#${idPrefix}-leafFresh)`} />
          <path d="M 140 12 C 120 28 118 58 135 78 C 152 60 155 35 140 12 Z" fill={`url(#${idPrefix}-leafFresh)`} />
          <path d="M 190 12 C 175 32 178 62 198 80 C 212 60 210 32 190 12 Z" fill={`url(#${idPrefix}-leafFresh)`} />

          {/* Natural Overlapping Marigold Bloom 1 (Large Saffron Center) */}
          <g transform="translate(130, 36)">
            {/* Petal Layer 1 */}
            <ellipse cx="0" cy="0" rx="22" ry="20" fill={`url(#${idPrefix}-marigoldDeep)`} />
            <path d="M-18 -8 Q-24 0 -18 8 Q-12 18 0 16 Q12 18 18 8 Q24 0 18 -8 Q12 -18 0 -16 Q-12 -18 -18 -8 Z" fill={`url(#${idPrefix}-marigoldDeep)`} />
            {/* Petal Layer 2 */}
            <path d="M-12 -6 Q-16 0 -12 6 Q-6 12 0 11 Q6 12 12 6 Q16 0 12 -6 Q6 -12 0 -11 Q-6 -12 -12 -6 Z" fill={`url(#${idPrefix}-marigoldBright)`} />
            <circle cx="0" cy="0" r="5" fill="#FFF9C4" opacity="0.85" />
          </g>

          {/* Velvet Red Rose Accent Bloom */}
          <g transform="translate(95, 34)">
            <path d="M-14 -4 C-18 6 -12 14 -2 15 C8 16 16 8 13 -2 C10 -12 -4 -14 -14 -4 Z" fill={`url(#${idPrefix}-roseVelvet)`} />
            <path d="M-8 -2 C-10 4 -6 10 0 10 C6 10 10 4 8 -2 C6 -8 -2 -8 -8 -2 Z" fill="#FF4D6D" opacity="0.75" />
            <circle cx="0" cy="1" r="3.5" fill="#3F0414" />
          </g>

          {/* Marigold Bloom 2 (Golden Yellow Companion) */}
          <g transform="translate(170, 34)">
            <ellipse cx="0" cy="0" rx="16" ry="15" fill={`url(#${idPrefix}-marigoldBright)`} />
            <path d="M-10 -4 Q-14 0 -10 4 Q-4 10 0 9 Q4 10 10 4 Q14 0 10 -4 Q4 -10 0 -9 Q-4 -10 -10 -4 Z" fill={`url(#${idPrefix}-marigoldDeep)`} />
            <circle cx="0" cy="0" r="3.5" fill="#FFF9C4" opacity="0.8" />
          </g>

          {/* Delicate hanging marigold drop */}
          <g transform="translate(130, 68)">
            <circle cx="0" cy="0" r="10" fill={`url(#${idPrefix}-marigoldDeep)`} />
            <circle cx="0" cy="0" r="6" fill={`url(#${idPrefix}-marigoldBright)`} />
            <circle cx="0" cy="12" r="7" fill={`url(#${idPrefix}-roseVelvet)`} />
          </g>
        </g>

        {/* ====================================================================
            03. RIGHT REALISTIC FLORAL CLUSTER (At Right Pillar Junction)
            ==================================================================== */}
        <g filter={`url(#${idPrefix}-elementShadow)`} className="floral-cluster-right">
          {/* Organic Mango Leaves Fan */}
          <path d="M 910 12 C 940 22 945 50 928 68 C 912 52 905 30 910 12 Z" fill={`url(#${idPrefix}-leafFresh)`} />
          <path d="M 860 12 C 880 28 882 58 865 78 C 848 60 845 35 860 12 Z" fill={`url(#${idPrefix}-leafFresh)`} />
          <path d="M 810 12 C 825 32 822 62 802 80 C 788 60 790 32 810 12 Z" fill={`url(#${idPrefix}-leafFresh)`} />

          {/* Natural Overlapping Marigold Bloom 1 (Large Saffron Center) */}
          <g transform="translate(870, 36)">
            {/* Petal Layer 1 */}
            <ellipse cx="0" cy="0" rx="22" ry="20" fill={`url(#${idPrefix}-marigoldDeep)`} />
            <path d="M-18 -8 Q-24 0 -18 8 Q-12 18 0 16 Q12 18 18 8 Q24 0 18 -8 Q12 -18 0 -16 Q-12 -18 -18 -8 Z" fill={`url(#${idPrefix}-marigoldDeep)`} />
            {/* Petal Layer 2 */}
            <path d="M-12 -6 Q-16 0 -12 6 Q-6 12 0 11 Q6 12 12 6 Q16 0 12 -6 Q6 -12 0 -11 Q-6 -12 -12 -6 Z" fill={`url(#${idPrefix}-marigoldBright)`} />
            <circle cx="0" cy="0" r="5" fill="#FFF9C4" opacity="0.85" />
          </g>

          {/* Velvet Red Rose Accent Bloom */}
          <g transform="translate(905, 34)">
            <path d="M-14 -4 C-18 6 -12 14 -2 15 C8 16 16 8 13 -2 C10 -12 -4 -14 -14 -4 Z" fill={`url(#${idPrefix}-roseVelvet)`} />
            <path d="M-8 -2 C-10 4 -6 10 0 10 C6 10 10 4 8 -2 C6 -8 -2 -8 -8 -2 Z" fill="#FF4D6D" opacity="0.75" />
            <circle cx="0" cy="1" r="3.5" fill="#3F0414" />
          </g>

          {/* Marigold Bloom 2 (Golden Yellow Companion) */}
          <g transform="translate(830, 34)">
            <ellipse cx="0" cy="0" rx="16" ry="15" fill={`url(#${idPrefix}-marigoldBright)`} />
            <path d="M-10 -4 Q-14 0 -10 4 Q-4 10 0 9 Q4 10 10 4 Q14 0 10 -4 Q4 -10 0 -9 Q-4 -10 -10 -4 Z" fill={`url(#${idPrefix}-marigoldDeep)`} />
            <circle cx="0" cy="0" r="3.5" fill="#FFF9C4" opacity="0.8" />
          </g>

          {/* Delicate hanging marigold drop */}
          <g transform="translate(870, 68)">
            <circle cx="0" cy="0" r="10" fill={`url(#${idPrefix}-marigoldDeep)`} />
            <circle cx="0" cy="0" r="6" fill={`url(#${idPrefix}-marigoldBright)`} />
            <circle cx="0" cy="12" r="7" fill={`url(#${idPrefix}-roseVelvet)`} />
          </g>
        </g>

        {/* ====================================================================
            04. HANGING ANTIQUE BRASS TEMPLE BELLS (2 to 3 Bells)
            ==================================================================== */}
        {/* BELL 1 (Left Temple Bell) */}
        <g className="toran-bell toran-bell-1" filter={`url(#${idPrefix}-elementShadow)`}>
          {/* Interlocking Brass Chain Links */}
          <g stroke={`url(#${idPrefix}-brassChain)`} strokeWidth="2.2" strokeLinecap="round">
            <line x1="130" y1="84" x2="130" y2="92" />
            <line x1="130" y1="96" x2="130" y2="104" />
            <line x1="130" y1="108" x2="130" y2="116" />
          </g>
          {/* Top Loop Ring */}
          <circle cx="130" cy="120" r="3.5" stroke={`url(#${idPrefix}-brassBell)`} strokeWidth="2" fill="none" />
          {/* Carved Bell Dome & Flared Rim */}
          <path
            d="M 126 123 C 126 130 120 137 114 148 L 146 148 C 140 137 134 130 134 123 Z"
            fill={`url(#${idPrefix}-brassBell)`}
          />
          {/* Relief Carved Band & Rim Lip */}
          <ellipse cx="130" cy="148" rx="16" ry="3.5" fill="#422D07" />
          <ellipse cx="130" cy="147" rx="15" ry="2.5" fill={`url(#${idPrefix}-brassBell)`} />
          {/* Clapper Droplet */}
          <circle cx="130" cy="153" r="3" fill={`url(#${idPrefix}-brassBell)`} />
        </g>

        {/* BELL 2 (Center Delicate Temple Bell - Optional 3rd Bell) */}
        {bellCount === 3 && (
          <g className="toran-bell toran-bell-center" filter={`url(#${idPrefix}-elementShadow)`}>
            {/* Chain from Center Cornice */}
            <g stroke={`url(#${idPrefix}-brassChain)`} strokeWidth="1.8" strokeLinecap="round">
              <line x1="500" y1="20" x2="500" y2="34" />
              <line x1="500" y1="38" x2="500" y2="52" />
              <line x1="500" y1="56" x2="500" y2="70" />
            </g>
            <circle cx="500" cy="74" r="3" stroke={`url(#${idPrefix}-brassBell)`} strokeWidth="1.8" fill="none" />
            <path
              d="M 496 77 C 496 83 491 90 486 99 L 514 99 C 509 90 504 83 504 77 Z"
              fill={`url(#${idPrefix}-brassBell)`}
            />
            <ellipse cx="500" cy="99" rx="14" ry="3" fill="#422D07" />
            <ellipse cx="500" cy="98" rx="13" ry="2.2" fill={`url(#${idPrefix}-brassBell)`} />
            <circle cx="500" cy="103" r="2.5" fill={`url(#${idPrefix}-brassBell)`} />
          </g>
        )}

        {/* BELL 3 (Right Temple Bell) */}
        <g className="toran-bell toran-bell-4" filter={`url(#${idPrefix}-elementShadow)`}>
          {/* Interlocking Brass Chain Links */}
          <g stroke={`url(#${idPrefix}-brassChain)`} strokeWidth="2.2" strokeLinecap="round">
            <line x1="870" y1="84" x2="870" y2="92" />
            <line x1="870" y1="96" x2="870" y2="104" />
            <line x1="870" y1="108" x2="870" y2="116" />
          </g>
          {/* Top Loop Ring */}
          <circle cx="870" cy="120" r="3.5" stroke={`url(#${idPrefix}-brassBell)`} strokeWidth="2" fill="none" />
          {/* Carved Bell Dome & Flared Rim */}
          <path
            d="M 866 123 C 866 130 860 137 854 148 L 886 148 C 880 137 874 130 874 123 Z"
            fill={`url(#${idPrefix}-brassBell)`}
          />
          {/* Relief Carved Band & Rim Lip */}
          <ellipse cx="870" cy="148" rx="16" ry="3.5" fill="#422D07" />
          <ellipse cx="870" cy="147" rx="15" ry="2.5" fill={`url(#${idPrefix}-brassBell)`} />
          {/* Clapper Droplet */}
          <circle cx="870" cy="153" r="3" fill={`url(#${idPrefix}-brassBell)`} />
        </g>
      </svg>
    </div>
  );
};

export default MandapToran;
