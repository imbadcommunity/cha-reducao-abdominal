# Apple Store Premium

Site institucional de altíssimo padrão para uma loja especializada em produtos Apple (iPhones, iPads, Apple Watch, MacBooks, AirPods e acessórios).

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animações e movimento)
- Lucide React (ícones)

## Rodando o projeto

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Estrutura

```
src/
  app/
    layout.tsx        # Root layout (SEO, Open Graph, Schema.org, fontes)
    page.tsx          # Página principal (code splitting)
    globals.css       # Design system (tokens, botões, cards, glass)
    sitemap.ts        # Sitemap gerado
    robots.ts         # Regras de indexação
    icon.svg          # Favicon
  components/
    devices/          # Ilustrações SVG dos dispositivos
    Navbar, Hero, FeaturedProducts, Categories, WhyUs, Promotions,
    Testimonials, About, FinalCTA, Footer, WhatsAppFloat, BackToTop,
    ProgressBar, Cursor, ScrollReveal, Parallax, TiltCard, MagneticButton, ...
  lib/
    site.ts           # Dados de contato e links (WhatsApp, endereço, horário)
    data.ts           # Produtos, categorias, diferenciais, promoções, depoimentos
```

## Personalização

- **Dados da loja / WhatsApp:** edite `src/lib/site.ts`.
- **Produtos, preços e depoimentos:** edite `src/lib/data.ts`.
- **Cores, espaçamentos e animações:** edite os tokens em `src/app/globals.css` (`:root`).
- **URL / domínio canônico:** `site.url` em `src/app/layout.tsx` e `src/app/sitemap.ts`.
