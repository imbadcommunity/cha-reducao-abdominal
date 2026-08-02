interface DeviceArtProps {
  className?: string;
}

export default function AirPodsArt({ className = "" }: DeviceArtProps) {
  return (
    <svg
      viewBox="0 0 240 260"
      className={className}
      role="img"
      aria-label="AirPods Pro com estojo de carregamento"
    >
      <defs>
        <linearGradient id="ap-case" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e6e6ea" />
          <stop offset="100%" stopColor="#bdbdc4" />
        </linearGradient>
        <linearGradient id="ap-stem" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d8d8dd" />
          <stop offset="50%" stopColor="#f5f5f7" />
          <stop offset="100%" stopColor="#c4c4cb" />
        </linearGradient>
        <radialGradient id="ap-lens" cx="0.5" cy="0.4" r="0.8">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#9a9aa2" />
        </radialGradient>
      </defs>

      {/* Case open */}
      <path
        d="M70 92 Q60 92 60 102 L60 210 Q60 222 72 222 L168 222 Q180 222 180 210 L180 102 Q180 92 170 92 Z"
        fill="url(#ap-case)"
      />
      {/* Case lid inner */}
      <path
        d="M70 92 L170 92 Q180 92 180 84 L180 66 Q180 56 170 56 L70 56 Q60 56 60 66 L60 84 Q60 92 70 92 Z"
        fill="#c9c9d0"
      />
      {/* Case inner shadow */}
      <rect x="68" y="94" width="104" height="10" fill="rgba(0,0,0,0.08)" />
      {/* Case LED */}
      <circle cx="120" cy="208" r="3" fill="#3d3d44" />
      <circle cx="120" cy="208" r="1.4" fill="#7ef0c0" />
      {/* Left AirPod */}
      <g transform="rotate(-12 104 128)">
        <path d="M96 150 Q94 142 96 128 Q98 112 104 108 Q112 104 112 112 L112 150 Q112 156 106 156 Q96 156 96 150 Z" fill="url(#ap-stem)" />
        <circle cx="104" cy="112" r="14" fill="url(#ap-lens)" />
        <path d="M98 118 Q104 112 112 120" fill="none" stroke="#8a8a92" strokeWidth="1.5" opacity="0.6" />
      </g>
      {/* Right AirPod */}
      <g transform="rotate(12 136 128)">
        <path d="M128 150 Q126 142 128 128 Q130 112 136 108 Q144 104 144 112 L144 150 Q144 156 138 156 Q128 156 128 150 Z" fill="url(#ap-stem)" />
        <circle cx="136" cy="112" r="14" fill="url(#ap-lens)" />
        <path d="M130 118 Q136 112 144 120" fill="none" stroke="#8a8a92" strokeWidth="1.5" opacity="0.6" />
      </g>
      {/* Soft shadow under case */}
      <ellipse cx="120" cy="238" rx="60" ry="8" fill="rgba(0,0,0,0.08)" />
    </svg>
  );
}
