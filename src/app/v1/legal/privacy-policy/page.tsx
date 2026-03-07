"use client";

import { ShieldCheck, Lock, EyeOff, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPolicyPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Minimalist Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-100">
                            <ShieldCheck size={14} /> Trust & Transparency
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-display font-black leading-[1] text-slate-900 mb-8 tracking-tighter">
                            Your Privacy. <br />
                            <span className="text-emerald-500">Uncompromised.</span>
                        </h1>
                        <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
                            At AZ Commerce, we believe data privacy is a fundamental human right. Explore how we secure your data and the steps we take to protect your business empire.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Principles Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Zero Data Sale", desc: "We never sell your data to third parties. Your business information belongs to you.", icon: <EyeOff className="text-emerald-600" /> },
                            { title: "Vault-Grade Encryption", desc: "Every transaction and identity is protected by AES-256 bank-level encryption.", icon: <Lock className="text-emerald-600" /> },
                            { title: "Global Compliance", desc: "Full adherence to GDPR, CCPA, and global data sovereignty laws.", icon: <Globe className="text-emerald-600" /> }
                        ].map((principle, i) => (
                            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                    {principle.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{principle.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{principle.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-1/4">
                            <div className="sticky top-32 space-y-4">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Table of Contents</p>
                                {[
                                    "Information Collection",
                                    "How we use Data",
                                    "Data Sharing Policy",
                                    "User Privacy Rights",
                                    "Cookie Usage",
                                    "Security Measures"
                                ].map((item, i) => (
                                    <div key={i} className={`p-4 rounded-xl font-bold cursor-pointer transition-all ${i === 0 ? "bg-emerald-50 text-emerald-600" : "text-slate-500 hover:text-slate-900"}`}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Policy Content */}
                        <div className="lg:w-3/4">
                            <div className="prose prose-slate prose-xl max-w-none">
                                <h2 className="text-4xl font-black text-slate-900 mb-10">1. Information Collection</h2>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    We collect information that you provide directly to us when you create an account, use our services, or communicate with us. This may include your name, business email, physical address, and payment information. We use this data to provide an elite level of service and to ensure the security of your account.
                                </p>
                                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 mb-12">
                                    <h4 className="font-black text-slate-900 mb-4">Key Data Points We Encrypt:</h4>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {["Transaction History", "Customer Profiles", "Inventory Metadata", "Payout Details"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                                                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                                    <CheckCircle2 size={14} />
                                                </div>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h2 className="text-4xl font-black text-slate-900 mb-10">2. How we use Data</h2>
                                <p className="text-slate-600 leading-relaxed mb-12">
                                    Your data is used specifically to enhance your business operations. This include AI-driven forecasting, order processing, and personalized business insights. We do not use your data for advertising purposes without your explicit, high-level consent.
                                </p>

                                <div className="aspect-[21/9] bg-slate-900 rounded-[3rem] flex items-center justify-center text-white p-12 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500 opacity-10 blur-[100px]" />
                                    <div className="relative z-10 text-center">
                                        <ShieldCheck size={48} className="text-emerald-500 mx-auto mb-6" />
                                        <h3 className="text-3xl font-black mb-4">GDPR & CCPA Certified</h3>
                                        <p className="text-emerald-100/60 font-medium">Your data rights are fully protected under international law.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-black text-slate-900 mb-8">Have privacy questions?</h2>
                    <p className="text-xl text-slate-500 mb-12 font-medium">Our legal and security team is here to provide absolute clarity.</p>
                    <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 mx-auto hover:bg-emerald-600 transition-all">
                        Contact Privacy Team <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PrivacyPolicyPage;
