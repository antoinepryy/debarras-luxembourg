"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container, SectionTitle } from "@/components/ui";
import { ZONES } from "@/lib/zones";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ZonesProps {
  limit?: number;
}

function ZoneCard({ zone, index }: { zone: (typeof ZONES)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative bg-white rounded-xl p-5 text-center cursor-pointer overflow-hidden group"
        whileHover={{ y: -5 }}
        animate={{
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-transparent"
          animate={{
            borderColor: isHovered ? "var(--color-primary)" : "transparent",
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Background gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-primary)]/10 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Icon */}
        <motion.div
          className="relative w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
          animate={{
            backgroundColor: isHovered ? "var(--color-primary)" : "rgba(212,175,55,0.1)",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            animate={{
              color: isHovered ? "#ffffff" : "var(--color-primary)",
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </motion.svg>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[var(--color-primary)]"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: isHovered ? [1, 1.5, 1.5] : 1,
              opacity: isHovered ? [0.3, 0, 0] : 0,
            }}
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
            }}
          />
        </motion.div>

        {/* Name */}
        <h3 className="relative font-medium text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
          {zone.name}
        </h3>
      </motion.div>
    </motion.div>
  );
}

export function Zones({ limit = 12 }: ZonesProps) {
  const displayedZones = ZONES.slice(0, limit);

  return (
    <section className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent blur-3xl" />
      </div>

      <Container className="relative">
        <SectionTitle
          title="Zones d'Intervention"
          subtitle="Nous intervenons dans tout le Luxembourg pour vos besoins de débarras et d'expertise."
        />

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayedZones.map((zone, index) => (
            <ZoneCard key={zone.id} zone={zone} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/zones-intervention"
              className="inline-flex items-center gap-3 text-[var(--color-primary)] font-medium group"
            >
              <span>Voir toutes les zones d&apos;intervention</span>
              <motion.span
                className="w-8 h-8 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors"
              >
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
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
