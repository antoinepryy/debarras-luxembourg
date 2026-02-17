import type { Metadata } from "next";
import ZonesPageClient from "./ZonesPageClient";

export const metadata: Metadata = {
  title: "Zones d'intervention",
  description:
    "Débarras Luxembourg intervient dans tout le Grand-Duché : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange et toutes les communes.",
  openGraph: {
    title: "Zones d'intervention | Débarras Luxembourg",
    description:
      "Service de débarras dans tout le Luxembourg. Déplacement gratuit dans toutes les communes.",
  },
};

export default function ZonesPage() {
  return <ZonesPageClient />;
}
