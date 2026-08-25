import { Eyebrow, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export function Services() {
  return (
    <Section id="services" tone="bone">
      <div className="u-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Domaines d&apos;intervention</Eyebrow>
            <h2 data-reveal className="u-h2 mt-7">
              Une communication digitale prise en charge{" "}
              <span className="u-em text-accent">de bout en bout</span>.
            </h2>
          </div>
          <p
            data-reveal
            className="max-w-sm text-[0.97rem] leading-relaxed text-mute"
          >
            Cinq domaines qui fonctionnent ensemble. Selon votre situation, on
            active tout, ou seulement ce qui compte pour vos objectifs.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-line md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              className="group relative flex flex-col bg-bone p-8 transition-colors duration-500 hover:bg-white md:p-10"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[0.75rem] font-medium tabular-nums tracking-[0.16em] text-mute-light">
                  {service.index}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-line transition-colors duration-500 group-hover:bg-accent"
                />
              </div>

              <h3 className="u-h3 mt-7">{service.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-mute">
                {service.summary}
              </p>

              <ul className="mt-7 space-y-2.5 border-t border-line pt-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[0.88rem] leading-relaxed text-ink/70"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent/70"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Carte de conversion en fin de grille */}
          <div className="flex flex-col justify-between bg-ink p-8 text-bone md:p-10">
            <div>
              <h3 className="u-h3">Vous ne savez pas par où commencer&nbsp;?</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-bone/55">
                C&apos;est le cas le plus fréquent. Un premier échange suffit
                pour identifier ce qui aurait le plus d&apos;impact chez vous,
                dès le premier mois.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/#contact" variant="light" size="md">
                Échanger sur mes objectifs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
