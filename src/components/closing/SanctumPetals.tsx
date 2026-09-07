import React from 'react';

interface SanctumPetalsProps {
  className?: string;
}

export const SanctumPetals: React.FC<SanctumPetalsProps> = ({ className = '' }) => {
  return (
    <div className={`sanctum-petals-layer ${className}`} aria-hidden="true">
      {/* Petal 1: Upper-left outer periphery */}
      <div className="sanctum-petal petal-pos-1">
        <svg viewBox="0 0 20 28" fill="none" className="petal-svg">
          <defs>
            <linearGradient id="petalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA000" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#E65100" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#BF360C" stopOpacity="0.65" />
            </linearGradient>
          </defs>
          <path
            d="M 10 2 C 16 6 19 14 15 22 C 11 26 5 24 3 18 C 1 12 5 5 10 2 Z"
            fill="url(#petalGrad1)"
          />
          <path d="M 10 4 Q 12 14 10 22" stroke="#FFE082" strokeWidth="0.5" strokeOpacity="0.5" />
        </svg>
      </div>

      {/* Petal 2: Upper-right outer periphery */}
      <div className="sanctum-petal petal-pos-2">
        <svg viewBox="0 0 22 30" fill="none" className="petal-svg">
          <defs>
            <linearGradient id="petalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFB300" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#F57C00" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#D84315" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M 11 2 C 18 7 21 16 16 24 C 12 28 6 26 4 20 C 1 13 5 5 11 2 Z"
            fill="url(#petalGrad2)"
          />
          <path d="M 11 5 Q 13 16 11 24" stroke="#FFF8E1" strokeWidth="0.5" strokeOpacity="0.45" />
        </svg>
      </div>

      {/* Petal 3: Mid-left outer periphery */}
      <div className="sanctum-petal petal-pos-3">
        <svg viewBox="0 0 18 24" fill="none" className="petal-svg">
          <defs>
            <linearGradient id="petalGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8F00" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#E64A19" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#8D2424" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <path
            d="M 9 2 C 15 5 17 12 13 19 C 10 23 4 21 2 16 C 0 10 4 4 9 2 Z"
            fill="url(#petalGrad3)"
          />
        </svg>
      </div>

      {/* Petal 4: Mid-right outer periphery */}
      <div className="sanctum-petal petal-pos-4">
        <svg viewBox="0 0 20 26" fill="none" className="petal-svg">
          <defs>
            <linearGradient id="petalGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E65100" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#FFA000" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFE082" stopOpacity="0.65" />
            </linearGradient>
          </defs>
          <path
            d="M 10 2 C 16 6 18 14 14 21 C 11 25 5 23 3 17 C 1 11 5 5 10 2 Z"
            fill="url(#petalGrad4)"
          />
        </svg>
      </div>

      {/* Petal 5: Lower-left near floor */}
      <div className="sanctum-petal petal-pos-5">
        <svg viewBox="0 0 16 22" fill="none" className="petal-svg">
          <defs>
            <linearGradient id="petalGrad5" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFB74D" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#F57C00" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#BF360C" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M 8 2 C 13 5 15 11 12 17 C 9 21 4 19 2 15 C 0 9 4 4 8 2 Z"
            fill="url(#petalGrad5)"
          />
        </svg>
      </div>
    </div>
  );
};
