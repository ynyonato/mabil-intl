"use client";

import React from "react";
import Image from "next/image";
import { Check, Heart, Shield, Users, Leaf, CheckCircle2 } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { motion } from "framer-motion";

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const t = translations[currentLang];

  return (
    <section id="about" className="pt-24 bg-stone-50 overflow-hidden pb-0 relative">
      {/* Biophilic Cassava Leaf Watermark Background (Left) */}
      <div className="absolute left-0 top-1/4 -translate-y-1/2 -translate-x-1/4 opacity-[0.03] pointer-events-none text-brand-green-dark select-none hidden lg:block">
        <svg width="450" height="450" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 50 L50 5 C50 5 47 25 50 50 Z" />
          <path d="M50 50 L80 18 C80 18 63 32 50 50 Z" />
          <path d="M50 50 L95 40 C95 40 75 45 50 50 Z" />
          <path d="M50 50 L90 65 C90 65 72 58 50 50 Z" />
          <path d="M50 50 L65 88 C65 88 56 68 50 50 Z" />
          <path d="M50 50 L35 88 C35 88 44 68 50 50 Z" />
          <path d="M50 50 L10 65 C10 65 28 58 50 50 Z" />
          <path d="M50 50 L5 40 C5 40 25 45 50 50 Z" />
          <path d="M50 50 L20 18 C20 18 37 32 50 50 Z" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Biophilic Cassava Leaf Watermark Background (Right, rotated) */}
      <div className="absolute right-0 top-2/3 -translate-y-1/2 translate-x-1/4 opacity-[0.015] pointer-events-none text-brand-green-dark select-none hidden lg:block rotate-45">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 50 L50 5 C50 5 47 25 50 50 Z" />
          <path d="M50 50 L80 18 C80 18 63 32 50 50 Z" />
          <path d="M50 50 L95 40 C95 40 75 45 50 50 Z" />
          <path d="M50 50 L90 65 C90 65 72 58 50 50 Z" />
          <path d="M50 50 L65 88 C65 88 56 68 50 50 Z" />
          <path d="M50 50 L35 88 C35 88 44 68 50 50 Z" />
          <path d="M50 50 L10 65 C10 65 28 58 50 50 Z" />
          <path d="M50 50 L5 40 C5 40 25 45 50 50 Z" />
          <path d="M50 50 L20 18 C20 18 37 32 50 50 Z" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Centered, above image and description grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl mx-auto text-center flex flex-col items-center justify-center"
        >
          <span className="text-xs font-semibold text-brand-green-dark bg-emerald-50 border border-brand-green-light/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
            {t.about.badge}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight mt-2">
            {t.about.title}
          </h2>
        </motion.div>

        {/* Info Grid (Image left, Description & Motto right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
          
          {/* Left Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            {/* Image Frame with Reduced Height to Match 1st Paragraph */}
            <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-xl border-8 border-white group">
              <Image
                src="/images/hero_bg_v2.png"
                alt="Mabil International Cassava Farm"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-brand-green-light bg-stone-900/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                  Tohoun, Togo
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* About Description */}
            <p className="font-inter text-stone-600 text-base leading-relaxed mb-4">
              {t.about.description}
            </p>
            <p className="font-inter text-stone-600 text-base leading-relaxed mb-6 font-medium">
              {t.about.experience}
            </p>

            {/* Motto Callout */}
            <div className="w-full bg-brand-beige/50 border-l-4 border-brand-brown rounded-r-2xl p-5 shadow-sm">
              <span className="font-poppins text-xs font-bold text-brand-brown uppercase tracking-wider block mb-1">
                {t.about.mottoTitle}
              </span>
              <p className="font-poppins text-sm font-semibold italic text-stone-800">
                {t.about.mottoText}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vision, Réseau, and Engagements Cards (3-Column Grid) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20"
        >
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-l-brand-green-dark border-t border-r border-b border-stone-200/50 hover:shadow-md transition-shadow flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-green-dark/10 flex items-center justify-center text-brand-green-dark transition-colors group-hover:bg-brand-green-dark group-hover:text-white duration-300">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-poppins font-bold text-stone-950 text-base">
              {t.about.visionTitle}
            </h3>
            <p className="font-inter text-xs text-stone-500 leading-relaxed">
              {t.about.visionText}
            </p>
          </div>

          {/* Network Strengths Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-l-brand-brown border-t border-r border-b border-stone-200/50 hover:shadow-md transition-shadow flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-brown/10 flex items-center justify-center text-brand-brown transition-colors group-hover:bg-brand-brown group-hover:text-white duration-300">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-poppins font-bold text-stone-950 text-base">
              {t.about.strengthsTitle}
            </h3>
            <ul className="flex flex-col gap-2 font-inter text-xs text-stone-500 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-brown shrink-0 mt-1.5" />
                <span>{t.about.strength1}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-brown shrink-0 mt-1.5" />
                <span>{t.about.strength2}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-brown shrink-0 mt-1.5" />
                <span>{t.about.strength3}</span>
              </li>
            </ul>
          </div>

          {/* Commitments (Checkpoints) Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-l-brand-green-light border-t border-r border-b border-stone-200/50 hover:shadow-md transition-shadow flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-green-light/10 flex items-center justify-center text-brand-green-light transition-colors group-hover:bg-brand-green-light group-hover:text-white duration-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-poppins font-bold text-stone-950 text-base">
              {currentLang === "fr" ? "Nos Engagements" : "Our Commitments"}
            </h3>
            <ul className="flex flex-col gap-2 font-inter text-xs text-stone-500 leading-relaxed">
              {t.about.checkpoints.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Pourquoi Investir Avec Nous - Full-Width Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-emerald-950 text-stone-100 py-20 relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 opacity-5 translate-y-1/4 translate-x-1/4">
          <Shield className="w-96 h-96" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-semibold text-brand-green-light bg-white/10 border border-white/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              {currentLang === "fr" ? "Opportunité d'Investissement" : "Investment Opportunity"}
            </span>
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white mb-4">
              {t.about.whyInvestTitle}
            </h3>
            <p className="font-inter text-stone-300 text-sm leading-relaxed max-w-md">
              {t.about.whyInvestDesc}
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between min-h-[160px]">
              <span className="w-8 h-8 rounded-lg bg-brand-green-light/20 text-brand-green-light flex items-center justify-center font-bold text-sm mb-4">01</span>
              <p className="font-inter text-xs text-stone-200 leading-relaxed">{t.about.whyInvest1}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between min-h-[160px]">
              <span className="w-8 h-8 rounded-lg bg-brand-green-light/20 text-brand-green-light flex items-center justify-center font-bold text-sm mb-4">02</span>
              <p className="font-inter text-xs text-stone-200 leading-relaxed">{t.about.whyInvest2}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between min-h-[160px]">
              <span className="w-8 h-8 rounded-lg bg-brand-green-light/20 text-brand-green-light flex items-center justify-center font-bold text-sm mb-4">03</span>
              <p className="font-inter text-xs text-stone-200 leading-relaxed">{t.about.whyInvest3}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
