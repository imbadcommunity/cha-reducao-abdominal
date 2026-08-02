"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimal?: boolean;
}

export default function CountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  decimal = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      motionValue.set(end);
    }
  }, [inView, end, motionValue]);

  useEffect(() => {
    spring.on("change", (v) => {
      const formatted = decimal
        ? v.toLocaleString("pt-BR", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })
        : Math.round(v).toLocaleString("pt-BR");
      setDisplay(prefix + formatted + suffix);
    });
  }, [spring, prefix, suffix, decimal]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
