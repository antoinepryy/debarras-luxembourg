"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_NAME, CONTACT, SERVICES, NAV_ITEMS } from "@/lib/constants";
import { ZONES } from "@/lib/zones";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0c1220] text-white overflow-hidden">
      {/* CTA Band */}
      <div className="relative bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="container relative py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-xl md:text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Besoin d&apos;un débarras ?
              </h3>
              <p className="text-blue-100 text-sm mt-1">
                Devis gratuit et sans engagement &mdash; Réponse sous 24h
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-primary-dark)] font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                Demander un devis
              </Link>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/25 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          {/* Column 1: Brand */}
          <motion.div variants={fadeIn} className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {SITE_NAME}
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-xs">
              Service professionnel de débarras au Luxembourg. Plus de 30 ans d&apos;expérience familiale à votre service.
            </p>

            {/* Horaires */}
            <div className="mt-6 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[var(--color-primary-light)]">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">7j/7 disponible</p>
                <p className="text-gray-500 text-xs mt-0.5">Lun-Sam 8h-19h &bull; Dim sur RDV</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2.5 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/10 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/10 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={fadeIn}>
            <h4
              className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--color-primary)] transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--color-primary)] transition-all duration-200" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Zones */}
          <motion.div variants={fadeIn}>
            <h4
              className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Zones d&apos;intervention
            </h4>
            <ul className="space-y-2.5">
              {ZONES.slice(0, 6).map((zone) => (
                <li key={zone.id}>
                  <Link
                    href="/zones-intervention"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--color-primary)] transition-all duration-200" />
                    {zone.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/zones-intervention"
                  className="text-[var(--color-primary-light)] hover:text-white text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  Toutes les zones
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={fadeIn}>
            <h4
              className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[var(--color-primary-light)]">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-[var(--color-primary-light)] transition-colors">{CONTACT.phone}</p>
                    <p className="text-gray-500 text-xs">Appel gratuit</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[var(--color-primary-light)]">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-[var(--color-primary-light)] transition-colors truncate">{CONTACT.email}</p>
                    <p className="text-gray-500 text-xs">Réponse sous 24h</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">{CONTACT.address}</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-600 text-xs">
              &copy; {currentYear} {SITE_NAME}. Tous droits r&eacute;serv&eacute;s.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                Mentions l&eacute;gales
              </Link>
              <span className="text-gray-700 text-xs">&bull;</span>
              <Link href="/contact" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
