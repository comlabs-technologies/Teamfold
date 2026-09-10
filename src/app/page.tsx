import { FloatingHeader } from "@/components/sections/FloatingHeader";
import { Hero } from "@/components/sections/Hero";
import { TrustBenefitStrip } from "@/components/sections/TrustBenefitStrip";
import { AudiencePathCards } from "@/components/sections/AudiencePathCards";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { InteractiveProcess } from "@/components/sections/InteractiveProcess";
import { FounderSection } from "@/components/sections/FounderSection";
import { AuditCTA } from "@/components/sections/AuditCTA";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function HomePage() {
  return (
    <>
      <FloatingHeader />
      <main>
        <Hero />
        <TrustBenefitStrip />
        <AudiencePathCards />
        <PainPointsSection />
        <ServicesGrid />
        <InteractiveProcess />
        <FounderSection />
        <AuditCTA />
        <ArticlesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
