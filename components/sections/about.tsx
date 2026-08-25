import { Eyebrow, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { clean } from "@/lib/utils";

const facts = [
  {
    label: "Formation",
    text: "2e année de BTS Communication, en formation initiale à Rennes.",
  },
  {
    label: "Projets annonceurs",
    text: "Des missions menées toute l'année avec de véritables annonceurs : cadrage, stratégie, production, recommandations.",
  },
  {
    label: "Terrain",
    text: "Plusieurs expériences en entreprise, au contact des contraintes réelles d'une organisation.",
  },
  {
    label: "Spécialisation",
    text: "Le digital : contenu, réseaux sociaux et acquisition — là où les TPE et PME ont le plus à gagner.",
  },
];

export function About() {
  return (
    <Section id="a-propos" tone="paper">
      <div className="u-container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>À propos</Eyebrow>
            <h2 data-reveal className="u-h2 mt-7">
              Formation en communication,{" "}
              <span className="u-em text-accent">pratique du digital</span>.
            </h2>

            <div
              data-reveal
              className="mt-8 space-y-5 text-[1rem] leading-relaxed text-mute"
            >
              <p>
                Je suis {clean(site.fullName)}, en deuxième année de BTS
                Communication à {site.city}. Ma formation me place toute
                l&apos;année sur des projets avec de vrais annonceurs : des
                objectifs concrets, des contraintes de budget, des délais, et un
                client à convaincre.
              </p>
              <p>
                En parallèle, je développe une activité freelance dédiée à la
                communication digitale des TPE et PME. Ce n&apos;est pas un
                complément d&apos;activité : c&apos;est ce que je construis, avec
                l&apos;objectif d&apos;accompagner un nombre volontairement
                limité d&apos;entreprises, sérieusement et dans la durée.
              </p>
              <p>
                Ce que j&apos;apporte : la méthode d&apos;une formation en
                communication, la maîtrise des formats qui fonctionnent
                aujourd&apos;hui, et une disponibilité qu&apos;une agence
                accorde rarement à une structure de votre taille.
              </p>
            </div>

            <div data-reveal className="mt-9">
              <Button href="/#contact" size="md">
                Échanger sur mes objectifs
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Emplacement portrait — remplacer par une photo professionnelle */}
            <div
              data-reveal
              className="relative flex aspect-[4/3] items-center justify-center rounded-lg border border-line bg-bone md:aspect-[16/10]"
            >
              <div className="px-8 text-center">
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-mute-light">
                  Emplacement portrait
                </p>
                <p className="u-em mt-3 text-[1.4rem] text-mute">
                  [PHOTO PROFESSIONNELLE À AJOUTER]
                </p>
                <p className="mt-3 text-[0.82rem] text-mute-light">
                  Déposez l&apos;image dans /public et renseignez-la dans ce
                  composant
                </p>
              </div>
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                  className="bg-white p-7"
                >
                  <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-accent">
                    {fact.label}
                  </dt>
                  <dd className="mt-3 text-[0.93rem] leading-relaxed text-ink/75">
                    {fact.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
