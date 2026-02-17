import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact - Devis gratuit",
  description:
    "Contactez Débarras Luxembourg pour un devis gratuit. Formulaire de contact, téléphone et email. Réponse sous 24h.",
  openGraph: {
    title: "Contact - Devis gratuit | Débarras Luxembourg",
    description:
      "Contactez-nous pour un devis gratuit de débarras au Luxembourg. Réponse rapide garantie.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
