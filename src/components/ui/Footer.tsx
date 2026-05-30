"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, ArrowUp } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "#",
      label: "Facebook"
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: "#",
      label: "Instagram"
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "#",
      label: "LinkedIn"
    },
    { icon: <MessageSquare className="w-5 h-5" />, href: "https://wa.me/22890286644", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="relative w-10 h-10 overflow-hidden bg-white rounded-full p-1">
              <Image
                src="/images/logo_icon.png"
                alt="Mabil International Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-lg text-white tracking-wide uppercase leading-none">
                Mabil
              </span>
              <span className="font-poppins text-xs font-semibold text-brand-green-light tracking-widest uppercase">
                International
              </span>
            </div>
          </div>
          <p className="font-inter text-sm text-stone-400 leading-relaxed mt-2">
            {t.footer.motto}
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full border border-stone-800 hover:border-brand-green-light hover:text-brand-green-light flex items-center justify-center transition-all duration-300 bg-stone-950/40 hover:bg-stone-900"
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-poppins font-semibold text-white text-base mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-green-light">
            {t.footer.quickLinks}
          </h3>
          <ul className="flex flex-col gap-3 font-inter text-sm">
            {["about", "products", "services", "impact", "gallery", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="hover:text-brand-green-light transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t.nav[item as keyof typeof t.nav] || item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-poppins font-semibold text-white text-base mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-green-light">
            {t.footer.products}
          </h3>
          <ul className="flex flex-col gap-3 font-inter text-sm text-stone-400">
            <li>{t.products.items.gari.title}</li>
            <li>{t.products.items.paste.title}</li>
            <li>{t.products.items.chipsPeeled.title}</li>
            <li>{t.products.items.chipsUnpeeled.title}</li>
            <li>{t.products.items.cuttings.title}</li>
          </ul>
        </div>

        {/* Legal & Registration */}
        <div>
          <h3 className="font-poppins font-semibold text-white text-base mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-green-light">
            {t.contact.info.regTitle}
          </h3>
          <p className="font-inter text-xs text-stone-400 leading-relaxed mb-4">
            {t.contact.info.reg}
          </p>
          <p className="font-inter text-xs text-stone-500">
            Tohoun, Est-Mono, Togo
          </p>
          <p className="font-inter text-xs text-stone-500 mt-2">
            RCCM: TG-ATA-01-2021-B12-00008
          </p>
          <p className="font-inter text-xs text-stone-500">
            NIF: 1001353043
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-850 flex flex-col md:flex-row items-center justify-between gap-4 font-inter text-xs text-stone-500">
        <div>
          &copy; {currentYear} Mabil International. {t.footer.rights}
        </div>
        <div className="flex items-center gap-1.5 text-stone-400">
          <span>{t.footer.madeIn}</span>
          <span className="text-red-500">🇹🇬</span>
        </div>
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-brand-green-dark text-white flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
