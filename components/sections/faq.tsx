import { Eyebrow, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { faq } from "@/content/faq";

export function Faq() {
  return (
    <Section id="faq" tone="bone">
      <div className="u-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Questions fréquentes</Eyebrow>
              <h2 data-reveal className="u-h2 mt-7">
                Ce que l&apos;on me demande{" "}
                <span className="u-em text-accent">souvent</span>.
              </h2>
              <p data-reveal className="mt-7 text-[0.97rem] leading-relaxed text-mute">
                Une question qui ne figure pas ici&nbsp;? Posez-la directement,
                la réponse arrive sous 24 h ouvrées.
              </p>
              <div data-reveal className="mt-8">
                <Button href="/#contact" variant="ghost" size="md">
                  Poser ma question
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {/* details/summary : accessible au clavier, sans JavaScript */}
            {faq.map((item, i) => (
              <details
                key={item.q}
                data-reveal
                style={{ "--reveal-delay": `${i * 40}ms` } as React.CSSProperties}
                className="group border-b border-line first:border-t"
              >
                <summary className="flex items-start justify-between gap-6 py-6 text-left">
                  <h3 className="text-[1.05rem] font-medium leading-snug tracking-tight transition-colors duration-300 group-hover:text-accent md:text-[1.15rem]">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-sign relative mt-1 flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <span className="absolute h-px w-3.5 bg-ink" />
                    <span className="absolute h-3.5 w-px bg-ink" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 pr-10 text-[0.96rem] leading-relaxed text-mute">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Données structurées FAQ : éligibilité aux résultats enrichis Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </Section>
  );
}
