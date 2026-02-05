import { Metadata } from "next";
import { Container, SectionTitle, Button } from "@/components/ui";
import { Categories, ContactCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Expertise d'Antiquités",
  description:
    "Expertise gratuite de vos objets anciens et antiquités au Luxembourg. Déplacement à domicile sans engagement.",
};

export default function ExpertisePage() {
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
              Expertise d&apos;Antiquités
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Bénéficiez de notre expertise professionnelle pour l&apos;évaluation
              de vos objets anciens. Déplacement gratuit dans tout le Luxembourg.
            </p>
          </div>
        </Container>
      </section>

      {/* Avantages */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Pourquoi faire expertiser vos objets ?"
            subtitle="Une expertise professionnelle à votre service"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise gratuite",
                description: "L'estimation de vos objets est entièrement gratuite et sans engagement de votre part.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                title: "À domicile",
                description: "Nous nous déplaçons chez vous pour expertiser vos objets en toute confidentialité.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                ),
              },
              {
                title: "30 ans d'expérience",
                description: "Notre équipe possède plus de 30 ans d'expérience dans l'évaluation d'antiquités.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
                  {item.icon}
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
        </Container>
      </section>

      {/* Catégories */}
      <section className="bg-[var(--color-background-alt)]">
        <Categories limit={8} showTitle={true} />
      </section>

      {/* CTA */}
      <section className="section">
        <Container>
          <div className="text-center">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Faites expertiser vos objets
            </h2>
            <p className="text-[var(--color-text-light)] mb-8 max-w-xl mx-auto">
              Envoyez-nous des photos de vos objets ou demandez une visite à domicile.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Demander une expertise
            </Button>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
