export const SITE_NAME = "Débarras Luxembourg";
export const SITE_DESCRIPTION = "Service de débarras, expertise et rachat d'antiquités au Luxembourg. Déplacement gratuit, paiement comptant.";
export const SITE_URL = "https://debarras-luxembourg.lu";

export const CONTACT = {
  phone: "+352 621 123 456",
  phoneDisplay: "621 123 456",
  email: "contact@debarras-luxembourg.lu",
  address: "Luxembourg",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/debarras-luxembourg",
  instagram: "https://instagram.com/debarras-luxembourg",
};

export const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "Débarras", href: "/debarras" },
  { label: "Expertise", href: "/expertise" },
  { label: "Rachat", href: "/rachat" },
  {
    label: "Catégories",
    href: "/categories",
    children: [
      { label: "Mobilier ancien", href: "/categories/mobilier-ancien" },
      { label: "Argenterie", href: "/categories/argenterie" },
      { label: "Joaillerie", href: "/categories/joaillerie" },
      { label: "Horlogerie", href: "/categories/horlogerie" },
      { label: "Arts asiatiques", href: "/categories/arts-asiatiques" },
      { label: "Tableaux", href: "/categories/tableaux" },
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
  },
  {
    id: "expertise",
    title: "Expertise",
    description: "Expertise gratuite de vos objets anciens et antiquités. Déplacement à domicile sans engagement.",
    href: "/expertise",
    icon: "magnifying-glass",
  },
  {
    id: "rachat",
    title: "Rachat",
    description: "Rachat immédiat de vos antiquités, objets d'art et objets de valeur. Paiement comptant.",
    href: "/rachat",
    icon: "currency-euro",
  },
];

export const FEATURES = [
  {
    title: "Déplacement gratuit",
    description: "Nous nous déplaçons gratuitement dans tout le Luxembourg pour évaluer vos biens.",
  },
  {
    title: "Expertise professionnelle",
    description: "Plus de 30 ans d'expérience dans l'estimation d'antiquités et objets de valeur.",
  },
  {
    title: "Paiement comptant",
    description: "Règlement immédiat en espèces ou par virement lors de l'achat de vos objets.",
  },
  {
    title: "Discrétion assurée",
    description: "Nous garantissons une totale confidentialité pour toutes nos interventions.",
  },
];
