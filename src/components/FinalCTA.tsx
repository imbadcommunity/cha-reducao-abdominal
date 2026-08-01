"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-20 sm:py-28 bg-gradient-to-br from-green-dark via-green-mid to-green-dark relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <span className="text-6xl">🍵</span>
          </motion.div>

          <h2
            id="cta-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Experimente uma nova rotina com{" "}
            <span className="gold-gradient">Chá Redução Abdominal</span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Dê o primeiro passo em direção a uma rotina mais equilibrada e
            natural. Seu corpo vai agradecer.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-green-dark font-bold text-lg rounded-xl shadow-lg hover:bg-gold-light transition-colors"
          >
            QUERO COMEÇAR
            <ArrowRight size={22} />
          </motion.a>

          <p className="text-white/50 text-sm mt-6">
            Lotes sujeitos à disponibilidade.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
