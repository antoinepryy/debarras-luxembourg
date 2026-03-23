import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import DiogenePageClient from "./DiogenePageClient";

export const metadata: Metadata = {
  title: "Syndrome de Diogène au Luxembourg | Débarras & Nettoyage spécialisé",
  description:
    "Intervention discrète et professionnelle pour le syndrome de Diogène au Luxembourg. Débarras complet, nettoyage extrême, désinfection. Devis gratuit, équipe formée.",
  keywords: [
    "syndrome diogène luxembourg",
    "nettoyage diogène",
    "débarras diogène",
    "nettoyage insalubre luxembourg",
    "nettoyage extrême luxembourg",
    "logement insalubre débarras",
    "désencombrement diogène",
  ],
  openGraph: {
    title: "Syndrome de Diogène au Luxembourg | Débarras Luxembourg",
    description:
      "Intervention spécialisée syndrome de Diogène. Débarras complet, nettoyage, désinfection. Discrétion totale, devis gratuit.",
  },
};

export default function DiogenePage() {
  return (
    <>
      <ServiceJsonLd />
      <DiogenePageClient />
    </>
  );
}
