"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, SectionTitle } from "@/components/ui";
import { ZONES } from "@/lib/zones";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

interface ZonesProps {
  limit?: number;
}

function ZoneCard({ zone }: { zone: (typeof ZONES)[0] }) {
  return (
    <motion.div variants={staggerItem}>
      <div className="relative bg-white rounded-xl p-5 text-center cursor-pointer overflow-hidden group shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)] border-2 border-transparent transition-all duration-300">
        {/* Icon */}
        <div className="relative w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Name */}
        <h3 className="relative font-medium text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
          {zone.name}
        </h3>
      </div>
    </motion.div>
  );
}

export function Zones({ limit = 12 }: ZonesProps) {
  const displayedZones = ZONES.slice(0, limit);

  return (
    <section className="section relative overflow-hidden">
      <Container className="relative">
        <SectionTitle
          title="Zones d'Intervention"
          subtitle="Nous intervenons dans tout le Luxembourg pour vos besoins de débarras."
        />

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayedZones.map((zone) => (
            <ZoneCard key={zone.id} zone={zone} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <Link
            href="/zones-intervention"
            className="inline-flex items-center gap-3 text-[var(--color-primary)] font-medium group"
          >
            <span>Voir toutes les zones d&apos;intervention</span>
            <span className="w-8 h-8 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 group-hover:text-white transition-colors"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
