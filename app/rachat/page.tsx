"use client";

import { motion } from "framer-motion";
import { Container, SectionTitle, Button } from "@/components/ui";
import { Categories, ContactCTA } from "@/components/sections";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const guarantees = [
  {
    title: "Paiement comptant",
    description: "Règlement immédiat en espèces ou par virement",
  },
  {
    title: "Prix justes",
    description: "Estimation basée sur le marché actuel",
  },
  {
    title: "Déplacement gratuit",
    description: "Nous venons chez vous sans frais",
  },
  {
    title: "Discrétion",
    description: "Confidentialité totale garantie",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Contactez-nous",
    description: "Envoyez-nous des photos de vos objets par email ou téléphone, ou demandez une visite à domicile.",
  },
  {
    step: "2",
    title: "Estimation",
    description: "Nous évaluons vos objets et vous proposons un prix de rachat juste et transparent.",
  },
  {
    step: "3",
    title: "Paiement",
    description: "Si notre offre vous convient, nous vous payons immédiatement en espèces ou par virement.",
  },
];

export default function RachatPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[var(--color-secondary)] via-[var(--color-secondary-dark)] to-[var(--color-secondary)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>

        <Container className="relative z-10">
          <motion.div
            className="text-center text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
              <span className="text-sm">Paiement comptant</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Rachat d&apos;Antiquités
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Nous rachetons vos antiquités, objets d&apos;art et objets de valeur.
              Paiement comptant immédiat.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Garanties */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos garanties"
            subtitle="Un service de rachat transparent et sécurisé"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {guarantees.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  className="font-semibold mb-2 text-lg group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Ce que nous achetons */}
      <Categories limit={12} showTitle={true} />

      {/* Processus */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Comment vendre vos objets ?"
            subtitle="Un processus simple en 3 étapes"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                variants={staggerItem}
                className="text-center relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/30" />
                )}

                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <span
                    className="text-white text-2xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.step}
                  </span>
                </motion.div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-light)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/contact" variant="primary" size="lg">
                Vendre mes objets
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
