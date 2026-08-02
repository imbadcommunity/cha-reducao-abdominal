export const site = {
  name: "Apple Store Premium",
  tagline: "Tecnologia premium, atendimento especializado.",
  description:
    "Loja especializada em iPhones, iPads, Apple Watch, MacBooks, AirPods e acessórios originais da Apple.",
  whatsappNumber: "5511999999999",
  phoneDisplay: "+55 (11) 99999-9999",
  email: "contato@applestorepremium.com.br",
  instagram: "https://instagram.com/applestorepremium",
  facebook: "https://facebook.com/applestorepremium",
  address: {
    street: "Av. Paulista, 1000 — Loja 12",
    district: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    cep: "01310-100",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.+Paulista,+1000,+S%C3%A3o+Paulo+-+SP&output=embed",
  hours: [
    { days: "Segunda a Sexta", time: "09h às 19h" },
    { days: "Sábado", time: "09h às 18h" },
    { days: "Domingo", time: "Fechado" },
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappDefaultMessage =
  "Olá! Quero saber mais sobre os produtos da Apple Store Premium.";
