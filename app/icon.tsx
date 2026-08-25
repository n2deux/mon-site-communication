import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { monogram } from "@/lib/utils";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon générée : monogramme sur fond encre, sans fichier binaire à maintenir. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c0d",
          color: "#f7f6f2",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          borderRadius: 14,
        }}
      >
        {monogram(site.brandShort)}
      </div>
    ),
    size,
  );
}
