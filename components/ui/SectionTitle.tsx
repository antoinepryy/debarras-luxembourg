"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
          light ? "text-white" : "text-[var(--color-text)]"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          className={`text-lg md:text-xl max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-[var(--color-text-light)]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <div
        className={`mt-6 h-1 w-24 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
