"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-poppins font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm";

  const variants = {
    primary:
      "bg-brand-green-dark text-white hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-900/10 focus:ring-brand-green-dark",
    secondary:
      "bg-brand-brown text-white hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-700/10 focus:ring-brand-brown",
    outline:
      "bg-transparent border border-brand-green-dark text-brand-green-dark hover:bg-emerald-50 hover:shadow-md focus:ring-brand-green-dark"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="w-4 h-4">{icon}</span>}
    </motion.button>
  );
}
