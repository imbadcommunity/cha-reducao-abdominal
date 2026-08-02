import {
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Tablet,
  Cable,
  BadgeCheck,
  ShieldCheck,
  Truck,
  CreditCard,
  Headset,
  Star,
  type LucideIcon,
} from "lucide-react";

export type DeviceKey = "iphone" | "ipad" | "watch" | "macbook" | "airpods";

export interface Product {
  id: string;
  device: DeviceKey;
  name: string;
  tagline: string;
  description: string;
  price: string;
  oldPrice?: string;
  installment: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  device?: DeviceKey;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Promo {
  id: string;
  device: DeviceKey;
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  discount: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  initials: string;
  product: string;
}

export const products: Product[] = [
  {
    id: "iphone-15-pro",
    device: "iphone",
    name: "iPhone 15 Pro",
    tagline: "Titânio. Tão forte. Tão leve. Tão Pro.",
    description:
      "Câmera profissional de 48MP, chip A17 Pro e Dynamic Island. Disponível em Titânio Natural, Azul, Branco e Preto.",
    price: "R$ 9.499",
    oldPrice: "R$ 10.499",
    installment: "12x de R$ 791,58",
    badge: "Mais vendido",
  },
  {
    id: "ipad-pro",
    device: "ipad",
    name: "iPad Pro M4",
    tagline: "Tão fino. Tão poderoso.",
    description:
      "Chip M4 com desempenho impressionante, tela Ultra Retina XDR e compatibilidade com Apple Pencil Pro.",
    price: "R$ 11.999",
    installment: "12x de R$ 999,91",
    badge: "Novo",
  },
  {
    id: "apple-watch-ultra",
    device: "watch",
    name: "Apple Watch Ultra 2",
    tagline: "Aventura para todos.",
    description:
      "Caixa de titânio de 49mm, tela mais brilhante de todos os tempos e bateria para até 72 horas.",
    price: "R$ 9.299",
    installment: "12x de R$ 774,91",
    badge: "Top de linha",
  },
  {
    id: "macbook-pro",
    device: "macbook",
    name: "MacBook Pro 14",
    tagline: "Potência sem limites.",
    description:
      "Chip M3 Pro, tela Liquid Retina XDR de 14 polegadas e até 18 horas de bateria para os maiores desafios.",
    price: "R$ 18.499",
    installment: "12x de R$ 1.541,58",
  },
  {
    id: "airpods-pro-2",
    device: "airpods",
    name: "AirPods Pro 2",
    tagline: "Som imersivo. Ruído anulado.",
    description:
      "Cancelamento ativo de ruído, Áudio Adaptativo e H2 com qualidade de som impressionante.",
    price: "R$ 2.399",
    oldPrice: "R$ 2.699",
    installment: "12x de R$ 199,91",
    badge: "Promoção",
  },
];

export const categories: Category[] = [
  {
    id: "iphones",
    name: "iPhones",
    description: "Os smartphones mais avançados do mundo",
    icon: Smartphone,
    device: "iphone",
  },
  {
    id: "macbooks",
    name: "MacBooks",
    description: "Performance extraordinária para todos",
    icon: Laptop,
    device: "macbook",
  },
  {
    id: "apple-watch",
    name: "Apple Watch",
    description: "Saúde e aventura no seu pulso",
    icon: Watch,
    device: "watch",
  },
  {
    id: "airpods",
    name: "AirPods",
    description: "Áudio imersivo e liberdade total",
    icon: Headphones,
    device: "airpods",
  },
  {
    id: "ipads",
    name: "iPads",
    description: "Versatilidade em cada tela",
    icon: Tablet,
    device: "ipad",
  },
  {
    id: "acessorios",
    name: "Acessórios",
    description: "Capas, carregadores e muito mais",
    icon: Cable,
  },
];

export const features: Feature[] = [
  {
    id: "original",
    title: "Produtos 100% Originais",
    description:
      "Toda linha Apple é original, lacrada e com nota fiscal. Nada de réplicas.",
    icon: BadgeCheck,
  },
  {
    id: "garantia",
    title: "Garantia de 12 Meses",
    description:
      "Garantia oficial Apple, com suporte completo para sua tranquilidade.",
    icon: ShieldCheck,
  },
  {
    id: "entrega",
    title: "Entrega Rápida",
    description:
      "Enviamos para todo o Brasil com rastreio e embalagem premium de proteção.",
    icon: Truck,
  },
  {
    id: "parcelamento",
    title: "Parcelamento Facilitado",
    description:
      "Em até 12x sem juros no cartão, Pix com desconto e boleto à vista.",
    icon: CreditCard,
  },
  {
    id: "suporte",
    title: "Suporte Especializado",
    description:
      "Consultores especializados prontos para te ajudar antes e depois da compra.",
    icon: Headset,
  },
  {
    id: "avaliacoes",
    title: "Avaliações 4.9/5",
    description:
      "Mais de 1.800 clientes satisfeitos comprando com confiança e segurança.",
    icon: Star,
  },
];

export const promos: Promo[] = [
  {
    id: "promo-iphone",
    device: "iphone",
    title: "iPhone 15 Pro",
    description:
      "Titânio, chip A17 Pro e câmera profissional. Leve o iPhone dos seus sonhos com condições exclusivas.",
    price: "R$ 9.499",
    oldPrice: "R$ 10.499",
    discount: "-10%",
    tag: "Oferta da semana",
  },
  {
    id: "promo-airpods",
    device: "airpods",
    title: "AirPods Pro 2",
    description:
      "Cancelamento de ruído e Áudio Adaptativo. Perfeitos para acompanhar você em todos os momentos.",
    price: "R$ 2.199",
    oldPrice: "R$ 2.699",
    discount: "-19%",
    tag: "Condição especial",
  },
  {
    id: "promo-watch",
    device: "watch",
    title: "Apple Watch SE",
    description:
      "Comece sua jornada de saúde e condicionamento físico com o Apple Watch mais acessível.",
    price: "R$ 3.499",
    oldPrice: "R$ 3.999",
    discount: "-13%",
    tag: "Escolha popular",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana Duarte",
    city: "São Paulo, SP",
    rating: 5,
    comment:
      "Comprei meu iPhone 15 Pro e foi a experiência mais tranquila possível. Atendimento incrível, produto lacrado e entrega super rápida. Recomendo demais!",
    initials: "MD",
    product: "iPhone 15 Pro",
  },
  {
    id: "t2",
    name: "Rafael Almeida",
    city: "Rio de Janeiro, RJ",
    rating: 5,
    comment:
      "Atenção aos detalhes do início ao fim. Me ajudaram a escolher o MacBook ideal para o meu trabalho e ainda parcelaram sem juros. Nota mil.",
    initials: "RA",
    product: "MacBook Pro 14",
  },
  {
    id: "t3",
    name: "Juliana Costa",
    city: "Belo Horizonte, MG",
    rating: 5,
    comment:
      "Produto original com nota fiscal e garantia. O suporte respondeu todas as minhas dúvidas pelo WhatsApp em minutos. Confiança total.",
    initials: "JC",
    product: "Apple Watch Series 9",
  },
  {
    id: "t4",
    name: "Pedro Martins",
    city: "Curitiba, PR",
    rating: 5,
    comment:
      "Melhor preço que encontrei e ainda ganhei um brinde exclusivo. Meus AirPods chegaram em 2 dias. Loja de altíssimo nível.",
    initials: "PM",
    product: "AirPods Pro 2",
  },
  {
    id: "t5",
    name: "Camila Ferreira",
    city: "Porto Alegre, RS",
    rating: 5,
    comment:
      "Ambiente sofisticado e consultores que realmente entendem de Apple. Presenteie minha família toda na loja. Experiência premium.",
    initials: "CF",
    product: "iPad Pro M4",
  },
];
