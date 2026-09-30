export type Offer = {
  id: string;
  name: string;
  tagline: string;
  forWho: string;
  price: string;
  priceNote: string;
  includes: string[];
  featured?: boolean;
  cta: string;
};

/**
 * Les tarifs sont volontairement indicatifs.
 * Remplacez « [À DÉFINIR] » par vos montants lorsque vous les aurez arbitrés,
 * ou laissez la mention « Sur devis » si vous préférez cadrer en rendez-vous.
 */
export const offers: Offer[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    tagline: "Structurer",
    forWho:
      "Pour les entreprises qui veulent remettre de la cohérence dans leur communication sans perdre du temps sur le pilotage du quotidien.",
    price: "À partir de 300 € / mois",
    priceNote: "Engagement mensuel, résiliable avec préavis.",
    includes: [
      "Stratégie et ligne éditoriale",
      "Calendrier éditorial mensuel",
      "Création des contenus (visuels et textes)",
      "Publication et programmation",
      "Reporting mensuel",
    ],
    cta: "Cadrer mon accompagnement",
  },
  {
    id: "developpement",
    name: "Développement",
    tagline: "Accélérer",
    forWho:
      "Pour les entreprises qui veulent une présence plus régulière, plus visible et plus crédible sur les réseaux sans devoir tout gérer en interne.",
    price: "À partir de 500 € / mois",
    priceNote: "Le format le plus adapté à une croissance régulière.",
    includes: [
      "Tout ce que contient Essentiel",
      "Volume de contenus renforcé",
      "Reels et formats vidéo verticaux",
      "Community management et réponses",
      "Optimisation des formats selon les performances",
    ],
    featured: true,
    cta: "Parler de mon projet",
  },
  {
    id: "acquisition",
    name: "Acquisition",
    tagline: "Générer",
    forWho:
      "Pour les entreprises qui veulent passer de la visibilité à des demandes de contact concrètes, avec une stratégie pensée pour convertir.",
    price: "À partir de 700 € / mois",
    priceNote: "Budget publicitaire à prévoir en complément.",
    includes: [
      "Tout ce que contient Développement",
      "Stratégie d'acquisition",
      "Campagnes Meta Ads",
      "Création des contenus publicitaires",
      "Tests, ciblages et optimisation continue",
      "Suivi des demandes générées",
    ],
    cta: "Étudier mon acquisition",
  },
];
