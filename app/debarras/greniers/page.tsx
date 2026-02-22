import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import GreniersPageClient from "./GreniersPageClient";

export const metadata: Metadata = {
  title: "Débarras de greniers au Luxembourg | Vidage de combles",
  description:
    "Débarras de greniers et combles au Luxembourg. Évacuation de tous les encombrants stockés, accès difficile pris en charge. Devis gratuit.",
  openGraph: {
    title: "Débarras de greniers au Luxembourg | Débarras Luxembourg",
    description:
      "Vidage de greniers et combles au Luxembourg. Évacuation complète, accès difficile pris en charge. Devis gratuit.",
  },
};

export default function GreniersPage() {
  return (
    <>
      <ServiceJsonLd />
      <GreniersPageClient />
    </>
  );
}
