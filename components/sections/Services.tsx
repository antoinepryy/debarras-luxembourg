"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container, SectionTitle } from "@/components/ui";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const icons: Record<string, ReactNode> = {
  truck: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
      <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v7.5h7.5a.75.75 0 00.75-.75v-3.375a4.875 4.875 0 00-4.875-4.875h-2.625z" />
      <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </svg>
  ),
  "magnifying-glass": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
    </svg>
  ),
  "currency-euro": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.763 9.51a2.25 2.25 0 013.828-1.351.75.75 0 001.06-1.06 3.75 3.75 0 00-6.38 2.252c-.033.307 0 .595.032.822H7.5a.75.75 0 000 1.5h.95c-.032.227-.065.515-.032.822a3.75 3.75 0 006.38 2.252.75.75 0 00-1.06-1.06 2.25 2.25 0 01-3.828-1.351c-.024-.177-.035-.32-.03-.4h2.62a.75.75 0 000-1.5H9.733a2.02 2.02 0 01.03-.4z" clipRule="evenodd" />
    </svg>
  ),
};

interface ServiceCardProps {
  service: (typeof SERVICES)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <motion.div
      variants={staggerItem}
      style={{ perspective: "1000px" }}
    >
      <Link
        href={service.href}
        className="block relative h-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative bg-white rounded-2xl p-8 h-full overflow-hidden group"
          animate={{
            rotateX: isHovered ? mousePosition.y * 0.02 : 0,
            rotateY: isHovered ? -mousePosition.x * 0.02 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            boxShadow: isHovered
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Gradient border effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
              padding: "2px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
            }}
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x + 150}px ${mousePosition.y + 150}px, rgba(212,175,55,0.15) 0%, transparent 50%)`,
            }}
          />

          {/* Icon */}
          <motion.div
            className="relative w-16 h-16 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 rounded-xl flex items-center justify-center mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.span
              className="text-[var(--color-primary)]"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
            >
              {icons[service.icon]}
            </motion.span>
            {/* Icon glow */}
            <div className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Title */}
          <h3
            className="text-xl font-semibold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-[var(--color-text-light)] mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-[var(--color-primary)] font-medium">
            <span>En savoir plus</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </motion.svg>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <Container className="relative">
        <SectionTitle
          title="Nos Services"
          subtitle="Une expertise complète pour vous accompagner dans tous vos projets de débarras et de valorisation de vos biens."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
