"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { motion } from "framer-motion";

interface ProductsProps {
  currentLang: Language;
}

export default function Products({ currentLang }: ProductsProps) {
  const t = translations[currentLang];

  const productData = [
    {
      id: "gari",
      image: "/images/gari_product.png",
      title: t.products.items.gari.title,
      desc: t.products.items.gari.desc,
      spec: t.products.items.gari.spec,
      badge: "Premium Food"
    },
    {
      id: "paste",
      image: "/images/cassava_puree.png",
      title: t.products.items.paste.title,
      desc: t.products.items.paste.desc,
      spec: t.products.items.paste.spec,
      badge: currentLang === "fr" ? "Usage Industriel" : "Industrial Use"
    },
    {
      id: "chips-peeled",
      image: "/images/cassava_chips.png",
      title: t.products.items.chipsPeeled.title,
      desc: t.products.items.chipsPeeled.desc,
      spec: t.products.items.chipsPeeled.spec,
      badge: "Milling / Food"
    },
    {
      id: "chips-unpeeled",
      image: "/images/cassava_chips.png",
      title: t.products.items.chipsUnpeeled.title,
      desc: t.products.items.chipsUnpeeled.desc,
      spec: t.products.items.chipsUnpeeled.spec,
      badge: "Starch / Feed"
    },
    {
      id: "cuttings",
      image: "/images/cassava_cuttings.png",
      title: t.products.items.cuttings.title,
      desc: t.products.items.cuttings.desc,
      spec: t.products.items.cuttings.spec,
      badge: "Star Product"
    }
  ];

  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-green-dark bg-emerald-50 border border-brand-green-light/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-green-dark" />
            {t.products.badge}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3 mb-4">
            {t.products.titleMain}
          </h2>
          <p className="font-inter text-stone-500 text-base">
            {t.products.title}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((prod, idx) => {
            const isStarProduct = prod.id === "cuttings";
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white rounded-3xl overflow-hidden border border-stone-200/50 shadow-md hover:shadow-xl hover:border-brand-green-light/30 transition-all duration-500 flex flex-col group ${
                  isStarProduct ? "lg:col-span-2 lg:flex-row" : "h-full"
                }`}
              >
                {/* Product Image */}
                <div className={`relative overflow-hidden bg-stone-100 shrink-0 ${
                  isStarProduct ? "h-64 lg:h-auto lg:w-1/2 min-h-[280px]" : "h-64"
                }`}>
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-poppins text-[10px] font-bold uppercase tracking-wider text-white bg-brand-brown border border-brand-brown/10 px-2.5 py-1 rounded-full shadow-sm">
                      {prod.badge}
                    </span>
                  </div>
                  {/* Subtle Green Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Product Content */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-stone-900 group-hover:text-brand-green-dark transition-colors mb-3">
                      {prod.title}
                    </h3>
                    <p className="font-inter text-stone-500 text-sm leading-relaxed mb-6">
                      {prod.desc}
                    </p>
                  </div>

                  {/* Specs and Action */}
                  <div className="pt-6 border-t border-stone-100 mt-auto">
                    <div className="mb-6">
                      <span className="text-[10px] font-poppins font-bold text-stone-400 uppercase block mb-2 tracking-wider">
                        Specifications
                      </span>
                      <span className="font-inter text-xs bg-brand-beige/60 text-brand-brown px-3 py-1.5 rounded-full inline-block font-semibold border border-brand-brown/5">
                        {prod.spec}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="font-poppins text-xs font-bold text-brand-green-dark hover:text-emerald-800 flex items-center gap-1 cursor-pointer transition-colors group-hover:translate-x-1 duration-300"
                    >
                      {t.products.viewDetails}
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
