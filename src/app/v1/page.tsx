"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import MaterialityCraft from "@/components/sections/MaterialityCraft";
import Journey from "@/components/sections/Journey";
import Gallery from "@/components/sections/Gallery";
import ScrollingFeatures from "@/components/sections/ScrollingFeatures";
import POSSimulator from "@/components/sections/POSSimulator";
import Industries from "@/components/sections/Industries";
import Pricing from "@/components/sections/Pricing";
import DemoForm from "@/components/sections/DemoForm";
import DeepAnalytics from "@/components/sections/DeepAnalytics";
import ROICalculator from "@/components/sections/ROICalculator";
import Comparison from "@/components/sections/Comparison";
import Trust from "@/components/sections/Trust";
import Reviews from "@/components/sections/Reviews";
import SuccessStories from "@/components/sections/SuccessStories";
import InteractiveDashboard from "@/components/sections/InteractiveDashboard";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
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
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* Premium Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left z-[200]"
        style={{ scaleX }}
      />

      <Navbar />

      <Hero />
      <ScrollingFeatures />
      <WhyChooseUs />
      <MaterialityCraft />
      <DeepAnalytics />
      <InteractiveDashboard />
      <Journey />

      {/* Product Highlight Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8">
              The full ecosystem. <br />
              <span className="text-blue-500 italic">One platform.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-2xl p-16 rounded-[4rem] border border-white/10 shadow-2xl"
            >
              <h3 className="text-4xl font-black mb-10 text-blue-400">Web Applications</h3>
              <ul className="space-y-6">
                {["Admin Business Portal", "Multi-vendor Portal", "Public Website Builder", "Web-based POS System"].map((app) => (
                  <li key={app} className="flex items-center gap-5 text-xl font-bold text-blue-100">
                    <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" /> {app}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-2xl p-16 rounded-[4rem] border border-white/10 shadow-2xl"
            >
              <h3 className="text-4xl font-black mb-10 text-purple-400">Mobile Applications</h3>
              <ul className="space-y-6">
                {["iOS & Android Customer App", "Delivery Partner App", "Vendor Management App", "Sales Tracking Dashboard"].map((app) => (
                  <li key={app} className="flex items-center gap-5 text-xl font-bold text-purple-100">
                    <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" /> {app}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Gallery />
      <ROICalculator />
      <Comparison />
      <POSSimulator />
      <Reviews />
      <SuccessStories />
      <Trust />
      <Industries />
      <Pricing />
      <DemoForm />

      {/* Ultimate CTA Section */}
      <section className="py-40 bg-slate-900 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-900" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-none"
          >
            Your empire starts <br />
            <span className="text-blue-500 italic">right here.</span>
          </motion.h2>

          <p className="text-2xl md:text-3xl text-blue-100/70 mb-16 max-w-3xl mx-auto font-medium">
            Join 10,000+ top-tier brands running on the world&apos;s most advanced commerce OS.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/signup"
              className="px-12 py-7 bg-white text-slate-900 rounded-[2rem] font-black text-2xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl flex items-center gap-4 group"
            >
              Get Started for Free
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                →
              </motion.div>
            </Link>
            <button className="px-12 py-7 bg-transparent text-white border-2 border-white/20 rounded-[2rem] font-black text-2xl hover:bg-white/5 transition-all">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
