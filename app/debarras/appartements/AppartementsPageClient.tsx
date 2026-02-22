"use client";

import { motion } from "framer-motion";
import { Container, SectionTitle, Button } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const detailCards = [
  {
    title: "Copropriétés",
    description:
      "Intervention adaptée aux règles de copropriété. Nous coordonnons avec le syndic et respectons les horaires et accès communs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Studios et petits appartements",
    description:
      "Vidage rapide et efficace de studios et petits espaces. Idéal pour les départs de locataires ou les remises en état.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
        <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Grands appartements",
    description:
      "Prise en charge complète des grands appartements. Mobilier, électroménager, objets divers : nous évacuons tout.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
  },
  {
    title: "Respect du voisinage",
    description:
      "Nous travaillons avec discrétion et propreté. Protection des parties communes, minimisation du bruit et nettoyage après intervention.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
  },
];

const avantages = [
  {
    title: "Discrétion assurée",
    description: "Intervention discrète, sans déranger les voisins ni attirer l'attention.",
  },
  {
    title: "Propreté garantie",
    description: "Parties communes protégées et nettoyées après chaque intervention.",
  },
  {
    title: "Intervention rapide",
    description: "Nous nous adaptons à vos délais, même pour les interventions urgentes.",
  },
  {
    title: "Horaires adaptés",
    description: "Nous intervenons aux horaires qui conviennent à la copropriété.",
  },
];

const processSteps = [
  { step: "1", title: "Contact", description: "Appelez-nous ou remplissez le formulaire de contact" },
  { step: "2", title: "Visite", description: "Nous nous déplaçons gratuitement pour évaluer" },
  { step: "3", title: "Devis", description: "Vous recevez un devis détaillé et sans engagement" },
  { step: "4", title: "Intervention", description: "Notre équipe réalise le débarras à la date convenue" },
];

export default function AppartementsPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/workers-boxes.png"
            alt="Débarras d'appartements au Luxembourg"
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
              <span className="text-sm">Débarras d&apos;appartements</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Débarras d&apos;Appartements
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Vidage d&apos;appartements de toutes tailles, avec respect des
              lieux et des voisins. Service adapté aux copropriétés dans tout le
              Luxembourg.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Détails du service */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos services de débarras d'appartements"
            subtitle="Un service adapté à chaque type d'appartement"
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
            subtitle="Un service pensé pour les appartements"
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
              Besoin de vider un appartement ?
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
