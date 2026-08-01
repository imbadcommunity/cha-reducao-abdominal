"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { Flower, Leaf, Wind, TreePine, Sprout } from "lucide-react";

const ingredients = [
  {
    icon: Flower,
    name: "Hibisco",
    image: "/images/hibiscus.jpg",
    description:
      "Flor vibrante conhecida por seu sabor levemente ácido e refrescante.",
    benefits: "Rico em antioxidantes, tradicionalmente usado para bem-estar.",
  },
  {
    icon: Leaf,
    name: "Chá Verde",
    image: "/images/green-tea.jpg",
    description:
      "Folhas nobres com sabor suave e notas herbáceas delicadas.",
    benefits:
      "Conhecido por suas propriedades antioxidantes e benefícios à saúde.",
  },
  {
    icon: Wind,
    name: "Gengibre",
    image: "/images/ginger.jpg",
    description:
      "Raiz aromática que traz calor e profundidade ao blend.",
    benefits:
      "Tradicionalmente utilizado para digestive e sensação de leveza.",
  },
  {
    icon: TreePine,
    name: "Canela",
    image: "/images/cinnamon.jpg",
    description:
      "Especiaria clássica que adiciona doçura e complexidade.",
    benefits:
      "Associada ao metabolismo e à sensação de bem-estar geral.",
  },
  {
    icon: Sprout,
    name: "Hortelã",
    image: "/images/mint.jpg",
    description:
      "Erva fresca que finaliza cada gole com refrescância.",
    benefits:
      "Conhecida por promover digestão e conforto estomacal.",
  },
];

export default function Ingredients() {
  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="ingredientes-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-green-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Ingredientes
          </span>
          <h2
            id="ingredientes-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            A natureza em cada <span className="text-gradient">detalhe</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Uma seleção premium de ingredientes naturais, cada um com
            benefícios tradicionais reconhecidos.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ingredients.map((ingredient, index) => (
            <ScrollReveal key={ingredient.name} delay={index * 0.1}>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 24px 48px rgba(15, 81, 50, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-b from-cream to-white rounded-2xl overflow-hidden border border-green-dark/5 group cursor-default"
              >
                {/* Ingredient image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <ingredient.icon size={20} className="text-green-dark" />
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                    {ingredient.description}
                  </p>
                  <div className="pt-3 border-t border-green-dark/5">
                    <p className="text-green-dark text-xs font-medium leading-relaxed">
                      {ingredient.benefits}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-center text-gray-400 text-xs mt-10 max-w-xl mx-auto">
            *Benefícios descritos são tradicionalmente atribuídos aos
            ingredientes listados. O produto não se destina a diagnosticar,
            tratar, curar ou prevenir qualquer doença.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
