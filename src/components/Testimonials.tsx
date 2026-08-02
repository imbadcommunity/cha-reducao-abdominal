"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

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
      x: dir > 0 ? 280 : -280,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -280 : 280,
      opacity: 0,
      scale: 0.94,
      transition: { duration: 0.4 },
    }),
  };

  const t = testimonials[current];

  return (
    <section
      id="depoimentos"
      className="section-pad bg-cloud"
      aria-labelledby="depoimentos-title"
    >
      <div className="container-premium">
        <SectionHeading
          kicker="Depoimentos"
          title="Quem comprou,"
          highlight="recomenda."
          subtitle="Experiências reais de clientes que vivem o melhor da tecnologia Apple."
        />

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-[28px] bg-white border border-line shadow-2xl shadow-black/10 p-8 sm:p-12 min-h-[360px] flex items-center overflow-hidden">
            {/* Decorative quote */}
            <div className="absolute -top-4 -left-2 text-[180px] font-serif text-brand/5 leading-none select-none">
              &ldquo;
            </div>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full relative"
              >
                {/* Avatar */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.15,
                    }}
                    className="relative w-16 h-16 rounded-full metal silver-ring flex items-center justify-center shrink-0 shadow-lg shadow-black/10"
                  >
                    <span className="text-lg font-bold text-ink">
                      {t.initials}
                    </span>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand border-2 border-white flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">✓</span>
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-bold text-ink text-lg">{t.name}</p>
                    <p className="text-sm text-slate-light">{t.city}</p>
                    <div className="flex items-center gap-1 mt-1.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -30 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{
                            delay: 0.25 + i * 0.08,
                            type: "spring",
                            stiffness: 220,
                          }}
                        >
                          <Star
                            size={15}
                            className="fill-[#f5b301] text-[#f5b301]"
                          />
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-ink/85 text-lg sm:text-xl leading-relaxed mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cloud text-sm font-medium text-slate-mid">
                  <Quote size={14} className="text-brand" />
                  Comprou: {t.product}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-7">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2" role="tablist" aria-label="Navegação de depoimentos">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    i === current
                      ? "w-8 bg-brand"
                      : "w-2 bg-ink/15 hover:bg-ink/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
