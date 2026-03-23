"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, SectionTitle, Button, Breadcrumb } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, CONTACT } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const detailCards = [
  {
    title: "Débarras complet",
    description:
      "Évacuation intégrale des objets accumulés, déchets et encombrants. Nous intervenons dans les situations les plus difficiles, pièce par pièce, avec méthode et respect.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a3 3 0 116 0h.375c1.035 0 1.875-.84 1.875-1.875V18a3 3 0 00-3-3H13.5z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        <path d="M15.75 6.75a.75.75 0 00-.75.75v5.25h5.25a2.25 2.25 0 002.25-2.25V8.608a2.25 2.25 0 00-.659-1.591l-1.608-1.608a2.25 2.25 0 00-1.591-.659H15.75z" />
      </svg>
    ),
  },
  {
    title: "Nettoyage extrême",
    description:
      "Nettoyage en profondeur des sols, murs et surfaces après le débarras. Traitement des odeurs persistantes et remise en état complète du logement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Désinfection",
    description:
      "Traitement sanitaire complet : désinfection des surfaces, élimination des nuisibles si nécessaire. Nous rendons le logement sain et habitable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Accompagnement humain",
    description:
      "Nous comprenons la sensibilité de ces situations. Notre équipe intervient avec discrétion, bienveillance et sans jugement, en coordination avec les familles ou services sociaux.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
  },
];

const avantages = [
  {
    title: "Discrétion totale",
    description: "Véhicules banalisés, intervention sans signalétique. Vos voisins ne sauront rien.",
  },
  {
    title: "Équipe formée",
    description: "Personnel expérimenté dans les situations de grande insalubrité et d'accumulation extrême.",
  },
  {
    title: "Intervention rapide",
    description: "Disponibilité sous 48h pour les situations urgentes. Nous comprenons que le temps presse.",
  },
  {
    title: "Devis gratuit et confidentiel",
    description: "Évaluation gratuite sur place. Totale confidentialité garantie à chaque étape.",
  },
];

const processSteps = [
  { step: "1", title: "Premier contact", description: "Appelez-nous en toute confidentialité pour décrire la situation" },
  { step: "2", title: "Évaluation", description: "Visite discrète et gratuite pour évaluer l'ampleur de l'intervention" },
  { step: "3", title: "Plan d'action", description: "Devis détaillé avec planning d'intervention adapté" },
  { step: "4", title: "Intervention", description: "Débarras, nettoyage et désinfection jusqu'à remise en état complète" },
];

const faqItems = [
  {
    question: "Qu'est-ce que le syndrome de Diogène ?",
    answer:
      "Le syndrome de Diogène se caractérise par une accumulation excessive d'objets et de déchets dans le logement, souvent accompagnée d'un manque d'hygiène sévère. Il touche principalement les personnes âgées ou isolées. Notre rôle est d'intervenir avec respect et professionnalisme pour rendre le logement habitable.",
  },
  {
    question: "Comment se déroule une intervention Diogène ?",
    answer:
      "Nous commençons par une visite d'évaluation gratuite et confidentielle. Ensuite, notre équipe procède au débarras complet, pièce par pièce, suivi d'un nettoyage en profondeur et d'une désinfection. L'intervention peut durer de 1 à plusieurs jours selon l'ampleur.",
  },
  {
    question: "Intervenez-vous en urgence ?",
    answer:
      "Oui, nous pouvons intervenir sous 48h pour les situations urgentes (expulsion, vente, mise en danger). Contactez-nous par téléphone pour une prise en charge rapide.",
  },
  {
    question: "Travaillez-vous avec les services sociaux ?",
    answer:
      "Absolument. Nous collaborons régulièrement avec les services sociaux, les tuteurs, les familles et les syndics. Nous adaptons notre intervention au contexte de chaque situation.",
  },
  {
    question: "Quelle zone couvrez-vous ?",
    answer:
      "Nous intervenons dans tout le Luxembourg : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes du pays.",
  },
];

export default function DiogenePageClient() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: SITE_URL },
          { name: "Débarras", url: `${SITE_URL}/debarras` },
          { name: "Syndrome de Diogène", url: `${SITE_URL}/debarras/diogene` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/worker-cluttered-house.webp"
            alt="Intervention syndrome de Diogène au Luxembourg"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Débarras", href: "/debarras" },
                { label: "Syndrome de Diogène" },
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
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
              <span className="text-sm">Intervention spécialisée</span>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Syndrome de Diogène
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Intervention discrète et professionnelle pour le débarras et le nettoyage
              de logements touchés par le syndrome de Diogène. Nous redonnons vie
              à votre habitat, avec respect et sans jugement.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Introduction contextuelle */}
      <section className="section">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Une situation délicate qui nécessite des professionnels
            </h2>
            <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-4">
              Le syndrome de Diogène entraîne une accumulation massive d&apos;objets et
              de déchets, rendant le logement insalubre et parfois dangereux. Que vous
              soyez un proche, un tuteur, un service social ou un propriétaire, nous vous
              accompagnons dans la remise en état complète du logement.
            </p>
            <p className="text-[var(--color-text-light)] text-lg leading-relaxed">
              Notre équipe est formée pour intervenir dans les cas les plus extrêmes :
              accumulation sur plusieurs années, présence de nuisibles, problèmes
              sanitaires. Nous traitons chaque situation avec humanité et efficacité.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Détails du service */}
      <section className="section bg-[var(--color-background-alt)]">
        <Container>
          <SectionTitle
            title="Notre intervention complète"
            subtitle="Du débarras à la remise en état, un service clé en main"
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
      <section className="section">
        <Container>
          <SectionTitle
            title="Pourquoi nous faire confiance ?"
            subtitle="Une approche spécialisée et humaine"
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
      <section className="section bg-[var(--color-background-alt)]">
        <Container>
          <SectionTitle
            title="Comment se passe l'intervention ?"
            subtitle="Un accompagnement étape par étape"
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

      {/* FAQ */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Questions fréquentes"
            subtitle="Tout savoir sur notre intervention Diogène"
          />

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqItems.map((item) => (
              <motion.details
                key={item.question}
                variants={staggerItem}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                  <h3
                    className="font-semibold text-lg pr-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.question}
                  </h3>
                  <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-background-alt)] rounded-full flex items-center justify-center group-open:rotate-45 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[var(--color-primary)]">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[var(--color-text-light)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.details>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA urgent */}
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
              Besoin d&apos;une intervention ?
            </h2>
            <p className="text-[var(--color-text-light)] mb-8 text-lg">
              Contactez-nous en toute confidentialité. Premier échange et devis gratuits,
              sans engagement. Intervention possible sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} variant="primary" size="lg">
                  Appeler maintenant
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href="/contact" variant="outline" size="lg">
                  Demander un devis confidentiel
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
