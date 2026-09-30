/**
 * Section « Crédibilité ».
 * Règle absolue : rien ne s'invente ici.
 * Tant qu'un élément n'est pas réel, il reste un placeholder visible.
 */

export const credentials = [
  {
    label: "Formation",
    value: "BTS Communication",
    detail: "2e année, formation initiale — [Lycée Jeanne d'Arc], Rennes",
  },
  {
    label: "Projets annonceurs",
    value: "Cas réels",
    detail:
      "Missions menées avec de véritables annonceurs tout au long de la formation",
  },
  {
    label: "Expériences en entreprise",
    value: "2 stages",
    detail:
      "Stage à la Communauté de communes de Dol-de-Bretagne, puis deux mois comme chargé de communication dans une entreprise de e-commerce.",
  },
  {
    label: "Zone d'intervention",
    value: "France & Monde",
    detail: "Basé à Rennes, accompagnement à distance",
  },
] as const;

export const tools = [
  "Meta Business",
  "Meta Ads",
  "Adobe Premiere Pro (scolaire)",
  "CapCut",
  "Canva",
  "Adobe Photoshop (scolaire)",
  "Google",
  "Flipaclip",
  "Claude IA",
  "ChatGPT",
  "Picsart"
] as const;

/** Ajoutez ici vos certifications réelles uniquement (ex. Meta Certified, Google). */
export const certifications: { name: string; issuer: string; year: string }[] =
  [];

/**
 * Témoignages clients.
 * Laisser vide tant qu'aucun témoignage n'a été recueilli ET autorisé par écrit.
 * Le site affiche alors un emplacement neutre, jamais un faux avis.
 */
export const testimonials: {
  quote: string;
  author: string;
  role: string;
  company: string;
}[] = [];

/** Logos clients — uniquement avec autorisation écrite. Fichiers dans /public/clients. */
export const clientLogos: {
  name: string;
  src: string;
  type?: "portrait";
}[] = [
  {
    name: "Nash",
    src: "/clients/Screenshot%202026-09-29%2019.49.34.png",
    type: "portrait",
  },
];
