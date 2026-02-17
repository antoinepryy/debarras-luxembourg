"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
      staggerChildren: 0.05,
    }
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: {
      duration: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_ITEMS.map((item: NavItem) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => {
            item.children && setOpenDropdown(item.label);
            setHoveredItem(item.label);
          }}
          onMouseLeave={() => {
            setOpenDropdown(null);
            setHoveredItem(null);
          }}
        >
          <Link
            href={item.href}
            className="relative px-4 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors font-medium flex items-center gap-1 group"
          >
            <span className="relative z-10">{item.label}</span>
            {item.children && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 relative z-10"
                animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </motion.svg>
            )}

            {/* Hover background */}
            <AnimatePresence>
              {hoveredItem === item.label && (
                <motion.span
                  className="absolute inset-0 bg-[var(--color-primary)]/5 rounded-lg"
                  layoutId="navHover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
            </AnimatePresence>
          </Link>

          <AnimatePresence>
            {item.children && openDropdown === item.label && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl py-3 z-50 border border-gray-100 overflow-hidden"
              >
                {/* Decorative top gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]" />

                {item.children.map((child, index) => (
                  <motion.div key={child.href} variants={itemVariants}>
                    <Link
                      href={child.href}
                      className="flex items-center gap-3 px-4 py-3 text-[var(--color-text)] hover:bg-gradient-to-r hover:from-[var(--color-primary)]/5 hover:to-transparent hover:text-[var(--color-primary)] transition-all group"
                    >
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 rounded-xl flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary)]/20 transition-all"
                        whileHover={{ rotate: 5 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 002 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 006.5 3zM2 12v2.5A1.5 1.5 0 003.5 16h.041a3 3 0 015.918 0h.791a.75.75 0 00.75-.75V12H2z" />
                            <path d="M6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.25 5a.75.75 0 00-.75.75v8.514a3.001 3.001 0 014.893 1.44c.37-.275.607-.719.607-1.22V7.75A2.75 2.75 0 0015.25 5h-2z" />
                            <path d="M15.25 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                      </motion.div>
                      <div>
                        <span className="font-medium block">{child.label}</span>
                        <span className="text-xs text-[var(--color-text-muted)]">
                          {child.label}
                        </span>
                      </div>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary)]"
                        initial={{ x: -5 }}
                        whileHover={{ x: 0 }}
                      >
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
