"use client";

import dynamic from "next/dynamic";
import ProgressBar from "@/components/ProgressBar";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IPhone17Pro from "@/components/IPhone17Pro";
import Marquee from "@/components/Marquee";

const FeaturedProducts = dynamic(() => import("@/components/FeaturedProducts"), {
  ssr: false,
});
const Categories = dynamic(() => import("@/components/Categories"), {
  ssr: false,
});
const WhyUs = dynamic(() => import("@/components/WhyUs"), { ssr: false });
const Promotions = dynamic(() => import("@/components/Promotions"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/About"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), {
  ssr: false,
});
const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
});

const marqueeItems = [
  "Produtos 100% originais",
  "Garantia oficial Apple",
  "Entrega para todo o Brasil",
  "Até 12x sem juros",
  "Atendimento especializado",
  "Pix com desconto",
];

export default function Home() {
  return (
    <>
      <Cursor />
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <IPhone17Pro />
        <Marquee items={marqueeItems} direction="left" />
        <FeaturedProducts />
        <Categories />
        <WhyUs />
        <Promotions />
        <Testimonials />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
