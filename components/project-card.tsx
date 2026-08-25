import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";
import { clean } from "@/lib/utils";

/**
 * Visuel de repli typographique tant qu'aucune image n'est fournie.
 * Évite les images d'illustration génériques : le site reste crédible et vide
 * de faux contenus.
 */
function CoverFallback({ project }: { project: Project }) {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-ink-900 p-6 md:p-7">
      <span className="text-[0.7rem] uppercase tracking-[0.2em] text-bone/35">
        {project.category}
      </span>
      <span className="u-em text-[2rem] leading-none text-bone/25 md:text-[2.6rem]">
        {clean(project.title)}
      </span>
      <span className="text-[0.7rem] uppercase tracking-[0.18em] text-accent/70">
        Visuel à ajouter
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group">
      <Link href={`/realisations/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-ink-900">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={`${clean(project.title)} — ${project.category}`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          ) : (
            <CoverFallback project={project} />
          )}
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="u-h3">{clean(project.title)}</h3>
            <p className="mt-2 text-[0.88rem] text-mute">
              {clean(project.client)} · {clean(project.sector)}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-bone"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" />
            </svg>
          </span>
        </div>

        <p className="mt-3 max-w-md text-[0.92rem] leading-relaxed text-mute">
          {clean(project.excerpt)}
        </p>
      </Link>
    </article>
  );
}
