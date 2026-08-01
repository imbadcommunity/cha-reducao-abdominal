"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  CheckCircle2,
  ShieldCheck,
  Beaker,
  Smile,
  Package,
  Award,
} from "lucide-react";

const differentials = [
  {
    icon: CheckCircle2,
    title: "Ingredientes selecionados",
    description: "Cada ingrediente é cuidadosamente escolhido e testado.",
  },
  {
    icon: ShieldCheck,
    title: "Produção de qualidade",
    description: "Elaborado seguindo rigorosos padrões de qualidade.",
  },
  {
    icon: Beaker,
    title: "Sem corantes artificiais",
    description: "Formulação limpa, sem aditivos artificiais desnecessários.",
  },
  {
    icon: Smile,
    title: "Sabor agradável",
    description: "Um blend equilibrado que encanta a cada xícara.",
  },
  {
    icon: Package,
    title: "Embalagem prática",
    description: "Design funcional que preserva a frescura dos ingredientes.",
  },
  {
    icon: Award,
    title: "Controle de qualidade",
    description: "Cada lote passa por rigoroso controle antes de chegar a você.",
  },
];

export default function Differentials() {
  return (
    <section
      className="py-20 sm:py-28 bg-cream"
      aria-labelledby="diferenciais-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Diferenciais
          </span>
          <h2
            id="diferenciais-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            O que nos torna <span className="text-gradient">especiais</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Qualidade e cuidado em cada etapa, do campo à sua xícara.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="glass-dark rounded-2xl p-7 text-white flex items-start gap-4 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors"
                >
                  <item.icon size={24} className="text-gold-light" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
