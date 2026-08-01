"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { TrendingUp, MoveHorizontal } from "lucide-react";

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

function BeforeAfterSlider({ image, name }: { image: string; name: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, pos)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-56 overflow-hidden select-none touch-none group"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* Before (full, grayscale) */}
      <Image
        src={image}
        alt={`${name} - início`}
        fill
        className="object-cover grayscale opacity-70"
        sizes="(max-width: 640px) 50vw, 25vw"
        draggable={false}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium">
          Início
        </span>
      </div>

      {/* After (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src={image}
          alt={`${name} - progresso`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, 25vw"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-dark/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-green-dark/80 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1">
            <TrendingUp size={12} /> Progresso
          </span>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-0 bottom-0 -left-px w-0.5 bg-white shadow" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center">
          <MoveHorizontal size={16} className="text-green-dark" />
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <section
      className="relative py-20 sm:py-28 bg-cream overflow-hidden"
      aria-labelledby="resultados-title"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-dark/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <motion.span
            whileInView={{ scale: [1, 1.2, 1] }}
            viewport={{ once: true }}
            className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Resultados
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Histórias de <span className="text-gradient">bem-estar</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Arraste o cursor para comparar. Conheça relatos de quem incluiu o
            chá em sua rotina diária.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <ScrollReveal key={result.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(15, 81, 50, 0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
              >
                <BeforeAfterSlider image={result.image} name={result.name} />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        className="w-9 h-9 rounded-full bg-gradient-to-br from-green-dark to-green-mid flex items-center justify-center text-white text-xs font-bold"
                      >
                        {result.initials}
                      </motion.div>
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
