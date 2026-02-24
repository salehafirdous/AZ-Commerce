"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Founder, Luxe Retail",
        text: "The transition from our old legacy POS to AZ Commerce OS was seamless. Our sales increased by 40% in just 3 months due to the unified inventory sync across our 5 branches.",
        image: "https://i.pravatar.cc/150?u=sarah",
        stars: 5
    },
    {
        name: "David Chen",
        role: "CEO, Global Gourmet",
        text: "Managing a multi-vendor marketplace used to be a nightmare. AZ Commerce automated our entire vendor onboarding and commission cycle. It really is the operating system for modern business.",
        image: "https://i.pravatar.cc/150?u=david",
        stars: 5
    },
    {
        name: "Marcus Thorne",
        role: "Director, Thorne Pharmacies",
        text: "Reliability is everything in health. AZ Commerce's security and 99.99% uptime gives us the peace of mind to focus on our patients while the system handles the heavy lifting.",
        image: "https://i.pravatar.cc/150?u=marcus",
        stars: 5
    },
    {
        name: "Elena Rodriguez",
        role: "COO, FreshBasket",
        text: "The delivery partner app integrated perfectly with our inventory. We reduced fulfillment time by 25 minutes per order. A game-changer for our logistics chain.",
        image: "https://i.pravatar.cc/150?u=elena",
        stars: 5
    }
];

const TestimonialsV2 = () => {
    return (
        <section className="py-60 bg-[#050505] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-500 font-black uppercase tracking-[.4em] text-xs mb-8"
                        >
                            Global Success
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-display font-black text-white leading-[0.85] tracking-tighter uppercase">
                            Trusted by <br />
                            The <span className="text-blue-500 italic">Founders.</span>
                        </h2>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex gap-8 overflow-x-auto pb-20 scrollbar-hide">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="min-w-[400px] md:min-w-[500px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] p-16 relative group cursor-pointer hover:bg-white/10 transition-colors"
                            >
                                <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl scale-0 group-hover:scale-100 transition-transform">
                                    <Quote size={24} fill="currentColor" />
                                </div>

                                <div className="flex gap-2 mb-10">
                                    {[...Array(t.stars)].map((_, j) => (
                                        <Star key={j} size={16} className="text-blue-400" fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-2xl text-white font-medium leading-relaxed mb-12 italic tracking-tight">
                                    &quot;{t.text}&quot;
                                </p>

                                <div className="flex items-center gap-6 mt-12 pt-12 border-t border-white/5">
                                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10">
                                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black text-white uppercase tracking-tighter">{t.name}</div>
                                        <div className="text-xs font-black text-blue-500 uppercase tracking-widest mt-1">{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Visuals */}
                    <div className="absolute bottom-0 right-0 flex gap-4">
                        <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div animate={{ x: [-100, 100] }} transition={{ repeat: Infinity, duration: 4 }} className="w-full h-full bg-blue-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Lights */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full noise-bg opacity-[0.05] pointer-events-none" />
        </section>
    );
};

export default TestimonialsV2;
