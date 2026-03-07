"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

const FinalCTAV4 = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[3rem] overflow-hidden bg-[#0f172a] p-12 md:p-24 text-center">
                    {/* Animated Background Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: Math.random() * 100 + "%",
                                    y: Math.random() * 100 + "%",
                                    opacity: Math.random() * 0.5
                                }}
                                animate={{
                                    y: [null, Math.random() * 100 + "%"],
                                    opacity: [0, 0.4, 0]
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute w-1 h-1 bg-orange-400 rounded-full"
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-blue-600/10" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-display font-semibold text-white mb-8 leading-[1.1]"
                        >
                            The future of your <br />
                            <span className="text-orange-500 italic">business</span> starts here.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-300 font-medium mb-12 leading-relaxed"
                        >
                            Don't let legacy systems hold you back. Join thousands of merchants who have upgraded to a unified commerce experience.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <Link
                                href="/v4/signup"
                                className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/30 active:scale-95 flex items-center gap-3 group uppercase tracking-widest"
                            >
                                Start Free Trial <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center gap-3 uppercase tracking-widest"
                            >
                                <MessageSquare size={24} /> Contact Sales
                            </Link>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-12 text-slate-500 font-bold text-sm tracking-widest uppercase"
                        >
                            No credit card required • 14-day free trial • Cancel anytime
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTAV4;
