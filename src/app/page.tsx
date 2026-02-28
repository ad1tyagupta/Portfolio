import React from "react";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import TilesSection from "@/components/TilesSection";
import ProofGallery from "@/components/ProofGallery";
import Toolbox from "@/components/Toolbox";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 scroll-smooth transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <TilesSection />
        <ProofGallery />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
