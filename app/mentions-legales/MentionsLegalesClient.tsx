"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { SITE_NAME, CONTACT, SITE_URL } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

export default function MentionsLegalesClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[var(--color-secondary)] via-[var(--color-secondary-dark)] to-[var(--color-secondary)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>

        <Container className="relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Mentions Légales
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="section">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto prose prose-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h2 style={{ fontFamily: "var(--font-heading)" }}>1. Éditeur du site</h2>
            <p>
              Le site <strong>{SITE_URL}</strong> est édité par :<br />
              <strong>{SITE_NAME}</strong><br />
              Adresse : {CONTACT.address}<br />
              Téléphone : {CONTACT.phone}<br />
              Email : {CONTACT.email}
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)" }}>2. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)" }}>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
              est la propriété exclusive de {SITE_NAME}, à l&apos;exception des marques, logos ou
              contenus appartenant à d&apos;autres sociétés partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou
              publication, même partielle, de ces différents éléments est strictement interdite
              sans l&apos;accord exprès par écrit de {SITE_NAME}.
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)" }}>4. Protection des données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous
              disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition
              aux données personnelles vous concernant.
            </p>
            <p>
              Les informations recueillies via le formulaire de contact sont enregistrées
              dans un fichier informatisé par {SITE_NAME} pour la gestion de nos relations
              clients. Elles sont conservées pendant 3 ans et sont destinées uniquement au
              service commercial de {SITE_NAME}.
            </p>
            <p>
              Pour exercer vos droits, vous pouvez nous contacter à l&apos;adresse email : {CONTACT.email}
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)" }}>5. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et
              mesurer l&apos;audience. En naviguant sur ce site, vous acceptez l&apos;utilisation de
              ces cookies.
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)" }}>6. Limitation de responsabilité</h2>
            <p>
              {SITE_NAME} ne pourra être tenu responsable des dommages directs et indirects
              causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site, et résultant
              soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications
              indiquées, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)" }}>7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit luxembourgeois. En cas
              de litige, les tribunaux luxembourgeois seront seuls compétents.
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)" }}>8. Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous
              contacter :<br />
              - Par email : {CONTACT.email}<br />
              - Par téléphone : {CONTACT.phone}
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
