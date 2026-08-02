"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink, whatsappDefaultMessage } from "@/lib/site";

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Por que nós", href: "#porque-nos" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre", href: "#sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className={`container-premium flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
        role="navigation"
        aria-label="Menu principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 font-bold tracking-tight"
          aria-label="Apple Store Premium — início"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl metal silver-ring shadow-sm">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M16.7 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8 1.5 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.6-1-2.8-4zM14.3 5.4c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 .1.1 1.3.1 2.9-1.4z"
                fill="#1d1d1f"
              />
            </svg>
          </span>
          <span className="text-lg text-ink hidden sm:block">
            Apple <span className="metal-text font-extrabold">Premium</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-ink link-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href={whatsappLink(whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary !py-2.5 !px-5 text-sm"
          >
            <MessageCircle size={16} />
            Comprar
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-ink cursor-pointer"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden glass border-t border-black/5 overflow-hidden"
          >
            <div className="container-premium py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-3 rounded-xl text-base font-medium text-ink/85 hover:bg-black/5 hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink(whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 bg-brand text-white font-semibold rounded-full"
              >
                <MessageCircle size={18} />
                Comprar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
