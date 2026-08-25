import { Eyebrow, Section } from "@/components/ui/section";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section id="methode" tone="paper">
      <div className="u-container">
        <div className="max-w-2xl">
          <Eyebrow>Méthode</Eyebrow>
          <h2 data-reveal className="u-h2 mt-7">
            Comment se déroule un{" "}
            <span className="u-em text-accent">accompagnement</span>.
          </h2>
          <p data-reveal className="u-lead mt-7 text-mute">
            Un cadre clair dès le départ : vous savez ce qui est produit, quand
            c&apos;est publié, et ce que cela donne. Aucune zone grise.
          </p>
        </div>

        <ol className="mt-14 md:mt-20">
          {processSteps.map((step, i) => (
            <li
              key={step.step}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="group grid gap-4 border-t border-line py-8 last:border-b md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="flex items-center gap-4 md:col-span-3 md:block">
                <span className="block text-[2.4rem] font-medium leading-none tracking-tight text-line transition-colors duration-500 group-hover:text-accent md:text-[3.2rem]">
                  {step.step}
                </span>
                <span className="text-[0.75rem] uppercase tracking-[0.16em] text-mute-light md:mt-4 md:block">
                  {step.duration}
                </span>
              </div>

              <h3 className="u-h3 md:col-span-3">{step.title}</h3>

              <p className="max-w-2xl text-[0.97rem] leading-relaxed text-mute md:col-span-6">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
