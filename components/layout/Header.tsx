"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#111827] py-2 hidden md:block border-b border-[rgba(255,255,255,0.1)]">
        <div className="container flex justify-between items-center text-sm text-[rgba(255,255,255,0.75)]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            Service de débarras professionnel au Luxembourg
          </span>
          <div className="flex items-center gap-6">
            <Link
              href={`mailto:${CONTACT.email}`}
              className="text-[rgba(255,255,255,0.75)] hover:text-white transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              {CONTACT.email}
            </Link>
            <Link
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-white font-semibold flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              {CONTACT.phone}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-3.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[var(--color-secondary-dark)] rounded-lg flex items-center justify-center">
                <span
                  className="text-white text-lg font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  DL
                </span>
              </div>
              <div>
                <span
                  className="text-lg font-semibold text-[var(--color-text)] block"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {SITE_NAME}
                </span>
                <span className="text-xs text-[var(--color-text-muted)] hidden sm:block">
                  Service de débarras professionnel
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <Navigation />

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Phone */}
              <Link
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#111827] rounded-lg font-medium hover:bg-[#1f2937] transition-colors"
                style={{ color: "#ffffff" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{CONTACT.phone}</span>
              </Link>

              {/* Devis */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition-colors"
                style={{ color: "#ffffff" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Devis gratuit</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Ouvrir le menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
