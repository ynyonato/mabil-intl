"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import Button from "../ui/Button";
import { motion } from "framer-motion";

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const t = translations[currentLang];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Dark & Organic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about_cooperative.png"
          alt="Mabil International Cassava Farm"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-dark/25 border border-brand-green-light/35 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green-light animate-pulse" />
            <span className="font-poppins text-xs font-semibold text-brand-green-light tracking-wide uppercase">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            {t.hero.headline}
            <span className="block text-brand-green-light mt-1">
              {t.hero.subheadline}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-inter text-stone-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 font-light"
          >
            {t.hero.desc}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              onClick={() => handleScrollTo("contact")}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {t.hero.contactBtn}
            </Button>
            <Button
              variant="outline"
              className="!border-white !text-white hover:!bg-white/10"
              onClick={() => handleScrollTo("about")}
            >
              {t.hero.partnerBtn}
            </Button>
            <a
              href="/images/presentation_flyer.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-poppins font-medium text-sm text-stone-300 hover:text-white transition-all bg-white/5 border border-stone-700 hover:border-stone-500 backdrop-blur-sm cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4" />
              {t.hero.presentationBtn}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth transition spacer to stone-50 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent pointer-events-none" />
    </section>
  );
}
