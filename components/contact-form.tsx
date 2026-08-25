"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const needs = [
  "Stratégie de communication digitale",
  "Création de contenu (photo / vidéo)",
  "Gestion des réseaux sociaux",
  "Publicité et acquisition (Meta Ads)",
  "Accompagnement complet",
  "Je ne sais pas encore",
];

const budgets = [
  "Moins de 500 € / mois",
  "500 – 1 000 € / mois",
  "1 000 – 2 000 € / mois",
  "Plus de 2 000 € / mois",
  "À définir ensemble",
];

const field =
  "w-full rounded-md border border-line-dark bg-ink px-4 py-3.5 text-[0.95rem] text-bone " +
  "placeholder:text-bone/25 transition-colors duration-300 " +
  "focus:border-accent focus:outline-none focus:ring-0";

const labelCls =
  "block text-[0.78rem] uppercase tracking-[0.14em] text-bone/45 mb-2.5";

type Status = "idle" | "pending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // `currentTarget` est nul après un await : on garde une référence au formulaire.
    const form = event.currentTarget;
    setStatus("pending");
    setMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { message?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(
          data.message ??
            "L'envoi n'a pas abouti. Réessayez ou écrivez-moi directement par email.",
        );
        return;
      }

      setStatus("success");
      setMessage(
        data.message ??
          "Demande envoyée. Je reviens vers vous sous 24 h ouvrées.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Connexion impossible. Réessayez dans un instant ou écrivez-moi directement par email.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[26rem] flex-col items-start justify-center">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent"
        >
          <svg
            viewBox="0 0 16 16"
            className="h-5 w-5 text-bone"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 8.4 3.2 3.1L13 4.8" />
          </svg>
        </span>
        <h3 className="u-h3 mt-7">Demande bien reçue.</h3>
        <p className="mt-4 max-w-md text-[0.97rem] leading-relaxed text-bone/55">
          {message}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[0.9rem] text-accent underline underline-offset-4 transition-opacity duration-300 hover:opacity-70"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <h3 className="u-h3">Décrivez votre situation</h3>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-bone/45">
        Plus votre message est précis, plus le premier échange sera utile. Les
        champs marqués d&apos;un astérisque sont obligatoires.
      </p>

      {/* Piège à robots — invisible pour les visiteurs */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website-url">Ne pas remplir</label>
        <input id="website-url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="firstName">
            Prénom *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={field}
            placeholder="Camille"
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="lastName">
            Nom *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={field}
            placeholder="Durand"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="company">
            Entreprise *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={field}
            placeholder="Nom de votre entreprise"
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            className={field}
            placeholder="contact@entreprise.fr"
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="phone">
            Téléphone <span className="normal-case tracking-normal text-bone/25">(facultatif)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={field}
            placeholder="06 00 00 00 00"
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="website">
            Site internet <span className="normal-case tracking-normal text-bone/25">(facultatif)</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            inputMode="url"
            className={field}
            placeholder="https://"
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="socials">
            Réseaux sociaux <span className="normal-case tracking-normal text-bone/25">(facultatif)</span>
          </label>
          <input
            id="socials"
            name="socials"
            type="text"
            className={field}
            placeholder="@votrecompte"
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="need">
            Type de besoin *
          </label>
          <select id="need" name="need" required className={cn(field, "appearance-none")}>
            <option value="">Sélectionner…</option>
            {needs.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelCls} htmlFor="budget">
            Budget indicatif *
          </label>
          <select id="budget" name="budget" required className={cn(field, "appearance-none")}>
            <option value="">Sélectionner…</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Votre message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            minLength={20}
            className={cn(field, "resize-y")}
            placeholder="Votre activité, votre situation actuelle et ce que vous aimeriez obtenir dans les prochains mois."
          />
        </div>
      </div>

      <label className="mt-7 flex cursor-pointer items-start gap-3.5 text-[0.85rem] leading-relaxed text-bone/50">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#c04a26]"
        />
        <span>
          J&apos;accepte que les informations transmises soient utilisées pour
          répondre à ma demande. Elles ne sont ni revendues ni transmises à des
          tiers.
        </span>
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 rounded-md border border-accent/40 bg-accent/10 px-4 py-3.5 text-[0.9rem] leading-relaxed text-bone/80"
        >
          {message}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <SubmitButton pending={status === "pending"} className="w-full sm:w-auto">
          {status === "pending" ? "Envoi en cours…" : "Envoyer ma demande"}
        </SubmitButton>
        <p className="text-[0.82rem] text-bone/35">
          Réponse sous 24 h ouvrées.
        </p>
      </div>
    </form>
  );
}
