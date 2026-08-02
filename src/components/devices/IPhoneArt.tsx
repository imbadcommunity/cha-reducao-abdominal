interface DeviceArtProps {
  className?: string;
}

export default function IPhoneArt({ className = "" }: DeviceArtProps) {
  return (
    <svg
      viewBox="0 0 200 420"
      className={className}
      role="img"
      aria-label="iPhone premium com tela vibrante"
    >
      <defs>
        <linearGradient id="ip-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f5f7" />
          <stop offset="45%" stopColor="#b8b8c0" />
          <stop offset="100%" stopColor="#8e8e96" />
        </linearGradient>
        <linearGradient id="ip-screen" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#0b2b5c" />
          <stop offset="45%" stopColor="#123a7a" />
          <stop offset="100%" stopColor="#04101f" />
        </linearGradient>
        <radialGradient id="ip-glow" cx="0.5" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="rgba(0,160,255,0.55)" />
          <stop offset="100%" stopColor="rgba(0,160,255,0)" />
        </radialGradient>
        <linearGradient id="ip-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Frame */}
      <rect
        x="14"
        y="8"
        width="172"
        height="404"
        rx="38"
        fill="url(#ip-frame)"
      />
      {/* Antenna lines */}
      <rect x="14" y="78" width="172" height="2" fill="#7a7a82" opacity="0.5" />
      <rect x="14" y="336" width="172" height="2" fill="#7a7a82" opacity="0.5" />
      {/* Bezel/body */}
      <rect
        x="19"
        y="13"
        width="162"
        height="394"
        rx="34"
        fill="#0a0a0a"
      />
      {/* Screen */}
      <rect
        x="24"
        y="24"
        width="152"
        height="372"
        rx="28"
        fill="url(#ip-screen)"
      />
      {/* Screen glow */}
      <rect
        x="24"
        y="24"
        width="152"
        height="372"
        rx="28"
        fill="url(#ip-glow)"
      />
      {/* Dynamic Island */}
      <rect
        x="66"
        y="34"
        width="68"
        height="22"
        rx="11"
        fill="#000"
      />
      {/* Screen content: abstract wallpaper rings */}
      <circle cx="148" cy="120" r="34" fill="none" stroke="#2f7be0" strokeWidth="3" opacity="0.7" />
      <circle cx="148" cy="120" r="22" fill="none" stroke="#5aa2f2" strokeWidth="3" opacity="0.6" />
      <circle cx="148" cy="120" r="10" fill="#7fc0ff" opacity="0.8" />
      <circle cx="60" cy="200" r="26" fill="none" stroke="#e0c06a" strokeWidth="2.5" opacity="0.5" />
      <circle cx="140" cy="280" r="18" fill="none" stroke="#cfd4e0" strokeWidth="2" opacity="0.35" />
      {/* Sheen */}
      <rect x="24" y="24" width="152" height="372" rx="28" fill="url(#ip-sheen)" opacity="0.6" />
      {/* Side buttons */}
      <rect x="8" y="120" width="6" height="46" rx="3" fill="#9a9aa2" />
      <rect x="8" y="180" width="6" height="60" rx="3" fill="#9a9aa2" />
      <rect x="186" y="150" width="6" height="40" rx="3" fill="#9a9aa2" />
    </svg>
  );
}
