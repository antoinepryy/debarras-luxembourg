import { Metadata } from "next";
import { Container, SectionTitle, Button } from "@/components/ui";
import { Categories, ContactCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Rachat d'Antiquités",
  description:
    "Rachat immédiat de vos antiquités et objets de valeur au Luxembourg. Paiement comptant, déplacement gratuit.",
};

export default function RachatPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-[var(--color-secondary)]">
        <Container>
          <div className="text-center text-white">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Rachat d&apos;Antiquités
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Nous rachetons vos antiquités, objets d&apos;art et objets de valeur.
              Paiement comptant immédiat.
            </p>
          </div>
        </Container>
      </section>

      {/* Avantages */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos garanties"
            subtitle="Un service de rachat transparent et sécurisé"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Paiement comptant",
                description: "Règlement immédiat en espèces ou par virement",
              },
              {
                title: "Prix justes",
                description: "Estimation basée sur le marché actuel",
              },
              {
                title: "Déplacement gratuit",
                description: "Nous venons chez vous sans frais",
              },
              {
                title: "Discrétion",
                description: "Confidentialité totale garantie",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ce que nous achetons */}
      <section className="bg-[var(--color-background-alt)]">
        <Categories limit={12} showTitle={true} />
      </section>

      {/* Processus */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Comment vendre vos objets ?"
            subtitle="Un processus simple en 3 étapes"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Contactez-nous",
                description: "Envoyez-nous des photos de vos objets par email ou téléphone, ou demandez une visite à domicile.",
              },
              {
                step: "2",
                title: "Estimation",
                description: "Nous évaluons vos objets et vous proposons un prix de rachat juste et transparent.",
              },
              {
                step: "3",
                title: "Paiement",
                description: "Si notre offre vous convient, nous vous payons immédiatement en espèces ou par virement.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span
                    className="text-white text-2xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/contact" variant="primary" size="lg">
              Vendre mes objets
            </Button>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
