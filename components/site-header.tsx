"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { primaryNav } from "@/content/nav";
import { site } from "@/content/site";
import { clean, cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le défilement de la page lorsque le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-line bg-bone/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="u-container flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <Link
          href="/#accueil"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
          aria-label={`${clean(site.brand)} — accueil`}
        >
          <Image
            src={site.logo}
            alt={`Logo ${clean(site.brand)}`}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-contain"
            priority
          />
          {/* Sous 640 px, seul le monogramme reste : le header ne casse jamais */}
          <span className="hidden whitespace-nowrap text-[0.98rem] font-medium tracking-tight sm:inline">
            {clean(site.brand)}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative rounded-full px-3.5 py-2 text-[0.88rem] text-mute transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 items-center whitespace-nowrap rounded-full bg-ink px-4 text-[0.83rem] font-medium text-bone transition-colors duration-300 hover:bg-accent md:h-11 md:px-5 md:text-[0.88rem]"
          >
            Parler de mon projet
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 block h-px w-4 bg-ink transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-4 bg-ink transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={cn(
          "overflow-hidden border-t border-line bg-bone transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Navigation mobile" className="u-container py-6">
          <ul className="flex flex-col">
            {primaryNav.map((item, i) => (
              <li key={item.label} className="border-b border-line/70 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 text-2xl font-medium tracking-tight"
                >
                  <span className="text-[0.7rem] font-normal tabular-nums text-mute-light">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex h-14 items-center justify-center rounded-full bg-ink text-[0.95rem] font-medium text-bone"
          >
            Parler de mon projet
          </Link>
        </nav>
      </div>
    </header>
  );
}
