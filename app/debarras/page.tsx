import { Metadata } from "next";
import { Container, SectionTitle, Button } from "@/components/ui";
import { ContactCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Service de Débarras",
  description:
    "Service professionnel de débarras de maisons, appartements, caves et greniers au Luxembourg. Intervention rapide et devis gratuit.",
};

const debarrasTypes = [
  {
    title: "Débarras de maisons",
    description:
      "Vidage complet ou partiel de maisons, que ce soit suite à un déménagement, une succession ou un simple besoin de désencombrement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
  },
  {
    title: "Débarras d'appartements",
    description:
      "Vidage d'appartements de toutes tailles, avec respect des lieux et des voisins. Service adapté aux copropriétés.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Débarras de caves",
    description:
      "Vidage de caves encombrées, tri des objets de valeur, évacuation des encombrants. Accès difficile pris en charge.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Débarras de greniers",
    description:
      "Vidage de greniers et combles, expertise des objets anciens trouvés, possibilité de rachat sur place.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
      </svg>
    ),
  },
];

export default function DebarrasPage() {
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
              Service de Débarras
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Nous vidons maisons, appartements, caves et greniers dans tout le
              Luxembourg. Service rapide, propre et professionnel.
            </p>
          </div>
        </Container>
      </section>

      {/* Types de débarras */}
      <section className="section">
        <Container>
          <SectionTitle
            title="Nos prestations de débarras"
            subtitle="Un service adapté à chaque situation"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {debarrasTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--color-primary)]">
                  {type.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {type.title}
                </h3>
                <p className="text-[var(--color-text-light)]">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Processus */}
      <section className="section bg-[var(--color-background-alt)]">
        <Container>
          <SectionTitle
            title="Comment ça marche ?"
            subtitle="Un processus simple et transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact", description: "Appelez-nous ou remplissez le formulaire de contact" },
              { step: "2", title: "Visite", description: "Nous nous déplaçons gratuitement pour évaluer" },
              { step: "3", title: "Devis", description: "Vous recevez un devis détaillé et sans engagement" },
              { step: "4", title: "Intervention", description: "Notre équipe réalise le débarras à la date convenue" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
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

      {/* CTA */}
      <section className="section">
        <Container>
          <div className="text-center">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Besoin d&apos;un débarras ?
            </h2>
            <p className="text-[var(--color-text-light)] mb-8 max-w-xl mx-auto">
              Contactez-nous dès maintenant pour un devis gratuit et sans engagement.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis gratuit
            </Button>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
