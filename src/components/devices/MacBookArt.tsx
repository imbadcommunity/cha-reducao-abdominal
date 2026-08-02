interface DeviceArtProps {
  className?: string;
}

export default function MacBookArt({ className = "" }: DeviceArtProps) {
  return (
    <svg
      viewBox="0 0 360 240"
      className={className}
      role="img"
      aria-label="MacBook Pro com tela Liquid Retina XDR"
    >
      <defs>
        <linearGradient id="mb-lid" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#0c1b33" />
          <stop offset="60%" stopColor="#0a1425" />
          <stop offset="100%" stopColor="#060a12" />
        </linearGradient>
        <linearGradient id="mb-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="mb-base" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#b9b9c0" />
          <stop offset="100%" stopColor="#7c7c84" />
        </linearGradient>
      </defs>

      {/* Lid (screen) */}
      <path
        d="M20 26 L340 26 L340 22 Q340 16 334 16 L26 16 Q20 16 20 22 Z"
        fill="#6b6b73"
      />
      <rect x="26" y="20" width="308" height="196" rx="12" fill="url(#mb-lid)" />
      <rect x="26" y="20" width="308" height="196" rx="12" fill="url(#mb-sheen)" />
      {/* Wallpaper on screen */}
      <circle cx="260" cy="120" r="40" fill="none" stroke="#3a7bd5" strokeWidth="4" opacity="0.6" />
      <circle cx="260" cy="120" r="25" fill="none" stroke="#6fa8ef" strokeWidth="4" opacity="0.5" />
      <circle cx="260" cy="120" r="11" fill="#9fc6ff" opacity="0.7" />
      <path d="M60 180 Q150 110 220 170 T330 100" fill="none" stroke="#5aa2f2" strokeWidth="3" opacity="0.4" />
      {/* Notch */}
      <rect x="160" y="20" width="40" height="10" rx="5" fill="#0a0a0a" />
      {/* Keyboard deck */}
      <path
        d="M28 216 L332 216 L340 228 Q340 234 332 234 L28 234 Q20 234 20 228 Z"
        fill="#2c2c31"
      />
      <rect x="30" y="216" width="300" height="6" fill="url(#mb-base)" />
      {/* Trackpad */}
      <rect x="120" y="222" width="120" height="9" rx="4" fill="#3d3d44" />
      {/* Keyboard keys hint */}
      <g fill="#4a4a52">
        <rect x="70" y="220" width="8" height="4" rx="1" />
        <rect x="84" y="220" width="8" height="4" rx="1" />
        <rect x="98" y="220" width="8" height="4" rx="1" />
        <rect x="112" y="220" width="8" height="4" rx="1" />
        <rect x="248" y="220" width="8" height="4" rx="1" />
        <rect x="262" y="220" width="8" height="4" rx="1" />
        <rect x="276" y="220" width="8" height="4" rx="1" />
      </g>
    </svg>
  );
}
