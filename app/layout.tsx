import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { site, siteUrl, isPlaceholder } from "@/content/site";
import { clean } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealProvider } from "@/components/ui/reveal-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-display",
});

const brand = clean(site.brand);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand} — Freelance en communication digitale à ${site.city}`,
    template: `%s — ${brand}`,
  },
  description:
    `Freelance en communication digitale à ${site.city}. J'accompagne les TPE et PME sur leur stratégie, ` +
    `la création de contenu, les réseaux sociaux et l'acquisition — en accompagnement mensuel.`,
  keywords: [
    "freelance communication Rennes",
    "freelance communication digitale",
    "community manager Rennes",
    "freelance social media",
    "création de contenu entreprise",
    "communication digitale PME",
    "freelance marketing digital",
    "Meta Ads Rennes",
    "gestion réseaux sociaux entreprise",
  ],
  authors: [{ name: clean(site.fullName) }],
  creator: clean(site.fullName),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: brand,
    title: `${brand} — Communication digitale pour les TPE et PME`,
    description:
      "Stratégie, création de contenu, réseaux sociaux et acquisition. Un accompagnement mensuel pensé dans la durée.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand} — Communication digitale pour les TPE et PME`,
    description:
      "Stratégie, création de contenu, réseaux sociaux et acquisition. Un accompagnement mensuel pensé dans la durée.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
  colorScheme: "light",
};

/** Données structurées : aide Google à comprendre l'activité et la zone couverte. */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand,
    description:
      "Freelance en communication digitale : stratégie, création de contenu, réseaux sociaux et acquisition pour les TPE et PME.",
    url: siteUrl,
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "City", name: site.city },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "FR",
    },
    knowsAbout: [
      "Communication digitale",
      "Social media",
      "Création de contenu",
      "Publicité Meta Ads",
      "Stratégie éditoriale",
    ],
    ...(isPlaceholder(site.email) ? {} : { email: site.email }),
  };

  return (
    <script
      type="application/ld+json"
      // Données statiques contrôlées côté serveur.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable}`}>
      <body className="antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-bone"
        >
          Aller au contenu
        </a>
        <RevealProvider>
          <SiteHeader />
          <main id="contenu">{children}</main>
          <SiteFooter />
        </RevealProvider>
        <StructuredData />
      </body>
    </html>
  );
}
