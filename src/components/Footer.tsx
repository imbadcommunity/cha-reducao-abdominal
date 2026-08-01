"use client";

import { motion } from "framer-motion";
import { Leaf, Globe, MessageCircle, Tv, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={24} className="text-green-light" />
              <span className="text-xl font-bold">Chá Redução Abdominal</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Uma seleção premium de ingredientes naturais para complementar
              sua rotina de bem-estar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#ingredientes"
                  className="hover:text-white transition-colors"
                >
                  Ingredientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              {[
                { icon: Globe, label: "Instagram" },
                { icon: MessageCircle, label: "Facebook" },
                { icon: Tv, label: "YouTube" },
                { icon: Mail, label: "E-mail" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {currentYear} Chá Redução Abdominal. Todos os direitos
            reservados.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right max-w-md">
            *Este produto não se destina a diagnosticar, tratar, curar ou
            prevenir qualquer doença. Resultados podem variar de pessoa para
            pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
}
