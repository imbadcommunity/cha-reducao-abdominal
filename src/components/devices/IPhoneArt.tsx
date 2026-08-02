interface DeviceArtProps {
  className?: string;
  tone?: "blue" | "kiwi";
}

const tones = {
  blue: {
    frame: ["#f5f5f7", "#b8b8c0", "#8e8e96"],
    screen: ["#0b2b5c", "#123a7a", "#04101f"],
    glow: "rgba(0,160,255,0.55)",
    ring: "#2f7be0",
    ringMid: "#5aa2f2",
    ringCore: "#7fc0ff",
    accent: "#e0c06a",
    faint: "#cfd4e0",
  },
  kiwi: {
    frame: ["#eef3da", "#c7d79a", "#a8bd73"],
    screen: ["#1d3a12", "#2c5a1a", "#0a1408"],
    glow: "rgba(185,213,72,0.6)",
    ring: "#b9d548",
    ringMid: "#d8e88f",
    ringCore: "#eef7c0",
    accent: "#a8bd73",
    faint: "#e8efd0",
  },
} as const;

export default function IPhoneArt({
  className = "",
  tone = "blue",
}: DeviceArtProps) {
  const t = tones[tone];

  return (
    <svg
      viewBox="0 0 200 420"
      className={className}
      role="img"
      aria-label="iPhone premium com tela vibrante"
    >
      <defs>
        <linearGradient id={`ip-frame-${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={t.frame[0]} />
          <stop offset="45%" stopColor={t.frame[1]} />
          <stop offset="100%" stopColor={t.frame[2]} />
        </linearGradient>
        <linearGradient id={`ip-screen-${tone}`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor={t.screen[0]} />
          <stop offset="45%" stopColor={t.screen[1]} />
          <stop offset="100%" stopColor={t.screen[2]} />
        </linearGradient>
        <radialGradient id={`ip-glow-${tone}`} cx="0.5" cy="0.35" r="0.7">
          <stop offset="0%" stopColor={t.glow} />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <linearGradient id={`ip-sheen-${tone}`} x1="0" y1="0" x2="0" y2="1">
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
        fill={`url(#ip-frame-${tone})`}
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
        fill={`url(#ip-screen-${tone})`}
      />
      {/* Screen glow */}
      <rect
        x="24"
        y="24"
        width="152"
        height="372"
        rx="28"
        fill={`url(#ip-glow-${tone})`}
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
      <circle cx="148" cy="120" r="34" fill="none" stroke={t.ring} strokeWidth="3" opacity="0.7" />
      <circle cx="148" cy="120" r="22" fill="none" stroke={t.ringMid} strokeWidth="3" opacity="0.6" />
      <circle cx="148" cy="120" r="10" fill={t.ringCore} opacity="0.8" />
      <circle cx="60" cy="200" r="26" fill="none" stroke={t.accent} strokeWidth="2.5" opacity="0.5" />
      <circle cx="140" cy="280" r="18" fill="none" stroke={t.faint} strokeWidth="2" opacity="0.35" />
      {/* Sheen */}
      <rect x="24" y="24" width="152" height="372" rx="28" fill={`url(#ip-sheen-${tone})`} opacity="0.6" />
      {/* Side buttons */}
      <rect x="8" y="120" width="6" height="46" rx="3" fill="#9a9aa2" />
      <rect x="8" y="180" width="6" height="60" rx="3" fill="#9a9aa2" />
      <rect x="186" y="150" width="6" height="40" rx="3" fill="#9a9aa2" />
    </svg>
  );
}
