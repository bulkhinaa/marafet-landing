import { StickyNav } from "@/components/ui/StickyNav";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ForClientsSection } from "@/components/sections/ForClients/ForClientsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorks/HowItWorksSection";
import { ForMastersSection } from "@/components/sections/ForMasters/ForMastersSection";
import { ComingSoonSection } from "@/components/sections/ComingSoon/ComingSoonSection";
import { CrossLinkSection } from "@/components/sections/CrossLink/CrossLinkSection";
import { DownloadSection } from "@/components/sections/Download/DownloadSection";
import { FooterSection } from "@/components/sections/Footer/FooterSection";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ForClientsSection />
        <HowItWorksSection />
        <ForMastersSection />
        <ComingSoonSection />
        <CrossLinkSection />
        <DownloadSection />
      </main>
      <FooterSection />
    </>
  );
}
