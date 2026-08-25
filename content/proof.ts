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
      "Missions menées avec de véritables annonceurs tout au long de l'année de formation",
  },
  {
    label: "Expériences en entreprise",
    value: "[1 stage]",
    detail: "Immersions en entreprise — [Communautés de Communes de Dol de Bretagne]",
  },
  {
    label: "Zone d'intervention",
    value: "France & Monde",
    detail: "Basé à Rennes, accompagnement à distance",
  },
] as const;

export const tools = [
  "Meta Business Suite",
  "Meta Ads Manager",
  "Adobe Premiere Pro (scolaire)",
  "CapCut",
  "Canva",
  "Adobe Photoshop (scolaire)",
  "Google Analytics",
  "Flipaclip",
  "Claude IA"
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
export const clientLogos: { name: string; src: string }[] = [];
