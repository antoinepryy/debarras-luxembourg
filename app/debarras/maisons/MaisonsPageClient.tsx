"use client";

import { motion } from "framer-motion";
import { Container, SectionTitle, Button } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const detailCards = [
  {
    title: "Succession",
    description:
      "Vidage complet de maisons suite à une succession. Nous trions, évacuons et nettoyons dans le respect des lieux et des souvenirs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Déménagement",
    description:
      "Débarras avant ou après déménagement. Nous nous occupons de tout ce que vous ne souhaitez pas emporter dans votre nouveau logement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a3 3 0 116 0h.375c1.035 0 1.875-.84 1.875-1.875V18a3 3 0 00-3-3H13.5z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        <path d="M15.75 6.75a.75.75 0 00-.75.75v5.25h5.25a2.25 2.25 0 002.25-2.25V8.608a2.25 2.25 0 00-.659-1.591l-1.608-1.608a2.25 2.25 0 00-1.591-.659H15.75z" />
      </svg>
    ),
  },
  {
    title: "Désencombrement",
    description:
      "Besoin de retrouver de l'espace ? Nous désencombrons votre maison pièce par pièce, en triant et recyclant au maximum.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Nettoyage après vidage",
    description:
      "Après le vidage, nous laissons les lieux propres et prêts à être réutilisés. Un service complet du début à la fin.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const avantages = [
  {
    title: "Équipe expérimentée",
    description: "Plus de 30 ans d'expérience dans le débarras de maisons au Luxembourg.",
  },
  {
    title: "Tri sélectif et recyclage",
    description: "Nous trions, recyclons et valorisons un maximum d'objets et de matériaux.",
  },
  {
    title: "Respect total des lieux",
    description: "Nous prenons soin de votre maison comme si c'était la nôtre.",
  },
  {
    title: "Devis gratuit sans engagement",
    description: "Estimation gratuite sur place. Aucune obligation de votre part.",
  },
];

const processSteps = [
  { step: "1", title: "Contact", description: "Appelez-nous ou remplissez le formulaire de contact" },
  { step: "2", title: "Visite", description: "Nous nous déplaçons gratuitement pour évaluer" },
  { step: "3", title: "Devis", description: "Vous recevez un devis détaillé et sans engagement" },
  { step: "4", title: "Intervention", description: "Notre équipe réalise le débarras à la date convenue" },
];

export default function MaisonsPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/debarras/debarras-hero.jpg"
            alt="Débarras de maisons au Luxembourg"
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
              <span className="text-sm">Débarras de maisons</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Débarras de Maisons
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Vidage complet ou partiel de maisons, que ce soit suite à un
              déménagement, une succession ou un simple besoin de
              désencombrement. Service professionnel dans tout le Luxembourg.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Détails du service */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos services de débarras de maisons"
            subtitle="Une solution adaptée à chaque situation"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {detailCards.map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 rounded-xl flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Avantages */}
      <section className="section bg-[var(--color-background-alt)]">
        <Container>
          <SectionTitle
            title="Pourquoi nous choisir ?"
            subtitle="Des garanties pour un service de qualité"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {avantages.map((avantage) => (
              <motion.div
                key={avantage.title}
                variants={staggerItem}
                className="text-center p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3
                  className="font-semibold mb-2 text-lg"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {avantage.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  {avantage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Processus */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Comment ça marche ?"
            subtitle="Un processus simple et transparent"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                variants={staggerItem}
                className="text-center relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/30" />
                )}

                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </motion.div>
                <h3
                  className="font-semibold mb-2 text-lg"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-background-alt)]">
        <Container>
          <motion.div
            className="text-center max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Besoin de vider une maison ?
            </h2>
            <p className="text-[var(--color-text-light)] mb-8 text-lg">
              Contactez-nous dès maintenant pour un devis gratuit et sans engagement.
              Nous intervenons dans tout le Luxembourg.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
