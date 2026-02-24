"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileText, Smartphone, PhoneCall, AlertCircle, Hash, Zap } from "lucide-react";

const FloatingIcon = ({ initialPos, icon: Icon, delay }: { initialPos: { x: number, y: number }, icon: any, delay: number }) => (
    <motion.div
        initial={initialPos}
        animate={{
            x: [initialPos.x, initialPos.x + (Math.random() - 0.5) * 50, initialPos.x],
            y: [initialPos.y, initialPos.y + (Math.random() - 0.5) * 50, initialPos.y],
            rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut", delay }}
        className="absolute p-6 bg-white rounded-2xl shadow-xl border border-slate-100/50"
    >
        <Icon size={32} className="text-slate-400 opacity-50" />
    </motion.div>
);

const PainPointsV2 = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="py-60 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative h-[600px]">
                        {/* Chaos Elements */}
                        <div className="absolute inset-0 z-0">
                            <FloatingIcon delay={0} initialPos={{ x: 50, y: 100 }} icon={FileText} />
                            <FloatingIcon delay={1} initialPos={{ x: 300, y: 50 }} icon={Smartphone} />
                            <FloatingIcon delay={2} initialPos={{ x: 100, y: 350 }} icon={PhoneCall} />
                            <FloatingIcon delay={3} initialPos={{ x: 350, y: 400 }} icon={Hash} />
                            <FloatingIcon delay={4} initialPos={{ x: 450, y: 200 }} icon={AlertCircle} />
                        </div>

                        {/* Character Visualization */}
                        <motion.div
                            style={{ scale, opacity }}
                            className="relative z-10 flex flex-col items-center justify-center h-full"
                        >
                            <div className="w-64 h-80 bg-slate-100 rounded-[4rem] relative overflow-hidden border border-slate-200">
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-slate-200 rounded-full" />
                                <div className="absolute bottom-[-20%] left-[-10%] w-[120%] h-1/2 bg-slate-200 rounded-full" />

                                {/* Animated Stress Elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-[20px] border-dotted border-red-500/20 rounded-full m-8"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-[.3em] mb-8"
                        >
                            <AlertCircle size={14} /> The Multi-Software Tax
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-8 leading-[1.1] uppercase tracking-tighter"
                        >
                            Drowning in <br />
                            <span className="text-red-600 underline decoration-red-100 underline-offset-8">chaos?</span>
                        </motion.h2>

                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                            Managing billing on one tool, inventory on another, and delivery on Whatsapp? Disconnected systems kill growth and create data silos that hold your business back.
                        </p>

                        <div className="space-y-8">
                            {[
                                "Manual data entry across 5+ apps",
                                "Zero real-time inventory visibility",
                                "Customer data scattered and lost",
                                "High cost of maintaining multiple licenses"
                            ].map((pain, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 text-slate-600 font-black text-sm uppercase tracking-wide group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Zap size={12} fill="currentColor" />
                                    </div>
                                    {pain}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPointsV2;
