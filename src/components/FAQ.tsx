"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como preparar?",
    answer:
      "Ferva água e despeje sobre uma porção do chá. Deixe em infusão por 5 a 7 minutos, coe e aproveite. Pode ser consumido quente ou gelado, conforme sua preferência.",
  },
  {
    question: "Quando consumir?",
    answer:
      "O chá pode ser consumido a qualquer momento do dia. Muitas pessoas preferem no início da manhã ou após as refeições, mas siga sempre a orientação da embalagem.",
  },
  {
    question: "Quanto rende?",
    answer:
      "Cada embalagem rende aproximadamente 30 porções, dependendo da intensidade desejada. Consulte a embalagem para informações precisas sobre a quantidade.",
  },
  {
    question: "Como armazenar?",
    answer:
      "Mantenha o produto em local seco, arejado e ao abrigo da luz solar direta. Feche bem a embalagem após cada uso para preservar o frescor dos ingredientes.",
  },
  {
    question: "Possui ingredientes artificiais?",
    answer:
      "Não. Nosso blend é formulado exclusivamente com ingredientes naturais: hibisco, chá verde, gengibre, canela e hortelã. Não contém corantes, conservantes ou aromatizantes artificiais.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`border rounded-2xl mb-3 overflow-hidden transition-colors duration-300 ${
        isOpen ? "border-green-dark/20 bg-white shadow-lg" : "border-gray-100 bg-white"
      }`}
    >
      <motion.button
        onClick={onToggle}
        whileTap={{ scale: 0.995 }}
        className="w-full flex items-center justify-between py-5 px-6 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4 text-lg">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen ? "bg-green-dark text-white" : "bg-green-50 text-green-dark"
          }`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              className="pb-6 px-6 text-gray-500 leading-relaxed"
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative py-20 sm:py-28 bg-gradient-to-b from-cream to-white"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <motion.span
            whileInView={{ scale: [1, 1.2, 1] }}
            viewport={{ once: true }}
            className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Perguntas Frequentes
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Tire suas <span className="text-gradient">dúvidas</span>
          </h2>
        </ScrollReveal>

        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
