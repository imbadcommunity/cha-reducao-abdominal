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
    <div
      className={`overflow-hidden py-6 relative border-y border-line ${className}`}
      aria-hidden="true"
    >
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap w-max"
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-3 text-lg font-semibold text-slate-mid"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-brand/40 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
