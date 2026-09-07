import React from 'react';

interface HeroToranProps {
  className?: string;
}

/**
 * HeroToran — Traditional Indian Temple Jharokha / Mandap Header Frame
 *
 * Designed exclusively for Section 02 Hero top framing.
 * Visual Art Direction:
 * - Carved warm Indian temple sandstone architrave with stepped cornice moldings
 * - Central antique brass Padma / Kalash ornamental crest catching sanctum light
 * - Symmetrical side architectural corbel brackets with brass mounting plates
 * - Subtle deep maroon velvet under-pelmet with gold zari scalloped trim
 * - Exactly two small antique brass bells suspended symmetrically from short chains
 * - Restrained fresh marigold & mango-leaf accents clustered exclusively at outer bracket corners
 * - Zero continuous swinging; purely architectural, handcrafted, royal, and sacred
 */
export const HeroToran: React.FC<HeroToranProps> = ({ className = '' }) => {
  const idPrefix = React.useId().replace(/:/g, '');

  return (
    <div className={`hero-toran-container ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 900 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-toran-svg"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          {/* ====================================================================
              01. MATERIAL & LIGHTING GRADIENTS
              ==================================================================== */}
          <linearGradient id={`${idPrefix}-stoneCorniceTop`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A0E12" />
            <stop offset="15%" stopColor="#5C252D" />
            <stop offset="35%" stopColor="#8C3B48" />
            <stop offset="50%" stopColor="#AD4D5E" />
            <stop offset="65%" stopColor="#8C3B48" />
            <stop offset="85%" stopColor="#5C252D" />
            <stop offset="100%" stopColor="#2A0E12" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-stoneBevelHighlight`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9C4C59" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#E6A88E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFDEBC" stopOpacity="1" />
            <stop offset="75%" stopColor="#E6A88E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9C4C59" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-stoneArchitrave`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#752B37" />
            <stop offset="50%" stopColor="#4A1921" />
            <stop offset="100%" stopColor="#25090E" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-stoneCorbelLeft`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A3945" />
            <stop offset="45%" stopColor="#572027" />
            <stop offset="100%" stopColor="#22070A" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-stoneCorbelRight`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8A3945" />
            <stop offset="45%" stopColor="#572027" />
            <stop offset="100%" stopColor="#22070A" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-antiqueBrass`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B8" />
            <stop offset="22%" stopColor="#E5C158" />
            <stop offset="55%" stopColor="#C9A227" />
            <stop offset="82%" stopColor="#7A520E" />
            <stop offset="100%" stopColor="#352003" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-brassTrim`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7A520E" stopOpacity="0.6" />
            <stop offset="20%" stopColor="#E5C158" />
            <stop offset="50%" stopColor="#FFF6D0" />
            <stop offset="80%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#7A520E" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-brassBell`} x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#FFF8D6" />
            <stop offset="25%" stopColor="#E5C158" />
            <stop offset="60%" stopColor="#B3891B" />
            <stop offset="85%" stopColor="#734B0B" />
            <stop offset="100%" stopColor="#2E1B02" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-maroonPelmet`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#560C16" />
            <stop offset="60%" stopColor="#3C060E" />
            <stop offset="100%" stopColor="#1C0105" />
          </linearGradient>

          <radialGradient id={`${idPrefix}-crestBacklight`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#E5A91B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8C2500" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`${idPrefix}-marigoldSaffron`} cx="38%" cy="36%" r="62%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="28%" stopColor="#FFA000" />
            <stop offset="68%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#6D1B00" />
          </radialGradient>

          <radialGradient id={`${idPrefix}-marigoldGold`} cx="40%" cy="36%" r="60%">
            <stop offset="0%" stopColor="#FFFFD0" />
            <stop offset="30%" stopColor="#FFD54F" />
            <stop offset="70%" stopColor="#FF8F00" />
            <stop offset="100%" stopColor="#9E3D00" />
          </radialGradient>

          <linearGradient id={`${idPrefix}-leafDark`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43A047" />
            <stop offset="45%" stopColor="#2E7D32" />
            <stop offset="85%" stopColor="#1B5E20" />
            <stop offset="100%" stopColor="#0B2B0E" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-leafLight`} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#66BB6A" />
            <stop offset="50%" stopColor="#388E3C" />
            <stop offset="100%" stopColor="#144919" />
          </linearGradient>

          <filter id={`${idPrefix}-archShadow`} x="-5%" y="-5%" width="110%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="5.5" floodColor="#000000" floodOpacity="0.92" />
          </filter>
        </defs>

        {/* ====================================================================
            02. ARCHITECTURAL LAYER A: SANCTUM AMBIENCE & CREST BACKLIGHT
            ==================================================================== */}
        <g aria-hidden="true">
          <circle cx="450" cy="24" r="46" fill={`url(#${idPrefix}-crestBacklight)`} />
        </g>

        {/* ====================================================================
            03. ARCHITECTURAL LAYER B: SIDE BRACKET BASES (CORBELS)
            ==================================================================== */}
        <g filter={`url(#${idPrefix}-archShadow)`}>
          {/* Left Architectural Bracket (Corbel) */}
          <path
            d="M 68 28 L 140 28 L 140 54 C 140 70 125 84 110 84 C 95 84 82 72 78 58 C 76 50 72 42 68 38 Z"
            fill={`url(#${idPrefix}-stoneCorbelLeft)`}
          />
          <path
            d="M 80 34 L 132 34 L 132 52 C 132 64 120 74 110 74 C 100 74 92 64 88 56 C 86 50 82 44 80 40 Z"
            fill="#180508"
            opacity="0.65"
          />
          <path
            d="M 68 28 L 68 38 C 72 42 76 50 78 58 C 82 72 95 84 110 84"
            stroke="#E6A88E"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="none"
          />

          {/* Right Architectural Bracket (Corbel) */}
          <path
            d="M 832 28 L 760 28 L 760 54 C 760 70 775 84 790 84 C 805 84 818 72 822 58 C 824 50 828 42 832 38 Z"
            fill={`url(#${idPrefix}-stoneCorbelRight)`}
          />
          <path
            d="M 820 34 L 768 34 L 768 52 C 768 64 780 74 790 74 C 800 74 808 64 812 56 C 814 50 818 44 820 40 Z"
            fill="#180508"
            opacity="0.65"
          />
          <path
            d="M 832 28 L 832 38 C 828 42 824 50 822 58 C 818 72 805 84 790 84"
            stroke="#E6A88E"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="none"
          />
        </g>

        {/* ====================================================================
            04. ARCHITECTURAL LAYER C: MAIN CARVED STONE CORNICE (ARCHITRAVE)
            ==================================================================== */}
        <g filter={`url(#${idPrefix}-archShadow)`}>
          {/* TIER 1: Upper Stone Lintel Slab (Thicker) */}
          <rect x="66" y="24" width="768" height="15" rx="1.5" fill="#140406" />
          <rect x="66" y="22" width="768" height="14" rx="1" fill={`url(#${idPrefix}-stoneCorniceTop)`} />
          <line x1="68" y1="22.8" x2="832" y2="22.8" stroke={`url(#${idPrefix}-stoneBevelHighlight)`} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="67" y1="36" x2="833" y2="36" stroke="#120305" strokeWidth="1.5" />

          {/* TIER 2: Relief Carved Dentil Band (Thicker) */}
          <rect x="80" y="36" width="740" height="12" fill="#1A0609" />
          <g opacity="0.85">
            {[
              100, 126, 152, 178, 204, 230, 256, 282, 308, 334, 360, 386, 412,
              488, 514, 540, 566, 592, 618, 644, 670, 696, 722, 748, 774, 800
            ].map((xPos) => (
              <g key={`dentil-${xPos}`}>
                <rect x={xPos - 6} y="38" width="12" height="8" rx="1" fill={`url(#${idPrefix}-stoneCorniceTop)`} />
                <line x1={xPos - 5} y1="38.5" x2={xPos + 5} y2="38.5" stroke="#E6A88E" strokeWidth="1" opacity="0.75" />
                <line x1={xPos - 6} y1="46" x2={xPos + 6} y2="46" stroke="#0D0203" strokeWidth="1" />
              </g>
            ))}
          </g>

          {/* TIER 3: Main Architrave Beam (Thicker) */}
          <rect x="88" y="48" width="724" height="18" fill={`url(#${idPrefix}-stoneArchitrave)`} />
          <line x1="88" y1="49" x2="812" y2="49" stroke="#8C3B48" strokeWidth="1" opacity="0.65" />
          <line x1="88" y1="66" x2="812" y2="66" stroke="#120305" strokeWidth="1.5" />

          {/* TIER 4: Antique Brass Inlaid Trim Rail */}
          <rect x="96" y="66" width="708" height="4.5" rx="1.5" fill={`url(#${idPrefix}-brassTrim)`} />
          <line x1="96" y1="70.5" x2="804" y2="70.5" stroke="#352003" strokeWidth="1" />

          {/* TIER 5: Deep Maroon Velvet Under-Pelmet with Zari Scallop */}
          <path
            d="M 104 70 L 796 70 L 792 84 L 108 84 Z"
            fill={`url(#${idPrefix}-maroonPelmet)`}
          />
          <g stroke="#C9A227" strokeWidth="1.2" opacity="0.88" fill="none">
            {[
              116, 140, 164, 188, 212, 236, 260, 284, 308, 332, 356, 380, 404,
              496, 520, 544, 568, 592, 616, 640, 664, 688, 712, 736, 760, 784
            ].map((scallopX) => (
              <path
                key={`scallop-${scallopX}`}
                d={`M ${scallopX - 12} 80 Q ${scallopX} 86.5 ${scallopX + 12} 80`}
              />
            ))}
          </g>
          <g fill="#E5C158" opacity="0.95">
            {[
              128, 152, 176, 200, 224, 248, 272, 296, 320, 344, 368, 392,
              508, 532, 556, 580, 604, 628, 652, 676, 700, 724, 748, 772
            ].map((beadX) => (
              <circle key={`zari-bead-${beadX}`} cx={beadX} cy="80.5" r="1.2" />
            ))}
          </g>
        </g>

        {/* ====================================================================
            05. ARCHITECTURAL LAYER D: CENTRAL AUSPICIOUS ORNAMENTAL CREST
            ==================================================================== */}
        <g filter={`url(#${idPrefix}-archShadow)`}>
          <path
            d="M 428 22 L 472 22 L 468 15 L 432 15 Z"
            fill={`url(#${idPrefix}-antiqueBrass)`}
          />
          <line x1="430" y1="15.5" x2="470" y2="15.5" stroke="#FFF8D6" strokeWidth="1" opacity="0.85" />
          <line x1="428" y1="22" x2="472" y2="22" stroke="#352003" strokeWidth="1" />

          <path
            d="M 432 15 C 420 12 410 4 415 -3 C 425 0 435 8 440 15 Z"
            fill={`url(#${idPrefix}-antiqueBrass)`}
          />
          <path
            d="M 468 15 C 480 12 490 4 485 -3 C 475 0 465 8 460 15 Z"
            fill={`url(#${idPrefix}-antiqueBrass)`}
          />

          <path
            d="M 440 15 C 435 7 435 1 450 -6 C 465 1 465 7 460 15 Z"
            fill={`url(#${idPrefix}-antiqueBrass)`}
          />
          <path
            d="M 450 -3 L 456 5 L 450 12 L 444 5 Z"
            fill="#FFF8D6"
            opacity="0.85"
          />
          <circle cx="450" cy="5" r="3.2" fill="#880E4F" />
          <circle cx="449.2" cy="4.2" r="1" fill="#FF80AB" />

          <line x1="450" y1="-6" x2="450" y2="-10" stroke="#FFF8D6" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="450" cy="-10" r="1.4" fill="#FFF8D6" />

          <g className="hero-toran-center-rosette">
            <circle cx="450" cy="56" r="8" fill={`url(#${idPrefix}-antiqueBrass)`} />
            <circle cx="450" cy="56" r="5.5" fill="#2E080D" />
            <circle cx="450" cy="56" r="3" fill="#FFF2B8" />
          </g>
        </g>

        {/* ====================================================================
            06. ARCHITECTURAL LAYER E: BRASS MOUNTING ROSETTES & EYELETS
            ==================================================================== */}
        <g filter={`url(#${idPrefix}-archShadow)`}>
          {/* Left Bracket Brass Mounting Plate */}
          <circle cx="110" cy="74" r="6" fill={`url(#${idPrefix}-antiqueBrass)`} />
          <circle cx="110" cy="74" r="3.5" fill="#1E070A" />
          <circle cx="110" cy="74" r="1.8" fill="#FFF8D6" />
          <circle cx="110" cy="84" r="4" stroke={`url(#${idPrefix}-antiqueBrass)`} strokeWidth="2" fill="none" />

          {/* Right Bracket Brass Mounting Plate */}
          <circle cx="790" cy="74" r="6" fill={`url(#${idPrefix}-antiqueBrass)`} />
          <circle cx="790" cy="74" r="3.5" fill="#1E070A" />
          <circle cx="790" cy="74" r="1.8" fill="#FFF8D6" />
          <circle cx="790" cy="84" r="4" stroke={`url(#${idPrefix}-antiqueBrass)`} strokeWidth="2" fill="none" />
        </g>

        {/* ====================================================================
            07. ARCHITECTURAL LAYER F: TWO HANGING ANTIQUE BRASS TEMPLE BELLS
            ==================================================================== */}
        {/* --- LEFT TEMPLE BELL --- */}
        <g className="hero-mandap-bell hero-bell-left" filter={`url(#${idPrefix}-archShadow)`}>
          <g stroke={`url(#${idPrefix}-antiqueBrass)`} strokeWidth="2.2" strokeLinecap="round">
            <line x1="110" y1="88" x2="110" y2="95" />
            <line x1="110" y1="97" x2="110" y2="104" />
          </g>
          <circle cx="110" cy="108" r="3" stroke={`url(#${idPrefix}-brassBell)`} strokeWidth="1.8" fill="none" />

          <path
            d="M 105 111 C 105 117 100 123 95 131 L 125 131 C 120 123 115 117 115 111 Z"
            fill={`url(#${idPrefix}-brassBell)`}
          />
          <ellipse cx="110" cy="122" rx="10" ry="1.6" fill={`url(#${idPrefix}-antiqueBrass)`} opacity="0.95" />
          <ellipse cx="110" cy="131" rx="15" ry="3.2" fill="#241402" />
          <ellipse cx="110" cy="130.2" rx="13.8" ry="2.2" fill={`url(#${idPrefix}-brassBell)`} />
          <circle cx="110" cy="135" r="2.8" fill={`url(#${idPrefix}-brassBell)`} />
          <circle cx="109.3" cy="134.4" r="1" fill="#FFF8D6" opacity="0.9" />
        </g>

        {/* --- RIGHT TEMPLE BELL --- */}
        <g className="hero-mandap-bell hero-bell-right" filter={`url(#${idPrefix}-archShadow)`}>
          <g stroke={`url(#${idPrefix}-antiqueBrass)`} strokeWidth="2.2" strokeLinecap="round">
            <line x1="790" y1="88" x2="790" y2="95" />
            <line x1="790" y1="97" x2="790" y2="104" />
          </g>
          <circle cx="790" cy="108" r="3" stroke={`url(#${idPrefix}-brassBell)`} strokeWidth="1.8" fill="none" />

          <path
            d="M 785 111 C 785 117 780 123 775 131 L 805 131 C 800 123 795 117 795 111 Z"
            fill={`url(#${idPrefix}-brassBell)`}
          />
          <ellipse cx="790" cy="122" rx="10" ry="1.6" fill={`url(#${idPrefix}-antiqueBrass)`} opacity="0.95" />
          <ellipse cx="790" cy="131" rx="15" ry="3.2" fill="#241402" />
          <ellipse cx="790" cy="130.2" rx="13.8" ry="2.2" fill={`url(#${idPrefix}-brassBell)`} />
          <circle cx="790" cy="135" r="2.8" fill={`url(#${idPrefix}-brassBell)`} />
          <circle cx="789.3" cy="134.4" r="1" fill="#FFF8D6" opacity="0.9" />
        </g>

        {/* ====================================================================
            08. RESTRAINED FLORAL CORNER ACCENTS (SHRINGAR)
            ==================================================================== */}
        {/* --- LEFT OUTER CORNER FLORAL ACCENT --- */}
        <g filter={`url(#${idPrefix}-archShadow)`} className="hero-corner-floral-left">
          <path
            d="M 64 22 C 42 28 34 50 46 64 C 58 50 66 36 64 22 Z"
            fill={`url(#${idPrefix}-leafDark)`}
          />
          <path d="M 63 23 Q 50 44 48 61" stroke="#81C784" strokeWidth="0.8" opacity="0.5" fill="none" />

          <path
            d="M 80 20 C 70 32 70 56 84 68 C 94 54 94 34 80 20 Z"
            fill={`url(#${idPrefix}-leafLight)`}
          />
          <path d="M 80 21 Q 75 41 81 63" stroke="#A5D6A7" strokeWidth="0.8" opacity="0.45" fill="none" />

          <g transform="translate(70, 40)">
            <ellipse cx="0" cy="0" rx="15" ry="14" fill={`url(#${idPrefix}-marigoldSaffron)`} />
            <path
              d="M -12 -5 Q -16 0 -12 5 Q -7 12 0 11 Q 7 12 12 5 Q 16 0 12 -5 Q 7 -12 0 -11 Q -7 -12 -12 -5 Z"
              fill={`url(#${idPrefix}-marigoldSaffron)`}
              opacity="0.95"
            />
            <circle cx="-0.5" cy="-0.5" r="5.5" fill="#FFF9C4" opacity="0.75" />
          </g>

          <g transform="translate(94, 36)">
            <ellipse cx="0" cy="0" rx="12" ry="11" fill={`url(#${idPrefix}-marigoldGold)`} />
            <path
              d="M -9 -4 Q -12 0 -9 4 Q -5 9 0 8 Q 5 9 9 4 Q 12 0 9 -4 Q 5 -9 0 -8 Q -5 -9 -9 -4 Z"
              fill={`url(#${idPrefix}-marigoldGold)`}
              opacity="0.9"
            />
            <circle cx="-0.4" cy="-0.4" r="4.2" fill="#FFF9C4" opacity="0.8" />
          </g>

          <circle cx="64" cy="56" r="6.5" fill={`url(#${idPrefix}-marigoldSaffron)`} />
          <circle cx="63.6" cy="55.6" r="2.6" fill="#FFF9C4" opacity="0.8" />
        </g>

        {/* --- RIGHT OUTER CORNER FLORAL ACCENT --- */}
        <g filter={`url(#${idPrefix}-archShadow)`} className="hero-corner-floral-right">
          <path
            d="M 836 22 C 858 28 866 50 854 64 C 842 50 834 36 836 22 Z"
            fill={`url(#${idPrefix}-leafDark)`}
          />
          <path d="M 837 23 Q 850 44 852 61" stroke="#81C784" strokeWidth="0.8" opacity="0.5" fill="none" />

          <path
            d="M 820 20 C 830 32 830 56 816 68 C 806 54 806 34 820 20 Z"
            fill={`url(#${idPrefix}-leafLight)`}
          />
          <path d="M 820 21 Q 825 41 819 63" stroke="#A5D6A7" strokeWidth="0.8" opacity="0.45" fill="none" />

          <g transform="translate(830, 40)">
            <ellipse cx="0" cy="0" rx="15" ry="14" fill={`url(#${idPrefix}-marigoldSaffron)`} />
            <path
              d="M -12 -5 Q -16 0 -12 5 Q -7 12 0 11 Q 7 12 12 5 Q 16 0 12 -5 Q 7 -12 0 -11 Q -7 -12 -12 -5 Z"
              fill={`url(#${idPrefix}-marigoldSaffron)`}
              opacity="0.95"
            />
            <circle cx="0.5" cy="-0.5" r="5.5" fill="#FFF9C4" opacity="0.75" />
          </g>

          <g transform="translate(806, 36)">
            <ellipse cx="0" cy="0" rx="12" ry="11" fill={`url(#${idPrefix}-marigoldGold)`} />
            <path
              d="M -9 -4 Q -12 0 -9 4 Q -5 9 0 8 Q 5 9 9 4 Q 12 0 9 -4 Q 5 -9 0 -8 Q -5 -9 -9 -4 Z"
              fill={`url(#${idPrefix}-marigoldGold)`}
              opacity="0.9"
            />
            <circle cx="0.4" cy="-0.4" r="4.2" fill="#FFF9C4" opacity="0.8" />
          </g>

          <circle cx="836" cy="56" r="6.5" fill={`url(#${idPrefix}-marigoldSaffron)`} />
          <circle cx="836.4" cy="55.6" r="2.6" fill="#FFF9C4" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};

export default HeroToran;
