import React from 'react';

interface SanctumDiyasProps {
  className?: string;
}

export const SanctumDiyas: React.FC<SanctumDiyasProps> = ({ className = '' }) => {
  return (
    <div className={`sanctum-diyas-container ${className}`} aria-hidden="true">
      {/* 01. Thin Temple Floor Line with Center Taper */}
      <div className="sanctum-floor-line-wrapper">
        <svg viewBox="0 0 480 16" fill="none" className="sanctum-floor-line-svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="floorLineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0" />
              <stop offset="60%" stopColor="#C9A227" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E5BD47" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="floorLineGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5BD47" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#C9A227" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="10" y1="8" x2="200" y2="8" stroke="url(#floorLineGradLeft)" strokeWidth="1" />
          <line x1="280" y1="8" x2="470" y2="8" stroke="url(#floorLineGradRight)" strokeWidth="1" />
          
          {/* Subtle carved center floor diamond flourish */}
          <path d="M 230 8 L 240 3 L 250 8 L 240 13 Z" fill="#C9A227" fillOpacity="0.6" />
          <circle cx="218" cy="8" r="1.5" fill="#FFE58F" fillOpacity="0.5" />
          <circle cx="262" cy="8" r="1.5" fill="#FFE58F" fillOpacity="0.5" />
          <circle cx="240" cy="8" r="1.5" fill="#FFFCE6" fillOpacity="0.9" />
        </svg>
      </div>

      {/* 02. Warm Diya Floor Reflection Pool */}
      <div className="sanctum-floor-glow-pool" />

      {/* 03. Exactly 3 Antique Brass Diyas (Left, Center, Right) */}
      <div className="sanctum-diyas-trio">
        {/* Left Diya */}
        <div className="sanctum-diya diya-left">
          <svg viewBox="0 0 34 30" fill="none" className="diya-svg">
            <defs>
              <linearGradient id="brassGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="40%" stopColor="#C9A227" />
                <stop offset="85%" stopColor="#7A5813" />
                <stop offset="100%" stopColor="#3E2B06" />
              </linearGradient>
              <radialGradient id="flameGradLeft" cx="50%" cy="65%" r="55%">
                <stop offset="0%" stopColor="#FFFEE6" />
                <stop offset="25%" stopColor="#FFDA55" />
                <stop offset="65%" stopColor="#FF8800" />
                <stop offset="100%" stopColor="#FF4400" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="auraGradLeft" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF9900" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Diya Ambient Glow Aura */}
            <circle cx="17" cy="10" r="9" fill="url(#auraGradLeft)" />

            {/* Flame */}
            <g className="diya-flame flame-anim-left">
              <path
                d="M 17 17 C 14 14 13.5 9 17 3 C 20.5 9 20 14 17 17 Z"
                fill="url(#flameGradLeft)"
              />
              <ellipse cx="17" cy="11" rx="1.2" ry="2.6" fill="#FFFDEB" />
            </g>

            {/* Cotton Wick */}
            <line x1="17" y1="18" x2="17" y2="15" stroke="#3D2105" strokeWidth="1" strokeLinecap="round" />

            {/* Brass Diya Body */}
            {/* Small Foot/Pedestal */}
            <path d="M 13 26 L 21 26 L 20 28 L 14 28 Z" fill="#6B4D0F" />
            <line x1="12" y1="28" x2="22" y2="28" stroke="#FFD700" strokeWidth="0.8" strokeOpacity="0.7" />

            {/* Bowl / Kundi */}
            <path
              d="M 6 18 Q 7 26 17 26 Q 27 26 28 18 Q 23 20 17 20 Q 11 20 6 18 Z"
              fill="url(#brassGradLeft)"
            />
            {/* Golden Rim Highlight */}
            <path
              d="M 6 18 Q 11 20 17 20 Q 23 20 28 18"
              stroke="#FFE58F"
              strokeWidth="0.8"
              strokeOpacity="0.9"
            />
          </svg>
        </div>

        {/* Center Diya (Slightly Prominent Altar Centerpiece) */}
        <div className="sanctum-diya diya-center">
          <svg viewBox="0 0 38 34" fill="none" className="diya-svg center-diya-svg">
            <defs>
              <linearGradient id="brassGradCenter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE066" />
                <stop offset="35%" stopColor="#D4AF37" />
                <stop offset="75%" stopColor="#8A6618" />
                <stop offset="100%" stopColor="#4A3508" />
              </linearGradient>
              <radialGradient id="flameGradCenter" cx="50%" cy="65%" r="55%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="22%" stopColor="#FFE570" />
                <stop offset="60%" stopColor="#FF8F00" />
                <stop offset="100%" stopColor="#FF3700" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="auraGradCenter" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFAA00" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Diya Ambient Glow Aura */}
            <circle cx="19" cy="11" r="11" fill="url(#auraGradCenter)" />

            {/* Flame */}
            <g className="diya-flame flame-anim-center">
              <path
                d="M 19 19 C 15.5 16 15 10 19 3 C 23 10 22.5 16 19 19 Z"
                fill="url(#flameGradCenter)"
              />
              <ellipse cx="19" cy="12" rx="1.5" ry="3.2" fill="#FFFFF0" />
            </g>

            {/* Cotton Wick */}
            <line x1="19" y1="20" x2="19" y2="16.5" stroke="#3D2105" strokeWidth="1.2" strokeLinecap="round" />

            {/* Brass Diya Body */}
            {/* Foot / Stand */}
            <path d="M 14 29 L 24 29 L 23 31.5 L 15 31.5 Z" fill="#755310" />
            <line x1="13" y1="31.5" x2="25" y2="31.5" stroke="#FFDF73" strokeWidth="1" strokeOpacity="0.8" />

            {/* Bowl / Kundi */}
            <path
              d="M 6.5 20 Q 7.5 29 19 29 Q 30.5 29 31.5 20 Q 26 22.5 19 22.5 Q 12 22.5 6.5 20 Z"
              fill="url(#brassGradCenter)"
            />
            {/* Carved Fluting Accent */}
            <path d="M 19 23 L 19 28.5" stroke="#755310" strokeWidth="0.8" strokeOpacity="0.6" />
            <path d="M 14 22 Q 15 27 16 28" stroke="#755310" strokeWidth="0.6" strokeOpacity="0.5" />
            <path d="M 24 22 Q 23 27 22 28" stroke="#755310" strokeWidth="0.6" strokeOpacity="0.5" />

            {/* Golden Rim Highlight */}
            <path
              d="M 6.5 20 Q 12 22.5 19 22.5 Q 26 22.5 31.5 20"
              stroke="#FFF0A6"
              strokeWidth="1"
              strokeOpacity="0.95"
            />
          </svg>
        </div>

        {/* Right Diya */}
        <div className="sanctum-diya diya-right">
          <svg viewBox="0 0 34 30" fill="none" className="diya-svg">
            <defs>
              <linearGradient id="brassGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="40%" stopColor="#C9A227" />
                <stop offset="85%" stopColor="#7A5813" />
                <stop offset="100%" stopColor="#3E2B06" />
              </linearGradient>
              <radialGradient id="flameGradRight" cx="50%" cy="65%" r="55%">
                <stop offset="0%" stopColor="#FFFEE6" />
                <stop offset="25%" stopColor="#FFDA55" />
                <stop offset="65%" stopColor="#FF8800" />
                <stop offset="100%" stopColor="#FF4400" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="auraGradRight" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF9900" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Diya Ambient Glow Aura */}
            <circle cx="17" cy="10" r="9" fill="url(#auraGradRight)" />

            {/* Flame */}
            <g className="diya-flame flame-anim-right">
              <path
                d="M 17 17 C 14 14 13.5 9 17 3 C 20.5 9 20 14 17 17 Z"
                fill="url(#flameGradRight)"
              />
              <ellipse cx="17" cy="11" rx="1.2" ry="2.6" fill="#FFFDEB" />
            </g>

            {/* Cotton Wick */}
            <line x1="17" y1="18" x2="17" y2="15" stroke="#3D2105" strokeWidth="1" strokeLinecap="round" />

            {/* Brass Diya Body */}
            {/* Foot / Pedestal */}
            <path d="M 13 26 L 21 26 L 20 28 L 14 28 Z" fill="#6B4D0F" />
            <line x1="12" y1="28" x2="22" y2="28" stroke="#FFD700" strokeWidth="0.8" strokeOpacity="0.7" />

            {/* Bowl / Kundi */}
            <path
              d="M 6 18 Q 7 26 17 26 Q 27 26 28 18 Q 23 20 17 20 Q 11 20 6 18 Z"
              fill="url(#brassGradRight)"
            />
            {/* Golden Rim Highlight */}
            <path
              d="M 6 18 Q 11 20 17 20 Q 23 20 28 18"
              stroke="#FFE58F"
              strokeWidth="0.8"
              strokeOpacity="0.9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
