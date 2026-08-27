import { Eyebrow, Section } from "@/components/ui/section";
import { clientLogos, credentials, testimonials, tools } from "@/content/proof";
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

        {/* Témoignages */}
        <div data-reveal className="mt-14">
          <h3 className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
            Ce qu&apos;en disent les clients
          </h3>
          <div className="mt-5">
            {testimonials.length > 0 ? (
              <ul className="grid gap-6 md:grid-cols-2">
                {testimonials.map((t) => (
                  <li
                    key={t.author}
                    className="rounded-lg border border-line-dark p-8"
                  >
                    <blockquote className="text-[1.05rem] leading-relaxed text-bone/80">
                      « {t.quote} »
                    </blockquote>
                    <p className="mt-6 text-[0.85rem] text-bone/45">
                      {t.author} — {t.role}, {t.company}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptySlot
                title="Emplacement témoignages"
                hint="Les premiers retours clients seront publiés ici, avec leur accord écrit. Aucun avis fictif ne figure sur ce site."
              />
            )}
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-8 w-auto opacity-60 transition-opacity duration-300 hover:opacity-100"
                      loading="lazy"
                    />
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
