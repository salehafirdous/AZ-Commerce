"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Package,
    CreditCard,
    Truck,
    Monitor,
    CheckCircle2,
    ArrowRight,
    Plus,
    Globe,
    ShoppingBag,
    Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

const OnboardingWizard = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);

    const steps = [
        { title: "Add First Product", icon: <Package size={24} />, desc: "Bring your business to life." },
        { title: "Configure Payments", icon: <CreditCard size={24} />, desc: "How will you get paid?" },
        { title: "Set Delivery", icon: <Truck size={24} />, desc: "Define your shipping zones." },
        { title: "Setup POS", icon: <Monitor size={24} />, desc: "Connect your offline store." },
        { title: "Go Live", icon: <Globe size={24} />, desc: "Publish to the world." }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <ShoppingBag size={24} />
                    </div>
                    <div>
                        <span className="text-xl font-display font-black text-slate-900 leading-none block">AZ Commerce</span>
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Onboarding Wizard</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="text-slate-400 hover:text-slate-900 transition-colors">
                        <Bell size={20} />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200" />
                        <div className="hidden md:block">
                            <div className="text-sm font-bold text-slate-900">John&apos;s Store</div>
                            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Setup Phase</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center p-6 bg-slate-50/50">
                <div className="w-full max-w-5xl grid lg:grid-cols-12 gap-12">

                    {/* Progress Sidebar */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-900 mb-8 px-2">Getting Started</h3>
                            <div className="space-y-2">
                                {steps.map((s, i) => (
                                    <div key={i} className={cn(
                                        "relative flex items-center gap-4 p-4 rounded-2xl transition-all",
                                        step === i + 1 ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-400"
                                    )}>
                                        <div className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center",
                                            step === i + 1 ? "bg-white/20" : step > i + 1 ? "bg-emerald-100 text-emerald-600" : "bg-slate-100"
                                        )}>
                                            {step > i + 1 ? <CheckCircle2 size={24} /> : s.icon}
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm uppercase tracking-widest opacity-60">Step {i + 1}</div>
                                            <div className="font-black text-lg leading-tight">{s.title}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Step Content */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h2 className="text-4xl font-black text-slate-900 mb-2">Add your first product</h2>
                                            <p className="text-xl text-slate-500">Let&apos;s populate your inventory with at least one item.</p>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center">
                                                <Package size={48} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-12">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-900 uppercase tracking-widest">Product Name</label>
                                                <input className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none" placeholder="e.g. Wireless Headphones" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-900 uppercase tracking-widest">Price ($)</label>
                                                <input className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none" placeholder="0.00" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-900 uppercase tracking-widest">Description</label>
                                            <textarea className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none h-32" placeholder="Tell customers about this product..." />
                                        </div>
                                        <div className="p-8 border-4 border-dashed border-slate-100 rounded-[2rem] text-center hover:border-blue-200 transition-colors cursor-pointer group">
                                            <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                                                <Plus size={32} />
                                            </div>
                                            <div className="font-black text-slate-900">Upload Product Image</div>
                                            <div className="text-sm text-slate-400 mt-1">PNG, JPG, or WEBP up to 5MB</div>
                                        </div>
                                    </div>

                                    <button onClick={nextStep} className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3">
                                        Save Product & Continue <ArrowRight size={24} />
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100"
                                >
                                    <h2 className="text-4xl font-black text-slate-900 mb-2">Configure Payments</h2>
                                    <p className="text-xl text-slate-500 mb-12">Connect your preferred payment gateway to start accepting orders.</p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                                        {[
                                            { name: "Stripe", icon: "S", color: "bg-indigo-600" },
                                            { name: "PayPal", icon: "P", color: "bg-blue-900" },
                                            { name: "Razorpay", icon: "R", color: "bg-blue-500" },
                                            { name: "Bank Transfer", icon: "B", color: "bg-slate-700" },
                                        ].map((p) => (
                                            <div key={p.name} className="p-8 border-2 border-slate-100 rounded-[2rem] flex items-center justify-between group hover:border-blue-600 transition-all cursor-pointer">
                                                <div className="flex items-center gap-4">
                                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg", p.color)}>
                                                        {p.icon}
                                                    </div>
                                                    <span className="text-xl font-bold text-slate-900">{p.name}</span>
                                                </div>
                                                <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-blue-600 group-hover:bg-blue-50 transition-all" />
                                            </div>
                                        ))}
                                    </div>

                                    <button onClick={nextStep} className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                                        Connect & Continue
                                    </button>
                                </motion.div>
                            )}

                            {step >= 3 && step < 5 && (
                                <motion.div
                                    key="shared"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 text-center py-24"
                                >
                                    <div className="w-32 h-32 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-12">
                                        {steps[step - 1].icon}
                                    </div>
                                    <h2 className="text-5xl font-black text-slate-900 mb-6">{steps[step - 1].title}</h2>
                                    <p className="text-2xl text-slate-500 mb-12 max-w-xl mx-auto">{steps[step - 1].desc}</p>
                                    <button onClick={nextStep} className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                                        Setup Now
                                    </button>
                                </motion.div>
                            )}

                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-slate-900 p-12 rounded-[3rem] shadow-2xl text-white text-center py-20 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-600/30 pointer-events-none" />

                                    <h2 className="text-6xl font-black mb-8 relative z-10">Your store is <span className="text-blue-400 underline italic">ready.</span></h2>
                                    <p className="text-2xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
                                        Congratulations! Your AZ Commerce ecosystem is configured and ready to handle your first sale.
                                    </p>

                                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                                        <button
                                            onClick={() => window.location.href = "/"}
                                            className="px-10 py-6 bg-white text-slate-900 rounded-2xl font-black text-2xl hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-3"
                                        >
                                            Visit Public Website <Globe size={28} />
                                        </button>
                                        <button
                                            onClick={() => window.location.href = "/"}
                                            className="px-10 py-6 bg-blue-600 text-white border border-blue-400/30 rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
                                        >
                                            Open Admin Dashboard <Monitor size={28} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingWizard;
