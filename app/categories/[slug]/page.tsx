import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Button } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { getCategoryBySlug, getAllCategorySlugs, CATEGORIES } from "@/lib/categories";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Catégorie non trouvée",
    };
  }

  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  // Get related categories (excluding current)
  const relatedCategories = CATEGORIES.filter((c) => c.slug !== slug).slice(0, 4);

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
              {category.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="section">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Nous achetons vos {category.title.toLowerCase()}
            </h2>

            <div className="prose prose-lg">
              <p className="text-[var(--color-text-light)] mb-6">
                Vous possédez des {category.title.toLowerCase()} et souhaitez les vendre ?
                Notre équipe d&apos;experts est à votre disposition pour évaluer gratuitement
                vos objets et vous proposer un prix de rachat juste.
              </p>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Nos services
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Expertise gratuite à domicile</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Estimation professionnelle basée sur le marché actuel</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Rachat immédiat avec paiement comptant</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Discrétion et confidentialité assurées</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Demander une expertise
              </Button>
              <Button href="/categories" variant="outline" size="lg">
                Voir toutes les catégories
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Categories */}
      <section className="section bg-[var(--color-background-alt)]">
        <Container>
          <h2
            className="text-2xl font-semibold mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Autres catégories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
                  {cat.title}
                </h3>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
