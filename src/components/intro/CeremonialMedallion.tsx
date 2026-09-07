import React from 'react';

interface CeremonialMedallionProps {
  className?: string;
  isPressed?: boolean;
}

export const CeremonialMedallion: React.FC<CeremonialMedallionProps> = ({
  className = '',
  isPressed = false,
}) => {
  const id = React.useId().replace(/:/g, '');

  return (
    <div className={`ceremonial-medallion-root ${isPressed ? 'is-pressed' : ''} ${className}`}>
      {/* Outer Sacred Aura / Warm Internal Illumination */}
      <div className="medallion-ambient-halo" aria-hidden="true" />

      {/* Main Layered Medallion SVG */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="medallion-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Deep Shadow Filter for Three-Dimensional Temple Metal Relief */}
          <filter id={`${id}-reliefShadow`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.95" />
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#ffe58f" floodOpacity="0.4" />
          </filter>

          {/* Outer Antique Brass Rim Gradient */}
          <linearGradient id={`${id}-outerBezel`} x1="20" y1="15" x2="180" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF2B8" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="65%" stopColor="#8A6618" />
            <stop offset="85%" stopColor="#5C420D" />
            <stop offset="100%" stopColor="#362505" />
          </linearGradient>

          {/* Secondary Bevel Highlight Gradient */}
          <linearGradient id={`${id}-bevelHighlight`} x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE082" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#C9A227" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3D2806" stopOpacity="0.9" />
          </linearGradient>

          {/* Recessed Dark Maroon Center Gradient */}
          <radialGradient id={`${id}-recessedMaroon`} cx="50%" cy="45%" r="52%">
            <stop offset="0%" stopColor="#3E0812" />
            <stop offset="55%" stopColor="#25040A" />
            <stop offset="85%" stopColor="#150105" />
            <stop offset="100%" stopColor="#0B0002" />
          </radialGradient>

          {/* Sacred Ganesha Emblem Antique Brass Gradients */}
          <linearGradient id={`${id}-emblemBrassLight`} x1="70" y1="35" x2="130" y2="115" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFBE6" />
            <stop offset="25%" stopColor="#F5D77F" />
            <stop offset="65%" stopColor="#C9A227" />
            <stop offset="90%" stopColor="#7A5813" />
            <stop offset="100%" stopColor="#4A3408" />
          </linearGradient>

          <linearGradient id={`${id}-emblemBrassShadow`} x1="100" y1="35" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8A6618" />
            <stop offset="60%" stopColor="#4A3408" />
            <stop offset="100%" stopColor="#241703" />
          </linearGradient>

          {/* Red Tilak Core */}
          <linearGradient id={`${id}-tilakRed`} x1="100" y1="52" x2="100" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF4D6D" />
            <stop offset="50%" stopColor="#D90429" />
            <stop offset="100%" stopColor="#59000D" />
          </linearGradient>

          {/* Shimmer Sheen Angle */}
          <linearGradient id={`${id}-shimmerGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEAA5" stopOpacity="0" />
            <stop offset="48%" stopColor="#FFEAA5" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="52%" stopColor="#FFEAA5" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFEAA5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ================================================================
            LAYER 1: OUTER ANTIQUE-BRASS BEVELED RIM & ENGRAVED RIVETS
            ================================================================ */}
        {/* Deep Rim Drop Shadow */}
        <circle cx="100" cy="102" r="95" fill="#000000" fillOpacity="0.75" />

        {/* Outer Heavy Bezel Ring */}
        <circle cx="100" cy="100" r="95" fill={`url(#${id}-outerBezel)`} stroke="#FFF5C2" strokeWidth="0.8" strokeOpacity="0.65" />

        {/* Stepped Inner Bevel Groove */}
        <circle cx="100" cy="100" r="90" fill="none" stroke={`url(#${id}-bevelHighlight)`} strokeWidth="1.6" />
        <circle cx="100" cy="100" r="86.5" fill="none" stroke="#2B1A04" strokeWidth="1.2" />

        {/* 12 Embossed Ceremonial Temple Diamond Studs / Rivets */}
        <g fill="#FFEAA5" stroke="#7A5813" strokeWidth="0.4">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 100 + 91.5 * Math.sin(rad);
            const cy = 100 - 91.5 * Math.cos(rad);
            return (
              <circle
                key={idx}
                cx={cx.toFixed(2)}
                cy={cy.toFixed(2)}
                r="1.4"
                filter={`url(#${id}-reliefShadow)`}
              />
            );
          })}
        </g>

        {/* ================================================================
            LAYER 2: RECESSED DARK MAROON SANCTUM MOAT
            ================================================================ */}
        <circle cx="100" cy="100" r="85" fill={`url(#${id}-recessedMaroon)`} />

        {/* Radial Dark Inner Rim Vignette */}
        <circle cx="100" cy="100" r="85" fill="none" stroke="#080002" strokeWidth="3" opacity="0.85" />

        {/* ================================================================
            LAYER 3: THIN INNER CONCENTRIC GOLD TEMPLE RING
            ================================================================ */}
        {/* Subtle Beaded Golden Sunburst Ring */}
        <circle
          cx="100"
          cy="100"
          r="80.5"
          fill="none"
          stroke="#E5BD47"
          strokeWidth="0.8"
          strokeDasharray="2 3.2"
          strokeOpacity="0.7"
        />
        <circle
          cx="100"
          cy="100"
          r="76.5"
          fill="none"
          stroke="#C9A227"
          strokeWidth="0.6"
          strokeOpacity="0.5"
        />

        {/* Diagonal Light Shimmer Reflection */}
        <circle cx="100" cy="100" r="85" fill={`url(#${id}-shimmerGrad)`} pointerEvents="none" />

        {/* ================================================================
            LAYER 4: REFINED CENTRAL SACRED GANPATI EMBLEM
            ================================================================ */}
        <g className="medallion-emblem-art" filter={`url(#${id}-reliefShadow)`}>
          {/* --- CROWN / MUKUT --- */}
          {/* Top Kalash Flame Peak */}
          <path
            d="M 100 29 C 96 34 94 38 94 40 C 97 41 103 41 106 40 C 106 38 104 34 100 29 Z"
            fill={`url(#${id}-emblemBrassLight)`}
          />
          <circle cx="100" cy="28.5" r="1.3" fill="#FFFCE6" />

          {/* Mukut Middle Tier (Arched Hood) */}
          <path
            d="M 87 47 C 92 41 97 39 100 39 C 103 39 108 41 113 47 C 108 48 104 49 100 49 C 96 49 92 48 87 47 Z"
            fill={`url(#${id}-emblemBrassShadow)`}
          />
          <path
            d="M 89 46.5 C 93 42 97 40.5 100 40.5 C 103 40.5 107 42 111 46.5 C 107 47.5 103 48 100 48 C 97 48 93 47.5 89 46.5 Z"
            fill={`url(#${id}-emblemBrassLight)`}
          />

          {/* Mukut Lower Tier (Headband Crest) */}
          <path
            d="M 80 56 C 88 50 95 48 100 48 C 105 48 112 50 120 56 C 113 58 106 59 100 59 C 94 59 87 58 80 56 Z"
            fill={`url(#${id}-emblemBrassLight)`}
          />
          <line x1="82" y1="56" x2="118" y2="56" stroke="#5C420D" strokeWidth="0.6" />
          <circle cx="100" cy="55.5" r="1.4" fill="#FFF2B8" />

          {/* --- EARS (LEFT & RIGHT) --- */}
          {/* Left Ear Outer Sweeping Wing */}
          <path
            d="M 84 57 C 70 54 55 61 46 72 C 41 78 41 84 48 91 C 55 98 67 103 76 104 C 71 96 70 86 73 78 C 76 69 80 62 84 57 Z"
            fill={`url(#${id}-emblemBrassLight)`}
          />
          {/* Left Ear Inner Depth Fold */}
          <path
            d="M 79 61 C 67 60 55 67 49 76 C 45 81 46 87 52 93 C 58 98 68 101 75 101 C 71 94 70 86 73 79 C 75 72 78 66 79 61 Z"
            fill={`url(#${id}-emblemBrassShadow)`}
            opacity="0.8"
          />

          {/* Right Ear Outer Sweeping Wing */}
          <path
            d="M 116 57 C 130 54 145 61 154 72 C 159 78 159 84 152 91 C 145 98 133 103 124 104 C 129 96 130 86 127 78 C 124 69 120 62 116 57 Z"
            fill={`url(#${id}-emblemBrassLight)`}
          />
          {/* Right Ear Inner Depth Fold */}
          <path
            d="M 121 61 C 133 60 145 67 151 76 C 155 81 154 87 148 93 C 142 98 132 101 125 101 C 129 94 130 86 127 79 C 125 72 122 66 121 61 Z"
            fill={`url(#${id}-emblemBrassShadow)`}
            opacity="0.8"
          />

          {/* --- TUSKS (DANTA) --- */}
          {/* Left Sacred Tusk (Intact) */}
          <path d="M 78 88 C 74 93 72 97 70 101 C 73 100 78 96 81 91 Z" fill="#FFFCE6" />
          {/* Right Sacred Broken Tusk */}
          <path d="M 122 88 C 124 91 126 94 128 97 C 126 96 123 94 120 91 Z" fill="#FFFCE6" />

          {/* --- FACIAL CHEEK CRESTS --- */}
          {/* Left Cheek Crest Ribbon */}
          <path
            d="M 94 57 C 84 64 78 77 80 89 C 82 99 88 110 94 118 C 92 107 87 97 88 86 C 88 76 91 66 94 57 Z"
            fill={`url(#${id}-emblemBrassLight)`}
          />
          {/* Right Cheek Crest Ribbon */}
          <path
            d="M 106 57 C 116 64 122 77 120 89 C 118 99 112 110 106 118 C 108 107 113 97 112 86 C 112 76 109 66 106 57 Z"
            fill={`url(#${id}-emblemBrassLight)`}
          />

          {/* --- AUSPICIOUS GRACEFUL TRUNK (SONDH) --- */}
          {/* Trunk Shadow Base */}
          <path
            d="M 97 75 C 96 88 95 104 98 116 C 101 126 106 133 115 137 C 122 140 131 138 135 130 C 137 124 135 118 129 114 C 124 111 118 113 117 118 C 115 122 119 126 124 126 C 125 126 127 124 127 122 C 127 121 125 120 124 120 C 122 121 121 119 122 117 C 123 114 128 114 130 118 C 133 121 133 126 131 130 C 127 135 119 137 113 133 C 105 129 101 120 100 110 C 97 98 99 83 100 75 Z"
            fill={`url(#${id}-emblemBrassShadow)`}
          />
          {/* Trunk Main Brass Body */}
          <path
            d="M 98 74 C 97 86 96 102 99 113 C 101 123 107 130 115 133 C 121 135 128 134 132 127 C 134 122 132 116 127 112 C 123 109 118 111 117 115 C 116 119 119 122 123 122 C 124 122 126 121 126 119 C 126 117 124 117 123 117 C 121 118 121 116 122 115 C 123 112 127 112 129 116 C 131 119 131 123 129 126 C 126 130 120 132 115 129 C 108 125 104 117 103 108 C 101 97 102 83 103 74 Z"
            fill={`url(#${id}-emblemBrassLight)`}
          />
          {/* Sacred Golden Modak at Trunk Tip */}
          <circle cx="123" cy="119" r="1.8" fill="#FFF8D6" />

          {/* --- SACRED TRISHUL TILAK & BINDU --- */}
          {/* Red Tilak Trishul */}
          <path
            d="M 100 62 L 100 70 M 98 65 Q 98 67 100 68 Q 102 67 102 65"
            stroke={`url(#${id}-tilakRed)`}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Center Golden Ridge Line */}
          <line x1="100" y1="62" x2="100" y2="69" stroke="#FFFCE6" strokeWidth="0.6" strokeLinecap="round" />
          {/* Sacred Bindu */}
          <circle cx="100" cy="74.5" r="1.6" fill={`url(#${id}-tilakRed)`} />
          <circle cx="100" cy="74.5" r="0.7" fill="#FFFCE6" />
        </g>

        {/* ================================================================
            LAYER 5: INTEGRATED CEREMONIAL TYPOGRAPHY & FINISH
            ================================================================ */}
        {/* Subtle Horizontal Filigree Divider */}
        <g opacity="0.75">
          <line x1="60" y1="145" x2="88" y2="145" stroke="#C9A227" strokeWidth="0.6" strokeOpacity="0.6" />
          <line x1="112" y1="145" x2="140" y2="145" stroke="#C9A227" strokeWidth="0.6" strokeOpacity="0.6" />
          {/* Center Diamond Accent */}
          <path d="M 100 143 L 102 145 L 100 147 L 98 145 Z" fill="#E5BD47" />
          <circle cx="94" cy="145" r="0.8" fill="#C9A227" />
          <circle cx="106" cy="145" r="0.8" fill="#C9A227" />
        </g>

        {/* Primary Medallion Inscription: "TAP TO OPEN" */}
        <text
          x="100"
          y="158"
          textAnchor="middle"
          fill="#FFFDF0"
          fontFamily="'Cinzel', serif"
          fontWeight="700"
          fontSize="10"
          letterSpacing="0.24em"
          filter={`url(#${id}-reliefShadow)`}
        >
          TAP TO OPEN
        </text>

        {/* Supporting Micro-Label: "OPEN THE SANCTUM" */}
        <text
          x="100"
          y="169"
          textAnchor="middle"
          fill="#D4AF37"
          fontFamily="'Cinzel', serif"
          fontWeight="600"
          fontSize="6.5"
          letterSpacing="0.28em"
          opacity="0.92"
        >
          OPEN THE SANCTUM
        </text>

        {/* Lower Terminal Flourish Beads */}
        <g opacity="0.65" fill="#FFEAA5">
          <circle cx="95" cy="177" r="0.9" />
          <circle cx="100" cy="177.5" r="1.3" />
          <circle cx="105" cy="177" r="0.9" />
        </g>
      </svg>
    </div>
  );
};
