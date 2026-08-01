"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { TrendingUp, User } from "lucide-react";

const results = [
  {
    name: "Ana",
    initials: "AP",
    period: "8 semanas",
    description:
      "Incluiu o chá em sua rotina matinal junto com alimentação equilibrada.",
    image: "/images/healthy-lifestyle.jpg",
  },
  {
    name: "Carlos",
    initials: "CM",
    period: "12 semanas",
    description:
      "Combinou o consumo do chá com atividade física regular.",
    image: "/images/tea-preparation.jpg",
  },
  {
    name: "Fernanda",
    initials: "FL",
    period: "6 semanas",
    description:
      "Adotou o chá como parte de seus hábitos diários de bem-estar.",
    image: "/images/product-packaging.jpg",
  },
];

export default function Results() {
  return (
    <section
      className="py-20 sm:py-28 bg-cream"
      aria-labelledby="resultados-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Resultados
          </span>
          <h2
            id="resultados-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Histórias de <span className="text-gradient">bem-estar</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Conheça relatos de quem incluiu o chá em sua rotina diária.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <ScrollReveal key={result.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                {/* Before/After placeholder with images */}
                <div className="grid grid-cols-2 h-48">
                  <div className="relative bg-gray-100 overflow-hidden">
                    <Image
                      src={result.image}
                      alt={`${result.name} - início`}
                      fill
                      className="object-cover grayscale opacity-60"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mb-1">
                        <User size={20} className="text-gray-500" />
                      </div>
                      <span className="text-xs font-medium text-gray-500">Início</span>
                    </div>
                  </div>
                  <div className="relative bg-green-50 overflow-hidden">
                    <Image
                      src={result.image}
                      alt={`${result.name} - progresso`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-green-dark/20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-green-dark flex items-center justify-center mb-1">
                        <TrendingUp size={20} className="text-white" />
                      </div>
                      <span className="text-xs font-medium text-green-dark">Progresso</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-green-dark flex items-center justify-center text-white text-xs font-bold">
                        {result.initials}
                      </div>
                      <h3 className="font-bold text-gray-900">{result.name}</h3>
                    </div>
                    <span className="text-xs bg-green-50 text-green-dark px-3 py-1 rounded-full font-medium">
                      {result.period}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-gray-400 text-xs mt-10 max-w-xl mx-auto">
            *Imagens ilustrativas. Resultados variam de pessoa para pessoa e
            dependem de fatores como alimentação, atividade física e
            genética. O produto não garante resultados específicos.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
