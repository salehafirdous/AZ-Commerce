"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, UserCheck, ArrowRight, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const GDPRPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            <section className="pt-40 pb-20 relative overflow-hidden bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-200 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                            <ShieldCheck size={14} /> Global Privacy Standard
                        </div>
                        <h1 className="text-6xl font-display font-black text-slate-900 mb-8 tracking-tighter">
                            GDPR <br />
                            <span className="text-emerald-500 italic">Compliance.</span>
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Ensuring the highest level of data protection and privacy rights for our global community of users and their customers.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-slate prose-xl max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            {[
                                { title: "Right to Access", desc: "Instantly download a full export of all data associated with your AZ account.", icon: <UserCheck className="text-emerald-500" /> },
                                { title: "Right to be Forgotten", desc: "Permanent, bank-grade deletion of all personal and transactional identifiers.", icon: <Lock className="text-blue-500" /> },
                                { title: "Data Portability", desc: "Standardized JSON exports for easy migration between compliant ecosystems.", icon: <Globe className="text-purple-500" /> },
                                { title: "Secure Processing", desc: "End-to-end encrypted processing for all sensitive regional data payloads.", icon: <ShieldCheck className="text-amber-500" /> }
                            ].map((item, i) => (
                                <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">{item.icon}</div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-black text-slate-900 mb-8">Our Data Processing Commitment</h2>
                        <p className="text-slate-600 font-medium mb-12 leading-relaxed">
                            AZ Commerce is fully committed to the General Data Protection Regulation (GDPR) and other global privacy frameworks. We act as both a data controller and a data processor, maintaining rigorous security certifications and internal audits to ensure your data stays protected under European and International law.
                        </p>

                        <div className="p-12 bg-slate-900 rounded-[3.5rem] text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                                <div className="max-w-md">
                                    <h3 className="text-3xl font-black mb-4">Request Data Audit</h3>
                                    <p className="text-slate-400 font-medium">Download your full activity log and data map from the last 12 months.</p>
                                </div>
                                <button className="px-12 py-7 bg-emerald-500 text-slate-900 rounded-[2rem] font-black text-xl flex items-center gap-4 hover:bg-white transition-all whitespace-nowrap">
                                    Generate Audit <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default GDPRPage;
