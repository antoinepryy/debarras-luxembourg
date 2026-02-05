import { Metadata } from "next";
import { Container, SectionTitle } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { ZONES } from "@/lib/zones";

export const metadata: Metadata = {
  title: "Zones d'Intervention",
  description:
    "Nous intervenons dans tout le Luxembourg : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange et toutes les communes.",
};

export default function ZonesPage() {
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
              Zones d&apos;Intervention
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Nous nous déplaçons gratuitement dans tout le Grand-Duché de Luxembourg
              pour vos besoins de débarras et d&apos;expertise.
            </p>
          </div>
        </Container>
      </section>

      {/* Zones */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos zones d'intervention"
            subtitle="Service disponible dans toutes les communes du Luxembourg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZONES.map((zone) => (
              <div
                key={zone.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-[var(--color-primary)]"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {zone.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)]">
                      {zone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Info */}
      <section className="section bg-[var(--color-background-alt)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Votre commune n&apos;est pas listée ?
            </h2>
            <p className="text-[var(--color-text-light)] mb-8">
              Pas d&apos;inquiétude ! Nous intervenons dans toutes les communes du
              Luxembourg, y compris les zones rurales et les petits villages.
              N&apos;hésitez pas à nous contacter pour vérifier notre disponibilité
              dans votre secteur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary">
                Nous contacter
              </a>
              <a href="tel:+352621123456" className="btn btn-outline">
                Appeler maintenant
              </a>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
