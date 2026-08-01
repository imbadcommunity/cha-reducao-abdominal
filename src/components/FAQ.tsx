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
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <motion.button
        onClick={onToggle}
        whileTap={{ scale: 0.99 }}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown
            size={20}
            className="text-green-dark"
          />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Perguntas Frequentes
          </span>
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Tire suas <span className="text-gradient">dúvidas</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-cream rounded-2xl p-6 sm:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
