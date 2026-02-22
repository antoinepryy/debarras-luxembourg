import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import CavesPageClient from "./CavesPageClient";

export const metadata: Metadata = {
  title: "Débarras de caves au Luxembourg | Vidage et évacuation",
  description:
    "Débarras de caves au Luxembourg. Vidage de caves encombrées, tri des objets, évacuation des encombrants. Accès difficile pris en charge. Devis gratuit.",
  openGraph: {
    title: "Débarras de caves au Luxembourg | Débarras Luxembourg",
    description:
      "Vidage de caves encombrées au Luxembourg. Tri, évacuation, accès difficile pris en charge. Devis gratuit.",
  },
};

export default function CavesPage() {
  return (
    <>
      <ServiceJsonLd />
      <CavesPageClient />
    </>
  );
}
