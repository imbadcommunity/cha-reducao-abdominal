"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import DeviceArt from "./devices/DeviceArt";
import { products } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function FeaturedProducts() {
  return (
    <section
      id="produtos"
      className="section-pad bg-white"
      aria-labelledby="produtos-title"
    >
      <div className="container-premium">
        <SectionHeading
          kicker="Produtos em destaque"
          title="Tecnologia que define"
          highlight="o futuro."
          subtitle="Uma seleção dos produtos mais desejados da Apple, com condições exclusivas e garantia oficial."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {products.map((product, i) => (
            <ScrollReveal
              key={product.id}
              delay={(i % 3) * 0.12}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <TiltCard className="h-full [perspective:1000px]">
                <article className="card card-hover h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-b from-cloud to-white flex items-center justify-center overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.06, opacity: 0.7 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <DeviceArt
                        device={product.device}
                        className="w-44 sm:w-48 drop-shadow-[0_24px_36px_rgba(0,0,0,0.16)]"
                      />
                    </motion.div>
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass border border-black/5 text-xs font-semibold text-ink shadow-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-ink mb-1.5">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-light mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-sm text-slate-mid leading-relaxed mb-5 flex-1">
                      {product.description}
                    </p>

                    <div className="flex items-baseline gap-2.5 mb-5">
                      <span className="text-2xl font-bold text-ink">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-slate-light line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-mid -mt-3 mb-5">
                      em até {product.installment}
                    </p>

                    <div className="flex flex-col gap-2.5">
                      <motion.a
                        href={whatsappLink(
                          `Olá! Tenho interesse no ${product.name}. Gostaria de mais informações.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn btn-primary !py-3 text-sm w-full"
                      >
                        <ShoppingBag size={16} />
                        Comprar
                      </motion.a>
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        className="btn btn-ghost !py-3 text-sm w-full cursor-pointer"
                      >
                        Saiba Mais
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </ScrollReveal>
          ))}

          {/* WhatsApp CTA card */}
          <ScrollReveal delay={0.24}>
            <a
              href={whatsappLink(
                "Olá! Não encontrei o produto que procuro. Podem me ajudar?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-full min-h-[300px] rounded-[20px] overflow-hidden bg-ink flex flex-col justify-between p-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#22c55e]/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle size={26} className="text-[#4ade80]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Não achou o que procura?
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Fale com nossos consultores. Temos toda a linha Apple, inclusive
                  modelos e configurações sob consulta.
                </p>
              </div>
              <div className="relative mt-6 inline-flex items-center gap-2 text-[#4ade80] font-semibold text-sm">
                Chamar no WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
