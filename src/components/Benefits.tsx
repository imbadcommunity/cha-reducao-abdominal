"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Leaf, Droplets, Coffee, Flower2, Sparkles, Heart } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Ingredientes naturais",
    description: "Selecionados com cuidado para oferecer o melhor da natureza.",
  },
  {
    icon: Droplets,
    title: "Sensação de leveza",
    description: "Complemento ideal para quem busca bem-estar no dia a dia.",
  },
  {
    icon: Coffee,
    title: "Fácil de preparar",
    description: "Prático e rápido, perfeito para sua rotina diária.",
  },
  {
    icon: Flower2,
    title: "Aroma agradável",
    description: "Um blend que encanta os sentidos a cada xícara.",
  },
  {
    icon: Sparkles,
    title: "Rotina saudável",
    description: "Um aliado natural para complementar hábitos equilibrados.",
  },
  {
    icon: Heart,
    title: "Bem-estar diário",
    description: "Cuidar de si começa com escolhas naturais e conscientes.",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="beneficios-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Benefícios
          </span>
          <h2
            id="beneficios-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Por que escolher nosso{" "}
            <span className="text-gradient">chá</span>?
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Cada ingrediente foi cuidadosamente selecionado para oferecer uma
            experiência sensorial única e prazerosa.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.1}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(15, 81, 50, 0.12)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-dark transition-colors duration-300"
                >
                  <benefit.icon
                    size={28}
                    className="text-green-dark group-hover:text-white transition-colors duration-300"
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
