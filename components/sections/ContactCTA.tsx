"use client";

import { motion } from "framer-motion";
import { Container, Button, PhoneBadge } from "@/components/ui";
import { CONTACT } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
}

export function ContactCTA({
  title = "Besoin d'un devis gratuit ?",
  subtitle = "Contactez-nous dès maintenant pour un devis gratuit et sans engagement. Nous nous déplaçons dans tout le Luxembourg.",
}: ContactCTAProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-dark)]" />

      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/10"
          >
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-sm text-white/90">Réponse sous 24h</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
            variants={fadeUp}
            custom={0.1}
          >
            {title}
          </motion.h2>

          {/* Underline */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-white to-white/50 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
            variants={fadeUp}
            custom={0.2}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeUp}
            custom={0.3}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl"
              >
                Demander un devis
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneBadge
                phone={CONTACT.phone}
                displayPhone={CONTACT.phoneDisplay}
                variant="light"
                size="lg"
              />
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: "shield", text: "Service garanti" },
              { icon: "clock", text: "7j/7" },
              { icon: "location", text: "Tout Luxembourg" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-white/70"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  {item.icon === "shield" && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75z" clipRule="evenodd" />
                    </svg>
                  )}
                  {item.icon === "clock" && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                    </svg>
                  )}
                  {item.icon === "location" && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
