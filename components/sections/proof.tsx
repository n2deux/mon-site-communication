import { Eyebrow, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { clientLogos, credentials, tools } from "@/content/proof";
import { reviewPage } from "@/content/reviews";
import { clean } from "@/lib/utils";

/** Emplacement neutre : signale ce qui viendra, sans jamais simuler une preuve. */
function EmptySlot({
  title,
  hint,
}: {
  title: string;
  hint: string;
}) {
  return (
    <div className="flex min-h-[9rem] flex-col justify-center rounded-md border border-dashed border-line-dark p-7">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/35">
        {title}
      </p>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-bone/40">{hint}</p>
    </div>
  );
}

export function Proof() {
  return (
    <Section id="preuves" tone="ink">
      <div className="u-container">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Crédibilité</Eyebrow>
          <h2 data-reveal className="u-h2 mt-7">
            Ce sur quoi vous pouvez{" "}
            <span className="u-em text-accent">vous appuyer</span>.
          </h2>
          <p data-reveal className="u-lead mt-7 text-bone/55">
            Cette page ne contient aucun chiffre inventé, aucun logo non
            autorisé et aucun témoignage fabriqué. Ce qui n&apos;est pas encore
            là le sera, à mesure que les collaborations avancent.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div data-reveal className="rounded-lg border border-line-dark bg-ink p-6">
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
              Transparence
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-bone/75">
              Les éléments publiés sont vérifiables. Pas de promesse floue, pas
              de résultat chiffré non validé.
            </p>
          </div>
          <div data-reveal className="rounded-lg border border-line-dark bg-ink p-6">
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
              Méthode
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-bone/75">
              Stratégie, contenu, réseaux sociaux et acquisition sont pensés pour
              bâtir une présence cohérente, mois après mois.
            </p>
          </div>
          <div data-reveal className="rounded-lg border border-line-dark bg-ink p-6">
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
              Contact direct
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-bone/75">
              Email, Instagram, TikTok et LinkedIn sont ouverts. Une réponse est
              donnée sous 24 h ouvrées.
            </p>
          </div>
        </div>

        {/* Parcours */}
        <dl className="mt-14 grid gap-px overflow-hidden rounded-lg bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item, i) => (
            <div
              key={item.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="bg-ink p-7"
            >
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
                {item.label}
              </dt>
              <dd className="mt-4 text-[1.25rem] font-medium leading-tight tracking-tight">
                {clean(item.value)}
              </dd>
              <dd className="mt-2.5 text-[0.85rem] leading-relaxed text-bone/45">
                {clean(item.detail)}
              </dd>
            </div>
          ))}
        </dl>

        {/* Outils */}
        <div data-reveal className="mt-14">
          <h3 className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
            Outils utilisés au quotidien
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-line-dark px-4 py-2 text-[0.85rem] text-bone/60"
              >
                {clean(tool)}
              </li>
            ))}
          </ul>
        </div>

        {/* Avis Google */}
        <div data-reveal className="mt-14">
          <h3 className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
            Avis Google
          </h3>
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-bone/60">
              {reviewPage.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href={reviewPage.googleProfileUrl}
                variant="outline-light"
                size="md"
              >
                {reviewPage.readButton}
              </Button>
              <Button
                href={reviewPage.googleReviewUrl}
                variant="outline-light"
                size="md"
              >
                {reviewPage.button}
              </Button>
            </div>
          </div>
        </div>

        {/* Logos clients */}
        <div data-reveal className="mt-14">
          <h3 className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
            Ils m&apos;ont fait confiance
          </h3>
          <div className="mt-5">
            {clientLogos.length > 0 ? (
              <ul className="flex flex-wrap items-center gap-x-12 gap-y-8">
                {clientLogos.map((logo) => (
                  <li key={logo.name}>
                    {logo.type === "portrait" ? (
                      <figure className="flex flex-col items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={logo.src}
                          alt={`Portrait de ${logo.name}`}
                          className="h-20 w-auto max-w-20 rounded-md object-contain"
                          loading="lazy"
                        />
                        <figcaption className="text-[0.85rem] text-bone/60">
                          {clean(logo.name)}
                        </figcaption>
                      </figure>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-8 w-auto opacity-60 transition-opacity duration-300 hover:opacity-100"
                        loading="lazy"
                      />
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <EmptySlot
                title="Emplacement logos clients"
                hint="Les logos seront affichés uniquement après autorisation écrite de chaque entreprise."
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
