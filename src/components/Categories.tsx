"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import DeviceArt from "./devices/DeviceArt";
import { categories } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function Categories() {
  return (
    <section
      id="categorias"
      className="section-pad bg-cloud"
      aria-labelledby="categorias-title"
    >
      <div className="container-premium">
        <SectionHeading
          kicker="Categorias"
          title="Explore a linha"
          highlight="Apple completa."
          subtitle="Encontre o dispositivo ideal para cada momento da sua vida."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, i) => (
            <ScrollReveal
              key={category.id}
              delay={(i % 3) * 0.1}
            >
              <motion.a
                href={category.device ? "#produtos" : whatsappLink(`Olá! Tenho interesse em ${category.name}.`)}
                {...(category.device
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                whileHover="hover"
                className="group relative block overflow-hidden rounded-[20px] bg-white border border-line p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 hover:border-black/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cloud flex items-center justify-center text-ink group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    <category.icon size={22} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-slate-light group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-ink mb-1.5">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-mid leading-relaxed">
                  {category.description}
                </p>

                {/* Device art reveal */}
                {category.device && (
                  <motion.div
                    variants={{
                      hover: { opacity: 1, y: 0, scale: 1 },
                    }}
                    initial={{ opacity: 0, y: 20, scale: 0.92 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 pointer-events-none"
                  >
                    <DeviceArt
                      device={category.device}
                      className="w-28 sm:w-36 opacity-90 drop-shadow-lg"
                    />
                  </motion.div>
                )}
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
