import { Eyebrow, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { offers } from "@/content/offers";
import { cn } from "@/lib/utils";

function Check({ light }: { light?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("mt-[0.3rem] h-3.5 w-3.5 shrink-0", light ? "text-accent" : "text-accent")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 8.4 3.2 3.1L13 4.8" />
    </svg>
  );
}

export function Offers() {
  return (
    <Section id="offres" tone="bone">
      <div className="u-container">
        <div className="max-w-2xl">
          <Eyebrow>Accompagnements</Eyebrow>
          <h2 data-reveal className="u-h2 mt-7">
            Trois façons de travailler{" "}
            <span className="u-em text-accent">ensemble</span>.
          </h2>
          <p data-reveal className="u-lead mt-7 text-mute">
            Ce ne sont pas des listes de tâches, mais trois niveaux
            d&apos;ambition. Chaque accompagnement est ensuite ajusté à votre
            secteur, votre rythme et vos objectifs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-3">
          {offers.map((offer, i) => {
            const featured = Boolean(offer.featured);
            return (
              <article
                key={offer.id}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className={cn(
                  "flex flex-col rounded-lg border p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-10",
                  featured
                    ? "border-ink bg-ink text-bone lg:-translate-y-3"
                    : "border-line bg-white",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={cn(
                      "text-[0.72rem] uppercase tracking-[0.2em]",
                      featured ? "text-bone/45" : "text-mute-light",
                    )}
                  >
                    {offer.tagline}
                  </span>
                  {featured && (
                    <span className="rounded-full bg-accent px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-bone">
                      Le plus choisi
                    </span>
                  )}
                </div>

                <h3
                  className={cn(
                    "mt-5 text-[1.75rem] font-medium leading-tight tracking-tight md:text-[2rem]",
                  )}
                >
                  {offer.name}
                </h3>

                <p
                  className={cn(
                    "mt-4 text-[0.95rem] leading-relaxed",
                    featured ? "text-bone/55" : "text-mute",
                  )}
                >
                  {offer.forWho}
                </p>

                <div
                  className={cn(
                    "mt-7 border-t pt-6",
                    featured ? "border-line-dark" : "border-line",
                  )}
                >
                  <p className="text-[1.05rem] font-medium tracking-tight">
                    {offer.price}
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 text-[0.82rem]",
                      featured ? "text-bone/40" : "text-mute-light",
                    )}
                  >
                    {offer.priceNote}
                  </p>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {offer.includes.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex gap-3 text-[0.9rem] leading-relaxed",
                        featured ? "text-bone/75" : "text-ink/75",
                      )}
                    >
                      <Check light={featured} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Button
                    href="/#contact"
                    variant={featured ? "light" : "ghost"}
                    size="md"
                    className="w-full"
                  >
                    {offer.cta}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <p
          data-reveal
          className="mt-10 max-w-2xl text-[0.92rem] leading-relaxed text-mute"
        >
          Chaque accompagnement est adapté à vos objectifs. Le montant exact
          dépend du volume de contenus, du nombre de plateformes et de la
          présence ou non de campagnes publicitaires — il vous est communiqué
          par écrit après le premier échange.
        </p>
      </div>
    </Section>
  );
}
