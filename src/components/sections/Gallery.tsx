"use client";

import React from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { motion } from "framer-motion";

interface GalleryProps {
  currentLang: Language;
}

export default function Gallery({ currentLang }: GalleryProps) {
  const t = translations[currentLang];

  const galleryItems = [
    {
      id: 1,
      src: "/images/hero_bg.png",
      alt: "Cassava Fields",
      category: currentLang === "fr" ? "Champs de Manioc" : "Cassava Fields",
      span: "md:col-span-8 h-80"
    },
    {
      id: 2,
      src: "/images/about_cooperative.png",
      alt: "Women Cooperative",
      category: currentLang === "fr" ? "Coopérative de Femmes" : "Women Cooperative",
      span: "md:col-span-4 h-80 md:h-[664px] md:row-span-2"
    },
    {
      id: 3,
      src: "/images/gari_product.png",
      alt: "Premium Gari",
      category: currentLang === "fr" ? "Gari de Qualité" : "Premium Gari",
      span: "md:col-span-4 h-80"
    },
    {
      id: 4,
      src: "/images/factory_transformation.png",
      alt: "Processing Unit",
      category: currentLang === "fr" ? "Transformation" : "Processing Unit",
      span: "md:col-span-4 h-80"
    },
    {
      id: 5,
      src: "/images/cassava_paste.png",
      alt: "Cassava Paste",
      category: currentLang === "fr" ? "Pâte de Manioc" : "Cassava Paste",
      span: "md:col-span-4 h-80"
    },
    {
      id: 6,
      src: "/images/cassava_cuttings.png",
      alt: "Certified Seeds",
      category: currentLang === "fr" ? "Boutures Certifiées" : "Certified Seeds",
      span: "md:col-span-4 h-80"
    },
    {
      id: 7,
      src: "/images/cassava_chips.png",
      alt: "Dried Cassava Chips",
      category: currentLang === "fr" ? "Cossettes de Manioc" : "Dried Chips",
      span: "md:col-span-4 h-80"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-green-dark bg-emerald-50 border border-brand-green-light/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5" />
            {t.gallery.badge}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3 mb-4">
            {t.gallery.title}
          </h2>
          <p className="font-inter text-stone-500 text-base leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-max">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`relative rounded-3xl overflow-hidden shadow-sm group cursor-pointer border border-stone-200/40 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 flex flex-col gap-0.5">
                <span className="font-poppins text-[10px] font-bold uppercase tracking-wider text-brand-green-light">
                  {item.category}
                </span>
                <h3 className="font-poppins font-bold text-sm">
                  {item.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
