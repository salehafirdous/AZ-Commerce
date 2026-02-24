"use client";

import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import NavbarV5 from "@/components/v5/NavbarV5";
import FooterV5 from "@/components/v5/FooterV5";
import HeroV5 from "@/components/v5/sections/HeroV5";
import CapabilitiesV5 from "@/components/v5/sections/CapabilitiesV5";
import WhySectionV5 from "@/components/v5/sections/WhySectionV5";
import FeaturesV5 from "@/components/v5/sections/FeaturesV5";
import IndustryV5 from "@/components/v5/sections/IndustryV5";
import PricingV5 from "@/components/v5/sections/PricingV5";
import OnboardingStepsV5 from "@/components/v5/sections/OnboardingStepsV5";
import FinalCTAV5 from "@/components/v5/sections/FinalCTAV5";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export default function HomeV5() {
  return (
    <main className={`${outfit.variable} ${plusJakarta.variable} font-body-v5 min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-white transition-colors duration-1000 overflow-x-hidden`}>
      <style jsx global>{`
        :root {
          --primary-v5: #06b6d4;
          --accent-v5: #22d3ee;
        }
        .font-display-v5 {
          font-family: var(--font-outfit), sans-serif;
        }
        .font-body-v5 {
          font-family: var(--font-jakarta), sans-serif;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #111;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #22d3ee;
        }
      `}</style>

      <NavbarV5 />
      <HeroV5 />

      <div className="relative">
        {/* Cyber Ambient Lighting */}
        <div className="absolute top-0 left-[-10%] w-[1000px] h-[1000px] bg-cyan-600/5 blur-[200px] -z-10 rounded-full animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 blur-[180px] -z-10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="space-y-0">
        <CapabilitiesV5 />
        <WhySectionV5 />
        <FeaturesV5 />
        <IndustryV5 />
        <PricingV5 />
        <OnboardingStepsV5 />
        <FinalCTAV5 />
      </div>

      <FooterV5 />
    </main>
  );
}
