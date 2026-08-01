"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import FloatingParticles from "./FloatingParticles";
import { ShieldCheck, Headphones, RotateCcw, Leaf } from "lucide-react";

export default function Guarantee() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-labelledby="garantia-title"
    >
      <FloatingParticles count={6} type="dots" className="opacity-30 text-green-dark" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            style={{ rotate, scale }}
            className="relative bg-gradient-to-br from-cream to-white rounded-[2rem] p-8 sm:p-14 shadow-2xl shadow-green-dark/10 border border-green-dark/5 text-center overflow-hidden"
          >
            {/* Decorative rings */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-green-dark/5"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gold/5"
            />

            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(15, 81, 50, 0.3)",
                    "0 0 0 20px rgba(15, 81, 50, 0)",
                    "0 0 0 0 rgba(15, 81, 50, 0)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-dark flex items-center justify-center"
              >
                <ShieldCheck size={48} className="text-white" />
              </motion.div>

              <h2
                id="garantia-title"
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                Sua satisfação é nossa prioridade
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
                Trabalhamos com excelência em cada etapa, desde a seleção dos
                ingredientes até o atendimento pós-venda. Se tiver alguma
                dúvida ou necessidade, nossa equipe está pronta para ajudar.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Qualidade garantida",
                    description: "Produzido seguindo boas práticas de fabricação.",
                  },
                  {
                    icon: Headphones,
                    title: "Suporte dedicado",
                    description: "Nossa equipe responde em até 24h úteis.",
                  },
                  {
                    icon: RotateCcw,
                    title: "Política transparente",
                    description: "Conheça nossos termos de uso e devolução.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.15, type: "spring", stiffness: 200 }}
                    whileHover={{ y: -6 }}
                    className="text-center group cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -8 }}
                      className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-green-dark/5 flex items-center justify-center group-hover:bg-green-dark group-hover:scale-110 transition-all duration-300"
                    >
                      <item.icon size={26} className="text-green-dark group-hover:text-white transition-colors" />
                    </motion.div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-center gap-2 text-green-dark/50 text-sm">
                <Leaf size={14} />
                Feito com cuidado pela natureza
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
