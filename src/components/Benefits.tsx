"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";
import FloatingParticles from "./FloatingParticles";
import { Leaf, Droplets, Coffee, Flower2, Sparkles, Heart } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Ingredientes naturais",
    description: "Selecionados com cuidado para oferecer o melhor da natureza.",
    color: "from-green-dark to-green-mid",
  },
  {
    icon: Droplets,
    title: "Sensação de leveza",
    description: "Complemento ideal para quem busca bem-estar no dia a dia.",
    color: "from-green-mid to-green-light",
  },
  {
    icon: Coffee,
    title: "Fácil de preparar",
    description: "Prático e rápido, perfeito para sua rotina diária.",
    color: "from-amber-600 to-amber-400",
  },
  {
    icon: Flower2,
    title: "Aroma agradável",
    description: "Um blend que encanta os sentidos a cada xícara.",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: Sparkles,
    title: "Rotina saudável",
    description: "Um aliado natural para complementar hábitos equilibrados.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Heart,
    title: "Bem-estar diário",
    description: "Cuidar de si começa com escolhas naturais e conscientes.",
    color: "from-red-500 to-rose-400",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-labelledby="beneficios-title"
    >
      <FloatingParticles count={8} type="dots" className="opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <motion.span
            whileInView={{ scale: [1, 1.2, 1] }}
            viewport={{ once: true }}
            className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Benefícios
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Por que escolher nosso{" "}
            <span className="text-gradient">chá</span>?
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Cada ingrediente foi cuidadosamente selecionado para oferecer uma
            experiência sensorial única e prazerosa.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.12}>
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-green-dark/5 text-center group overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center group-hover:from-white/20 group-hover:to-white/10 group-hover:backdrop-blur transition-all duration-500"
                    >
                      <benefit.icon
                        size={28}
                        className="text-green-dark group-hover:text-white transition-colors duration-300"
                      />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/80 transition-colors duration-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
