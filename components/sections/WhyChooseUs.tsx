"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp } from "@/lib/animations";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    ),
    stat: "30+",
    statLabel: "ans",
    title: "Expérience",
    description: "Une expertise familiale transmise depuis plus de trois décennies au Luxembourg.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
      </svg>
    ),
    stat: "0€",
    statLabel: "",
    title: "Devis gratuit",
    description: "Estimation détaillée sans engagement. Vous décidez en toute transparence.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
    stat: "100%",
    statLabel: "",
    title: "Tout le Luxembourg",
    description: "Nous nous déplaçons gratuitement partout au Luxembourg pour évaluer vos besoins.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
    stat: "7j/7",
    statLabel: "",
    title: "Service garanti",
    description: "Équipe professionnelle et respectueuse. Intervention rapide et soignée.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-[#111827] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container className="relative">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pourquoi nous choisir ?
          </h2>
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 leading-relaxed">
            Depuis plus de 30 ans, nous accompagnons les particuliers et professionnels du Luxembourg avec un service de débarras de qualité.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.07] transition-colors duration-300"
            >
              {/* Stat + Icon row */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-3xl font-bold text-[var(--color-accent-light)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.stat}
                  {feature.statLabel && (
                    <span className="text-lg text-[var(--color-accent-light)]/70 ml-0.5 font-semibold">
                      {feature.statLabel}
                    </span>
                  )}
                </span>
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-gray-400 group-hover:text-[var(--color-accent-light)] transition-colors">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
