# Site freelance — Communication digitale

Site vitrine orienté conversion, construit avec **Next.js 16 · React 19 · TypeScript · Tailwind CSS 4**.
Aucune dépendance d'animation : tout passe par CSS et un unique `IntersectionObserver`.

---

## 1. Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000

Autres commandes :

```bash
npm run build      # build de production
npm start          # sert le build de production
npm run typecheck  # vérification TypeScript
```

---

## 2. Arborescence

```
site-freelance/
├── app/
│   ├── layout.tsx                        # <head>, polices, SEO global, données structurées
│   ├── page.tsx                          # page d'accueil (ordre des sections)
│   ├── globals.css                       # design tokens + utilitaires
│   ├── icon.tsx                          # favicon générée (monogramme)
│   ├── opengraph-image.tsx               # image de partage (1200×630)
│   ├── sitemap.ts / robots.ts            # SEO technique
│   ├── not-found.tsx                     # page 404
│   ├── api/contact/route.ts              # réception du formulaire
│   ├── realisations/[slug]/page.tsx      # page détail d'un projet
│   ├── mentions-legales/page.tsx
│   └── politique-de-confidentialite/page.tsx
│
├── components/
│   ├── site-header.tsx                   # navigation + menu mobile
│   ├── site-footer.tsx
│   ├── contact-form.tsx                  # formulaire (client)
│   ├── project-card.tsx
│   ├── legal-page.tsx
│   ├── sections/                         # une section = un fichier
│   └── ui/                               # bouton, section, reveal
│
├── content/                              # ← TOUT LE CONTENU MODIFIABLE
│   ├── site.ts                           # identité, email, réseaux, mentions légales
│   ├── nav.ts                            # menus
│   ├── services.ts                       # 5 domaines d'intervention
│   ├── process.ts                        # les 5 étapes de la méthode
│   ├── offers.ts                         # les 3 accompagnements + tarifs
│   ├── projects.ts                       # ← les réalisations
│   ├── proof.ts                          # parcours, outils, certifications, témoignages
│   └── faq.ts
│
├── lib/utils.ts
└── public/
    ├── realisations/                     # visuels des projets
    └── clients/                          # logos clients (avec autorisation écrite)
```

---

## 3. À personnaliser en priorité

Tout ce qui est écrit `[ENTRE CROCHETS]` est un **placeholder volontaire**.
Aucun faux client, faux chiffre ou faux témoignage n'a été inséré.

| Fichier | À renseigner |
| --- | --- |
| `content/site.ts` | nom de marque, prénom/nom, email, Instagram, LinkedIn, statut juridique, SIRET, hébergeur |
| `content/offers.ts` | les montants « à partir de » des trois accompagnements |
| `content/projects.ts` | vos vrais projets (voir §4) |
| `content/proof.ts` | établissement, nombre de stages, certifications, témoignages, logos |
| `components/sections/about.tsx` | remplacer l'emplacement portrait par votre photo |
| `app/mentions-legales/page.tsx` | date de mise à jour |

Un lien dont l'URL est encore un placeholder n'est **pas** rendu cliquable :
le site n'affiche jamais d'adresse fictive.

---

## 4. Ajouter une réalisation

1. Déposez le visuel dans `public/realisations/` (JPG ou WebP, ~1600 px de large).
2. Dupliquez un objet dans `content/projects.ts` :

```ts
{
  slug: "restaurant-le-comptoir",        // devient /realisations/restaurant-le-comptoir
  title: "Refonte de la présence Instagram",
  client: "Le Comptoir",
  sector: "Restauration",
  year: "2026",
  category: "Social media",              // doit exister dans `categories`
  tags: ["Stratégie", "Reels", "Community management"],
  cover: "/realisations/le-comptoir.jpg", // ou null → visuel typographique généré
  excerpt: "…",
  context: "…",
  problem: "…",
  objective: "…",
  strategy: ["…", "…"],
  delivery: ["…", "…"],
  results: [{ label: "Portée mensuelle", value: "+X %" }], // vide tant qu'aucun chiffre validé
  link: null,
  published: true,                        // false pour masquer sans supprimer
}
```

La page détail, le filtre par catégorie et le sitemap se mettent à jour automatiquement.

> Les résultats chiffrés ne s'affichent que si `results` est rempli. Tant qu'il est
> vide, la page indique explicitement qu'aucun chiffre n'est publié. Ne remplissez ce
> champ qu'avec des données mesurées et validées par le client.

---

## 5. Formulaire de contact

Le formulaire poste sur `/api/contact`. Deux branchements sont prévus, au choix.
**Tant qu'aucun n'est configuré, l'API renvoie une erreur explicite** (503) invitant
le visiteur à écrire par email — jamais un faux succès.

Créez un fichier `.env.local` à la racine (voir `.env.example`) :

### Option A — Resend (recommandé)

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO_EMAIL=votre-adresse@domaine.fr
CONTACT_FROM_EMAIL=site@votre-domaine.fr   # domaine vérifié dans Resend
```

Créez un compte sur resend.com, vérifiez votre domaine, générez une clé API.
Le `reply_to` est automatiquement l'adresse du prospect : vous répondez directement.

### Option B — Formspree

```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Aucune clé secrète requise, mise en place en deux minutes.

### Sécurité déjà en place

- champ piège anti-robots (honeypot) invisible ;
- validation serveur de tous les champs obligatoires et du format email ;
- consentement RGPD obligatoire ;
- longueur des champs plafonnée ;
- aucune donnée stockée côté site.

---

## 6. Variables d'environnement

| Variable | Obligatoire | Rôle |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | oui en production | URL canonique, Open Graph, sitemap |
| `RESEND_API_KEY` | option A | clé API Resend |
| `CONTACT_TO_EMAIL` | option A | adresse qui reçoit les demandes |
| `CONTACT_FROM_EMAIL` | option A | expéditeur (domaine vérifié) |
| `FORMSPREE_ENDPOINT` | option B | endpoint Formspree |

---

## 7. Déploiement (Vercel)

1. Poussez le dossier sur un dépôt GitHub.
2. Sur vercel.com : **Add New → Project → Import**. Le framework est détecté seul.
3. **Settings → Environment Variables** : ajoutez `NEXT_PUBLIC_SITE_URL` et les
   variables du formulaire, pour les environnements *Production* et *Preview*.
4. **Deploy**, puis **Settings → Domains** pour brancher votre nom de domaine.

Après mise en ligne :

- Google Search Console → ajouter la propriété → soumettre `/sitemap.xml` ;
- Google Business Profile → créer la fiche « communication digitale, Rennes » et y
  pointer le site (levier local le plus rentable pour les requêtes « … Rennes ») ;
- vérifier l'aperçu de partage sur LinkedIn (Post Inspector) et WhatsApp.

---

## 8. Choix techniques

- **Zéro librairie d'animation.** Les apparitions au scroll passent par un unique
  `IntersectionObserver` (`components/ui/reveal-provider.tsx`) et des transitions CSS.
  Framer Motion aurait ajouté ~40 ko gzip pour le même rendu.
- **FAQ en `<details>/<summary>` natifs** : accessible au clavier, fonctionne sans JS.
- **Polices via `next/font`** : auto-hébergées, préchargées, aucun appel réseau externe.
- **Favicon et image Open Graph générées** par `next/og` : rien à maintenir, elles
  suivent automatiquement le nom de marque défini dans `content/site.ts`.
- **`prefers-reduced-motion`** respecté sur toutes les animations.
- **Pages statiques** : accueil, réalisations et pages légales sont pré-rendues.
  Seule l'API du formulaire est dynamique.
