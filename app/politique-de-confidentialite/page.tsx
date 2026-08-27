import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content/site";
import { clean } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Traitement des données personnelles sur le site ${clean(site.brand)}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt="">
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          {clean(site.fullName)}, éditeur du site, est responsable du traitement
          des données collectées. Contact : {clean(site.email)}.
        </p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>
          Seules les données que vous transmettez volontairement via le
          formulaire de contact sont collectées :
        </p>
        <ul>
          <li>prénom, nom et entreprise ;</li>
          <li>adresse email ;</li>
          <li>téléphone, site internet et réseaux sociaux (facultatifs) ;</li>
          <li>type de besoin, budget indicatif et message.</li>
        </ul>
        <p>
          Aucun profilage, aucune revente et aucune transmission commerciale à
          des tiers n&apos;est effectuée.
        </p>
      </section>

      <section>
        <h2>Finalité et base légale</h2>
        <p>
          Ces données servent uniquement à répondre à votre demande et, le cas
          échéant, à établir une proposition d&apos;accompagnement. La base
          légale est votre consentement, recueilli au moment de l&apos;envoi du
          formulaire.
        </p>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p>
          Les demandes sont conservées trois ans à compter du dernier contact,
          puis supprimées.
        </p>
      </section>

      <section>
        <h2>Sous-traitants</h2>
        <p>
          L&apos;acheminement des messages du formulaire peut être assuré par un
          prestataire d&apos;envoi d&apos;emails situé dans l&apos;Union
          européenne ou disposant de garanties adéquates. L&apos;hébergement du
          site est assuré par {clean(site.legal.hostName)}.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation et d&apos;opposition
          sur vos données. Pour l&apos;exercer, écrivez à{" "}
          {clean(site.email)}. Vous pouvez également introduire une réclamation
          auprès de la CNIL.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Ce site ne dépose aucun cookie publicitaire ni traceur tiers. Aucune
          bannière de consentement n&apos;est donc nécessaire. Si un outil de
          mesure d&apos;audience venait à être ajouté, cette page serait mise à
          jour et un bandeau de consentement serait mis en place.
        </p>
      </section>
    </LegalPage>
  );
}
