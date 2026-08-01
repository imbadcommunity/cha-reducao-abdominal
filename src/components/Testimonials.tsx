"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  const [paused, setPaused] = useState(false);

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
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      rotateY: dir > 0 ? 15 : -15,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      rotateY: dir > 0 ? -15 : 15,
      scale: 0.9,
      transition: { duration: 0.4 },
    }),
  };

  const t = testimonials[current];

  return (
    <section
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-labelledby="depoimentos-title"
    >
      {/* Decorative quotes */}
      <div className="absolute top-16 left-10 text-[200px] font-serif text-green-dark/5 select-none leading-none">&ldquo;</div>
      <div className="absolute bottom-16 right-10 text-[200px] font-serif text-green-dark/5 select-none leading-none">&rdquo;</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <motion.span
            whileInView={{ scale: [1, 1.2, 1] }}
            viewport={{ once: true }}
            className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Depoimentos
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            O que dizem nossos <span className="text-gradient">clientes</span>
          </h2>
        </ScrollReveal>

        <div
          className="relative max-w-2xl mx-auto [perspective:1200px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cream to-white p-8 sm:p-12 min-h-[340px] flex items-center shadow-xl shadow-green-dark/5 border border-green-dark/5">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{ rotate: [0, 8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-green-dark flex items-center justify-center"
                >
                  <Quote size={22} className="text-white" />
                </motion.div>
                <motion.p
                  key={t.comment}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 italic"
                >
                  &ldquo;{t.comment}&rdquo;
                </motion.p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Star size={16} className="fill-gold text-gold" />
                    </motion.span>
                  ))}
                </div>
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                  className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-dark to-green-mid flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-dark/30"
                >
                  {t.initials}
                </motion.div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.city}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.15, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-green-dark hover:bg-green-dark hover:text-white transition-colors cursor-pointer"
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
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "w-8 bg-green-dark" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-green-dark hover:bg-green-dark hover:text-white transition-colors cursor-pointer"
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
