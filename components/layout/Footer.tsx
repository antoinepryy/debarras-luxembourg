"use client";

import Link from "next/link";
import { SITE_NAME, CONTACT, SERVICES, NAV_ITEMS } from "@/lib/constants";
import { ZONES } from "@/lib/zones";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0c1220] text-white overflow-hidden">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
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

          </div>

          {/* Column 2: Navigation */}
          <div>
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
          </div>

          {/* Column 3: Zones */}
          <div>
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
          </div>

          {/* Column 4: Contact */}
          <div>
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
                    <p className="text-sm font-medium transition-colors" style={{ color: "#ffffff" }}>{CONTACT.phone}</p>
                    <p className="text-gray-500 text-xs">Appel gratuit</p>
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
          </div>
        </div>
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
