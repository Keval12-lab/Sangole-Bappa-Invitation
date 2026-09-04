import React from 'react';

interface GaneshaEmblemProps {
  size?: number | string;
  className?: string;
  accentColor?: string;
  animated?: boolean;
  glow?: boolean;
  isPressed?: boolean;
}

export const GaneshaEmblem: React.FC<GaneshaEmblemProps> = ({
  size,
  className = '',
  accentColor = '#d4af37',
  animated = true,
  glow = true,
  isPressed = false,
}) => {
  const idPrefix = React.useId().replace(/:/g, '');

  const inlineStyle: React.CSSProperties = {};
  if (size !== undefined) {
    inlineStyle.width = typeof size === 'number' ? `${size}px` : size;
    inlineStyle.height = typeof size === 'number' ? `${size}px` : size;
  }

  return (
    <div
      className={`ganesha-emblem-wrapper ${animated ? 'is-animated' : ''} ${isPressed ? 'is-pressed' : ''} ${className}`}
      style={inlineStyle}
      aria-label="Sacred Lord Ganesha Ceremonial Emblem"
      role="img"
    >
      {/* Layer 1: Dark wine-black contrast halo to darken red curtain backdrop directly behind emblem */}
      <div className="ganesha-emblem-dark-backdrop" aria-hidden="true" />

      {/* Layer 2: Warm sacred golden aura & soft diffusion */}
      {glow && <div className="ganesha-emblem-halo" aria-hidden="true" />}

      {/* Layer 3: Vector Ganesha with subtle gold rim glow */}
      <svg
        viewBox="0 0 320 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ganesha-emblem-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle gold rim light filter for sharp edge separation */}
          <filter id={`${idPrefix}-rimGlow`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ffe899" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#000000" floodOpacity="0.95" />
          </filter>

          {/* ================================================================
              CROWN & HEAD GRADIENTS
              ================================================================ */}
          {/* Top Flame Peak */}
          <linearGradient id={`${idPrefix}-crownPeak`} x1="160" y1="12" x2="160" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff5975" />
            <stop offset="30%" stopColor="#e61937" />
            <stop offset="70%" stopColor="#8f101e" />
            <stop offset="100%" stopColor="#42040b" />
          </linearGradient>

          {/* Middle Crown Arch */}
          <linearGradient id={`${idPrefix}-crownMid`} x1="110" y1="36" x2="210" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff6b84" />
            <stop offset="30%" stopColor="#e61937" />
            <stop offset="70%" stopColor="#8f101e" />
            <stop offset="100%" stopColor="#42040b" />
          </linearGradient>

          {/* Lower Crown Band */}
          <linearGradient id={`${idPrefix}-crownBase`} x1="90" y1="56" x2="230" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff5975" />
            <stop offset="45%" stopColor="#d90429" />
            <stop offset="85%" stopColor="#7a0d1c" />
            <stop offset="100%" stopColor="#300308" />
          </linearGradient>

          {/* ================================================================
              EAR GRADIENTS (MULTI-LAYERED SHADING)
              ================================================================ */}
          {/* Left Ear Outer Main Flap */}
          <linearGradient id={`${idPrefix}-earLeftMain`} x1="25" y1="90" x2="135" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff6b84" />
            <stop offset="25%" stopColor="#e61937" />
            <stop offset="65%" stopColor="#8f101e" />
            <stop offset="100%" stopColor="#40030a" />
          </linearGradient>

          {/* Left Ear Inner Deep Fold */}
          <linearGradient id={`${idPrefix}-earLeftFold`} x1="35" y1="110" x2="110" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#82101e" />
            <stop offset="55%" stopColor="#4a060e" />
            <stop offset="100%" stopColor="#220105" />
          </linearGradient>

          {/* Left Ear Lower Petal */}
          <linearGradient id={`${idPrefix}-earLeftLower`} x1="45" y1="130" x2="120" y2="195" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e61937" />
            <stop offset="60%" stopColor="#800f1c" />
            <stop offset="100%" stopColor="#380208" />
          </linearGradient>

          {/* Right Ear Outer Main Flap */}
          <linearGradient id={`${idPrefix}-earRightMain`} x1="295" y1="90" x2="185" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff6b84" />
            <stop offset="25%" stopColor="#e61937" />
            <stop offset="65%" stopColor="#8f101e" />
            <stop offset="100%" stopColor="#40030a" />
          </linearGradient>

          {/* Right Ear Inner Deep Fold */}
          <linearGradient id={`${idPrefix}-earRightFold`} x1="285" y1="110" x2="210" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#82101e" />
            <stop offset="55%" stopColor="#4a060e" />
            <stop offset="100%" stopColor="#220105" />
          </linearGradient>

          {/* Right Ear Lower Petal */}
          <linearGradient id={`${idPrefix}-earRightLower`} x1="275" y1="130" x2="200" y2="195" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e61937" />
            <stop offset="60%" stopColor="#800f1c" />
            <stop offset="100%" stopColor="#380208" />
          </linearGradient>

          {/* ================================================================
              FACIAL RIBBONS & CHEEK GRADIENTS
              ================================================================ */}
          {/* Left Cheek Sweeping Ribbon */}
          <linearGradient id={`${idPrefix}-cheekLeft`} x1="110" y1="85" x2="155" y2="215" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff758f" />
            <stop offset="25%" stopColor="#ea1b3a" />
            <stop offset="65%" stopColor="#961020" />
            <stop offset="100%" stopColor="#48050d" />
          </linearGradient>

          {/* Right Cheek Sweeping Ribbon */}
          <linearGradient id={`${idPrefix}-cheekRight`} x1="210" y1="85" x2="165" y2="215" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff758f" />
            <stop offset="25%" stopColor="#ea1b3a" />
            <stop offset="65%" stopColor="#961020" />
            <stop offset="100%" stopColor="#48050d" />
          </linearGradient>

          {/* Left Inner Cheek Shadow */}
          <linearGradient id={`${idPrefix}-innerCheekLeft`} x1="120" y1="120" x2="150" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#670d1a" />
            <stop offset="65%" stopColor="#3d0309" />
            <stop offset="100%" stopColor="#1e0104" />
          </linearGradient>

          {/* Right Inner Cheek Shadow */}
          <linearGradient id={`${idPrefix}-innerCheekRight`} x1="200" y1="120" x2="170" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#670d1a" />
            <stop offset="65%" stopColor="#3d0309" />
            <stop offset="100%" stopColor="#1e0104" />
          </linearGradient>

          {/* ================================================================
              TRUNK GRADIENTS
              ================================================================ */}
          {/* Trunk Deep Shadow Base */}
          <linearGradient id={`${idPrefix}-trunkShadow`} x1="145" y1="160" x2="205" y2="310" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#630a14" />
            <stop offset="50%" stopColor="#3d0309" />
            <stop offset="100%" stopColor="#1c0104" />
          </linearGradient>

          {/* Trunk Main Rich Crimson Body */}
          <linearGradient id={`${idPrefix}-trunkMain`} x1="150" y1="135" x2="240" y2="305" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff5975" />
            <stop offset="20%" stopColor="#e61937" />
            <stop offset="60%" stopColor="#9e1122" />
            <stop offset="90%" stopColor="#5a0712" />
            <stop offset="100%" stopColor="#2e0208" />
          </linearGradient>

          {/* Trunk Radiant Highlight Ridge */}
          <linearGradient id={`${idPrefix}-trunkHighlight`} x1="166" y1="140" x2="232" y2="295" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff94a8" />
            <stop offset="35%" stopColor="#ff4d6d" />
            <stop offset="75%" stopColor="#d90429" />
            <stop offset="100%" stopColor="#800f1c" />
          </linearGradient>

          {/* ================================================================
              SACRED TILAK & GOLD ACCENT GRADIENTS
              ================================================================ */}
          <linearGradient id={`${idPrefix}-tilakGrad`} x1="160" y1="92" x2="160" y2="136" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff859b" />
            <stop offset="40%" stopColor="#ea1b3a" />
            <stop offset="85%" stopColor="#7a0d1c" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-goldAccent`} x1="145" y1="90" x2="175" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff8d6" />
            <stop offset="45%" stopColor={accentColor} />
            <stop offset="100%" stopColor="#966d18" />
          </linearGradient>

          {/* Tusks */}
          <linearGradient id={`${idPrefix}-tuskLeft`} x1="102" y1="172" x2="90" y2="204" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff8d6" />
            <stop offset="50%" stopColor="#e5bd47" />
            <stop offset="100%" stopColor="#8c6214" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-tuskRight`} x1="218" y1="172" x2="230" y2="204" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff8d6" />
            <stop offset="50%" stopColor="#e5bd47" />
            <stop offset="100%" stopColor="#8c6214" />
          </linearGradient>
        </defs>

        {/* ====================================================================
            01. SACRED TUSKS
            ==================================================================== */}
        <path
          d="M 106 174 C 98 185 92 197 88 206 C 95 203 105 192 112 181 Z"
          fill={`url(#${idPrefix}-tuskLeft)`}
          opacity="0.98"
        />
        <path
          d="M 214 174 C 222 185 228 197 232 206 C 225 203 215 192 208 181 Z"
          fill={`url(#${idPrefix}-tuskRight)`}
          opacity="0.98"
        />

        {/* ====================================================================
            02. MULTI-LAYERED EARS (LEFT & RIGHT)
            ==================================================================== */}
        {/* Left Ear - Deep Shadow Fold Layer */}
        <path
          d="M 116 95 C 86 92 52 108 34 130 C 22 144 26 158 42 174 C 58 190 80 200 102 202 C 94 186 90 166 96 146 C 102 126 112 108 116 95 Z"
          fill={`url(#${idPrefix}-earLeftFold)`}
        />

        {/* Left Ear - Lower Petal Layer */}
        <path
          d="M 104 126 C 76 130 50 144 38 160 C 30 172 36 182 52 192 C 68 202 88 206 104 204 C 98 188 96 168 100 148 C 102 138 104 130 104 126 Z"
          fill={`url(#${idPrefix}-earLeftLower)`}
        />

        {/* Left Ear - Main Sweeping Outer Wing */}
        <path
          d="M 126 88 C 94 82 58 96 36 118 C 24 130 22 144 36 160 C 52 178 78 190 100 192 C 88 176 84 154 90 136 C 98 116 112 100 126 88 Z"
          fill={`url(#${idPrefix}-earLeftMain)`}
        />

        {/* Right Ear - Deep Shadow Fold Layer */}
        <path
          d="M 204 95 C 234 92 268 108 286 130 C 298 144 294 158 278 174 C 262 190 240 200 218 202 C 226 186 230 166 224 146 C 218 126 208 108 204 95 Z"
          fill={`url(#${idPrefix}-earRightFold)`}
        />

        {/* Right Ear - Lower Petal Layer */}
        <path
          d="M 216 126 C 244 130 270 144 282 160 C 290 172 284 182 268 192 C 252 202 232 206 216 204 C 222 188 224 168 220 148 C 218 138 216 130 216 126 Z"
          fill={`url(#${idPrefix}-earRightLower)`}
        />

        {/* Right Ear - Main Sweeping Outer Wing */}
        <path
          d="M 194 88 C 226 82 262 96 284 118 C 296 130 298 144 284 160 C 268 178 242 190 220 192 C 232 176 236 154 230 136 C 222 116 208 100 194 88 Z"
          fill={`url(#${idPrefix}-earRightMain)`}
        />

        {/* ====================================================================
            03. FOREHEAD & CHEEK CONTOURS (SWEEPING FACIAL RIBBONS)
            ==================================================================== */}
        {/* Left Cheek Inner Depth Layer */}
        <path
          d="M 138 84 C 120 96 110 120 114 146 C 118 170 132 196 146 216 C 140 192 130 168 128 144 C 126 122 130 102 138 84 Z"
          fill={`url(#${idPrefix}-innerCheekLeft)`}
        />

        {/* Left Cheek Outer Sweeping Crest Ribbon */}
        <path
          d="M 144 80 C 118 94 102 120 108 150 C 112 174 128 202 144 224 C 140 198 128 172 128 146 C 128 120 136 100 144 80 Z"
          fill={`url(#${idPrefix}-cheekLeft)`}
        />

        {/* Right Cheek Inner Depth Layer */}
        <path
          d="M 182 84 C 200 96 210 120 206 146 C 202 170 188 196 174 216 C 180 192 190 168 192 144 C 194 122 190 102 182 84 Z"
          fill={`url(#${idPrefix}-innerCheekRight)`}
        />

        {/* Right Cheek Outer Sweeping Crest Ribbon */}
        <path
          d="M 176 80 C 202 94 218 120 212 150 C 208 174 192 202 176 224 C 180 198 192 172 192 146 C 192 120 184 100 176 80 Z"
          fill={`url(#${idPrefix}-cheekRight)`}
        />

        {/* ====================================================================
            04. THE GRACEFUL TRUNK (SONDH) WITH DYNAMIC FLOW
            ==================================================================== */}
        {/* Trunk Deep Shadow Base */}
        <path
          d="M 152 140 C 150 174 146 220 152 256 C 158 284 170 306 192 318 C 210 326 234 322 246 302 C 252 288 248 272 234 262 C 222 254 208 258 204 270 C 200 280 210 290 220 290 C 224 290 228 286 228 282 C 228 278 224 276 220 278 C 214 280 212 274 214 270 C 218 262 228 262 234 270 C 242 278 244 290 238 300 C 228 314 208 318 192 310 C 174 300 164 278 160 252 C 154 218 158 176 160 140 Z"
          fill={`url(#${idPrefix}-trunkShadow)`}
        />

        {/* Trunk Main Rich Body */}
        <path
          d="M 156 136 C 154 170 152 212 156 248 C 160 276 172 298 192 308 C 208 316 228 312 238 294 C 244 282 240 268 228 258 C 218 252 206 256 204 266 C 202 274 210 282 218 282 C 222 282 226 278 226 274 C 226 270 222 268 218 270 C 214 272 212 268 214 264 C 218 258 226 258 232 266 C 238 274 240 284 234 292 C 226 304 210 308 198 300 C 182 290 172 270 168 246 C 164 214 166 172 168 136 Z"
          fill={`url(#${idPrefix}-trunkMain)`}
        />

        {/* Trunk Highlight Crest Ribbon */}
        <path
          d="M 164 136 C 162 170 160 206 164 240 C 168 266 178 288 196 298 C 210 304 224 302 232 288 C 236 278 234 266 224 260 C 218 256 210 258 208 266 C 206 270 210 274 216 274 C 220 274 222 270 220 268 C 216 268 214 264 218 262 C 222 260 226 262 228 266 C 230 272 228 278 224 284 C 216 292 206 294 196 288 C 182 280 174 262 170 240 C 166 208 168 170 170 136 Z"
          fill={`url(#${idPrefix}-trunkHighlight)`}
        />

        {/* Trunk Flourish Tip Modak/Ornament */}
        <circle cx="220" cy="274" r="3.5" fill={`url(#${idPrefix}-goldAccent)`} opacity="0.95" />

        {/* ====================================================================
            05. CROWN (MUKUT) - 3 TIERS OF SACRED ROYAL LINEAGE
            ==================================================================== */}
        {/* Base Tier (Tier 3) - Sweeping Horizontal Crown Crescent */}
        <path
          d="M 108 82 C 128 68 150 62 160 62 C 170 62 192 68 212 82 C 194 86 176 88 160 88 C 144 88 126 86 108 82 Z"
          fill={`url(#${idPrefix}-crownBase)`}
        />
        <path
          d="M 114 80 C 132 71 150 67 160 67 C 170 67 188 71 206 80 C 190 83 175 84 160 84 C 145 84 130 83 114 80 Z"
          fill={`url(#${idPrefix}-goldAccent)`}
          opacity="0.85"
        />

        {/* Middle Tier (Tier 2) - Flared Arched Hood with Pointed Horns */}
        <path
          d="M 126 62 C 140 48 152 42 160 42 C 168 42 180 48 194 62 C 182 64 171 66 160 66 C 149 66 138 64 126 62 Z"
          fill={`url(#${idPrefix}-crownMid)`}
        />
        <path
          d="M 132 59 C 144 50 153 46 160 46 C 167 46 176 50 188 59 C 179 60 170 62 160 62 C 150 62 141 60 132 59 Z"
          fill={`url(#${idPrefix}-goldAccent)`}
          opacity="0.9"
        />

        {/* Top Tier (Tier 1) - Regal Flame / Kalash Peak */}
        <path
          d="M 160 14 C 150 26 144 36 144 42 C 151 45 157 45 160 45 C 163 45 169 45 176 42 C 176 36 170 26 160 14 Z"
          fill={`url(#${idPrefix}-crownPeak)`}
        />
        <circle cx="160" cy="14" r="2.8" fill={`url(#${idPrefix}-goldAccent)`} />

        {/* ====================================================================
            06. SACRED TRISHUL TILAK & FOREHEAD BINDU
            ==================================================================== */}
        <g className="ganesha-emblem-tilak">
          {/* Central Flame / Spike of Trishul */}
          <path
            d="M 160 92 C 158 100 156 108 156 114 C 158 116 162 116 164 114 C 164 108 162 100 160 92 Z"
            fill={`url(#${idPrefix}-tilakGrad)`}
          />
          {/* Left Trishul Horn */}
          <path
            d="M 156 102 C 150 102 147 106 149 110 C 151 114 156 114 158 112 C 156 108 156 104 156 102 Z"
            fill={`url(#${idPrefix}-tilakGrad)`}
          />
          {/* Right Trishul Horn */}
          <path
            d="M 164 102 C 170 102 173 106 171 110 C 169 114 164 114 162 112 C 164 108 164 104 164 102 Z"
            fill={`url(#${idPrefix}-tilakGrad)`}
          />
          {/* Trishul Base Stalk */}
          <path
            d="M 158 113 C 158 118 160 120 160 122 C 160 120 162 118 162 113 Z"
            fill={`url(#${idPrefix}-tilakGrad)`}
          />
          {/* Sacred Tilak Central Gold Accent Line */}
          <path
            d="M 160 95 L 160 112"
            stroke={`url(#${idPrefix}-goldAccent)`}
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.95"
          />

          {/* Sacred Red/Gold Bindu (Dot) below Trishul */}
          <circle cx="160" cy="128" r="3.5" fill={`url(#${idPrefix}-goldAccent)`} />
          <circle cx="160" cy="128" r="2.2" fill="#c1121f" />
        </g>
      </svg>
    </div>
  );
};

export default GaneshaEmblem;
