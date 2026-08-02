"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(dotX, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 22, mass: 0.6 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("has-motion-cursor");

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor-hover], input, select, textarea, [role='button']"
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });

    return () => {
      document.documentElement.classList.remove("has-motion-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [dotX, dotY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-ink mix-blend-difference hidden md:block [@media(prefers-reduced-motion:reduce)]:hidden"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
        }}
        aria-hidden="true"
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[99] pointer-events-none rounded-full border border-ink mix-blend-difference hidden md:block [@media(prefers-reduced-motion:reduce)]:hidden"
        style={{
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: hovering ? 2.1 : 1, opacity: hovering ? 0.9 : 0.6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-hidden="true"
      />
    </>
  );
}
