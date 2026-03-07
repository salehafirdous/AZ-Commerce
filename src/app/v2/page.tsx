"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import NavbarV2 from "@/components/v2/layout/NavbarV2";
import FooterV2 from "@/components/v2/layout/FooterV2";
import HeroV2 from "@/components/v2/sections/HeroV2";
import PainPointsV2 from "@/components/v2/sections/PainPointsV2";
import SolutionRevealV2 from "@/components/v2/sections/SolutionRevealV2";
import ModuleEcosystemV2 from "@/components/v2/sections/ModuleEcosystemV2";
import FeatureShowcaseV2 from "@/components/v2/sections/FeatureShowcaseV2";
import IndustriesV2 from "@/components/v2/sections/IndustriesV2";
import PricingV2 from "@/components/v2/sections/PricingV2";
import DashboardPreviewV2 from "@/components/v2/sections/DashboardPreviewV2";
import POSDemoV2 from "@/components/v2/sections/POSDemoV2";
import OnboardingFlowV2 from "@/components/v2/sections/OnboardingFlowV2";
import SecurityV2 from "@/components/v2/sections/SecurityV2";
import TestimonialsV2 from "@/components/v2/sections/TestimonialsV2";
import FinalCTAV2 from "@/components/v2/sections/FinalCTAV2";
import { motion, useScroll, useSpring } from "framer-motion";

export default function V2Landing() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white overflow-hidden">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left z-[200]"
                style={{ scaleX }}
            />

            <NavbarV2 />
            <HeroV2 />
            <PainPointsV2 />
            <SolutionRevealV2 />
            <ModuleEcosystemV2 />
            <FeatureShowcaseV2 />
            <IndustriesV2 />
            <DashboardPreviewV2 />
            <POSDemoV2 />
            <OnboardingFlowV2 />
            <PricingV2 />
            <TestimonialsV2 />
            <SecurityV2 />
            <FinalCTAV2 />
            <FooterV2 />
        </main>
    );
}
