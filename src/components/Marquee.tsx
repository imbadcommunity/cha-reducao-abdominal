"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  items,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden py-4 relative ${className}`}>
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap w-max"
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-3 text-lg font-semibold text-green-dark/60"
          >
            {item}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-gold"
            >
              <path
                d="M7 0L8.6 5.4L14 7L8.6 8.6L7 14L5.4 8.6L0 7L5.4 5.4L7 0Z"
                fill="currentColor"
              />
            </svg>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
