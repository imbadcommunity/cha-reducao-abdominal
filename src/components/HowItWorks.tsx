"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { CupSoda, PackageCheck, Salad } from "lucide-react";

const steps = [
  {
    icon: CupSoda,
    step: "01",
    title: "Prepare uma xícara",
    description:
      "Ferva água e despeje sobre o chá. Deixe em infusão por alguns minutos para extrair todo o sabor e aroma.",
    image: "/images/tea-preparation.jpg",
  },
  {
    icon: PackageCheck,
    step: "02",
    title: "Consuma conforme orientação",
    description:
      "Siga as instruções da embalagem para aproveitar melhor os ingredientes naturais do blend.",
    image: "/images/product-packaging.jpg",
  },
  {
    icon: Salad,
    step: "03",
    title: "Combine com hábitos saudáveis",
    description:
      "Para melhores resultados, combine com alimentação equilibrada e práticas de bem-estar no dia a dia.",
    image: "/images/healthy-lifestyle.jpg",
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
                  {/* Step image */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 mx-auto max-w-[280px]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 280px"
                    />
                    <div className="absolute inset-0 bg-green-dark/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <step.icon size={28} className="text-green-dark" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>

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
