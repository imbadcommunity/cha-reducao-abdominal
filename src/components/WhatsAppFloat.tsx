"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink, whatsappDefaultMessage } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink(whatsappDefaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 flex items-center gap-2 pl-3 pr-4 py-3 rounded-full glass-dark border border-white/10 text-white shadow-xl shadow-black/25 cursor-pointer"
    >
      <MessageCircle size={22} />
      <span className="text-sm font-semibold hidden sm:inline">
        Fale conosco
      </span>
      <motion.span
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-white/80"
        aria-hidden="true"
      />
    </motion.a>
  );
}
