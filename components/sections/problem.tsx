import { Eyebrow, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const symptoms = [
  {
    title: "Des publications quand il reste du temps",
    text: "Trois posts en une semaine, puis plus rien pendant un mois. L'algorithme comme vos clients retiennent surtout les silences.",
  },
  {
    title: "Un contenu en dessous de la réalité",
    text: "Votre travail est soigné. Vos photos, vos textes et vos vidéos ne le montrent pas encore.",
  },
  {
    title: "Aucune ligne directrice",
    text: "On publie ce qui vient, sans savoir à qui l'on parle ni ce que l'on cherche à provoquer.",
  },
  {
    title: "La vidéo repoussée à plus tard",
    text: "Le format qui porte aujourd'hui la visibilité est aussi celui qui demande le plus de méthode. Alors il attend.",
  },
  {
    title: "Une communication dispersée",
    text: "Le site, Instagram, Google, les supports imprimés : trois tons différents, trois promesses différentes.",
  },
  {
    title: "Du temps que vous n'avez pas",
    text: "Diriger une entreprise et alimenter sérieusement ses réseaux : ce sont deux métiers, rarement compatibles.",
  },
];

export function Problem() {
  return (
    <Section id="probleme" tone="ink">
      <div className="u-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow tone="light">Le constat</Eyebrow>
              <h2 data-reveal className="u-h2 mt-7">
                Votre entreprise n&apos;a pas besoin de publier{" "}
                <span className="u-em text-bone/45">plus</span>. Elle a besoin de
                publier <span className="u-em text-accent">mieux</span>.
              </h2>
              <p data-reveal className="u-lead mt-7 max-w-md text-bone/55">
                La plupart des entreprises que je rencontre ne manquent ni
                d&apos;idées ni de qualité. Elles manquent de méthode, de
                régularité et de temps. C&apos;est exactement là que
                j&apos;interviens.
              </p>
              <div data-reveal className="mt-9">
                <Button href="/#services" variant="outline-light" size="md">
                  Voir comment j&apos;interviens
                </Button>
              </div>
            </div>
          </div>

          <ul className="lg:col-span-7">
            {symptoms.map((item, i) => (
              <li
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                className="group border-b border-line-dark py-7 first:border-t first:border-line-dark"
              >
                <div className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-6 shrink-0 bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-10"
                  />
                  <div>
                    <h3 className="u-h3 text-bone">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-[0.97rem] leading-relaxed text-bone/50">
                      {item.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
