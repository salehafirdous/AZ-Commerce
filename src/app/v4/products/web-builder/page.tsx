"use client";

import { motion } from "framer-motion";
import { Globe, Layout, Palette, MousePointer2, Rocket, Code2 } from "lucide-react";
import Image from "next/image";

export default function WebBuilderV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <MousePointer2 size={14} /> Drag, Drop, Dominate
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-semibold text-[#0f172a] mb-8 leading-tight"
                    >
                        Headless <span className="text-orange-600">Web Builder</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium"
                    >
                        Build world-class storefronts without touching a line of code. High performance, SEO optimized, and ready for global scale.
                    </motion.p>
                </div>

                {/* Templates Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {[
                        { title: "Visual Editor", desc: "True what-you-see-is-what-you-get experience with real-time preview.", icon: Palette },
                        { title: "SEO Engine", desc: "Automated schema markup, meta tags, and high Core Web Vitals scores.", icon: Rocket },
                        { title: "Developer API", desc: "Connect your own frontends or use our React/Next.js components.", icon: Code2 },
                    ].map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#0f172a] mb-4">{feature.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Showcase */}
                <div className="bg-[#0f172a] rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                    <div className="max-w-xl relative z-10">
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-8">Launch your <span className="text-orange-600">Dream Store</span> in minutes.</h2>
                        <ul className="space-y-6 mb-12">
                            {["Custom checkouts that convert better", "Integrated global shipping partners", "Multi-language & Multi-currency support", "Sub-second page load times"].map((item) => (
                                <li key={item} className="flex items-center gap-4 text-slate-300 font-medium italic uppercase tracking-tighter">
                                    <div className="w-2 h-2 rounded-full bg-orange-600" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all">
                            Browse Templates
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full select-none pointer-events-none p-8 lg:p-12">
                        <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white/10 group">
                            <Image
                                src="/images/v3/web-builder.png"
                                alt="Web Builder Showcase"
                                fill
                                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-[#0f172a] via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
