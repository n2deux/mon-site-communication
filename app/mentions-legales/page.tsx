import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { isPlaceholder, site } from "@/content/site";
import { clean } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${clean(site.brand)}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <LegalPage title="Mentions légales" updatedAt="[DATE]">
      <section>
        <h2>Éditeur du site</h2>
        <p>
          {clean(site.fullName)}
          {!isPlaceholder(site.legal.status) && ` — ${clean(site.legal.status)}`}
        </p>
        {!isPlaceholder(site.legal.address) && (
          <p>Adresse : {clean(site.legal.address)}</p>
        )}
        {!isPlaceholder(site.legal.siret) && (
          <p>SIRET : {clean(site.legal.siret)}</p>
        )}
        <p>Email : {clean(site.email)}</p>
        <p>Directeur de la publication : {clean(site.fullName)}</p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>{clean(site.legal.hostName)}</p>
        <p>{clean(site.legal.hostAddress)}</p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, visuels,
          vidéos, identité graphique) est protégé par le droit d&apos;auteur.
          Toute reproduction ou représentation, totale ou partielle, sans
          autorisation écrite préalable est interdite.
        </p>
        <p>
          Les projets présentés dans la rubrique Réalisations restent la
          propriété de leurs commanditaires respectifs et sont publiés à titre
          d&apos;illustration du travail réalisé.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          Les informations diffusées sur ce site sont fournies à titre
          indicatif. Malgré le soin apporté à leur mise à jour, elles peuvent
          contenir des inexactitudes. Toute erreur signalée à l&apos;adresse
          indiquée ci-dessus sera corrigée dans les meilleurs délais.
        </p>
      </section>

      <section>
        <h2>Liens externes</h2>
        <p>
          Ce site peut contenir des liens vers des sites tiers. Leur contenu
          n&apos;engage que leurs éditeurs respectifs.
        </p>
      </section>

    </LegalPage>
  );
}
