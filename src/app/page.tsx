"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Gallery from "@/components/sections/Gallery";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import { Language } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Language>("fr");

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <Navbar currentLang={lang} onLanguageChange={handleLanguageChange} />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero currentLang={lang} />
        
        {/* About Section */}
        <About currentLang={lang} />
        
        {/* Products Grid */}
        <Products currentLang={lang} />
        
        {/* Services Showcase */}
        <Services currentLang={lang} />
        
        {/* Statistics & Impact Callout */}
        <Impact currentLang={lang} />
        
        {/* Photo Gallery Grid */}
        <Gallery currentLang={lang} />
        
        {/* Institutional Partners */}
        <Partners currentLang={lang} />
        
        {/* Interactive Contact & Embeds */}
        <Contact currentLang={lang} />
      </main>

      {/* Corporate Footer */}
      <Footer currentLang={lang} />
    </>
  );
}
