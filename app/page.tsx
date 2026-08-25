import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Recurrence } from "@/components/sections/recurrence";
import { Work } from "@/components/sections/work";
import { Offers } from "@/components/sections/offers";
import { About } from "@/components/sections/about";
import { Proof } from "@/components/sections/proof";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

/**
 * Parcours de lecture :
 * découvrir → comprendre → se reconnaître → voir la méthode → voir les preuves
 * → comprendre l'offre → être rassuré → contacter.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Recurrence />
      <Work />
      <Offers />
      <About />
      <Proof />
      <CtaBand />
      <Faq />
      <Contact />
    </>
  );
}
