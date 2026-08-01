"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Leaf,
  Coffee,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-white to-green-50"
      aria-label="Apresentação do produto"
    >
      {/* Organic background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-green-100/40 organic-shape animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-green-dark/5 organic-shape-2 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-dark/10 text-green-dark text-sm font-medium mb-6"
            >
              <Leaf size={16} />
              100% Ingredientes Naturais
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Redescubra sua{" "}
              <span className="text-gradient">leveza</span>{" "}
              naturalmente.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Uma combinação de ingredientes naturais cuidadosamente
              selecionados para complementar uma rotina equilibrada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-dark text-white font-semibold rounded-xl shadow-lg hover:bg-green-mid transition-colors"
              >
                Quero Experimentar
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#beneficios"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-green-dark text-green-dark font-semibold rounded-xl hover:bg-green-dark hover:text-white transition-colors"
              >
                Ver Benefícios
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-gold text-gold"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  Mais de 5.000 clientes satisfeitos*
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-600"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-green-dark" />
                Ingredientes naturais
              </span>
              <span className="flex items-center gap-1.5">
                <Coffee size={16} className="text-green-dark" />
                Fácil preparo
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={16} className="text-green-dark" />
                Sabor agradável
              </span>
              <span className="flex items-center gap-1.5">
                <Leaf size={16} className="text-green-dark" />
                Boas práticas
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Product visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Glow behind product */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-green-dark/10 rounded-full blur-3xl" />

            {/* Floating leaf icons */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 left-8"
            >
              <Leaf size={32} className="text-green-dark/30" />
            </motion.div>
            <motion.div
              animate={{ y: [6, -6, 6], rotate: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-12 -right-4"
            >
              <Leaf size={24} className="text-green-mid/30" />
            </motion.div>
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [0, 12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-8 left-0"
            >
              <Coffee size={20} className="text-green-dark/20" />
            </motion.div>

            {/* Product image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-72 h-80 sm:w-80 sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-tea.jpg"
                  alt="Chá Redução Abdominal - produto natural premium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 via-green-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold">Chá Redução</h2>
                  <h3 className="text-lg font-semibold text-green-100">
                    Abdominal
                  </h3>
                  <div className="mt-3 w-16 h-0.5 bg-gold rounded-full" />
                  <p className="mt-2 text-sm text-green-100/80">
                    Blend Natural Premium
                  </p>
                </div>
              </div>

              {/* Steam effect using icon */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 left-1/2 -translate-x-1/2"
              >
                <svg
                  width="40"
                  height="30"
                  viewBox="0 0 40 30"
                  fill="none"
                  className="text-green-dark/30"
                >
                  <path
                    d="M10 28C10 22 5 20 5 14C5 8 10 6 10 0M20 28C20 22 15 20 15 14C15 8 20 6 20 0M30 28C30 22 25 20 25 14C25 8 30 6 30 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
        >
          <path
            d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
