import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import AppartementsPageClient from "./AppartementsPageClient";

export const metadata: Metadata = {
  title: "Débarras d'appartements au Luxembourg | Service copropriétés",
  description:
    "Débarras d'appartements au Luxembourg. Vidage adapté aux copropriétés, respect des lieux et des voisins. Devis gratuit.",
  openGraph: {
    title: "Débarras d'appartements au Luxembourg | Débarras Luxembourg",
    description:
      "Vidage d'appartements au Luxembourg. Service adapté aux copropriétés, discrétion et propreté garanties. Devis gratuit.",
  },
};

export default function AppartementsPage() {
  return (
    <>
      <ServiceJsonLd />
      <AppartementsPageClient />
    </>
  );
}
