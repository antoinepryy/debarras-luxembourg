"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";

const faqs = [
  {
    question: "Comment fonctionne votre service de débarras ?",
    answer: "Nous commençons par une visite gratuite pour évaluer le volume et la nature des objets à évacuer. Nous vous fournissons ensuite un devis détaillé. Si vous acceptez, nous planifions l'intervention à la date qui vous convient. Notre équipe se charge de tout : évacuation et nettoyage des lieux.",
  },
  {
    question: "Le déplacement pour le devis est-il payant ?",
    answer: "Non, le déplacement et le devis sont entièrement gratuits et sans engagement. Nous nous déplaçons dans tout le Luxembourg pour évaluer vos besoins et vous proposer une estimation précise.",
  },
  {
    question: "Quels types de locaux débarrassez-vous ?",
    answer: "Nous intervenons dans tous types de locaux : maisons, appartements, caves, greniers, garages, bureaux, commerces et locaux industriels. Que ce soit pour un vidage complet ou partiel, nous nous adaptons à votre situation.",
  },
  {
    question: "Combien de temps prend une intervention ?",
    answer: "La durée dépend du volume et de la complexité du débarras. Un appartement standard peut être vidé en une demi-journée, tandis qu'une grande maison peut nécessiter 1 à 2 jours. Nous vous informons toujours de la durée estimée avant l'intervention.",
  },
  {
    question: "Intervenez-vous pour les successions ?",
    answer: "Oui, nous sommes spécialisés dans les débarras de succession. Nous travaillons avec délicatesse et respect. Nous pouvons également nous coordonner avec les notaires si nécessaire.",
  },
  {
    question: "Que faites-vous des objets après le débarras ?",
    answer: "Les objets en bon état sont donnés à des associations. Les matériaux recyclables sont triés et envoyés en filière de recyclage. Les déchets non valorisables sont évacués en déchetterie, dans le respect des normes environnementales.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <motion.button
        onClick={onToggle}
        className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 border-2 border-[var(--color-primary)]/20"
            : "bg-white hover:bg-gray-50 border-2 border-gray-100 hover:border-[var(--color-primary)]/20"
        }`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <motion.div
              className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                isOpen
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)]"
              }`}
              animate={{ rotate: isOpen ? 0 : 0 }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>
            <h3
              className={`text-lg font-semibold pt-1.5 ${
                isOpen ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {faq.question}
            </h3>
          </div>
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              isOpen
                ? "bg-[var(--color-primary)] text-white"
                : "bg-gray-100 text-gray-500"
            }`}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-[var(--color-text-light)] leading-relaxed mt-4 ml-14">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section relative overflow-hidden bg-[var(--color-background-alt)]">
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column - Title and info */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full mb-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[var(--color-primary)]">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-primary-dark)]">FAQ</span>
              </motion.div>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Questions fréquentes
              </h2>

              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
              />

              <p className="text-[var(--color-text-light)] leading-relaxed mb-8">
                Retrouvez les réponses aux questions les plus courantes sur nos services de débarras.
              </p>

              <motion.div
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">Besoin d&apos;aide ?</p>
                    <p className="text-sm text-[var(--color-text-muted)]">Nous sommes là pour vous</p>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary-dark)] font-medium rounded-xl transition-colors"
                >
                  Contactez-nous
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - FAQ items */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
