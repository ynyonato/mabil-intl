"use client";

import React from "react";
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
      // High-fidelity GIZ inline SVG logo representation
      logoSvg: (
        <svg viewBox="0 0 320 120" className="w-full h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue Background block */}
          <rect x="10" y="10" width="100" height="100" rx="6" fill="#27427D" />
          {/* "giz" letters in white serif */}
          <text x="60" y="72" fontSize="48" fontFamily="Georgia, serif" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">giz</text>
          {/* Supporting text */}
          <text x="125" y="38" fontSize="10.5" fontFamily="var(--font-poppins), sans-serif" fontWeight="700" fill="#27427D">coopération allemande</text>
          <text x="125" y="52" fontSize="9.5" fontFamily="var(--font-inter), sans-serif" fontWeight="500" fill="#64748B">DEUTSCHE ZUSAMMENARBEIT</text>
          {/* Small GIZ full title */}
          <text x="125" y="76" fontSize="8" fontFamily="var(--font-inter), sans-serif" fill="#94A3B8" fontWeight="400">Implémenté par GIZ GmbH</text>
        </svg>
      )
    },
    {
      id: "agriculture",
      name: "Ministère de l'Agriculture",
      fullName: currentLang === "fr"
        ? "Ministère de l'Agriculture, de l'Élevage et du Développement Rural"
        : "Ministry of Agriculture, Livestock and Rural Development",
      // High-fidelity Ministry emblem inline SVG logo
      logoSvg: (
        <svg viewBox="0 0 320 120" className="w-full h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Emblem Circle */}
          <circle cx="60" cy="60" r="42" fill="#E2E8F0" />
          <circle cx="60" cy="60" r="38" fill="#15803D" />
          {/* Innermost design (wheat sheaf/sprout in yellow) */}
          <path d="M54 75 C 54 50, 60 42, 60 42 C 60 42, 66 50, 66 75 Z" fill="#EAB308" />
          <path d="M50 72 C 50 55, 57 48, 57 48 C 57 48, 60 52, 60 72 Z" fill="#CA8A04" />
          <path d="M60 72 C 60 52, 63 48, 63 48 C 63 48, 70 55, 70 72 Z" fill="#CA8A04" />
          {/* Star representing Togo flag */}
          <circle cx="60" cy="35" r="7" fill="#EF4444" />
          <polygon points="60,30 62,34 66,34 63,36 64,40 60,38 56,40 57,36 54,34 58,34" fill="#FFFFFF" />
          {/* Text block */}
          <text x="120" y="38" fontSize="11" fontFamily="var(--font-poppins), sans-serif" fontWeight="700" fill="#15803D">RÉPUBLIQUE TOGOLAISE</text>
          <text x="120" y="55" fontSize="8" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fill="#334155" letterSpacing="0.5">MINISTÈRE DE L'AGRICULTURE,</text>
          <text x="120" y="68" fontSize="8" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fill="#334155" letterSpacing="0.5">DE L'ÉLEVAGE ET DU DÉVELOPPEMENT RURAL</text>
          {/* Togolese national stripes under text */}
          <rect x="120" y="78" width="60" height="4" fill="#EAB308" />
          <rect x="180" y="78" width="60" height="4" fill="#15803D" />
        </svg>
      )
    },
    {
      id: "cci",
      name: "CCI-TOGO",
      fullName: currentLang === "fr"
        ? "Chambre de Commerce et d'Industrie du Togo"
        : "Chamber of Commerce and Industry of Togo",
      // High-fidelity CCI-Togo inline SVG logo representation
      logoSvg: (
        <svg viewBox="0 0 320 120" className="w-full h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield or Globe base */}
          <circle cx="60" cy="60" r="42" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="2" />
          {/* Cogwheel representing industry */}
          <circle cx="60" cy="60" r="28" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="8 4" />
          <circle cx="60" cy="60" r="22" fill="#1E3A8A" />
          {/* Map/Global lines representing commerce */}
          <path d="M42 60 H 78" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M60 42 V 78" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M46 50 Q 60 56 74 50" stroke="#FFFFFF" strokeWidth="1" fill="none" />
          <path d="M46 70 Q 60 64 74 70" stroke="#FFFFFF" strokeWidth="1" fill="none" />
          {/* Monogram */}
          <text x="60" y="64" fontSize="12" fontFamily="var(--font-poppins), sans-serif" fontWeight="900" fill="#FFFFFF" textAnchor="middle">CCI</text>
          {/* Text block */}
          <text x="120" y="44" fontSize="13" fontFamily="var(--font-poppins), sans-serif" fontWeight="800" fill="#1E3A8A">CCI-TOGO</text>
          <text x="120" y="60" fontSize="8" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fill="#64748B">CHAMBRE DE COMMERCE ET D'INDUSTRIE</text>
          <text x="120" y="72" fontSize="8" fontFamily="var(--font-inter), sans-serif" fontWeight="600" fill="#64748B">DU TOGO</text>
          {/* Decorative gold line */}
          <line x1="120" y1="82" x2="260" y2="82" stroke="#F59E0B" strokeWidth="2" />
        </svg>
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
                {partner.logoSvg}
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
