export type Service = {
  index: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Stratégie",
    summary:
      "Avant de produire, on décide. Positionnement, message, cibles et ligne éditoriale sont posés noir sur blanc.",
    points: [
      "Audit de la présence digitale existante",
      "Positionnement et messages clés",
      "Ligne éditoriale et piliers de contenu",
      "Calendrier de publication mensuel",
    ],
  },
  {
    index: "02",
    title: "Création de contenu",
    summary:
      "Des contenus qui ressemblent à votre entreprise : soignés, réguliers, pensés pour être vus jusqu'au bout.",
    points: [
      "Reels et formats verticaux (TikTok, Instagram)",
      "Tournage léger et montage vidéo",
      "Visuels, carrousels, templates réutilisables",
      "Écriture et storytelling de marque",
    ],
  },
  {
    index: "03",
    title: "Social media",
    summary:
      "Vos réseaux tenus sérieusement : publication, animation, réponses, veille — sans que vous ayez à y penser.",
    points: [
      "Gestion et programmation des publications",
      "Animation de la communauté et messages",
      "Adaptation des formats par plateforme",
      "Cohérence entre tous vos points de contact",
    ],
  },
  {
    index: "04",
    title: "Acquisition",
    summary:
      "Quand la visibilité organique ne suffit plus : des campagnes cadrées, mesurées et optimisées.",
    points: [
      "Campagnes Meta Ads (Facebook, Instagram)",
      "Création des visuels et vidéos publicitaires",
      "Ciblages, tests et optimisation en continu",
      "Génération de demandes de contact",
    ],
  },
  {
    index: "05",
    title: "Analyse",
    summary:
      "Ce qui n'est pas mesuré ne s'améliore pas. Chaque mois, un point clair sur ce qui fonctionne.",
    points: [
      "Suivi des indicateurs qui comptent vraiment",
      "Reporting mensuel lisible, sans jargon",
      "Recommandations concrètes pour le mois suivant",
      "Ajustement de la stratégie dans la durée",
    ],
  },
];
