"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { CONTACT } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const contactInfo = [
  {
    title: "Téléphone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
  {
    title: "Adresse",
    value: CONTACT.address,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Horaires",
    value: "Lun-Ven: 8h-18h | Sam: 9h-12h",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function ContactPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/contact/contact-hero.jpg"
            alt="Contactez-nous"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
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
              <span className="text-sm">Réponse sous 24h</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-2xl font-semibold mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
                variants={staggerItem}
              >
                Nos coordonnées
              </motion.h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    className="group"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--color-background-alt)] transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-text)] mb-1">{item.title}</h3>
                          <span className="text-[var(--color-primary)] font-medium">
                            {item.value}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-text)] mb-1">{item.title}</h3>
                          <span className="text-[var(--color-text-light)]">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Trust badges */}
              <motion.div
                className="mt-10 p-6 bg-[var(--color-background-alt)] rounded-2xl"
                variants={staggerItem}
              >
                <h3 className="font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Pourquoi nous faire confiance ?
                </h3>
                <ul className="space-y-3">
                  {["Devis gratuit et sans engagement", "30 ans d'expérience", "Intervention rapide", "Discrétion assurée"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[var(--color-primary)]">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2
                  className="text-2xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Envoyez-nous un message
                </h2>
                <p className="text-[var(--color-text-light)] mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
