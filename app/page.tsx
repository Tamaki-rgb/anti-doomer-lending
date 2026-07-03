import CTA from "@/components/CTA";
import BackgroundOrnaments from "@/components/BackgroundOrnaments";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InteractionLayer from "@/components/InteractionLayer";
import Navbar from "@/components/Navbar";
import Premium from "@/components/Premium";
import Problem from "@/components/Problem";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink bg-radial-soft">
      <BackgroundOrnaments />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Premium />
        <CTA />
        <Footer />
      </div>
      <InteractionLayer />
    </main>
  );
}
