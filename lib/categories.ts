export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "1",
    slug: "mobilier-ancien",
    title: "Mobilier ancien",
    description: "Commodes, armoires, bureaux, secrétaires, tables et chaises d'époque. Meubles régionaux et de style.",
    icon: "chair",
    gradient: "from-amber-800 to-amber-950",
  },
  {
    id: "2",
    slug: "argenterie",
    title: "Argenterie",
    description: "Couverts, services à thé et café, plateaux, surtouts de table, objets de toilette en argent massif.",
    icon: "sparkles",
    gradient: "from-slate-400 to-slate-600",
  },
  {
    id: "3",
    slug: "joaillerie",
    title: "Joaillerie / Bijoux",
    description: "Bijoux anciens et modernes, bagues, colliers, bracelets, broches, pendentifs en or et pierres précieuses.",
    icon: "gem",
    gradient: "from-yellow-500 to-amber-700",
  },
  {
    id: "4",
    slug: "horlogerie",
    title: "Horlogerie / Montres",
    description: "Montres de collection, pendules, horloges, régulateurs, cartels et montres de poche.",
    icon: "clock",
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    id: "5",
    slug: "arts-asiatiques",
    title: "Arts asiatiques",
    description: "Porcelaines chinoises et japonaises, bronzes, jades, estampes, sculptures et mobilier asiatique.",
    icon: "globe",
    gradient: "from-red-700 to-red-900",
  },
  {
    id: "6",
    slug: "tableaux",
    title: "Tableaux / Peintures",
    description: "Peintures anciennes et modernes, huiles sur toile, aquarelles, dessins et gravures.",
    icon: "photo",
    gradient: "from-indigo-700 to-indigo-900",
  },
  {
    id: "7",
    slug: "sculptures",
    title: "Sculptures / Bronzes",
    description: "Bronzes d'édition, sculptures en marbre, terre cuite, bois et ivoire.",
    icon: "cube",
    gradient: "from-stone-600 to-stone-800",
  },
  {
    id: "8",
    slug: "porcelaine",
    title: "Porcelaine / Céramique",
    description: "Porcelaines de Sèvres, Meissen, faïences, barbotines et céramiques d'art.",
    icon: "beaker",
    gradient: "from-sky-600 to-sky-800",
  },
  {
    id: "9",
    slug: "verrerie",
    title: "Verrerie / Cristal",
    description: "Cristal de Baccarat, Saint-Louis, verreries Gallé, Daum, Lalique et autres maîtres verriers.",
    icon: "wine",
    gradient: "from-purple-600 to-purple-800",
  },
  {
    id: "10",
    slug: "livres-anciens",
    title: "Livres anciens",
    description: "Livres rares, éditions originales, manuscrits, cartes anciennes et estampes.",
    icon: "book",
    gradient: "from-emerald-700 to-emerald-900",
  },
  {
    id: "11",
    slug: "instruments-musique",
    title: "Instruments de musique",
    description: "Violons, guitares, pianos, instruments à vent et accessoires de musique anciens.",
    icon: "music",
    gradient: "from-orange-600 to-orange-800",
  },
  {
    id: "12",
    slug: "jouets-anciens",
    title: "Jouets anciens",
    description: "Jouets en tôle, trains miniatures, poupées, automates et jouets de collection.",
    icon: "puzzle",
    gradient: "from-pink-600 to-pink-800",
  },
  {
    id: "13",
    slug: "militaria",
    title: "Militaria",
    description: "Uniformes, médailles, armes anciennes, casques, décorations et souvenirs militaires.",
    icon: "shield",
    gradient: "from-olive-700 to-stone-800",
  },
  {
    id: "14",
    slug: "numismatique",
    title: "Numismatique",
    description: "Pièces de monnaie anciennes, médailles, jetons et billets de collection.",
    icon: "coin",
    gradient: "from-yellow-600 to-yellow-800",
  },
  {
    id: "15",
    slug: "tapis",
    title: "Tapis / Tapisseries",
    description: "Tapis d'Orient, tapisseries d'Aubusson, kilims et textiles anciens.",
    icon: "squares",
    gradient: "from-rose-700 to-rose-900",
  },
  {
    id: "16",
    slug: "objets-vitrine",
    title: "Objets de vitrine",
    description: "Boîtes, étuis, flacons, miniatures, objets de curiosité et de collection.",
    icon: "gift",
    gradient: "from-teal-600 to-teal-800",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return CATEGORIES.map((cat) => cat.slug);
}
