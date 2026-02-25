import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, CONTACT } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressCountry: CONTACT.country,
    },
    areaServed: {
      "@type": "Country",
      name: "Luxembourg",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de débarras",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Débarras de maisons",
            description: "Vidage complet ou partiel de maisons",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Débarras d'appartements",
            description: "Vidage d'appartements de toutes tailles",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Débarras de caves et greniers",
            description: "Évacuation de caves, greniers et garages",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment fonctionne votre service de débarras ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous commençons par une visite gratuite pour évaluer le volume et la nature des objets à évacuer. Nous vous fournissons ensuite un devis détaillé. Si vous acceptez, nous planifions l'intervention à la date qui vous convient.",
        },
      },
      {
        "@type": "Question",
        name: "Le déplacement pour le devis est-il payant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, le déplacement et le devis sont entièrement gratuits et sans engagement. Nous nous déplaçons dans tout le Luxembourg.",
        },
      },
      {
        "@type": "Question",
        name: "Quels types de locaux débarrassez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons dans tous types de locaux : maisons, appartements, caves, greniers, garages, bureaux, commerces et locaux industriels.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps prend une intervention ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La durée dépend du volume et de la complexité du débarras. Un appartement standard peut être vidé en une demi-journée, tandis qu'une grande maison peut nécessiter 1 à 2 jours.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les successions ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous sommes spécialisés dans les débarras de succession. Nous travaillons avec délicatesse et respect.",
        },
      },
      {
        "@type": "Question",
        name: "Que faites-vous des objets après le débarras ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les objets en bon état sont donnés à des associations. Les matériaux recyclables sont triés et envoyés en filière de recyclage. Les déchets non valorisables sont évacués en déchetterie.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Service de débarras professionnel",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Luxembourg",
    },
    description: "Service de débarras professionnel au Luxembourg. Vidage de maisons, appartements, caves et greniers. Devis et déplacement gratuits.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
