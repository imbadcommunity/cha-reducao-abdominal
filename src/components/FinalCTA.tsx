"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import FloatingParticles from "./FloatingParticles";
import { ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-green-dark via-green-mid to-green-dark overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Animated gradient background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </motion.div>

      <FloatingParticles count={14} type="leaves" className="text-gold/60" />

      {/* Product image faintly in background */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/hero-tea.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-24 h-24 mx-auto rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
            >
              <Image
                src="/images/hero-tea.jpg"
                alt="Chá Redução Abdominal"
                width={64}
                height={64}
                className="rounded-2xl object-cover"
              />
            </motion.div>
          </motion.div>

          <h2
            id="cta-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Experimente uma nova rotina com{" "}
            <span className="gold-gradient">Chá Redução Abdominal</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg max-w-2xl mx-auto mb-10"
          >
            Dê o primeiro passo em direção a uma rotina mais equilibrada e
            natural. Seu corpo vai agradecer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                  "0 0 50px rgba(212, 175, 55, 0.6)",
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="group inline-flex items-center gap-3 px-12 py-6 bg-gold text-green-dark font-bold text-xl rounded-2xl hover:bg-gold-light transition-colors relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              QUERO COMEÇAR
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex"
              >
                <ArrowRight size={24} />
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/50 text-sm mt-8 flex items-center justify-center gap-2"
          >
            <Zap size={14} className="text-gold" />
            Lotes sujeitos à disponibilidade.
          </motion.p>
        </ScrollReveal>
      </div>
    </section>
  );
}
