"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { CupSoda, PackageCheck, Salad } from "lucide-react";

const steps = [
  {
    icon: CupSoda,
    step: "01",
    title: "Prepare uma xícara",
    description:
      "Ferva água e despeje sobre o chá. Deixe em infusão por alguns minutos para extrair todo o sabor e aroma.",
  },
  {
    icon: PackageCheck,
    step: "02",
    title: "Consuma conforme orientação",
    description:
      "Siga as instruções da embalagem para aproveitar melhor os ingredientes naturais do blend.",
  },
  {
    icon: Salad,
    step: "03",
    title: "Combine com hábitos saudáveis",
    description:
      "Para melhores resultados, combine com alimentação equilibrada e práticas de bem-estar no dia a dia.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-20 sm:py-28 bg-cream"
      aria-labelledby="como-funciona-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Como Funciona
          </span>
          <h2
            id="como-funciona-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Simples e <span className="text-gradient">natural</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Em apenas três passos, prepare uma xícara deliciosa para sua
            rotina diária.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-green-dark/10" />

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative text-center"
                >
                  {/* Step number badge */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    className="relative z-10 mx-auto mb-6"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-green-dark/10">
                      <step.icon size={32} className="text-green-dark" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
