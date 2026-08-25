import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "light" | "outline-light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium " +
  "transition-[background-color,color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:scale-[0.985] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-bone hover:bg-accent",
  ghost: "border border-ink/15 text-ink hover:border-ink/45 hover:bg-ink/[0.03]",
  light: "bg-bone text-ink hover:bg-accent hover:text-bone",
  "outline-light":
    "border border-bone/25 text-bone hover:border-bone/70 hover:bg-bone/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9rem]",
  lg: "h-[3.35rem] px-7 text-[0.95rem]",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  arrow = true,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function SubmitButton({
  children,
  pending,
  className,
}: {
  children: React.ReactNode;
  pending?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        base,
        sizes.lg,
        "bg-ink text-bone hover:bg-accent disabled:cursor-wait disabled:opacity-60",
        className,
      )}
    >
      {children}
      {!pending && <Arrow />}
    </button>
  );
}
