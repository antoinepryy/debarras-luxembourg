import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import DebarrasPageClient from "./DebarrasPageClient";

export const metadata: Metadata = {
  title: "Débarras professionnel",
  description:
    "Service de débarras professionnel au Luxembourg. Vidage de maisons, appartements, caves et greniers. Devis gratuit et intervention rapide.",
  openGraph: {
    title: "Débarras professionnel | Débarras Luxembourg",
    description:
      "Vidage complet de maisons, appartements, caves et greniers au Luxembourg. Devis gratuit.",
  },
};

export default function DebarrasPage() {
  return (
    <>
      <ServiceJsonLd />
      <DebarrasPageClient />
    </>
  );
}
