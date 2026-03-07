"use client";

import HeroV3 from "@/components/v3/sections/HeroV3";
import FeaturesGridV3 from "@/components/v3/sections/FeaturesGridV3";
import WhyChooseV3 from "@/components/v3/sections/WhyChooseV3";
import FeatureStoryV3 from "@/components/v3/sections/FeatureStoryV3";
import IndustriesV3 from "@/components/v3/sections/IndustriesV3";
import PricingV3 from "@/components/v3/sections/PricingV3";
import DashboardPreviewV3 from "@/components/v3/sections/DashboardPreviewV3";
import OnboardingV3 from "@/components/v3/sections/OnboardingV3";
import TestimonialsV3 from "@/components/v3/sections/TestimonialsV3";
import FinalCTAV3 from "@/components/v3/sections/FinalCTAV3";

export default function V3Landing() {
    return (
        <main>
            <HeroV3 />
            <FeaturesGridV3 />
            <WhyChooseV3 />
            <FeatureStoryV3 />
            <IndustriesV3 />
            <DashboardPreviewV3 />
            <OnboardingV3 />
            <PricingV3 />
            <TestimonialsV3 />
            <FinalCTAV3 />
        </main>
    );
}
