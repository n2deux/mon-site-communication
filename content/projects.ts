/**
 * ─────────────────────────────────────────────────────────────
 *  RÉALISATIONS
 * ─────────────────────────────────────────────────────────────
 *  Pour ajouter un projet : dupliquez un objet ci-dessous.
 *
 *  - slug        : identifiant dans l'URL (/realisations/mon-projet)
 *  - client      : nom du client, ou « [CLIENT À AJOUTER] »
 *  - category    : doit exister dans `categories` plus bas
 *  - cover       : chemin d'une image dans /public (ex. "/realisations/projet.jpg")
 *                  laissez `null` pour afficher un visuel typographique généré.
 *  - results     : laissez le tableau vide tant que vous n'avez PAS de chiffres réels.
 *                  Aucun résultat inventé ne doit apparaître sur ce site.
 *  - published   : passez à `false` pour masquer un projet sans le supprimer.
 */

export const categories = [
  "Social media",
  "Branding",
  "Création de contenu",
  "Campagnes",
  "Publicité",
  "Projets annonceurs",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  year: string;
  category: Category;
  tags: string[];
  cover: string | null;
  excerpt: string;
  context: string;
  problem: string;
  objective: string;
  strategy: string[];
  delivery: string[];
  results: { label: string; value: string }[];
  link?: { label: string; url: string } | null;
  published: boolean;
};

export const projects: Project[] = [
  {
    slug: "projet-annonceur-01",
    title: "[PROJET ANNONCEUR 01]",
    client: "[CLIENT À AJOUTER]",
    sector: "[SECTEUR]",
    year: "[ANNÉE]",
    category: "Projets annonceurs",
    tags: ["Stratégie", "Contenu", "Social media"],
    cover: null,
    excerpt:
      "[RÉSUMÉ EN UNE PHRASE — ce que le projet a permis de mettre en place.]",
    context:
      "[CONTEXTE — présentez l'entreprise, son marché et sa situation au démarrage du projet.]",
    problem:
      "[PROBLÉMATIQUE — quel était le vrai frein : visibilité, régularité, image, absence de stratégie ?]",
    objective: "[OBJECTIF — ce que le client cherchait à obtenir.]",
    strategy: [
      "[AXE STRATÉGIQUE 01]",
      "[AXE STRATÉGIQUE 02]",
      "[AXE STRATÉGIQUE 03]",
    ],
    delivery: [
      "[LIVRABLE 01 — ex. ligne éditoriale et calendrier]",
      "[LIVRABLE 02 — ex. série de contenus vidéo]",
      "[LIVRABLE 03 — ex. gestion des publications]",
    ],
    results: [],
    link: null,
    published: true,
  },
  {
    slug: "projet-annonceur-02",
    title: "[PROJET ANNONCEUR 02]",
    client: "[CLIENT À AJOUTER]",
    sector: "[SECTEUR]",
    year: "[ANNÉE]",
    category: "Campagnes",
    tags: ["Campagne", "Création", "Diffusion"],
    cover: null,
    excerpt: "[RÉSUMÉ EN UNE PHRASE.]",
    context: "[CONTEXTE]",
    problem: "[PROBLÉMATIQUE]",
    objective: "[OBJECTIF]",
    strategy: ["[AXE STRATÉGIQUE 01]", "[AXE STRATÉGIQUE 02]"],
    delivery: ["[LIVRABLE 01]", "[LIVRABLE 02]"],
    results: [],
    link: null,
    published: true,
  },
  {
    slug: "identite-de-marque-01",
    title: "[PROJET BRANDING 01]",
    client: "[CLIENT À AJOUTER]",
    sector: "[SECTEUR]",
    year: "[ANNÉE]",
    category: "Branding",
    tags: ["Positionnement", "Identité", "Ligne éditoriale"],
    cover: null,
    excerpt: "[RÉSUMÉ EN UNE PHRASE.]",
    context: "[CONTEXTE]",
    problem: "[PROBLÉMATIQUE]",
    objective: "[OBJECTIF]",
    strategy: ["[AXE STRATÉGIQUE 01]", "[AXE STRATÉGIQUE 02]"],
    delivery: ["[LIVRABLE 01]", "[LIVRABLE 02]"],
    results: [],
    link: null,
    published: true,
  },
  {
    slug: "contenu-video-01",
    title: "[PROJET CONTENU 01]",
    client: "[CLIENT À AJOUTER]",
    sector: "[SECTEUR]",
    year: "[ANNÉE]",
    category: "Création de contenu",
    tags: ["Reels", "Tournage", "Montage"],
    cover: null,
    excerpt: "[RÉSUMÉ EN UNE PHRASE.]",
    context: "[CONTEXTE]",
    problem: "[PROBLÉMATIQUE]",
    objective: "[OBJECTIF]",
    strategy: ["[AXE STRATÉGIQUE 01]", "[AXE STRATÉGIQUE 02]"],
    delivery: ["[LIVRABLE 01]", "[LIVRABLE 02]"],
    results: [],
    link: null,
    published: true,
  },
  {
    slug: "social-media-01",
    title: "[PROJET SOCIAL MEDIA 01]",
    client: "[CLIENT À AJOUTER]",
    sector: "[SECTEUR]",
    year: "[ANNÉE]",
    category: "Social media",
    tags: ["Ligne éditoriale", "Publication", "Animation"],
    cover: null,
    excerpt: "[RÉSUMÉ EN UNE PHRASE.]",
    context: "[CONTEXTE]",
    problem: "[PROBLÉMATIQUE]",
    objective: "[OBJECTIF]",
    strategy: ["[AXE STRATÉGIQUE 01]", "[AXE STRATÉGIQUE 02]"],
    delivery: ["[LIVRABLE 01]", "[LIVRABLE 02]"],
    results: [],
    link: null,
    published: true,
  },
  {
    slug: "publicite-meta-01",
    title: "[PROJET PUBLICITÉ 01]",
    client: "[CLIENT À AJOUTER]",
    sector: "[SECTEUR]",
    year: "[ANNÉE]",
    category: "Publicité",
    tags: ["Meta Ads", "Créations publicitaires", "Optimisation"],
    cover: null,
    excerpt: "[RÉSUMÉ EN UNE PHRASE.]",
    context: "[CONTEXTE]",
    problem: "[PROBLÉMATIQUE]",
    objective: "[OBJECTIF]",
    strategy: ["[AXE STRATÉGIQUE 01]", "[AXE STRATÉGIQUE 02]"],
    delivery: ["[LIVRABLE 01]", "[LIVRABLE 02]"],
    results: [],
    link: null,
    published: true,
  },
];

export const publishedProjects = projects.filter((p) => p.published);

export function getProject(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}
