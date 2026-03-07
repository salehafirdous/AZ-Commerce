"use client";

import Navbar from "@/app/layout/Navbar";
import Footer from "@/app/layout/Footer";
import AnnouncementBarV4 from "@/components/v4/sections/AnnouncementBarV4";
import HeroV4 from "@/components/v4/sections/HeroV4";
import BentoGridV4 from "@/components/v4/sections/BentoGridV4";
import WhySectionV4 from "@/components/v4/sections/WhySectionV4";
import DashboardTabsV4 from "@/components/v4/sections/DashboardTabsV4";
import FeaturesGridV4 from "@/components/v4/sections/FeaturesGridV4";
import IndustryUseCasesV4 from "@/components/v4/sections/IndustryUseCasesV4";
import PricingV4 from "@/components/v4/sections/PricingV4";
import OnboardingStepsV4 from "@/components/v4/sections/OnboardingStepsV4";
import TestimonialsV4 from "@/components/v4/sections/TestimonialsV4";
import FinalCTAV4 from "@/components/v4/sections/FinalCTAV4";

export default function HomeV4() {
    return (
        <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-600">
            <AnnouncementBarV4 />
            <Navbar />
            <HeroV4 />
            <BentoGridV4 />
            <WhySectionV4 />
            <DashboardTabsV4 />
            <FeaturesGridV4 />
            <IndustryUseCasesV4 />
            <PricingV4 />
            <OnboardingStepsV4 />
            <TestimonialsV4 />
            <FinalCTAV4 />

        </main>
    );
}
