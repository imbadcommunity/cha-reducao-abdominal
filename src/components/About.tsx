"use client";

import { motion } from "framer-motion";
import { Heart, Gem, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Parallax from "./Parallax";
import DeviceArt from "./devices/DeviceArt";
import CountUp from "./CountUp";

const values = [
  {
    icon: Gem,
    title: "Missão",
    text: "Tornar a melhor tecnologia do mundo acessível, com transparência, garantia e um atendimento de verdade premium.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Autenticidade, cuidado e respeito ao cliente em cada etapa — do primeiro contato ao pós-venda.",
  },
  {
    icon: Users,
    title: "Compromisso",
    text: "Qualidade e atendimento personalizado, como se cada cliente fosse o único. E para nós, é.",
  },
];

const stats = [
  { end: 1800, suffix: "+", label: "Clientes satisfeitos" },
  { end: 5000, suffix: "+", label: "Produtos entregues" },
  { end: 12, suffix: " meses", label: "Garantia oficial" },
  { end: 4.9, suffix: "/5", label: "Avaliação média", decimal: true },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="section-pad bg-white overflow-hidden"
      aria-labelledby="sobre-title"
    >
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Visual */}
          <Parallax offset={40} className="relative">
            <div className="relative rounded-[28px] bg-gradient-to-b from-cloud to-white border border-line p-8 sm:p-12 flex items-end justify-center min-h-[440px] overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-brand/10 blur-[70px]" />

              {/* Styled storefront composition */}
              <div className="relative flex items-end justify-center gap-3 sm:gap-5">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <DeviceArt
                    device="watch"
                    className="w-28 sm:w-36 drop-shadow-[0_30px_40px_rgba(0,0,0,0.22)]"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -13, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="relative z-20"
                >
                  <DeviceArt
                    device="iphone"
                    className="w-40 sm:w-52 drop-shadow-[0_35px_50px_rgba(0,0,0,0.28)]"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="relative z-10"
                >
                  <DeviceArt
                    device="airpods"
                    className="w-24 sm:w-32 drop-shadow-[0_28px_38px_rgba(0,0,0,0.2)]"
                  />
                </motion.div>
              </div>

              {/* Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute top-6 right-6 glass rounded-2xl shadow-lg shadow-black/10 border border-black/5 px-4 py-3"
              >
                <p className="text-[11px] text-slate-mid">Desde 2018</p>
                <p className="text-sm font-bold text-ink">
                  Especialistas Apple
                </p>
              </motion.div>
            </div>
          </Parallax>

          {/* Copy */}
          <div>
            <ScrollReveal>
              <p className="section-kicker mb-4">Sobre a loja</p>
              <h2 id="sobre-title" className="section-title text-ink mb-6">
                Uma experiência de compra{" "}
                <span className="metal-text">à altura da Apple.</span>
              </h2>
              <p className="text-lg text-slate-mid leading-relaxed mb-8">
                Nossa loja nasceu da paixão por tecnologia e do desejo de
                oferecer produtos Apple originais com a mesma sofisticação dos
                produtos que vendemos. Cada detalhe — da vitrine ao
                atendimento — foi pensado para fazer você se sentir especial.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-5 mb-10">
              {values.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-cloud border border-transparent transition-all duration-500 hover:border-line hover:bg-white hover:shadow-lg hover:shadow-black/5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-line shadow-sm flex items-center justify-center text-ink">
                      <value.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink mb-1">{value.title}</h3>
                      <p className="text-sm text-slate-mid leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center p-6 rounded-[20px] bg-cloud">
                <p className="text-3xl sm:text-4xl font-bold text-ink mb-1">
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    decimal={stat.decimal}
                  />
                </p>
                <p className="text-sm text-slate-mid">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
