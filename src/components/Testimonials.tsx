"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Souza",
    city: "São Paulo, SP",
    rating: 5,
    comment:
      "Incluí o chá na minha rotina matinal e tenho me sentido mais leve e disposta. O sabor é incrível!",
    initials: "AP",
  },
  {
    name: "Carlos Mendes",
    city: "Belo Horizonte, MG",
    rating: 5,
    comment:
      "Não esperava muito, mas surpreendeu. O aroma é maravilhoso e o preparo é super prático. Recomendo!",
    initials: "CM",
  },
  {
    name: "Fernanda Lima",
    city: "Curitiba, PR",
    rating: 5,
    comment:
      "Uso há dois meses e amo o sabor. Virou parte da minha rotina de cuidados comigo mesma.",
    initials: "FL",
  },
  {
    name: "Roberto Alves",
    city: "Rio de Janeiro, RJ",
    rating: 5,
    comment:
      "Chá de excelente qualidade. Os ingredientes são percebidos no sabor e no aroma. Muito satisfeito!",
    initials: "RA",
  },
  {
    name: "Mariana Costa",
    city: "Salvador, BA",
    rating: 5,
    comment:
      "Presenteei minha mãe e agora compramos juntas toda semana. Nosso momento de bem-estar!",
    initials: "MC",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="depoimentos-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Depoimentos
          </span>
          <h2
            id="depoimentos-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            O que dizem nossos <span className="text-gradient">clientes</span>
          </h2>
        </ScrollReveal>

        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-cream p-8 sm:p-12 min-h-[320px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full text-center"
              >
                <Quote
                  size={40}
                  className="text-green-dark/20 mx-auto mb-4"
                />
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                {/* Avatar with initials */}
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-green-dark flex items-center justify-center text-white font-bold text-lg">
                  {t.initials}
                </div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.city}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-green-dark hover:bg-green-dark hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                    i === current ? "bg-green-dark" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-green-dark hover:bg-green-dark hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            *Depoimentos refletem experiências individuais. Resultados podem
            variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}
