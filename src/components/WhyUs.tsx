"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { features } from "@/lib/data";

export default function WhyUs() {
  return (
    <section
      id="porque-nos"
      className="section-pad bg-white"
      aria-labelledby="porque-title"
    >
      <div className="container-premium">
        <SectionHeading
          kicker="Por que comprar conosco?"
          title="Confiança em cada"
          highlight="detalhe."
          subtitle="Mais do que vender tecnologia, entregamos uma experiência completa de compra, do primeiro contato à pós-venda."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.id} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover="hover"
                className="group relative h-full rounded-[20px] bg-cloud border border-transparent p-7 transition-all duration-500 hover:bg-white hover:border-line hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-white border border-line shadow-sm flex items-center justify-center text-ink group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-500">
                      <feature.icon size={24} />
                    </div>
                    <span className="text-5xl font-bold text-ink/[0.05] select-none transition-colors duration-500 group-hover:text-brand/10">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-mid leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
