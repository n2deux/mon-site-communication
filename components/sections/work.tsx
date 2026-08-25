"use client";

import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { categories, publishedProjects } from "@/content/projects";
import { cn } from "@/lib/utils";

const ALL = "Tout" as const;

export function Work() {
  const [active, setActive] = useState<string>(ALL);

  // On n'affiche que les filtres réellement représentés dans les projets.
  const availableFilters = useMemo(() => {
    const used = new Set(publishedProjects.map((p) => p.category));
    return [ALL, ...categories.filter((c) => used.has(c))];
  }, []);

  const visible = useMemo(
    () =>
      active === ALL
        ? publishedProjects
        : publishedProjects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section
      id="realisations"
      className="scroll-mt-24 bg-bone py-20 md:py-28 lg:py-36"
    >
      <div className="u-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Réalisations</Eyebrow>
            <h2 data-reveal className="u-h2 mt-7">
              Des projets menés avec de{" "}
              <span className="u-em text-accent">vrais annonceurs</span>.
            </h2>
          </div>
          <p
            data-reveal
            className="max-w-sm text-[0.97rem] leading-relaxed text-mute"
          >
            Chaque projet est présenté par son contexte, sa problématique et ce
            qui a été produit. Les résultats chiffrés sont publiés uniquement
            lorsqu&apos;ils sont mesurés et validés par le client.
          </p>
        </div>

        {/* Filtres */}
        <div
          data-reveal
          className="mt-12 -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0 md:pb-0"
          role="tablist"
          aria-label="Filtrer les réalisations par catégorie"
        >
          {availableFilters.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-[0.85rem] transition-colors duration-300",
                active === filter
                  ? "border-ink bg-ink text-bone"
                  : "border-line text-mute hover:border-ink/40 hover:text-ink",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <div
              key={project.slug}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
            >
              <ProjectCard project={project} priority={i < 3} />
            </div>
          ))}
        </div>

        <div
          data-reveal
          className="mt-16 flex flex-col items-start gap-5 rounded-lg border border-line bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <p className="max-w-xl text-[1.02rem] leading-relaxed">
            Vous voulez savoir ce que cela donnerait{" "}
            <span className="u-em text-accent">pour votre entreprise</span>&nbsp;?
            On en parle en trente minutes.
          </p>
          <Button href="/#contact" size="md">
            Parler de mon projet
          </Button>
        </div>
      </div>
    </section>
  );
}
