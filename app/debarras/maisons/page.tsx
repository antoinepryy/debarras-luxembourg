import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import MaisonsPageClient from "./MaisonsPageClient";

export const metadata: Metadata = {
  title: "Débarras de maisons au Luxembourg | Vidage complet ou partiel",
  description:
    "Service professionnel de débarras de maisons au Luxembourg. Vidage complet ou partiel suite à déménagement, succession ou désencombrement. Devis gratuit.",
  openGraph: {
    title: "Débarras de maisons au Luxembourg | Débarras Luxembourg",
    description:
      "Vidage complet ou partiel de maisons au Luxembourg. Déménagement, succession, désencombrement. Devis gratuit.",
  },
};

export default function MaisonsPage() {
  return (
    <>
      <ServiceJsonLd />
      <MaisonsPageClient />
    </>
  );
}
