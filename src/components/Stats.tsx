"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import ScrollReveal from "./ScrollReveal";
import { Users, Coffee, Star, Leaf } from "lucide-react";

const stats = [
  {
    icon: Users,
    end: 5000,
    suffix: "+",
    label: "Clientes satisfeitos",
  },
  {
    icon: Coffee,
    end: 30,
    suffix: " xícaras",
    label: "por embalagem",
  },
  {
    icon: Star,
    end: 4.9,
    suffix: "/5",
    label: "avaliação média",
    decimal: true,
  },
  {
    icon: Leaf,
    end: 100,
    suffix: "%",
    label: "ingredientes naturais",
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-green-dark to-green-mid overflow-hidden" aria-label="Estatísticas">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.12} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                className="text-center text-white"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center"
                >
                  <stat.icon size={26} />
                </motion.div>
                <p className="text-4xl sm:text-5xl font-bold text-gold-light">
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </p>
                <p className="text-white/70 text-sm mt-2">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
