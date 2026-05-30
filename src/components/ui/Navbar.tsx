"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ currentLang, onLanguageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "products", label: t.nav.products },
    { id: "services", label: t.nav.services },
    { id: "impact", label: t.nav.impact },
    { id: "gallery", label: t.nav.gallery },
    { id: "contact", label: t.nav.contact }
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism shadow-[0_8px_32px_rgba(0,0,0,0.03)] border-b border-brand-green-dark/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="relative w-12 h-12 overflow-hidden">
            <Image
              src="/images/mabil_logo_official.png"
              alt="Mabil International Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-poppins font-bold text-lg tracking-wide uppercase leading-none transition-colors duration-300 ${
              isScrolled ? "text-brand-green-dark" : "text-white"
            }`}>
              Mabil
            </span>
            <span className={`font-poppins text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
              isScrolled ? "text-brand-brown" : "text-brand-green-light"
            }`}>
              International
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-inter font-medium text-sm transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isScrolled
                  ? "text-stone-700 hover:text-brand-green-dark after:bg-brand-green-dark"
                  : "text-white/90 hover:text-white after:bg-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Language & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center border border-stone-200 rounded-full px-3 py-1 bg-white/80 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-stone-500 mr-1.5" />
            <button
              onClick={() => onLanguageChange("fr")}
              className={`text-xs font-bold font-poppins px-1.5 py-0.5 rounded-full transition-all cursor-pointer ${
                currentLang === "fr"
                  ? "bg-brand-green-dark text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange("en")}
              className={`text-xs font-bold font-poppins px-1.5 py-0.5 rounded-full transition-all cursor-pointer ${
                currentLang === "en"
                  ? "bg-brand-green-dark text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors cursor-pointer ${
              isScrolled
                ? "text-stone-700 hover:text-brand-green-dark"
                : "text-white hover:text-brand-green-light"
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 border-b border-stone-100 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-stone-800 hover:text-brand-green-dark text-left font-poppins font-medium py-2 transition-colors cursor-pointer border-b border-stone-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
