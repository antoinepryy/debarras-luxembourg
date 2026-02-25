"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, SectionTitle, Button, Breadcrumb } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const cavesDetails = [
  {
    title: "Caves humides",
    description:
      "Intervention dans les caves soumises à l'humidité. Nous évacuons les objets abîmés et trions ce qui peut être conservé.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Accès étroits et escaliers",
    description:
      "Nos équipes sont formées pour travailler dans des espaces restreints avec des escaliers étroits ou en colimaçon.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V14.25a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0l2.47 2.47V4.81a.75.75 0 011.5 0v9.94l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Tri des objets de valeur",
    description:
      "Nous identifions et mettons de côté les objets de valeur ou à conserver avant toute évacuation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
      </svg>
    ),
  },
  {
    title: "Évacuation encombrants lourds",
    description:
      "Meubles, électroménager, cartons lourds : nous disposons du matériel nécessaire pour évacuer tous types d'encombrants.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a3 3 0 116 0h.375c1.035 0 1.875-.84 1.875-1.875V18a2.25 2.25 0 00-2.25-2.25H13.5V15z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM18.75 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        <path d="M15.75 6.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.875a.75.75 0 00.53-.22l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25a.75.75 0 00-.53-.22H15.75z" />
      </svg>
    ),
  },
];

const avantages = [
  {
    title: "Accès difficile pris en charge",
    description: "Nos équipes interviennent même dans les caves les plus difficiles d'accès.",
  },
  {
    title: "Matériel adapté",
    description: "Nous utilisons un matériel professionnel adapté aux espaces confinés et aux charges lourdes.",
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

export default function CavesPageClient() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: SITE_URL },
          { name: "Débarras", url: `${SITE_URL}/debarras` },
          { name: "Caves", url: `${SITE_URL}/debarras/caves` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/worker-cluttered-house.webp"
            alt="Débarras de caves au Luxembourg"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Débarras", href: "/debarras" },
                { label: "Caves" },
              ]}
            />
          </div>
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
              <span className="text-sm">Débarras de caves</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Débarras de Caves
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Vidage complet de caves encombrées dans tout le Luxembourg.
              Accès difficile, escaliers étroits : nous prenons tout en charge.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Détails */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos interventions en cave"
            subtitle="Un service adapté aux contraintes des sous-sols"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {cavesDetails.map((item) => (
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
            subtitle="Les avantages de notre service de débarras de caves"
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
              Besoin de vider votre cave ?
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
