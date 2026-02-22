export const SITE_NAME = "Débarras Luxembourg";
export const SITE_DESCRIPTION = "Service de débarras professionnel au Luxembourg. Devis et déplacement gratuits.";
export const SITE_URL = "https://debarras-luxembourg.lu";

export const CONTACT = {
  phone: "+352 661 151 279",
  phoneDisplay: "661 151 279",
  email: "contact@debarras-luxembourg.lu",
  address: "Luxembourg",
  city: "Luxembourg",
  country: "LU",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/debarras-luxembourg",
  instagram: "https://instagram.com/debarras-luxembourg",
};

export const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  {
    label: "Débarras",
    href: "/debarras",
    children: [
      { label: "Débarras de maisons", href: "/debarras/maisons" },
      { label: "Débarras d'appartements", href: "/debarras/appartements" },
      { label: "Débarras de caves", href: "/debarras/caves" },
      { label: "Débarras de greniers", href: "/debarras/greniers" },
    ],
  },
  { label: "Zones d'intervention", href: "/zones-intervention" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "debarras",
    title: "Débarras",
    description: "Nous vidons maisons, appartements, caves, greniers et locaux commerciaux. Service rapide et professionnel.",
    href: "/debarras",
    icon: "truck",
    image: "/images/services/workers-boxes.png",
  },
  {
    id: "debarras-locaux",
    title: "Débarras de locaux",
    description: "Vidage complet de maisons, appartements, bureaux et commerces. Intervention rapide et soignée.",
    href: "/debarras",
    icon: "building",
    image: "/images/services/worker-living-room.png",
  },
  {
    id: "evacuation",
    title: "Évacuation d'encombrants",
    description: "Évacuation de caves, greniers et garages. Nous prenons en charge tous types d'encombrants.",
    href: "/debarras",
    icon: "box",
    image: "/images/services/worker-cluttered-house.png",
  },
];

export const FEATURES = [
  {
    title: "Déplacement gratuit",
    description: "Nous nous déplaçons gratuitement dans tout le Luxembourg pour évaluer vos besoins.",
  },
  {
    title: "Équipe professionnelle",
    description: "Plus de 30 ans d'expérience dans le débarras professionnel au Luxembourg.",
  },
  {
    title: "Devis gratuit",
    description: "Devis détaillé et sans engagement, établi sur place lors de notre visite.",
  },
  {
    title: "Discrétion assurée",
    description: "Nous garantissons une totale confidentialité pour toutes nos interventions.",
  },
];
