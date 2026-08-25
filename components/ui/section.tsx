import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em]",
        tone === "dark" ? "text-mute" : "text-bone/55",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8",
          tone === "dark" ? "bg-accent" : "bg-accent/80",
        )}
      />
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "bone",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "bone" | "ink" | "paper";
}) {
  const tones = {
    bone: "bg-bone text-ink",
    paper: "bg-white text-ink",
    ink: "bg-ink text-bone",
  } as const;

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28 lg:py-36",
        tones[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}
