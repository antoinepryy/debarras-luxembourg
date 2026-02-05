"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_NAME, CONTACT, SERVICES } from "@/lib/constants";
import { ZONES } from "@/lib/zones";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />
        <motion.div
          className="absolute top-20 -right-32 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-32 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,0,0,0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Footer */}
      <div className="container relative py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1: About */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {SITE_NAME}
            </motion.h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Service professionnel de débarras, expertise et rachat d&apos;antiquités
              au Luxembourg. Plus de 30 ans d&apos;expérience à votre service.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10 transition-all duration-300"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10 transition-all duration-300"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-lg font-semibold mb-6 text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-transparent rounded-full" />
              Nos Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service, index) => (
                <motion.li
                  key={service.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[var(--color-primary)] transition-colors" />
                    {service.title}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/categories"
                  className="text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[var(--color-primary)] transition-colors" />
                  Catégories d&apos;objets
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 3: Zones */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-lg font-semibold mb-6 text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-transparent rounded-full" />
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-3">
              {ZONES.slice(0, 6).map((zone, index) => (
                <motion.li
                  key={zone.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href="/zones-intervention"
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[var(--color-primary)] transition-colors" />
                    {zone.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/zones-intervention"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] text-sm font-medium inline-flex items-center gap-1 group"
                >
                  Voir toutes les zones
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-lg font-semibold mb-6 text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-transparent rounded-full" />
              Contact
            </h3>
            <ul className="space-y-4">
              <motion.li
                className="group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Appelez-nous</p>
                    <p className="text-white font-semibold">{CONTACT.phone}</p>
                  </div>
                </a>
              </motion.li>
              <motion.li
                className="group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Écrivez-nous</p>
                    <p className="text-white font-semibold text-sm truncate">{CONTACT.email}</p>
                  </div>
                </a>
              </motion.li>
              <li className="flex items-start gap-3 text-gray-400 text-sm pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 via-transparent to-[var(--color-secondary)]/5" />
        <div className="container relative py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {currentYear} {SITE_NAME}. Tous droits réservés.
            </motion.p>
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link
                href="/mentions-legales"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
