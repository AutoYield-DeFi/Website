import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import FAQ from "@/components/sections/faq";
import LPComparison from "@/components/sections/lp-comparison";
import { Seo } from "@/components/shared/Seo";

export default function Home() {
  return (
    <>
      <Seo />

      <div className="pt-16">
        <Hero />
        <Benefits />
        <LPComparison />
        <FAQ />
      </div>
    </>
  );
}