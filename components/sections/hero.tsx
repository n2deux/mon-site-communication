import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { clean } from "@/lib/utils";

const specialties = [
  "Stratégie digitale",
  "Création de contenu",
  "Reels & vidéo",
  "Social media",
  "Meta Ads",
  "Acquisition",
  "Image de marque",
  "Reporting mensuel",
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-bone pt-32 md:pt-40 lg:pt-44"
    >
      {/* Halo très discret : donne de la profondeur sans gradient visible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent-soft/60 blur-[110px]"
      />

      <div className="u-container relative">
        <div className="max-w-5xl">
          <p
            data-reveal
            className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-mute"
          >
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              Freelance · {site.city}
            </span>
            <span aria-hidden="true" className="text-mute-light">
              /
            </span>
            <span>Accompagnement à distance, partout en France</span>
          </p>

          <h1
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="u-display mt-8"
          >
            Votre communication mérite mieux que{" "}
            <span className="u-em text-accent">quelques publications</span>{" "}
            improvisées.
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="u-lead mt-8 max-w-2xl text-mute"
          >
            J&apos;accompagne les entreprises dans leur communication digitale :
            stratégie, création de contenu, réseaux sociaux et acquisition. Une
            présence construite mois après mois, pas au coup par coup.
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/#contact">Parler de mon projet</Button>
            <Button href="/#realisations" variant="ghost">
              Voir mes réalisations
            </Button>
          </div>

          <p
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            className="mt-8 text-[0.85rem] text-mute-light"
          >
            Premier échange de 30 minutes, sans engagement · Réponse sous 24 h
            ouvrées
          </p>
        </div>

        {/* Bandeau de spécialités : micro-preuve de périmètre */}
        <div
          data-reveal
          style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
          className="relative mt-20 overflow-hidden border-y border-line py-5 md:mt-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bone to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bone to-transparent"
          />
          <div className="marquee-track flex w-max items-center gap-10 md:gap-14">
            {[...specialties, ...specialties].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-10 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-mute md:gap-14"
              >
                {item}
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-accent/60"
                />
              </span>
            ))}
          </div>
        </div>

        <p className="sr-only">
          {clean(site.brand)} — {site.role}
        </p>
      </div>
    </section>
  );
}
