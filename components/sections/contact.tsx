import { Eyebrow } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { site, isPlaceholder } from "@/content/site";
import { clean } from "@/lib/utils";

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const isPending = isPlaceholder(value);
  return (
    <div className="border-b border-line-dark py-5">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-bone/40">
        {label}
      </p>
      {isPending || !href ? (
        <p className="mt-2 text-[1rem] text-bone/35">{clean(value)}</p>
      ) : (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-2 block text-[1rem] text-bone/75 transition-colors duration-300 hover:text-accent"
        >
          {clean(value)}
        </a>
      )}
    </div>
  );
}

export function Contact() {
  const { instagram, linkedin } = site.socials;

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-ink py-20 text-bone md:py-28 lg:py-36"
    >
      <div className="u-container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow tone="light">Contact</Eyebrow>
            <h2 data-reveal className="u-h2 mt-7">
              Parlons de{" "}
              <span className="u-em text-accent">votre projet</span>.
            </h2>
            <p data-reveal className="u-lead mt-7 max-w-md text-bone/55">
              Quelques minutes suffisent pour comprendre vos besoins et voir si
              je peux vous accompagner. Si ce n&apos;est pas le cas, je vous le
              dirai franchement.
            </p>

            <div data-reveal className="mt-10">
              <ContactLine
                label="Email"
                value={site.email}
                href={isPlaceholder(site.email) ? undefined : `mailto:${site.email}`}
              />
              <ContactLine
                label="Instagram"
                value={instagram.label}
                href={isPlaceholder(instagram.url) ? undefined : instagram.url}
              />
              <ContactLine
                label="LinkedIn"
                value={linkedin.label}
                href={isPlaceholder(linkedin.url) ? undefined : linkedin.url}
              />
              <ContactLine label="Zone" value={`${site.city} · France · Europe`} />
            </div>

            <ul className="mt-10 space-y-3 text-[0.9rem] text-bone/45">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-px w-3 bg-accent" />
                Réponse sous 24 h ouvrées
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-px w-3 bg-accent" />
                Premier échange de 30 minutes, sans engagement
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-px w-3 bg-accent" />
                Proposition écrite et chiffrée après notre appel
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div
              data-reveal
              className="rounded-lg border border-line-dark bg-ink-900 p-6 md:p-10"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
