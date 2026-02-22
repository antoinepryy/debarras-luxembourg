"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_ITEMS.map((item: NavItem) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => item.children && setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href={item.href}
            className="px-4 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors font-medium flex items-center gap-1 rounded-lg hover:bg-gray-50"
          >
            {item.label}
            {item.children && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </Link>

          {item.children && openDropdown === item.label && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2.5 text-sm text-[var(--color-text)] hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
