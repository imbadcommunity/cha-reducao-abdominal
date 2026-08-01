"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-cream overflow-hidden"
      aria-labelledby="como-funciona-title"
    >
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-green-dark/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <motion.span
            whileInView={{ scale: [1, 1.2, 1] }}
            viewport={{ once: true }}
            className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Como Funciona
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Simples e <span className="text-gradient">natural</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Em apenas três passos, prepare uma xícara deliciosa para sua
            rotina diária.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-1 bg-green-dark/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full bg-gradient-to-r from-green-dark via-green-mid to-gold rounded-full origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.25}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative text-center group"
                >
                  {/* Step image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full h-52 rounded-3xl overflow-hidden mb-6 mx-auto max-w-[280px] shadow-lg shadow-green-dark/10 group-hover:shadow-2xl group-hover:shadow-green-dark/20 transition-shadow duration-500"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 8, repeat: Infinity, delay: index * 2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 280px, 280px"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-green-dark/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="relative z-10 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur shadow-xl flex items-center justify-center"
                      >
                        <step.icon size={28} className="text-green-dark" />
                      </motion.div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.8 }}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center shadow-lg"
                    >
                      {step.step}
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold text-gray-900 mb-3"
                  >
                    {step.title}
                  </motion.h3>
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
