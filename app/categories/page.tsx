import { Metadata } from "next";
import { Container, SectionTitle } from "@/components/ui";
import { Categories, ContactCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Catégories d'Objets",
  description:
    "Découvrez toutes les catégories d'objets que nous achetons : mobilier, argenterie, joaillerie, tableaux, et bien plus.",
};

export default function CategoriesPage() {
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
              Catégories d&apos;Objets
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Nous achetons et expertisons une large gamme d&apos;objets anciens,
              d&apos;art et de collection.
            </p>
          </div>
        </Container>
      </section>

      {/* Toutes les catégories */}
      <Categories showTitle={false} />

      <ContactCTA />
    </>
  );
}
