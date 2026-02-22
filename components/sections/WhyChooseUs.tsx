"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
    title: "30+ ans d'expérience",
    description: "Une expérience inégalée dans le débarras professionnel au Luxembourg.",
    color: "from-[var(--color-primary)] to-[var(--color-primary-dark)]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
      </svg>
    ),
    title: "Devis gratuit",
    description: "Devis et déplacement gratuits, sans engagement de votre part.",
    color: "from-[var(--color-accent)] to-[var(--color-accent-dark)]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v7.5h7.5a.75.75 0 00.75-.75v-3.375a4.875 4.875 0 00-4.875-4.875h-2.625z" />
        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
      </svg>
    ),
    title: "Déplacement gratuit",
    description: "Nous nous déplaçons gratuitement dans tout le Luxembourg pour évaluer vos besoins.",
    color: "from-[var(--color-primary-light)] to-[var(--color-primary)]",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
    title: "Service garanti",
    description: "Qualité de service garantie avec une équipe professionnelle et respectueuse.",
    color: "from-[var(--color-accent-light)] to-[var(--color-accent)]",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden">
      <Container className="relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
            <span className="text-sm font-medium text-[var(--color-primary-dark)]">Nos avantages</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pourquoi nous choisir ?
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-lg text-[var(--color-text-light)]"
          >
            Depuis plus de 30 ans, nous accompagnons les particuliers et professionnels du Luxembourg avec un service de débarras de qualité.
          </motion.p>
        </div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem} className="relative group">
              <div className="relative bg-white rounded-3xl p-8 h-full overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Decorative corner */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-50" />

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3
                  className="relative text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
                <p className="relative text-[var(--color-text-light)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold rounded-2xl shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>Demander un devis gratuit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            >
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
