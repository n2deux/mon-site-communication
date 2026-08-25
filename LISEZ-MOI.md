# Votre site — guide de reprise

Vous venez de recevoir l'intégralité de votre site internet : le code, les textes,
la structure et la documentation. Il vous appartient. Aucun abonnement, aucune licence,
aucun compte à ouvrir chez qui que ce soit pour le posséder.

Ce document explique **ce que vous avez**, **ce qu'il reste à faire** et **combien ça coûte**.
Il ne demande aucune compétence technique. Comptez vingt minutes de lecture.

---

## 1. Ce que contient le dossier

Un site vitrine complet, pensé pour obtenir des prises de contact :

- une page d'accueil en douze sections (accroche, constat, services, méthode,
  réalisations, offres, à propos, crédibilité, FAQ, contact) ;
- une page dédiée par réalisation, générée automatiquement ;
- les mentions légales et la politique de confidentialité ;
- un formulaire de contact complet ;
- tout le référencement technique (titre, description, plan du site, aperçu de partage,
  favicon).

Le site est **volontairement incomplet sur un point** : il ne contient aucun faux client,
aucun faux chiffre, aucun faux témoignage et aucun logo non autorisé. Partout où une
information réelle manque, vous trouverez un texte `[ENTRE CROCHETS]`. C'est un choix
assumé : un site honnête et un peu vide est plus crédible qu'un site rempli de preuves
sociales inventées — et il vous évite un problème le jour où un prospect vérifie.

---

## 2. Ouvrir le site sur votre ordinateur

**Une seule chose à installer :** Node.js. Téléchargez la version « LTS » sur
[nodejs.org](https://nodejs.org), installez-la, c'est tout.

Ensuite, ouvrez le Terminal (sur Mac : Applications → Utilitaires → Terminal) et tapez
ces trois lignes, une par une :

```bash
cd chemin/vers/le-dossier-du-site
npm install
npm run dev
```

Ouvrez ensuite **http://localhost:3000** dans votre navigateur. Le site s'affiche.
Toute modification enregistrée dans un fichier apparaît immédiatement à l'écran.

Pour arrêter : `Ctrl + C` dans le Terminal.

> `npm install` n'est à faire qu'une seule fois. Les fois suivantes, `npm run dev` suffit.

---

## 3. Les six choses à personnaliser

Tout le contenu modifiable est regroupé dans un seul dossier : **`content/`**.
Vous n'avez pas besoin de toucher au reste. Ouvrez ces fichiers avec un éditeur de texte
(Visual Studio Code, gratuit, est le plus simple) et remplacez ce qui est entre crochets.

| Priorité | Fichier | Ce que vous renseignez |
| --- | --- | --- |
| 1 | `content/site.ts` | Votre nom de marque, votre prénom/nom, votre email, Instagram, LinkedIn, et plus tard votre SIRET |
| 2 | `content/offers.ts` | Les trois tarifs mensuels (`[À DÉFINIR]`) |
| 3 | `content/projects.ts` | Vos vraies réalisations |
| 4 | `content/proof.ts` | Votre établissement, vos stages, vos certifications, vos témoignages |
| 5 | `components/sections/about.tsx` | Votre photo professionnelle, à la place de l'emplacement prévu |
| 6 | `app/mentions-legales/page.tsx` | La date de mise à jour |

**Deux garde-fous ont été intégrés :**

- un lien dont l'adresse est encore un placeholder n'est pas rendu cliquable — le site
  n'affichera jamais une fausse adresse Instagram ou un faux email ;
- les résultats chiffrés d'un projet ne s'affichent que si vous les remplissez. Tant
  qu'ils sont vides, la page indique explicitement qu'aucun chiffre n'est publié.

### Ajouter une réalisation

1. Déposez l'image dans le dossier `public/realisations/`.
2. Dans `content/projects.ts`, copiez un bloc existant et remplacez son contenu.

La page de détail, le filtre par catégorie et le plan du site se mettent à jour tout seuls.
Ne remplissez le champ `results` qu'avec des chiffres réellement mesurés et validés par
le client concerné.

---

## 4. Le formulaire de contact

**En l'état, le formulaire n'envoie encore rien.** C'est normal : il faut le brancher sur
un service d'envoi, ce qui demande votre propre compte. Tant que ce n'est pas fait, un
visiteur qui l'utilise reçoit un message clair l'invitant à écrire par email — jamais un
faux message de confirmation.

Deux solutions, toutes deux gratuites pour votre volume :

### Option A — Formspree (la plus rapide, 5 minutes)

1. Créez un compte sur [formspree.io](https://formspree.io).
2. Créez un formulaire, copiez l'adresse fournie (elle ressemble à
   `https://formspree.io/f/abcdwxyz`).
3. À la racine du dossier, créez un fichier nommé `.env.local` contenant :

```
FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
```

### Option B — Resend (plus professionnel)

Les emails arrivent depuis votre propre nom de domaine. Créez un compte sur
[resend.com](https://resend.com), vérifiez votre domaine, générez une clé, puis dans
`.env.local` :

```
RESEND_API_KEY=re_votre_cle
CONTACT_TO_EMAIL=votre-adresse@votredomaine.fr
CONTACT_FROM_EMAIL=site@votredomaine.fr
```

Dans les deux cas, quand vous répondez à la notification reçue, votre réponse part
directement au prospect : son adresse est automatiquement définie comme destinataire.

> Le fichier `.env.local` contient vos clés secrètes. Il ne doit jamais être partagé ni
> publié. Un modèle vide est fourni : `.env.example`.

---

## 5. Mettre le site en ligne

### Ce que ça coûte réellement

| Poste | Coût | Obligatoire |
| --- | --- | --- |
| Nom de domaine `.fr` | environ 10 à 15 € par an | oui |
| Hébergement | 0 € | — |
| Envoi du formulaire | 0 € | oui |
| Email professionnel à votre nom de domaine | 0 à 5 € par mois | recommandé |

Ordres de grandeur, à vérifier au moment de l'achat.

### La marche à suivre

1. **Achetez votre nom de domaine** chez un registrar (OVH, Gandi, Infomaniak,
   Cloudflare). Privilégiez un `.fr` court, facile à dicter au téléphone.

2. **Mettez le code sur GitHub.** Créez un compte gratuit sur github.com, créez un dépôt
   **privé**, et déposez-y le dossier. C'est ce qui permet à l'hébergeur de récupérer le
   site et de le remettre à jour automatiquement à chaque modification.

3. **Publiez sur Cloudflare Pages ou Netlify.** Les deux ont une offre gratuite qui
   autorise l'usage commercial. Connectez le dépôt GitHub, la plateforme détecte seule
   qu'il s'agit d'un projet Next.js.

4. **Ajoutez vos variables.** Dans les réglages de la plateforme, section
   « Environment variables », recopiez le contenu de votre `.env.local`, et ajoutez :
   `NEXT_PUBLIC_SITE_URL=https://www.votredomaine.fr`

5. **Branchez le domaine** depuis la section « Domains » de la plateforme. Le certificat
   HTTPS est automatique et gratuit.

> **Attention à Vercel.** C'est la plateforme la plus connue pour ce type de site et son
> offre gratuite est excellente, mais ses conditions d'utilisation la réservent à un
> usage **non commercial**. Un site professionnel qui génère des demandes de devis en
> sort. Soit vous prenez leur offre payante (environ 20 $ par mois), soit vous choisissez
> Cloudflare Pages ou Netlify, dont les offres gratuites autorisent l'usage commercial.

### Une fois en ligne

- Déclarez le site dans **Google Search Console** et soumettez `votredomaine.fr/sitemap.xml`.
- Créez une **fiche Google Business Profile** et faites-la pointer vers le site.
  Pour des recherches locales, c'est le levier le plus rentable qui existe.
- Vérifiez l'aperçu du lien sur LinkedIn et WhatsApp : il est déjà généré automatiquement.

---

## 6. Si vous travaillez avec une IA

Le dossier contient un fichier **`AGENT.md`** écrit spécialement pour un assistant de
développement (Claude Code, Cursor, Copilot…). Il décrit l'architecture, les conventions,
les règles à respecter et la liste précise des tâches restantes.

Ouvrez simplement le projet avec votre assistant et demandez-lui de lire `AGENT.md`.
Il saura quoi faire sans que vous ayez à lui expliquer quoi que ce soit.

---

## 7. Aide-mémoire

```bash
npm install      # à faire une seule fois, après réception du dossier
npm run dev      # lancer le site en local (http://localhost:3000)
npm run build    # vérifier que tout compile avant de publier
```

Si `npm run build` affiche une erreur, ne publiez pas : le problème vient presque toujours
d'une virgule ou d'un guillemet manquant dans un fichier de `content/`. Le message d'erreur
indique le fichier et la ligne.
