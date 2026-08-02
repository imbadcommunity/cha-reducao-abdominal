"use client";

import { motion } from "framer-motion";
import { MessageCircle, LayoutGrid } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import IPhoneArt from "./devices/IPhoneArt";
import MagneticButton from "./MagneticButton";
import { whatsappLink, whatsappDefaultMessage } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-ink text-white"
      aria-labelledby="cta-title"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand/15 blur-[140px]" />
        <div className="absolute bottom-0 right-[10%] w-[380px] h-[380px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative container-premium py-24 sm:py-32 text-center">
        <ScrollReveal className="max-w-3xl mx-auto">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex justify-center mb-8"
          >
            <IPhoneArt className="w-32 sm:w-40 drop-shadow-[0_35px_55px_rgba(0,0,0,0.5)]" />
          </motion.div>

          <p className="section-kicker mb-4">Pronto para começar?</p>
          <h2 id="cta-title" className="display-title mb-6">
            Seu próximo Apple{" "}
            <span className="metal-text">começa aqui.</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
            Fale agora com um consultor especializado ou explore nosso catálogo
            completo. Sua experiência premium começa em um clique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <motion.a
                href={whatsappLink(whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary !px-9 !py-4 text-lg"
              >
                <MessageCircle size={20} />
                Solicitar Atendimento
              </motion.a>
            </MagneticButton>
            <MagneticButton>
              <motion.a
                href="#produtos"
                whileTap={{ scale: 0.97 }}
                className="btn btn-white !px-9 !py-4 text-lg"
              >
                <LayoutGrid size={20} />
                Ver Catálogo
              </motion.a>
            </MagneticButton>
          </div>

          <p className="mt-8 text-sm text-white/40">
            Atendimento de Segunda a Sábado • Resposta em minutos
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
