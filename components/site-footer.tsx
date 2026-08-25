import Link from "next/link";
import Image from "next/image";
import { site, isPlaceholder } from "@/content/site";
import { footerServices, primaryNav } from "@/content/nav";
import { clean } from "@/lib/utils";

/** N'affiche un lien que si l'URL est réellement renseignée. */
function SocialLink({ label, url }: { label: string; url: string }) {
  const text = clean(label);
  if (isPlaceholder(url)) {
    return (
      <span className="text-bone/35" title="À renseigner dans content/site.ts">
        {text}
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-bone/60 transition-colors duration-300 hover:text-bone"
    >
      {text}
    </a>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bone">
      <div className="u-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/#accueil" className="flex items-center gap-3">
              <Image
                src={site.logo}
                alt={`Logo ${clean(site.brand)}`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-contain"
              />
              <span className="text-[1rem] font-medium tracking-tight">
                {clean(site.brand)}
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-bone/55">
              Communication digitale pour les TPE et PME. Stratégie, contenu,
              réseaux sociaux et acquisition — dans la durée.
            </p>
            <p className="mt-6 text-[0.85rem] text-bone/40">
              {site.city}, {site.country} · Accompagnement à distance
            </p>
          </div>

          <nav className="md:col-span-2" aria-label="Navigation du pied de page">
            <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-bone/40">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.92rem] text-bone/60 transition-colors duration-300 hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Services">
            <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-bone/40">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.92rem] text-bone/60 transition-colors duration-300 hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-bone/40">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              <li>
                {isPlaceholder(site.email) ? (
                  <span className="text-bone/35">{clean(site.email)}</span>
                ) : (
                  <a
                    href={`mailto:${site.email}`}
                    className="text-bone/60 transition-colors duration-300 hover:text-bone"
                  >
                    {site.email}
                  </a>
                )}
              </li>
              <li>
                <SocialLink
                  label={site.socials.instagram.label}
                  url={site.socials.instagram.url}
                />
              </li>
              <li>
                <SocialLink
                  label={site.socials.linkedin.label}
                  url={site.socials.linkedin.url}
                />
              </li>
              <li className="pt-2">
                <Link
                  href="/#contact"
                  className="text-[0.92rem] text-accent transition-opacity duration-300 hover:opacity-70"
                >
                  Parler de mon projet
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 text-[0.82rem] text-bone/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {clean(site.brand)} · {clean(site.fullName)}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                href="/mentions-legales"
                className="transition-colors duration-300 hover:text-bone"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="transition-colors duration-300 hover:text-bone"
              >
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
