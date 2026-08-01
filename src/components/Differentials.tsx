"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";
import FloatingParticles from "./FloatingParticles";
import { CheckCircle2, ShieldCheck, Beaker, Smile, Package, Award } from "lucide-react";

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
      className="relative py-20 sm:py-28 bg-gradient-to-br from-green-dark via-green-mid to-green-dark overflow-hidden"
      aria-labelledby="diferenciais-title"
    >
      <FloatingParticles count={10} type="dots" className="text-white" />

      {/* Decorative glows */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <motion.span
            whileInView={{ scale: [1, 1.2, 1] }}
            viewport={{ once: true }}
            className="inline-block text-gold-light text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Diferenciais
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            O que nos torna <span className="gold-gradient">especiais</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            Qualidade e cuidado em cada etapa, do campo à sua xícara.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1000px]">
          {differentials.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <TiltCard className="h-full" intensity={8}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative glass-dark rounded-2xl p-7 text-white flex items-start gap-4 group cursor-default overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    whileHover={{ rotate: -15, scale: 1.15 }}
                    className="relative w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-green-dark transition-all duration-500"
                  >
                    <item.icon size={24} className="text-gold-light group-hover:text-green-dark transition-colors" />
                  </motion.div>
                  <div className="relative">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
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
