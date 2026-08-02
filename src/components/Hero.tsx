"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown, Star } from "lucide-react";
import IPhoneArt from "./devices/IPhoneArt";
import MagneticButton from "./MagneticButton";
import { whatsappLink, whatsappDefaultMessage } from "@/lib/site";

const titleLine1 = "O próximo smartphone";
const titleLine2 = "já está esperando por você.";

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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  const textY = useTransform(smooth, [0, 1], [0, 90]);
  const deviceY = useTransform(smooth, [0, 1], [0, -70]);
  const deviceScale = useTransform(smooth, [0, 1], [1, 1.06]);
  const glowOpacity = useTransform(smooth, [0, 0.5], [0.5, 0.2]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-cloud"
      aria-label="Apresentação da loja"
    >
      {/* Ambient background */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[8%] left-[10%] w-[420px] h-[420px] rounded-full bg-brand/10 blur-[110px]" />
        <div className="absolute bottom-[4%] right-[6%] w-[500px] h-[500px] rounded-full bg-[#7c8ca0]/15 blur-[120px]" />
        <div className="absolute top-[30%] right-[30%] w-[260px] h-[260px] rounded-full bg-white/70 blur-[80px]" />
      </motion.div>

      <motion.div
        style={{ opacity: textY, y: textY }}
        className="relative z-10 container-premium pt-28 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 shadow-sm text-sm font-medium text-ink mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-brand" />
              Loja premium de produtos Apple
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="display-title text-ink mb-6"
            >
              {titleLine1}
              <br />
              <span className="metal-text">{titleLine2}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-mid leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0"
            >
              Os melhores produtos Apple, com garantia, qualidade e atendimento
              especializado. Originais, lacrados e com nota fiscal.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton>
                <a
                  href="#produtos"
                  className="btn btn-primary group"
                >
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

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-5 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#f5b301] text-[#f5b301]"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-mid">
                <span className="font-semibold text-ink">4.9/5</span> — mais de
                1.800 clientes satisfeitos
              </p>
            </motion.div>
          </motion.div>

          {/* Device visual */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: deviceY, scale: deviceScale }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Glow behind device */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.65, 0.45] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand/20 blur-[70px]"
            />

            {/* Floating device */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <IPhoneArt className="w-56 sm:w-72 drop-shadow-[0_35px_50px_rgba(0,0,0,0.25)]" />
            </motion.div>

            {/* Floating badge 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[14%] -left-2 sm:left-4"
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="glass rounded-2xl shadow-lg shadow-black/10 p-3.5 flex items-center gap-3 border border-black/5"
              >
                <div className="w-10 h-10 rounded-xl metal flex items-center justify-center silver-ring">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                    <path d="M12 2l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 15.9l-5.3 2.2 1-5.8L3.5 8.2l5.9-.9L12 2z" fill="#1d1d1f" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-slate-mid">Produto</p>
                  <p className="text-sm font-bold text-ink">100% Original</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[16%] -right-2 sm:right-2"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="glass rounded-2xl shadow-lg shadow-black/10 p-3.5 flex items-center gap-3 border border-black/5"
              >
                <div className="w-10 h-10 rounded-xl metal flex items-center justify-center silver-ring">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                    <path d="M12 3l1.8 4.9L19 9.7l-4 3.5 1.2 5.1L12 15.5l-4.2 2.8L9 13.2 5 9.7l5.2-1.8L12 3z" fill="#0071e3" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-slate-mid">Garantia</p>
                  <p className="text-sm font-bold text-ink">12 Meses Apple</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-mid"
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
