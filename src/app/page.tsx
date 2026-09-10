import { FloatingHeader } from "@/components/sections/FloatingHeader";
import { Hero } from "@/components/sections/Hero";
import { HeroValueMarquee } from "@/components/sections/HeroValueMarquee";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AudiencePathCards } from "@/components/sections/AudiencePathCards";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { InteractiveProcess } from "@/components/sections/InteractiveProcess";
import { AuditCTA } from "@/components/sections/AuditCTA";
import { SocialProofCarousel } from "@/components/sections/SocialProofCarousel";
import { PeopleLeaderSection } from "@/components/sections/PeopleLeaderSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function HomePage() {
  return (
    <>
      <FloatingHeader />
      <main>
        <Hero>
          <HeroValueMarquee />
        </Hero>
        <TrustStrip />
        <AudiencePathCards />
        <PainPointsSection />
        <ServicesGrid />
        <InteractiveProcess />
        <AuditCTA />
        <SocialProofCarousel />
        <PeopleLeaderSection />
        <CoverageSection />
        <ArticlesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
