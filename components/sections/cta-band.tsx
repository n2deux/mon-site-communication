import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-bone-200">
      <div className="u-container py-16 md:py-20">
        <div
          data-reveal
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-mute">
              Prochaine étape
            </p>
            <p className="u-h2 mt-5">
              Trente minutes pour savoir si{" "}
              <span className="u-em text-accent">on avance ensemble</span>.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact">Parler de mon projet</Button>
            <Button href="/#offres" variant="ghost">
              Découvrir les accompagnements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
