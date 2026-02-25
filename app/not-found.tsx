import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <Container
      as="section"
      className="flex flex-col items-center justify-center text-center py-32 min-h-[60vh]"
    >
      <p className="text-6xl font-bold text-primary mb-4">404</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Page introuvable
      </h1>
      <p className="text-lg text-muted max-w-md mb-8">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
        Vérifiez l&apos;adresse ou revenez à l&apos;accueil.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/" variant="primary" size="lg">
          Retour à l&apos;accueil
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Nous contacter
        </Button>
      </div>
    </Container>
  );
}
