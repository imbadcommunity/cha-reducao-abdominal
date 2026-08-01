"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ShieldCheck, Headphones, RotateCcw } from "lucide-react";

export default function Guarantee() {
  return (
    <section
      className="py-20 sm:py-28 bg-cream"
      aria-labelledby="garantia-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-green-dark/5 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center"
            >
              <ShieldCheck size={40} className="text-green-dark" />
            </motion.div>

            <h2
              id="garantia-title"
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            >
              Sua satisfação é nossa prioridade
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-dark/5 flex items-center justify-center">
                    <item.icon size={22} className="text-green-dark" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
