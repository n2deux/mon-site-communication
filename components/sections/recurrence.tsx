import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";

const pillars = [
  {
    title: "Votre communication, suivie chaque mois",
    text: "Un calendrier, un rythme, un interlocuteur. Vous ne repartez pas de zéro à chaque campagne.",
  },
  {
    title: "Une stratégie qui évolue avec votre entreprise",
    text: "Ce qui fonctionne est amplifié, ce qui ne prend pas est abandonné. Chaque mois affine le suivant.",
  },
  {
    title: "Une présence, pas une série de posts",
    text: "L'objectif n'est pas de remplir un feed, mais de construire une image cohérente et reconnaissable.",
  },
];

export function Recurrence() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-bone md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]"
      />
      <div className="u-container relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow tone="light">Dans la durée</Eyebrow>
            <h2 data-reveal className="u-h2 mt-7">
              Un accompagnement pensé{" "}
              <span className="u-em text-accent">dans le temps</span>, pas à la
              mission.
            </h2>
            <p data-reveal className="u-lead mt-7 max-w-md text-bone/55">
              Une campagne isolée produit un pic, puis retombe. La différence se
              joue sur six ou douze mois de constance — c&apos;est sur ce
              format-là que je travaille.
            </p>
            <div data-reveal className="mt-9">
              <Button href="/#offres" variant="light" size="md">
                Découvrir les accompagnements
              </Button>
            </div>
          </div>

          <ul className="grid gap-px self-start overflow-hidden rounded-lg bg-line-dark lg:col-span-7">
            {pillars.map((pillar, i) => (
              <li
                key={pillar.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="bg-ink p-8 md:p-10"
              >
                <h3 className="u-h3">{pillar.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-bone/50">
                  {pillar.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
