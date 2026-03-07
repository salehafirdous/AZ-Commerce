"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Target, BarChart3 } from "lucide-react";
import { useRef } from "react";

const SuccessStories = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const stories = [
        {
            company: "GlobeRetail Inc.",
            impact: "240% Revenue Growth",
            desc: "By unifying their 12 branches and online store, GlobeRetail eliminated inventory leakage and doubled their fulfillment speed.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070",
            icon: <TrendingUp className="text-blue-500" />
        },
        {
            company: "QuickShip Logistics",
            impact: "45% Lower Costs",
            desc: "Using the integrated Delivery Partner App, QuickShip reduced their last-mile delivery costs and improved customer satisfaction to 98%.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
            icon: <Target className="text-emerald-500" />
        }
    ];

    return (
        <section ref={containerRef} className="py-60 bg-[#050505] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="text-blue-500 font-black text-sm tracking-[0.4em] uppercase">Impact & Scale</span>
                            <div className="h-px w-20 bg-white/10" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-[8vw] font-display font-black text-white leading-[0.85] tracking-tighter uppercase"
                        >
                            Stories of <br />
                            <span className="text-blue-500 italic font-medium">high velocity.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xl md:text-2xl text-slate-500 max-w-sm font-medium leading-relaxed"
                    >
                        Real businesses achieving extraordinary scale with our unified platform.
                    </motion.p>
                </div>

                <div className="space-y-40">
                    {stories.map((story, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center group`}
                        >
                            <div className="w-full lg:w-3/5 relative aspect-video rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={story.image}
                                    alt={story.company}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                                <div className="absolute top-12 left-12">
                                    <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-2/5 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-2 h-10 bg-blue-600 rounded-full" />
                                    <div className="text-xl font-bold text-slate-500 uppercase tracking-widest">{story.company}</div>
                                </div>
                                <div className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
                                    {story.impact}
                                </div>
                                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                                    {story.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
