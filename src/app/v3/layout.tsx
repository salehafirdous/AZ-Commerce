"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import NavbarV3 from "@/components/v3/layout/NavbarV3";
import FooterV3 from "@/components/v3/layout/FooterV3";

export default function V3Layout({
    children,
}: {
    children: React.ReactNode;
}) {
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
        <div className="min-h-screen bg-white selection:bg-orange-500 selection:text-white font-sans text-slate-900 overflow-x-hidden">
            <NavbarV3 />
            {children}
            <FooterV3 />
        </div>
    );
}
