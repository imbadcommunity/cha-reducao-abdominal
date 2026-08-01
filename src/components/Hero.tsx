"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Leaf,
  Coffee,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const titleWords = [
  { text: "Redescubra", gradient: false },
  { text: "sua", gradient: false },
  { text: "leveza", gradient: true },
  { text: "naturalmente.", gradient: false },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const textY = useTransform(smooth, [0, 1], [0, 120]);
  const productY = useTransform(smooth, [0, 1], [0, -80]);
  const productScale = useTransform(smooth, [0, 1], [1, 1.08]);
  const bgY = useTransform(smooth, [0, 1], [0, 200]);
  const videoScale = useTransform(smooth, [0, 1], [1.1, 1.4]);
  const videoOpacity = useTransform(smooth, [0, 0.5], [1, 0.5]);
  const heroOpacity = useTransform(smooth, [0, 0.8], [1, 0]);

  // Interactive text: each word spreads apart and fades as you scroll
  const wordGap = useTransform(smooth, [0, 1], [0, 40]);
  const titleScale = useTransform(smooth, [0, 0.6], [1, 0.85]);
  const titleOpacity = useTransform(smooth, [0, 0.4], [1, 0.2]);

  // Rotating badge with scroll velocity
  const rotate = useTransform(smooth, [0, 1], [0, 180]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-green-dark"
      aria-label="Apresentação do produto"
    >
      {/* Background video */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-tea.jpg"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Green overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-dark/95 via-green-dark/80 to-green-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-dark/90 via-transparent to-green-dark/60" />

      {/* Parallax organic background shapes */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-green-100/10 organic-shape animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gold/5 organic-shape-2 animate-float" />
      </motion.div>

      {/* Floating particles */}
      <FloatingParticles count={14} type="leaves" className="z-[1] text-gold/60" />

      {/* Decorative ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-[10%] w-[550px] h-[550px] border-2 border-dashed border-white/10 rounded-full -translate-y-1/2 hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1.15, 1, 1.15], rotate: [90, 0, 90] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-[10%] w-[400px] h-[400px] border border-gold/20 rounded-full -translate-y-1/2 hidden lg:block"
      />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Interactive scroll text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ y: textY }}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium mb-6"
            >
              <motion.span
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="inline-flex"
              >
                <Leaf size={16} className="text-gold-light" />
              </motion.span>
              100% Ingredientes Naturais
            </motion.div>

            {/* Interactive title that responds to scroll */}
            <motion.h1
              style={{ scale: titleScale, opacity: titleOpacity }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <motion.span style={{ display: "inline-flex", gap: wordGap }} className="flex flex-wrap">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.4 + i * 0.12,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    style={{
                      color: word.gradient ? undefined : "#fff",
                      opacity: word.gradient ? undefined : 1,
                    }}
                    className={`mr-3 inline-block ${
                      word.gradient ? "gold-gradient" : "text-white"
                    }`}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/70 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Uma combinação de ingredientes naturais cuidadosamente
              selecionados para complementar uma rotina equilibrada.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-green-dark font-semibold rounded-xl shadow-xl shadow-gold/30 hover:bg-gold-light transition-colors relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Quero Experimentar
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#beneficios"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-colors backdrop-blur"
              >
                Ver Benefícios
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Star size={20} className="fill-gold text-gold" />
                  </motion.div>
                ))}
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 }}
                  className="ml-2 text-sm text-white/70"
                >
                  Mais de 5.000 clientes satisfeitos*
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-white/70"
            >
              {[
                { icon: ShieldCheck, label: "Ingredientes naturais" },
                { icon: Coffee, label: "Fácil preparo" },
                { icon: Sparkles, label: "Sabor agradável" },
                { icon: Leaf, label: "Boas práticas" },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + i * 0.1 }}
                  className="flex items-center gap-1.5"
                >
                  <item.icon size={16} className="text-gold-light" />
                  {item.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Product visual */}
          <motion.div
            style={{ y: productY, scale: productScale }}
            className="relative flex justify-center items-center"
          >
            {/* Glow behind product */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] bg-gold/20 rounded-full blur-3xl"
            />

            {/* Product image with floating + steam */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotateY: 20 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-80 sm:w-80 sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
              >
                <Image
                  src="/images/hero-tea.jpg"
                  alt="Chá Redução Abdominal - produto natural premium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 via-transparent to-transparent" />

                {/* Steam overlay */}
                <div className="absolute top-0 inset-x-0 h-32 overflow-hidden">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [40, -30, -80],
                        opacity: [0, 0.6, 0],
                        x: [0, i === 1 ? 15 : -15, 0],
                        scale: [0.7, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 1.3,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute bottom-0 w-1.5 h-24 rounded-full bg-gradient-to-t from-white/0 via-white/50 to-transparent blur-[3px]"
                      style={{ left: `${35 + i * 15}%` }}
                    />
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="text-2xl font-bold"
                  >
                    Chá Redução
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-lg font-semibold text-green-100"
                  >
                    Abdominal
                  </motion.h3>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    className="mt-3 w-16 h-0.5 bg-gold rounded-full origin-left"
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-2 text-sm text-green-100/80"
                  >
                    Blend Natural Premium
                  </motion.p>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-8 bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Leaf size={20} className="text-green-dark" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">100% Natural</p>
                  <p className="text-sm font-bold text-gray-900">Sem aditivos</p>
                </div>
              </motion.div>

              {/* Rotating scroll badge */}
              <motion.div
                style={{ rotate }}
                className="absolute -top-8 -right-10 hidden sm:block"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 relative"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="fill-white/60" style={{ fontSize: "9.5px", letterSpacing: "2px", textTransform: "uppercase" }}>
                      <textPath href="#circlePath">
                        Blend Natural Premium • Infusão Aromática •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf size={20} className="text-gold-light" />
                  </div>
                </motion.div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-widest">Role para ver mais</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
