"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { Categories, ContactCTA } from "@/components/sections";

export default function CategoriesPage() {
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
              <span className="text-sm">Large gamme d&apos;objets</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Catégories d&apos;Objets
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Nous achetons et expertisons une large gamme d&apos;objets anciens,
              d&apos;art et de collection.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Toutes les catégories */}
      <Categories showTitle={false} />

      <ContactCTA />
    </>
  );
}
