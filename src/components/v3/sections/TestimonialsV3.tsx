"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const reviews = [
    {
        name: "Karan Kumar",
        title: "CEO, Global Retailers",
        quote: "Moving our 40+ stores to AZ Commerce was the best decision we made. The real-time inventory sync across branches is a complete game-changer.",
    },
    {
        name: "Sarah Jenkins",
        title: "Founder, The Bakers Co.",
        quote: "The POS is so fast and intuitive. Our staff needed zero training. It just works, every single time, even during our busiest hours.",
    },
    {
        name: "James Thorne",
        title: "Director, Tech Gadgets",
        quote: "The vendor management system saved us 20+ hours a week in paperwork. Automated payouts and tracking are essential features for any distributor.",
    },
    {
        name: "Elena Rodriguez",
        title: "Owner, Luxe Fashion",
        quote: "Simple, powerful, and professional. The web builder allowed us to launch a high-conversion store in less than a weekend. Stunning platform.",
    }
];

const TestimonialsV3 = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Star size={14} className="fill-orange-600" /> Member Stories
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-display font-semibold text-[#0f172a] mb-6 tracking-tight">
                        Trusted by <span className="text-orange-600 italic">Industry Leaders.</span>
                    </h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        Join thousands of businesses scaling their operations globally.
                    </p>
                </div>

                <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={reviews}
                        direction="right"
                        speed="slow"
                    />
                    <InfiniteMovingCards
                        items={reviews}
                        direction="left"
                        speed="slow"
                        className="mt-4"
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsV3;
