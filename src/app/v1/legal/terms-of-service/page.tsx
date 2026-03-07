"use client";

import { motion } from "framer-motion";
import { FileText, ShieldCheck, Scale, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TermsOfServicePage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Minimal Hero */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                            <FileText size={14} /> Legal Framework
                        </div>
                        <h1 className="text-6xl font-display font-black text-slate-900 mb-8 tracking-tighter">
                            Terms of <br />
                            <span className="text-slate-400 italic">Service.</span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            Version 2.4. Last updated: May 13, 2026. <br /> These terms govern your usage of the AZ Commerce Operating System.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Transparency", desc: "No hidden clauses. We believe in clear, human-readable legal agreements.", icon: <ShieldCheck className="text-slate-900" /> },
                            { title: "Fair Usage", desc: "Scalable infrastructure designed for legitimate, high-performance commerce.", icon: <Scale className="text-slate-900" /> },
                            { title: "Global Compliance", desc: "Built to adhere to the strictest international trade and data laws.", icon: <Globe className="text-slate-900" /> }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Table of Contents */}
                        <div className="lg:w-1/4 sticky top-40 h-fit hidden lg:block">
                            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Navigation</div>
                            <div className="space-y-4">
                                {["Acceptance of Terms", "Account Responsibilities", "Service Availability", "Intellectual Property", "Payment & Fees", "Termination"].map((item, i) => (
                                    <div key={i} className="text-sm font-bold text-slate-500 hover:text-slate-900 cursor-pointer transition-colors block py-2 border-l-2 border-transparent hover:border-slate-900 pl-4">
                                        {i + 1}. {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Text Body */}
                        <div className="lg:w-3/4 max-w-3xl">
                            <div className="prose prose-slate prose-xl max-w-none">
                                <h2 className="text-3xl font-black text-slate-900 mb-6 underline decoration-slate-200">1. Acceptance of Terms</h2>
                                <p className="text-slate-600 font-medium mb-12">
                                    By accessing or using the AZ Commerce OS (the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use the Service.
                                </p>

                                <h2 className="text-3xl font-black text-slate-900 mb-6 underline decoration-slate-200">2. Account Responsibilities</h2>
                                <p className="text-slate-600 font-medium mb-12">
                                    Users are responsible for maintaining the security of their account credentials and for all activities that occur under their account. AZ Commerce reserves the right to terminate accounts that violate our fair usage policy or security protocols.
                                </p>

                                <h2 className="text-3xl font-black text-slate-900 mb-6 underline decoration-slate-200">3. Service Availability</h2>
                                <p className="text-slate-600 font-medium mb-12">
                                    While we strive for 99.99% uptime, AZ Commerce cannot guarantee uninterrupted access to the Service. Maintenance windows and unforeseen hardware failures may occasionally occur.
                                </p>

                                <h2 className="text-3xl font-black text-slate-900 mb-6 underline decoration-slate-200">4. Intellectual Property</h2>
                                <p className="text-slate-600 font-medium mb-12">
                                    The AZ Commerce OS, including its proprietary algorithms, design system, and unified brain architecture, remains the exclusive property of AZ Commerce. Users retain all rights to their customer data and brand assets uploaded to the system.
                                </p>

                                <div className="p-10 bg-slate-900 rounded-[2.5rem] mt-20 text-white">
                                    <h3 className="text-2xl font-black mb-6">Need legal clarification?</h3>
                                    <p className="text-slate-400 font-medium mb-10">Our legal team is available for enterprise-level compliance reviews and custom agreements.</p>
                                    <button className="px-10 py-6 bg-white text-slate-900 rounded-2xl font-black text-lg flex items-center gap-4 hover:bg-slate-200 transition-all">
                                        Contact Legal Dept <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TermsOfServicePage;
