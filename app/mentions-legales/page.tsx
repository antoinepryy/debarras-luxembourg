import type { Metadata } from "next";
import MentionsLegalesClient from "./MentionsLegalesClient";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Débarras Luxembourg. Informations sur l'éditeur, l'hébergement et la protection des données.",
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />;
}
