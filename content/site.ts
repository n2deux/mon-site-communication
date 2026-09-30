/**
 * Point d'entrée unique de l'identité du site.
 * Tout ce qui est entre crochets [ ... ] est un PLACEHOLDER à remplacer.
 * Les liens dont l'URL est encore un placeholder ne sont pas cliquables
 * (aucune fausse adresse n'est publiée).
 */

export const site = {
  /** Nom de marque affiché dans le header, le footer et les métadonnées */
  brand: "N2 Studio",
  /** Version courte pour le logo (2 à 12 caractères) */
  brandShort: "N2",
  /** Fichier du logo placé dans /public */
  logo: "/IMG-20260825-WA0001.jpg",
  /** Votre identité civile, utilisée dans « À propos » et les mentions légales */
  fullName: "Nolann Coïc",
  role: "Communication digitale · Contenu · Social media · Acquisition",
  city: "Rennes",
  region: "Bretagne",
  country: "France",

  email: "contactpro.n2studio@gmail.com",
  phone: "07 69 49 29 15",

  socials: {
    instagram: { label: "n2studio.web", url: "https://www.instagram.com/n2studio.web/" },
    linkedin: { label: "Nolann Coïc", url: "https://www.linkedin.com/in/nolann-c-98a674383/" },
    tiktok: { label: "n2studio.web", url: "https://www.tiktok.com/@n2studio.web" }
  },


  legal: {
    status: "Micro-entreprise",
    siret: "[SIRET]",
    address: "512 2nd Street, Suite 200, San Francisco, CA 94107, USA",
    hostName: "Netlify, Inc.",
    hostAddress: "44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis",
  },
} as const;

/** Détecte un placeholder non encore renseigné. */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith("[") && value.trim().endsWith("]");
}

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  "http://localhost:3000"
).replace(/\/$/, "");
