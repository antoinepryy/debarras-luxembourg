export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "1",
    slug: "mobilier-ancien",
    title: "Mobilier ancien",
    description: "Commodes, armoires, bureaux, secrétaires, tables et chaises d'époque. Meubles régionaux et de style.",
    image: "/images/categories/mobilier.jpg",
  },
  {
    id: "2",
    slug: "argenterie",
    title: "Argenterie",
    description: "Couverts, services à thé et café, plateaux, surtouts de table, objets de toilette en argent massif.",
    image: "/images/categories/argenterie.jpg",
  },
  {
    id: "3",
    slug: "joaillerie",
    title: "Joaillerie / Bijoux",
    description: "Bijoux anciens et modernes, bagues, colliers, bracelets, broches, pendentifs en or et pierres précieuses.",
    image: "/images/categories/joaillerie.jpg",
  },
  {
    id: "4",
    slug: "horlogerie",
    title: "Horlogerie / Montres",
    description: "Montres de collection, pendules, horloges, régulateurs, cartels et montres de poche.",
    image: "/images/categories/horlogerie.jpg",
  },
  {
    id: "5",
    slug: "arts-asiatiques",
    title: "Arts asiatiques",
    description: "Porcelaines chinoises et japonaises, bronzes, jades, estampes, sculptures et mobilier asiatique.",
    image: "/images/categories/arts-asiatiques.jpg",
  },
  {
    id: "6",
    slug: "tableaux",
    title: "Tableaux / Peintures",
    description: "Peintures anciennes et modernes, huiles sur toile, aquarelles, dessins et gravures.",
    image: "/images/categories/tableaux.jpg",
  },
  {
    id: "7",
    slug: "sculptures",
    title: "Sculptures / Bronzes",
    description: "Bronzes d'édition, sculptures en marbre, terre cuite, bois et ivoire.",
    image: "/images/categories/sculptures.jpg",
  },
  {
    id: "8",
    slug: "porcelaine",
    title: "Porcelaine / Céramique",
    description: "Porcelaines de Sèvres, Meissen, faïences, barbotines et céramiques d'art.",
    image: "/images/categories/porcelaine.jpg",
  },
  {
    id: "9",
    slug: "verrerie",
    title: "Verrerie / Cristal",
    description: "Cristal de Baccarat, Saint-Louis, verreries Gallé, Daum, Lalique et autres maîtres verriers.",
    image: "/images/categories/verrerie.jpg",
  },
  {
    id: "10",
    slug: "livres-anciens",
    title: "Livres anciens",
    description: "Livres rares, éditions originales, manuscrits, cartes anciennes et estampes.",
    image: "/images/categories/livres.jpg",
  },
  {
    id: "11",
    slug: "instruments-musique",
    title: "Instruments de musique",
    description: "Violons, guitares, pianos, instruments à vent et accessoires de musique anciens.",
    image: "/images/categories/instruments.jpg",
  },
  {
    id: "12",
    slug: "jouets-anciens",
    title: "Jouets anciens",
    description: "Jouets en tôle, trains miniatures, poupées, automates et jouets de collection.",
    image: "/images/categories/jouets.jpg",
  },
  {
    id: "13",
    slug: "militaria",
    title: "Militaria",
    description: "Uniformes, médailles, armes anciennes, casques, décorations et souvenirs militaires.",
    image: "/images/categories/militaria.jpg",
  },
  {
    id: "14",
    slug: "numismatique",
    title: "Numismatique",
    description: "Pièces de monnaie anciennes, médailles, jetons et billets de collection.",
    image: "/images/categories/numismatique.jpg",
  },
  {
    id: "15",
    slug: "tapis",
    title: "Tapis / Tapisseries",
    description: "Tapis d'Orient, tapisseries d'Aubusson, kilims et textiles anciens.",
    image: "/images/categories/tapis.jpg",
  },
  {
    id: "16",
    slug: "objets-vitrine",
    title: "Objets de vitrine",
    description: "Boîtes, étuis, flacons, miniatures, objets de curiosité et de collection.",
    image: "/images/categories/objets-vitrine.jpg",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return CATEGORIES.map((cat) => cat.slug);
}
