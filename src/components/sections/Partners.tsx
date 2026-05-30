"use client";

import React from "react";
import Image from "next/image";
import { Handshake } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { motion } from "framer-motion";

interface PartnersProps {
  currentLang: Language;
}

export default function Partners({ currentLang }: PartnersProps) {
  const t = translations[currentLang];

  const partnersList = [
    {
      id: "giz",
      name: "GIZ-TOGO",
      fullName: currentLang === "fr" 
        ? "Coopération Allemande au Togo (GIZ)" 
        : "German Development Cooperation (GIZ) Togo",
      logo: (
        <div className="relative w-full h-20 flex items-center justify-center">
          <Image
            src="/images/giz_logo.png"
            alt="Coopération Allemande au Togo (GIZ)"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )
    },
    {
      id: "agriculture",
      name: "Ministère de l'Agriculture",
      fullName: currentLang === "fr"
        ? "Ministère de l'Agriculture, de l'Élevage et du Développement Rural"
        : "Ministry of Agriculture, Livestock and Rural Development",
      logo: (
        <div className="relative w-full h-20 flex items-center justify-center">
          <Image
            src="/images/agriculture_logo.png"
            alt="Ministère de l'Agriculture, de l'Élevage et du Développement Rural du Togo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )
    },
    {
      id: "cci",
      name: "CCI-TOGO",
      fullName: currentLang === "fr"
        ? "Chambre de Commerce et d'Industrie du Togo"
        : "Chamber of Commerce and Industry of Togo",
      logo: (
        <div className="relative w-full h-20 flex items-center justify-center">
          <Image
            src="/images/cci_logo.png"
            alt="Chambre de Commerce et d'Industrie du Togo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )
    }
  ];

  return (
    <section id="partners" className="py-20 bg-stone-50 overflow-hidden border-t border-stone-200/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-brand-green-dark bg-emerald-50 border border-brand-green-light/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
            <Handshake className="w-3.5 h-3.5" />
            {t.partners.badge}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3 mb-4">
            {t.partners.title}
          </h2>
          <p className="font-inter text-stone-500 text-base leading-relaxed">
            {t.partners.subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {partnersList.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm flex flex-col items-center justify-between gap-6 group hover:shadow-md hover:border-brand-green-light/20 transition-all duration-500 cursor-pointer"
            >
              {/* Logo block with smooth grayscale toggle */}
              <div className="w-full flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-[1.02]">
                {partner.logo}
              </div>

              {/* Text Description */}
              <div className="text-center mt-2 border-t border-stone-100 pt-4 w-full">
                <span className="font-poppins font-bold text-xs uppercase tracking-wide text-stone-400 group-hover:text-brand-green-dark transition-colors duration-300">
                  {partner.name}
                </span>
                <p className="font-inter text-xs text-stone-500 mt-2 font-medium leading-relaxed">
                  {partner.fullName}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
