"use client";

import { motion } from "framer-motion";
import { UserPlus, PackagePlus, CreditCard, Rocket, Store } from "lucide-react";
import Link from "next/link";

const steps = [
    { title: "Create Account", icon: UserPlus, desc: "Sign up in 30 seconds" },
    { title: "Add Products", icon: PackagePlus, desc: "Import via CSV or scan" },
    { title: "Setup Billing", icon: CreditCard, desc: "Connect UPI or Bank" },
    { title: "Publish Store", icon: Store, desc: "Launch your Web & POS" },
    { title: "Start Selling", icon: Rocket, desc: "Scale your business" }
];

const OnboardingV3 = () => {
    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-32">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6 tracking-tight">
                        Launch in <span className="text-orange-600">record time.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Setting up enterprise-grade commerce has never been this simple. Go live with your entire business operation in under a day.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 bg-white border-8 border-slate-50 rounded-[2.5rem] shadow-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                                    <step.icon size={36} className="transition-colors" />
                                </div>
                                <div className="z-20 inline-block px-4 py-1.5 bg-slate-900 text-white text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full mb-6">
                                    Step 0{i + 1}
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2 tracking-tight">{step.title}</h3>
                                <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-32 max-w-4xl mx-auto px-6 text-center">
                <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 border-dashed">
                    <p className="text-sm font-bold text-orange-600 uppercase tracking-widest">
                        Ready to jump ahead? <Link href="/signup" className="underline ml-2">Get started with a pre-configured template →</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OnboardingV3;
