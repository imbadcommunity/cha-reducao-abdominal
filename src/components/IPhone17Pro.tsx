"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown, Cpu, Camera, ShieldCheck } from "lucide-react";
import IPhoneArt from "./devices/IPhoneArt";
import MagneticButton from "./MagneticButton";
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

const features = [
  { icon: Cpu, label: "Chip mais rápido já visto" },
  { icon: Camera, label: "Câmera profissional" },
  { icon: ShieldCheck, label: "Garantia Apple de 12 meses" },
];

export default function IPhone17Pro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.45], [0, -70]);
  const deviceY = useTransform(scrollYProgress, [0, 1], [0, -60]);

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Ambient orange glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] right-[8%] w-[440px] h-[440px] rounded-full bg-[#ff7a1a]/20 blur-[110px]" />
        <div className="absolute bottom-[8%] left-[6%] w-[460px] h-[460px] rounded-full bg-[#e8966f]/12 blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 container-premium pt-28 pb-20 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 shadow-sm text-sm font-medium text-white/90 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff7a1a]" />
              Novo — iPhone 17 Pro Max
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="section-title text-white mb-6"
            >
              iPhone 17 <span className="orange-text">Pro Max</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0"
            >
              O poder do desktop na sua mão, com câmera profissional, titânio de
              alta resistência e o novo laranja vibrante. Feito para quem não
              espera por amanhã.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-x-7 gap-y-3 mb-9"
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-sm text-white/80"
                >
                  <Icon size={18} className="text-[#ff7a1a]" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton>
                <a href="#produtos" className="btn btn-white group">
                  Saiba mais
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={whatsappLink(whatsappDefaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  Garantir o meu
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Device visual */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: deviceY }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Glow behind device */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.65, 0.45] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#ff7a1a]/25 blur-[70px]"
            />

            {/* Floating device */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <IPhoneArt
                tone="orange"
                className="w-56 sm:w-72 drop-shadow-[0_35px_50px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </motion.div>
        </div>
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
