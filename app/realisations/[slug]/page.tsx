import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, publishedProjects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { clean } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Réalisation introuvable" };

  const title = `${clean(project.title)} — ${project.category}`;
  return {
    title,
    description: clean(project.excerpt),
    alternates: { canonical: `/realisations/${project.slug}` },
    openGraph: { title, description: clean(project.excerpt) },
  };
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-8">
      <h2 className="text-[0.72rem] uppercase tracking-[0.18em] text-accent md:col-span-3">
        {label}
      </h2>
      <div className="text-[1rem] leading-relaxed text-ink/80 md:col-span-9">
        {children}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = publishedProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <article className="bg-bone pt-32 md:pt-40">
        <div className="u-container">
          <Link
            href="/#realisations"
            className="inline-flex items-center gap-2 text-[0.88rem] text-mute transition-colors duration-300 hover:text-ink"
          >
            <span aria-hidden="true">←</span> Toutes les réalisations
          </Link>

          <div className="mt-10 max-w-4xl">
            <Eyebrow>{project.category}</Eyebrow>
            <h1 data-reveal className="u-display mt-7">
              {clean(project.title)}
            </h1>
            <p data-reveal className="u-lead mt-7 max-w-2xl text-mute">
              {clean(project.excerpt)}
            </p>
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Client", v: clean(project.client) },
              { k: "Secteur", v: clean(project.sector) },
              { k: "Année", v: clean(project.year) },
              { k: "Prestations", v: project.tags.join(" · ") },
            ].map((item) => (
              <div key={item.k} className="bg-white p-6">
                <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-mute-light">
                  {item.k}
                </dt>
                <dd className="mt-2.5 text-[0.98rem] font-medium">{item.v}</dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-lg bg-ink-900">
            {project.cover ? (
              <Image
                src={project.cover}
                alt={`${clean(project.title)} — visuel du projet`}
                fill
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-8 text-center">
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-bone/35">
                  Emplacement visuel
                </p>
                <p className="u-em text-[1.8rem] text-bone/25 md:text-[2.6rem]">
                  [VISUEL DU PROJET À AJOUTER]
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 max-w-5xl">
            <Block label="Contexte">{clean(project.context)}</Block>
            <Block label="Problématique">{clean(project.problem)}</Block>
            <Block label="Objectif">{clean(project.objective)}</Block>

            <Block label="Stratégie">
              <ul className="space-y-3">
                {project.strategy.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-px w-3.5 shrink-0 bg-accent"
                    />
                    {clean(item)}
                  </li>
                ))}
              </ul>
            </Block>

            <Block label="Réalisation">
              <ul className="space-y-3">
                {project.delivery.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-px w-3.5 shrink-0 bg-accent"
                    />
                    {clean(item)}
                  </li>
                ))}
              </ul>
            </Block>

            <Block label="Résultats">
              {project.results.length > 0 ? (
                <dl className="grid gap-6 sm:grid-cols-3">
                  {project.results.map((r) => (
                    <div key={r.label}>
                      <dt className="text-[0.85rem] text-mute">{r.label}</dt>
                      <dd className="mt-1.5 text-[1.8rem] font-medium tracking-tight">
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="rounded-md border border-dashed border-line px-5 py-4 text-[0.93rem] text-mute">
                  [RÉSULTATS À AJOUTER] — aucun chiffre n&apos;est publié tant
                  qu&apos;il n&apos;a pas été mesuré et validé par le client.
                </p>
              )}
            </Block>

            {project.link && (
              <div className="border-t border-line py-8">
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.95rem] text-accent underline underline-offset-4"
                >
                  {project.link.label}
                </a>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-line bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="max-w-lg text-[1.02rem] leading-relaxed">
              Un projet comparable en tête&nbsp;? Parlons-en avant de fixer quoi
              que ce soit.
            </p>
            <Button href="/#contact" size="md">
              Parler de mon projet
            </Button>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-bone py-20 md:py-28">
          <div className="u-container">
            <h2 className="u-h3">Autres réalisations</h2>
            <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
