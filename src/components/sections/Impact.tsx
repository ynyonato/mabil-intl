"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Language, translations } from "@/lib/translations";
import { motion, useInView } from "framer-motion";
import { Users, Sprout, Award, Heart } from "lucide-react";

interface ImpactProps {
  currentLang: Language;
}

// Simple local counter component that triggers on scroll in
function StatCounter({ target, suffix = "", duration = 1.5 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-poppins font-extrabold text-5xl sm:text-6xl text-white tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Impact({ currentLang }: ImpactProps) {
  const t = translations[currentLang];

  const stats = [
    {
      id: "coops",
      icon: <Users className="w-8 h-8 text-brand-green-light" />,
      target: 127,
      suffix: "",
      label: t.impact.stats.coops
    },
    {
      id: "hectares",
      icon: <Sprout className="w-8 h-8 text-brand-green-light" />,
      target: 10,
      suffix: "",
      label: t.impact.stats.hectares
    },
    {
      id: "women",
      icon: <Heart className="w-8 h-8 text-brand-green-light animate-pulse" />,
      target: 70,
      suffix: "%",
      label: t.impact.stats.women
    },
    {
      id: "farmers",
      icon: <Award className="w-8 h-8 text-brand-green-light" />,
      target: 2500,
      suffix: "+",
      label: t.impact.stats.farmers
    }
  ];

  return (
    <section id="impact" className="relative py-24 bg-brand-green-dark overflow-hidden">
      {/* Background Image with Dark Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/impact_bg.png"
          alt="Mabil International Impact Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-green-light bg-white/10 border border-white/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            {t.impact.badge}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
            {t.impact.title}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism-dark rounded-3xl p-8 flex flex-col items-center text-center shadow-lg border border-white/10"
            >
              {/* Stat Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                {stat.icon}
              </div>

              {/* Stat Value */}
              <div className="mb-2">
                <StatCounter target={stat.target} suffix={stat.suffix} />
              </div>

              {/* Stat Label */}
              <p className="font-poppins font-medium text-xs tracking-wider uppercase text-stone-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
