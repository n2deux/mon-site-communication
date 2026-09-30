import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/ui/section";
import { reviewPage } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Laisser un avis",
  description: reviewPage.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/avis" },
};

export default function ReviewsPage() {
  return (
    <Section tone="bone" className="min-h-[70vh] pt-32 md:pt-40">
      <div className="u-container">
        <div className="max-w-3xl">
          <Eyebrow>{reviewPage.eyebrow}</Eyebrow>
          <h1 data-reveal className="u-h2 mt-7">
            {reviewPage.title}
          </h1>
          <p data-reveal className="u-lead mt-6 max-w-2xl text-mute">
            {reviewPage.description}
          </p>
          <div data-reveal className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href={reviewPage.googleProfileUrl} variant="ghost" size="md">
              {reviewPage.readButton}
            </Button>
            <Button href={reviewPage.googleReviewUrl} size="md">
              {reviewPage.button}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}