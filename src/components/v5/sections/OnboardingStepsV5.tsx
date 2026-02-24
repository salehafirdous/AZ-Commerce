"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play, CheckCircle2, Terminal, Cpu, Network, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        num: "01",
        label: "DOMAIN_SHARD",
        title: "Deploy Core",
        desc: "Establish your commerce shard with a single CLI command or one-click cloud initiation."
    },
    {
        num: "02",
        label: "MESH_LINK",
        title: "Sync Nodes",
        desc: "Orchestrate your physical and digital nodes into a unified high-frequency mesh network."
    },
    {
        num: "03",
        label: "NEXUS_GO",
        title: "Force Scale",
        desc: "Activate hyper-growth protocols and watch your global ecosystem scale with architectural certainty."
    }
];

const OnboardingStepsV5 = () => {
    return (
        <section className="py-40 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-32">
                    <div className="inline-flex items-center gap-4 mb-8 text-cyan-500 font-display-v5 font-black text-[10px] uppercase tracking-[0.5em]">
                        <Terminal size={16} /> Activation Pipeline
                    </div>
                    <h2 className="text-7xl md:text-[9rem] font-display-v5 font-black text-white leading-[0.8] tracking-tighter uppercase">
                        THE <span className="text-cyan-500">LAUNCH</span> SEQUENCE.
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-1 relative group"
                        >
                            <div className="relative p-16 rounded-[4rem] bg-[#111] border border-white/5 group-hover:border-cyan-500/30 transition-all duration-700 h-full flex flex-col justify-between">
                                <div className="absolute top-10 right-10 text-[8rem] font-display-v5 font-black text-white/[0.02] group-hover:text-cyan-500/[0.05] transition-colors leading-none select-none">
                                    {step.num}
                                </div>

                                <div className="relative z-10">
                                    <div className="px-6 py-2 bg-white/5 rounded-full border border-white/5 inline-flex text-[10px] font-display-v5 font-black text-cyan-500 uppercase tracking-[0.3em] mb-12">
                                        Status: {step.label}
                                    </div>
                                    <h3 className="text-5xl font-display-v5 font-black text-white mb-8 uppercase tracking-tighter">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-slate-500 font-body-v5 font-medium leading-tight mb-16">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="relative z-10 space-y-4">
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ delay: 0.5 + i * 0.2, duration: 2, ease: "easeInOut" }}
                                            className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black text-white/20 uppercase tracking-widest">
                                        <span>Step_Initialize</span>
                                        <span>Ready</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OnboardingStepsV5;
