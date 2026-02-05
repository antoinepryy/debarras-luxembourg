"use client";

import { motion } from "framer-motion";
import { Container, SectionTitle, Button } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { ZONES } from "@/lib/zones";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function ZonesPage() {
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
              <span className="text-sm">Tout le Luxembourg</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Zones d&apos;Intervention
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Nous nous déplaçons gratuitement dans tout le Grand-Duché de Luxembourg
              pour vos besoins de débarras et d&apos;expertise.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Zones */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos zones d'intervention"
            subtitle="Service disponible dans toutes les communes du Luxembourg"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {ZONES.map((zone) => (
              <motion.div
                key={zone.id}
                variants={staggerItem}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-[var(--color-primary)]"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {zone.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)]">
                      {zone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Info */}
      <section className="section bg-[var(--color-background-alt)]">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Votre commune n&apos;est pas listée ?
            </h2>
            <p className="text-[var(--color-text-light)] mb-8 text-lg">
              Pas d&apos;inquiétude ! Nous intervenons dans toutes les communes du
              Luxembourg, y compris les zones rurales et les petits villages.
              N&apos;hésitez pas à nous contacter pour vérifier notre disponibilité
              dans votre secteur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href="/contact" variant="primary" size="lg">
                  Nous contacter
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href="tel:+352621123456" variant="outline" size="lg">
                  Appeler maintenant
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
