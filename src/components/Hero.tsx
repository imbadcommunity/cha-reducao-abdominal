"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
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

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0c]"
      aria-label="Apresentação da loja"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero-kiwi.mp4"
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

      {/* Ambient kiwi glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[14%] left-[10%] w-[420px] h-[420px] rounded-full bg-[#b9d548]/15 blur-[110px]" />
        <div className="absolute bottom-[10%] right-[8%] w-[420px] h-[420px] rounded-full bg-[#a8bd73]/10 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 container-premium pt-32 pb-28 w-full"
      >
        <div className="flex flex-col items-center text-center">
          <motion.h1
            variants={itemVariants}
            className="text-white font-bold leading-[1.1] tracking-tight text-[clamp(1.9rem,5vw,3.2rem)] max-w-6xl"
          >
            O próximo smartphone{" "}
            <span className="kiwi-text">já está esperando por você.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl"
          >
            Os melhores produtos Apple, com garantia, qualidade e atendimento
            especializado. Originais, lacrados e com nota fiscal.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton>
              <a href="#produtos" className="btn btn-white group">
                Ver Produtos
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
                Falar no WhatsApp
              </a>
            </MagneticButton>
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
