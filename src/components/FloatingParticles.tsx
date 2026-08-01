"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  type?: "leaves" | "dots";
}

export default function FloatingParticles({
  count = 12,
  className = "",
  type = "leaves",
}: FloatingParticlesProps) {
  const particles = useMemo(() => {
    const rand = (i: number) => {
      const x = Math.sin(i * 999) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand(i) * 100,
      top: rand(i + 31) * 100,
      size:
        type === "leaves" ? 12 + rand(i + 57) * 24 : 4 + rand(i + 57) * 8,
      duration: 8 + rand(i + 13) * 12,
      delay: rand(i + 7) * 8,
      rotate: rand(i + 41) * 360,
      opacity: 0.08 + rand(i + 3) * 0.2,
    }));
  }, [count, type]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            rotate: p.rotate,
            opacity: 0,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 15, -10, 10, 0],
            rotate: [p.rotate, p.rotate + 60, p.rotate - 40, p.rotate + 80],
            opacity: [0, p.opacity, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
        >
          {type === "leaves" ? (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="none"
              className="text-green-dark"
            >
              <path
                d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                fill="currentColor"
              />
              <path
                d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <div
              className="rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: "currentColor",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
