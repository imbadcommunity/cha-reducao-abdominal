"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { whatsappLink, whatsappDefaultMessage } from "@/lib/site";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function IPhone17Pro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.45], [0, -70]);

  return (
    <section
      ref={sectionRef}
      id="iphone-17-pro"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#140800]"
      aria-label="iPhone 17 Pro Max"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero-orange.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          aria-hidden="true"
        />
        {/* Overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Ambient orange glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[14%] right-[10%] w-[420px] h-[420px] rounded-full bg-[#ff7a1a]/15 blur-[110px]" />
        <div className="absolute bottom-[10%] left-[8%] w-[420px] h-[420px] rounded-full bg-[#e8966f]/10 blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 container-premium pt-32 pb-28 w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-white font-bold leading-[1.1] tracking-tight text-[clamp(2.2rem,6vw,4rem)] max-w-6xl"
          >
            iPhone 17 <span className="orange-text">Pro Max</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl"
          >
            Desempenho de desktop, câmera profissional e titânio de alta
            resistência, agora no novo laranja vibrante.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <a
              href={whatsappLink(whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full glass-dark border border-white/10 text-white/90 text-sm font-medium shadow-lg shadow-black/20 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              Garantir o seu
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">
          Role para explorar
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
