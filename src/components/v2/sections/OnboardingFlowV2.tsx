"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { UserPlus, ShieldCheck, Briefcase, CreditCard, Store, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
    { title: "Create Account", desc: "Start your journey in seconds with minimal entry.", icon: UserPlus },
    { title: "Verify OTP", desc: "Bank-grade secure verification for your protection.", icon: ShieldCheck },
    { title: "Choose Business", desc: "Select from 20+ specialized industry modules.", icon: Briefcase },
    { title: "Select Plan", desc: "Flexible pricing tiers that scale as you grow.", icon: CreditCard },
    { title: "Create Store", desc: "Deploy your digital and physical storefronts.", icon: Store },
    { title: "Launch System", desc: "Your business empire is now operational.", icon: Rocket }
];

const OnboardingFlowV2 = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} className="py-60 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-40">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-black uppercase tracking-[.5em] text-[10px] mb-8"
                    >
                        System Deployment
                    </motion.div>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
                        Launch in <br />
                        <span className="text-blue-600 italic">Minutes.</span>
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Background Progress Line */}
                    <div className="absolute top-0 left-12 w-1 h-full bg-slate-200 rounded-full overflow-hidden hidden md:block">
                        <motion.div
                            style={{ scaleY: pathLength }}
                            className="w-full h-full bg-blue-600 origin-top"
                        />
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative flex items-center md:items-start gap-12 group"
                            >
                                {/* Step Icon */}
                                <div className="z-10 w-24 h-24 bg-white rounded-[2rem] border-4 border-slate-50 shadow-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <step.icon size={32} />
                                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">0{i + 1}</div>
                                </div>

                                <div className="flex-grow pt-4">
                                    <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">{step.title}</h3>
                                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-sm">{step.desc}</p>
                                </div>

                                <div className="hidden lg:block absolute right-0 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <step.icon size={120} className="text-blue-600" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full noise-bg opacity-[0.03] pointer-events-none" />
        </section>
    );
};

export default OnboardingFlowV2;
