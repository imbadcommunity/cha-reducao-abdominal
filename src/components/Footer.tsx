"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Mail, MessageCircle, Shield } from "lucide-react";
import { site, whatsappLink, whatsappDefaultMessage } from "@/lib/site";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Produtos em destaque", href: "#produtos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Por que comprar conosco", href: "#porque-nos" },
  { label: "Promoções", href: "#ofertas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre a loja", href: "#sobre" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
  { label: "Trocas e Devoluções", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white" role="contentinfo">
      <div className="container-premium pt-16 pb-8">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a
              href="#inicio"
              className="flex items-center gap-2.5 font-bold tracking-tight mb-5"
              aria-label="Apple Store Premium — voltar ao topo"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl metal silver-ring shadow-sm">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                  <path
                    d="M16.7 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8 1.5 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.6-1-2.8-4zM14.3 5.4c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 .1.1 1.3.1 2.9-1.4z"
                    fill="#1d1d1f"
                  />
                </svg>
              </span>
              <span className="text-lg">
                Apple <span className="metal-text font-extrabold">Premium</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              {site.description}
            </p>
            <div className="flex gap-3">
              <motion.a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <InstagramIcon />
              </motion.a>
              <motion.a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a
                href={whatsappLink(whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-2" aria-label="Links rápidos">
            <h3 className="font-bold mb-4">Navegação</h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + hours */}
          <div className="lg:col-span-3">
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href={whatsappLink(whatsappDefaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} className="mt-0.5 shrink-0 text-[#4ade80]" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                <address className="not-italic leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.district} — {site.address.city}, {site.address.state}
                </address>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-white/10">
              <div className="flex items-center gap-2.5 mb-2.5">
                <Clock size={16} className="text-brand" />
                <h4 className="text-sm font-semibold">Horário de atendimento</h4>
              </div>
              <ul className="space-y-1 text-sm text-white/50">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="text-white/70">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <h3 className="font-bold mb-4">Onde estamos</h3>
            <div className="rounded-2xl overflow-hidden border border-white/10 relative">
              <iframe
                src={site.mapsEmbedUrl}
                title="Mapa — Apple Store Premium na Avenida Paulista, São Paulo"
                width="100%"
                height="200"
                style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-white/50">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Shield size={13} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              &copy; {currentYear} Apple Store Premium. Todos os direitos
              reservados.
            </p>
            <p className="text-white/30 text-xs">
              Apple e o logotipo da Apple são marcas registradas da Apple Inc.
              Este é um site de demonstração independente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
