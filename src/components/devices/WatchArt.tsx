interface DeviceArtProps {
  className?: string;
}

export default function WatchArt({ className = "" }: DeviceArtProps) {
  return (
    <svg
      viewBox="0 0 200 260"
      className={className}
      role="img"
      aria-label="Apple Watch com mostrador de saúde"
    >
      <defs>
        <linearGradient id="wt-case" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f5f7" />
          <stop offset="50%" stopColor="#c2c2c9" />
          <stop offset="100%" stopColor="#94949c" />
        </linearGradient>
        <linearGradient id="wt-screen" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#103a2f" />
          <stop offset="60%" stopColor="#0a241e" />
          <stop offset="100%" stopColor="#050f0c" />
        </linearGradient>
        <radialGradient id="wt-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="rgba(80,255,190,0.35)" />
          <stop offset="100%" stopColor="rgba(80,255,190,0)" />
        </radialGradient>
      </defs>

      {/* Band top */}
      <rect x="66" y="6" width="68" height="34" rx="14" fill="#2e2e33" />
      <rect x="78" y="10" width="44" height="30" rx="10" fill="#3a3a40" />
      {/* Lugs top */}
      <rect x="56" y="34" width="88" height="14" rx="6" fill="url(#wt-case)" />
      {/* Case */}
      <rect
        x="38"
        y="44"
        width="124"
        height="148"
        rx="34"
        fill="url(#wt-case)"
      />
      {/* Screen bezel */}
      <rect x="44" y="50" width="112" height="136" rx="30" fill="#0a0a0a" />
      {/* Screen */}
      <rect x="48" y="54" width="104" height="128" rx="26" fill="url(#wt-screen)" />
      <rect x="48" y="54" width="104" height="128" rx="26" fill="url(#wt-glow)" />
      {/* Watch face content */}
      <text x="100" y="92" textAnchor="middle" fill="#7ef0c0" fontSize="26" fontWeight="700" fontFamily="inherit">10:09</text>
      <circle cx="76" cy="128" r="16" fill="none" stroke="#2fbf8f" strokeWidth="5" strokeLinecap="round" strokeDasharray="70 100" />
      <circle cx="100" cy="156" r="12" fill="#ff6b8a" opacity="0.7" />
      <circle cx="126" cy="118" r="7" fill="#ffd166" opacity="0.8" />
      <rect x="48" y="54" width="104" height="128" rx="26" fill="none" stroke="rgba(255,255,255,0.12)" />
      {/* Crown + button */}
      <rect x="164" y="92" width="8" height="26" rx="4" fill="#9a9aa2" />
      <rect x="164" y="130" width="6" height="18" rx="3" fill="#9a9aa2" />
      {/* Lugs bottom */}
      <rect x="56" y="188" width="88" height="14" rx="6" fill="url(#wt-case)" />
      {/* Band bottom */}
      <rect x="66" y="196" width="68" height="56" rx="14" fill="#2e2e33" />
      <rect x="78" y="196" width="44" height="52" rx="10" fill="#3a3a40" />
      {/* Clasp */}
      <rect x="72" y="228" width="56" height="8" rx="4" fill="#4a4a52" />
    </svg>
  );
}
