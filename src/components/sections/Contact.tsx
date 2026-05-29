"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: { [key: string]: boolean } = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.subject.trim()) newErrors.subject = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");

    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset status after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-green-dark bg-emerald-50 border border-brand-green-light/20 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            {t.contact.badge}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3 mb-4">
            {t.contact.title}
          </h2>
          <p className="font-inter text-stone-500 text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Info & Form Side-by-Side (Equal Heights) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm flex flex-col justify-between h-full gap-6">
              
              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-dark/10 flex items-center justify-center text-brand-green-dark shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-stone-900 text-sm mb-1">
                      {t.contact.info.addressTitle}
                    </h4>
                    <p className="font-inter text-stone-500 text-sm leading-relaxed">
                      {t.contact.info.address}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-dark/10 flex items-center justify-center text-brand-green-dark shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-stone-900 text-sm mb-1">
                      {currentLang === "fr" ? "Téléphone" : "Phone Numbers"}
                    </h4>
                    <a href="tel:+22890286644" className="font-inter text-stone-500 text-sm hover:text-brand-green-dark transition-colors block">
                      +228 90 28 66 44
                    </a>
                    <a href="tel:+22891808019" className="font-inter text-stone-500 text-sm hover:text-brand-green-dark transition-colors block">
                      +228 91 80 80 19
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-dark/10 flex items-center justify-center text-brand-green-dark shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-stone-900 text-sm mb-1">
                      Email
                    </h4>
                    <a href="mailto:mabil.togo@gmail.com" className="font-inter text-stone-500 text-sm hover:text-brand-green-dark transition-colors block">
                      mabil.togo@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-dark/10 flex items-center justify-center text-brand-green-dark shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-stone-900 text-sm mb-1">
                      {t.contact.info.hoursTitle}
                    </h4>
                    <p className="font-inter text-stone-500 text-sm leading-relaxed">
                      {t.contact.info.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/22890286644"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-poppins font-semibold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer mt-auto"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-white" />
                {t.contact.info.whatsapp}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-stone-200/50 shadow-sm flex flex-col justify-between h-full"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-poppins font-semibold text-xs text-stone-700">
                      {t.contact.form.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-400 focus:ring-red-450/20 bg-red-50/20"
                          : "border-stone-200 focus:border-brand-green-dark focus:ring-brand-green-dark/20"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-inter">{t.contact.form.required}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-poppins font-semibold text-xs text-stone-700">
                      {t.contact.form.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-400 focus:ring-red-450/20 bg-red-50/20"
                          : "border-stone-200 focus:border-brand-green-dark focus:ring-brand-green-dark/20"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-inter">{t.contact.form.required}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-poppins font-semibold text-xs text-stone-700 font-medium">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green-dark focus:ring-2 focus:ring-brand-green-dark/20 font-inter text-sm focus:outline-none transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="font-poppins font-semibold text-xs text-stone-700">
                      {t.contact.form.subject} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? "border-red-400 focus:ring-red-450/20 bg-red-50/20"
                          : "border-stone-200 focus:border-brand-green-dark focus:ring-brand-green-dark/20"
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-red-500 font-inter">{t.contact.form.required}</span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-poppins font-semibold text-xs text-stone-700">
                    {t.contact.form.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "border-red-400 focus:ring-red-450/20 bg-red-50/20"
                        : "border-stone-200 focus:border-brand-green-dark focus:ring-brand-green-dark/20"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-inter">{t.contact.form.required}</span>
                  )}
                </div>
              </div>

              {/* Submit states */}
              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-50 border border-emerald-250 text-emerald-800 flex items-start gap-3 mb-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-inter text-sm font-medium">{t.contact.form.success}</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-250 text-red-800 flex items-start gap-3 mb-4"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="font-inter text-sm font-medium">{t.contact.form.error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 font-semibold text-sm cursor-pointer shadow-md"
                  icon={status === "sending" ? null : <Send className="w-4 h-4" />}
                >
                  {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Widescreen Google Map Underneath */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mt-12 relative h-96 rounded-3xl overflow-hidden shadow-sm border border-stone-200 bg-white"
        >
          <iframe
            title={t.contact.form.subject}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31671.18939221191!2d1.597371!3d7.019398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1026046e7f82b7db%3A0xe54d3d82054ff14d!2sTohoun!5e0!3m2!1sen!2stg!4v1716987654321!5m2!1sen!2stg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </section>
  );
}
