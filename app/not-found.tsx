import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-bone pt-24">
      <div className="u-container">
        <p className="text-[0.72rem] uppercase tracking-[0.2em] text-mute">
          Erreur 404
        </p>
        <h1 className="u-h2 mt-6 max-w-2xl">
          Cette page n&apos;existe pas — ou n&apos;existe{" "}
          <span className="u-em text-accent">plus</span>.
        </h1>
        <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-mute">
          Revenez à l&apos;accueil, ou parlons directement de votre projet.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Retour à l&apos;accueil</Button>
          <Button href="/#contact" variant="ghost">
            Parler de mon projet
          </Button>
        </div>
      </div>
    </section>
  );
}
