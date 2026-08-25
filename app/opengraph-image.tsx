import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { clean } from "@/lib/utils";

export const alt = "Communication digitale pour les TPE et PME";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Aperçu affiché lors du partage du lien (LinkedIn, WhatsApp, iMessage…). */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0c0d",
          color: "#f7f6f2",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#9aa0a6" }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#c04a26" }} />
          {clean(site.brand)} — Freelance · {site.city}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            maxWidth: 940,
          }}
        >
          Votre communication mérite mieux que quelques publications improvisées.
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#9aa0a6" }}>
          Stratégie · Contenu · Social media · Acquisition
        </div>
      </div>
    ),
    size,
  );
}
