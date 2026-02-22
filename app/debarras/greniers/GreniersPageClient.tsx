"use client";

import { motion } from "framer-motion";
import { Container, SectionTitle, Button } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const greniersDetails = [
  {
    title: "Combles aménagés",
    description:
      "Débarras de combles aménagés avec soin, en préservant les aménagements existants et en évacuant tout le superflu.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
  },
  {
    title: "Greniers non aménagés",
    description:
      "Intervention dans les greniers bruts, poussiéreux ou encombrés depuis des années. Nous évacuons tout, même en vrac.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Objets volumineux",
    description:
      "Meubles anciens, malles, cartons de souvenirs : nous descendons et évacuons tous les objets volumineux en toute sécurité.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a3 3 0 116 0h.375c1.035 0 1.875-.84 1.875-1.875V18a2.25 2.25 0 00-2.25-2.25H13.5V15z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM18.75 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        <path d="M15.75 6.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.875a.75.75 0 00.53-.22l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25a.75.75 0 00-.53-.22H15.75z" />
      </svg>
    ),
  },
  {
    title: "Accès par trappe ou escalier étroit",
    description:
      "Trappes, échelles, escaliers escamotables : nous sommes équipés pour intervenir dans les accès les plus contraignants.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V14.25a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0l2.47 2.47V4.81a.75.75 0 011.5 0v9.94l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const avantages = [
  {
    title: "Accès difficile pris en charge",
    description: "Nos équipes interviennent même dans les greniers les plus difficiles d'accès.",
  },
  {
    title: "Manutention spécialisée",
    description: "Descente sécurisée des objets lourds et volumineux depuis les étages supérieurs.",
  },
  {
    title: "Tri sélectif et recyclage",
    description: "Nous trions les objets et recyclons tout ce qui peut l'être de manière responsable.",
  },
  {
    title: "Devis gratuit sans engagement",
    description: "Nous nous déplaçons gratuitement pour évaluer le volume et établir un devis précis.",
  },
];

const processSteps = [
  { step: "1", title: "Contact", description: "Appelez-nous ou remplissez le formulaire de contact" },
  { step: "2", title: "Visite", description: "Nous nous déplaçons gratuitement pour évaluer" },
  { step: "3", title: "Devis", description: "Vous recevez un devis détaillé et sans engagement" },
  { step: "4", title: "Intervention", description: "Notre équipe réalise le débarras à la date convenue" },
];

export default function GreniersPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/worker-cluttered-house.png"
            alt="Débarras de greniers au Luxembourg"
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
              <span className="text-sm">Débarras de greniers</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Débarras de Greniers
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Vidage complet de greniers et combles dans tout le Luxembourg.
              Objets volumineux, accès difficile : nous gérons tout.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Détails */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos interventions en grenier"
            subtitle="Un service adapté aux contraintes des combles"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {greniersDetails.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 rounded-xl flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {item.description}
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
            subtitle="Les avantages de notre service de débarras de greniers"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {avantages.map((item) => (
              <motion.div
                key={item.title}
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
              Besoin de vider votre grenier ?
            </h2>
            <p className="text-[var(--color-text-light)] mb-8 text-lg">
              Contactez-nous dès maintenant pour un devis gratuit et sans engagement.
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
