export interface Zone {
  id: string;
  name: string;
  description: string;
  postalCodes?: string[];
}

export const ZONES: Zone[] = [
  {
    id: "luxembourg-ville",
    name: "Luxembourg-Ville",
    description: "Capitale du Grand-Duché, nous intervenons dans tous les quartiers de Luxembourg-Ville.",
    postalCodes: ["1000", "2000"],
  },
  {
    id: "esch-sur-alzette",
    name: "Esch-sur-Alzette",
    description: "Deuxième ville du pays, centre culturel et économique du sud du Luxembourg.",
    postalCodes: ["4000"],
  },
  {
    id: "differdange",
    name: "Differdange",
    description: "Troisième commune du Luxembourg, située dans le canton d'Esch-sur-Alzette.",
    postalCodes: ["4500"],
  },
  {
    id: "dudelange",
    name: "Dudelange",
    description: "Quatrième ville du Luxembourg, riche en patrimoine industriel.",
    postalCodes: ["3400"],
  },
  {
    id: "petange",
    name: "Pétange",
    description: "Commune dynamique du sud-ouest du Luxembourg.",
    postalCodes: ["4800"],
  },
  {
    id: "ettelbruck",
    name: "Ettelbruck",
    description: "Chef-lieu du canton de Diekirch, carrefour commercial du nord.",
    postalCodes: ["9000"],
  },
  {
    id: "diekirch",
    name: "Diekirch",
    description: "Ville historique connue pour son musée de la bataille des Ardennes.",
    postalCodes: ["9200"],
  },
  {
    id: "wiltz",
    name: "Wiltz",
    description: "Capitale des Ardennes luxembourgeoises, ville culturelle et touristique.",
    postalCodes: ["9500"],
  },
  {
    id: "echternach",
    name: "Echternach",
    description: "Plus ancienne ville du Luxembourg, célèbre pour sa procession dansante.",
    postalCodes: ["6400"],
  },
  {
    id: "grevenmacher",
    name: "Grevenmacher",
    description: "Chef-lieu du canton de Grevenmacher, au cœur de la région viticole.",
    postalCodes: ["6700"],
  },
  {
    id: "remich",
    name: "Remich",
    description: "Perle de la Moselle luxembourgeoise, capitale du vin mousseux.",
    postalCodes: ["5500"],
  },
  {
    id: "mondorf-les-bains",
    name: "Mondorf-les-Bains",
    description: "Station thermale réputée du Luxembourg, connue pour ses thermes.",
    postalCodes: ["5600"],
  },
];

export function getZoneById(id: string): Zone | undefined {
  return ZONES.find((zone) => zone.id === id);
}
