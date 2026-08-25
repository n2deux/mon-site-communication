import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = Record<string, string | undefined>;

const REQUIRED = [
  "firstName",
  "lastName",
  "company",
  "email",
  "need",
  "budget",
  "message",
] as const;

const LABELS: Record<string, string> = {
  firstName: "Prénom",
  lastName: "Nom",
  company: "Entreprise",
  email: "Email",
  phone: "Téléphone",
  website: "Site internet",
  socials: "Réseaux sociaux",
  need: "Type de besoin",
  budget: "Budget indicatif",
  message: "Message",
};

const MAX_LENGTH = 4000;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_LENGTH);
}

/** Corps de l'email envoyé, en texte brut : lisible partout, sans dépendance. */
function buildEmailBody(data: Payload): string {
  const lines = Object.keys(LABELS)
    .filter((key) => data[key])
    .map((key) => `${LABELS[key]} : ${data[key]}`);

  return [
    "Nouvelle demande depuis le site",
    "".padEnd(40, "-"),
    ...lines,
    "".padEnd(40, "-"),
    `Reçue le ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let raw: unknown;

  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Requête invalide." },
      { status: 400 },
    );
  }

  const body = (raw ?? {}) as Record<string, unknown>;

  // Piège à robots : un bot remplit tous les champs, un humain ne voit pas celui-ci.
  if (sanitize(body.website_url)) {
    return NextResponse.json({ message: "Demande reçue." }, { status: 200 });
  }

  const data: Payload = {};
  for (const key of Object.keys(LABELS)) {
    data[key] = sanitize(body[key]);
  }

  const missing = REQUIRED.filter((key) => !data[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { message: "Merci de compléter tous les champs obligatoires." },
      { status: 422 },
    );
  }

  if (!isValidEmail(data.email!)) {
    return NextResponse.json(
      { message: "L'adresse email saisie ne semble pas valide." },
      { status: 422 },
    );
  }

  if (body.consent !== "on" && body.consent !== true) {
    return NextResponse.json(
      { message: "Merci d'accepter l'utilisation de vos informations." },
      { status: 422 },
    );
  }

  const subject = `Nouvelle demande — ${data.company} (${data.need})`;
  const text = buildEmailBody(data);

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, FORMSPREE_ENDPOINT } =
    process.env;

  // ── Option A : Resend (appel REST direct, aucune dépendance ajoutée) ──
  if (RESEND_API_KEY && CONTACT_TO_EMAIL) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
          to: [CONTACT_TO_EMAIL],
          reply_to: data.email,
          subject,
          text,
        }),
      });

      if (!response.ok) {
        console.error("Resend a répondu une erreur :", await response.text());
        return NextResponse.json(
          {
            message:
              "L'envoi n'a pas abouti. Écrivez-moi directement par email, je vous réponds rapidement.",
          },
          { status: 502 },
        );
      }

      return NextResponse.json({
        message: "Demande envoyée. Je reviens vers vous sous 24 h ouvrées.",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi via Resend :", error);
      return NextResponse.json(
        { message: "L'envoi n'a pas abouti. Réessayez dans un instant." },
        { status: 502 },
      );
    }
  }

  // ── Option B : Formspree ──
  if (FORMSPREE_ENDPOINT) {
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: subject }),
      });

      if (!response.ok) {
        console.error("Formspree a répondu une erreur :", await response.text());
        return NextResponse.json(
          { message: "L'envoi n'a pas abouti. Réessayez dans un instant." },
          { status: 502 },
        );
      }

      return NextResponse.json({
        message: "Demande envoyée. Je reviens vers vous sous 24 h ouvrées.",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi via Formspree :", error);
      return NextResponse.json(
        { message: "L'envoi n'a pas abouti. Réessayez dans un instant." },
        { status: 502 },
      );
    }
  }

  // ── Aucun service configuré ──
  // On l'indique clairement plutôt que de simuler un succès.
  console.warn(
    "[contact] Aucun service d'envoi configuré. " +
      "Renseignez RESEND_API_KEY + CONTACT_TO_EMAIL, ou FORMSPREE_ENDPOINT dans .env.local.\n" +
      text,
  );

  return NextResponse.json(
    {
      message:
        "Le service d'envoi n'est pas encore configuré sur ce site. Écrivez-moi directement par email, je vous réponds sous 24 h ouvrées.",
    },
    { status: 503 },
  );
}
