"use client";

import React from "react";
import { BookOpen, Sprout, Cpu, HeartHandshake, Truck, Settings } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { motion } from "framer-motion";

interface ServicesProps {
  currentLang: Language;
}

export default function Services({ currentLang }: ServicesProps) {
  const t = translations[currentLang];

  const serviceItems = [
    {
      id: "training",
      icon: <BookOpen className="w-6 h-6 text-brand-green-dark" />,
      title: t.services.items.training.title,
      desc: t.services.items.training.desc,
      upcoming: false
    },
    {
      id: "seeds",
      icon: <Sprout className="w-6 h-6 text-brand-green-dark" />,
      title: t.services.items.seeds.title,
      desc: t.services.items.seeds.desc,
      upcoming: false
    },
    {
      id: "processing",
      icon: <Cpu className="w-6 h-6 text-brand-green-dark" />,
      title: t.services.items.processing.title,
      desc: t.services.items.processing.desc,
      upcoming: false
    },
    {
      id: "cooperative",
      icon: <HeartHandshake className="w-6 h-6 text-brand-green-dark" />,
      title: t.services.items.cooperative.title,
      desc: t.services.items.cooperative.desc,
      upcoming: false
    },
    {
      id: "rental",
      icon: <Truck className="w-6 h-6 text-brand-brown" />,
      title: t.services.items.rental.title,
      desc: t.services.items.rental.desc,
      upcoming: true
    }
  ];

  return (
    <section id="services" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-green-dark bg-emerald-50 border border-brand-green-light/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5" />
            {t.services.badge}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            {t.services.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                service.upcoming
                  ? "bg-stone-100 border-dashed border-stone-300 shadow-none"
                  : "bg-white border-stone-200/60 shadow-sm hover:shadow-lg hover:border-brand-green-light/35"
              }`}
            >
              {/* Upcoming Badge */}
              {service.upcoming && (
                <div className="absolute top-6 right-6">
                  <span className="font-poppins text-[10px] font-bold uppercase tracking-wider text-brand-brown bg-brand-beige border border-brand-brown/10 px-2.5 py-1 rounded-full shadow-sm">
                    {t.services.rentalBadge}
                  </span>
                </div>
              )}

              <div>
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                  service.upcoming
                    ? "bg-brand-brown/10"
                    : "bg-brand-green-dark/10"
                }`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-lg text-stone-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-stone-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Decorative bottom bar for completed services */}
              {!service.upcoming && (
                <div className="w-8 h-1 bg-brand-green-dark rounded-full group-hover:w-16 transition-all duration-300" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
