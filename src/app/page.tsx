"use client";

import dynamic from "next/dynamic";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Benefits = dynamic(() => import("@/components/Benefits"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const Ingredients = dynamic(() => import("@/components/Ingredients"), { ssr: false });
const Differentials = dynamic(() => import("@/components/Differentials"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Results = dynamic(() => import("@/components/Results"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Guarantee = dynamic(() => import("@/components/Guarantee"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Ingredients />
        <Differentials />
        <Testimonials />
        <Results />
        <FAQ />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
