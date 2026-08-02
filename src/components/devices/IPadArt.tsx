interface DeviceArtProps {
  className?: string;
}

export default function IPadArt({ className = "" }: DeviceArtProps) {
  return (
    <svg
      viewBox="0 0 340 260"
      className={className}
      role="img"
      aria-label="iPad Pro com tela Ultra Retina XDR"
    >
      <defs>
        <linearGradient id="pad-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f5f7" />
          <stop offset="50%" stopColor="#bdbdc4" />
          <stop offset="100%" stopColor="#8f8f97" />
        </linearGradient>
        <linearGradient id="pad-screen" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#122a52" />
          <stop offset="50%" stopColor="#0d1f3c" />
          <stop offset="100%" stopColor="#050a14" />
        </linearGradient>
        <linearGradient id="pad-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Frame */}
      <rect
        x="10"
        y="14"
        width="320"
        height="232"
        rx="26"
        fill="url(#pad-frame)"
      />
      {/* Body */}
      <rect
        x="15"
        y="19"
        width="310"
        height="222"
        rx="22"
        fill="#0a0a0a"
      />
      {/* Screen */}
      <rect
        x="20"
        y="24"
        width="300"
        height="212"
        rx="16"
        fill="url(#pad-screen)"
      />
      {/* Abstract wallpaper */}
      <circle cx="250" cy="90" r="44" fill="none" stroke="#3a7bd5" strokeWidth="4" opacity="0.6" />
      <circle cx="250" cy="90" r="28" fill="none" stroke="#6fa8ef" strokeWidth="4" opacity="0.5" />
      <circle cx="250" cy="90" r="13" fill="#9fc6ff" opacity="0.7" />
      <path d="M40 190 Q110 120 180 170 T310 110" fill="none" stroke="#5aa2f2" strokeWidth="3" opacity="0.4" />
      <circle cx="90" cy="140" r="10" fill="#e0c06a" opacity="0.5" />
      <circle cx="150" cy="70" r="6" fill="#cfd4e0" opacity="0.4" />
      <rect x="20" y="24" width="300" height="212" rx="16" fill="url(#pad-sheen)" opacity="0.5" />
      {/* Camera */}
      <circle cx="170" cy="29" r="3.5" fill="#1a1a1a" stroke="#3a3a3f" strokeWidth="1" />
    </svg>
  );
}
