"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Parallax from "./Parallax";
import DeviceArt from "./devices/DeviceArt";
import { promos } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function Promotions() {
  return (
    <section
      id="ofertas"
      className="relative overflow-hidden bg-ink text-white"
      aria-labelledby="ofertas-title"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[15%] w-[380px] h-[380px] rounded-full bg-brand/15 blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] w-[420px] h-[420px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative container-premium section-pad">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <p className="section-kicker mb-4">Promoções exclusivas</p>
          <h2 className="section-title">
            Ofertas imperdíveis,{" "}
            <span className="metal-text">por tempo limitado.</span>
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Condições especiais nos produtos mais desejados. Garanta o seu antes
            que acabe.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {promos.map((promo, i) => (
            <ScrollReveal key={promo.id} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-[24px] bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-white/25 hover:bg-white/[0.08]">
                <div className="grid lg:grid-cols-[auto_1fr_auto] gap-0 items-center">
                  {/* Device */}
                  <Parallax offset={26} className="hidden lg:block">
                    <div className="relative flex items-center justify-center pl-6 pr-10 h-full py-6">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: -2 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <DeviceArt
                          device={promo.device}
                          className="w-40 drop-shadow-[0_28px_40px_rgba(0,0,0,0.45)]"
                        />
                      </motion.div>
                    </div>
                  </Parallax>

                  {/* Content */}
                  <div className="p-7 lg:p-9">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22c55e]/15 text-[#4ade80] text-xs font-semibold">
                        <Zap size={12} />
                        {promo.tag}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold">
                        {promo.discount}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {promo.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-5 max-w-xl">
                      {promo.description}
                    </p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-bold text-white">
                        {promo.price}
                      </span>
                      <span className="text-lg text-white/40 line-through">
                        {promo.oldPrice}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-7 lg:p-9 flex flex-col items-start lg:items-center gap-3">
                    <motion.a
                      href={whatsappLink(
                        `Olá! Quero aproveitar a oferta do ${promo.title} por ${promo.price}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="btn btn-primary"
                    >
                      Comprar Agora
                      <ArrowRight size={17} />
                    </motion.a>
                    <span className="text-xs text-white/40">
                      Sujeito à disponibilidade
                    </span>
                  </div>
                </div>

                {/* Mobile device art */}
                <div className="lg:hidden flex justify-center pb-4">
                  <DeviceArt
                    device={promo.device}
                    className="w-32 opacity-90 drop-shadow-lg"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.15} className="mt-10 text-center">
          <motion.a
            href={whatsappLink(
              "Olá! Quero saber sobre as promoções atuais da loja."
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-white"
          >
            <MessageCircle size={18} className="text-[#22c55e]" />
            Quero saber todas as ofertas
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
