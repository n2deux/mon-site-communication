# Site freelance — Communication digitale

Site vitrine orienté conversion, construit avec **Next.js 16 · React 19 · TypeScript · Tailwind CSS 4**.
Aucune dépendance d'animation : tout passe par CSS et un unique `IntersectionObserver`.

---

## Par où commencer

Trois documents, selon qui vous êtes.

| Vous êtes | Lisez | Contenu |
| --- | --- | --- |
| **Le propriétaire du site** | **[LISEZ-MOI.md](LISEZ-MOI.md)** | Guide complet et sans jargon : installer, personnaliser, brancher le formulaire, mettre en ligne, budget réel |
| **Un assistant IA** (Claude Code, Cursor, Copilot) | **[AGENT.md](AGENT.md)** | Contexte du projet, architecture, conventions, règles à respecter et liste des tâches |
| **Un développeur** | la suite de ce fichier | Référence technique |

> **Si vous découvrez ce dépôt : ouvrez [LISEZ-MOI.md](LISEZ-MOI.md) en premier.**
> Tout y est expliqué, y compris pour quelqu'un qui n'a jamais touché à du code.

### L'essentiel en trois points

1. **Le site est fonctionnel mais volontairement incomplet.** Aucun faux client, faux chiffre
   ou faux témoignage n'a été inséré. Partout où une information réelle manque, un texte
   `[ENTRE CROCHETS]` marque l'emplacement à remplir.
2. **Tout le contenu modifiable est dans le dossier [`content/`](content/).** Nom de marque,
   tarifs, réalisations, FAQ, parcours : rien d'autre n'est à toucher pour personnaliser le site.
3. **Le formulaire de contact n'envoie encore rien** tant qu'il n'est pas branché sur un
   service d'envoi (§5). En attendant, il affiche un message honnête plutôt qu'une fausse
   confirmation.

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

## 7. Déploiement

Cible recommandée : **Cloudflare Pages** ou **Netlify**. Leurs offres gratuites autorisent
l'usage commercial et suffisent largement au trafic d'un site vitrine.

1. Poussez le dossier sur un dépôt GitHub.
2. Sur pages.cloudflare.com (ou netlify.com) : connectez le dépôt. Next.js est détecté seul.
3. **Environment variables** : ajoutez `NEXT_PUBLIC_SITE_URL` et les variables du
   formulaire (§6), en Production et en Preview.
4. **Deploy**, puis section **Domains** pour brancher votre nom de domaine.
   Le certificat HTTPS est automatique et gratuit.

> **À propos de Vercel.** C'est la plateforme la plus connue pour Next.js et son offre
> Hobby est gratuite, mais ses conditions d'utilisation la réservent à un usage **non
> commercial**. Un site professionnel qui génère des demandes de devis en sort. Soit vous
> prenez leur offre payante, soit vous choisissez Cloudflare Pages ou Netlify.

### Développer sans installer Node.js (Chromebook, poste verrouillé)

Une fois le dépôt sur GitHub : bouton **Code → Codespaces → Create codespace**. Un éditeur
complet s'ouvre dans le navigateur. `npm install` puis `npm run dev`, et une notification
*Open in Browser* ouvre le site dans un onglet. Rien à installer sur la machine.

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
