"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Journey = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    const milestones = [
        {
            year: "01",
            title: "Launch & Synchronize",
            desc: "Onboard your entire inventory and sync with your physical store. Launch your website in hours."
        },
        {
            year: "02",
            title: "Scale Ecosystem",
            desc: "Activate mobile apps for your customers and delivery partners. Reach beyond your neighborhood."
        },
        {
            year: "03",
            title: "Operational Mastery",
            desc: "Use AI-powered analytics to optimize supply chains and automate accounting globally."
        }
    ];

    return (
        <section ref={containerRef} className="py-60 bg-[#050505] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-baseline mb-40">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="text-blue-500 font-black text-sm tracking-[0.4em] uppercase">Roadmap to Success</span>
                            <div className="h-px w-20 bg-white/10" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-[8vw] lg:text-[7vw] font-display font-black text-white leading-[0.85] tracking-tighter uppercase"
                        >
                            The path to <br />
                            <span className="text-blue-500 italic font-medium">global scale.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 overflow-hidden rounded-[3rem]">
                    {milestones.map((ms, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="p-16 bg-[#050505] group hover:bg-white/[0.02] transition-colors duration-700"
                        >
                            <div className="text-7xl font-display font-black text-white/5 group-hover:text-blue-500/20 transition-colors mb-12">{ms.year}</div>
                            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{ms.title}</h3>
                            <p className="text-xl text-slate-500 leading-relaxed font-medium">{ms.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 noise-bg opacity-[0.05] pointer-events-none" />
        </section>
    );
};

export default Journey;
