"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShoppingBag, ArrowRight, Mail, Lock, User, CheckCircle2, Store, Globe, CreditCard } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const RocketIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
        <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
    </svg>
);

const SignupFlow = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        otp: "",
        businessType: "Retail",
        plan: "Basic",
        storeName: "",
        subdomain: ""
    });

    const router = useRouter();

    const nextStep = () => setStep(step + 1);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === "storeName" ? { subdomain: value.toLowerCase().replace(/\s+/g, '-') + ".azcommerce.in" } : {})
        }));
    };

    const steps = [
        { title: "Account Details", icon: <User size={20} /> },
        { title: "Verification", icon: <CheckCircle2 size={20} /> },
        { title: "Business Type", icon: <ShoppingBag size={20} /> },
        { title: "Choose Plan", icon: <CreditCard size={20} /> },
        { title: "Store Setup", icon: <Store size={20} /> }
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
            {/* Left Plate - Branding */}
            <div className="lg:w-1/3 bg-blue-600 p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />

                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-2 mb-20">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                            <ShoppingBag size={24} />
                        </div>
                        <span className="text-2xl font-display font-bold">AZ Commerce</span>
                    </Link>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-black mb-6">Join the commerce revolution.</h2>
                            <p className="text-xl text-blue-100">You&apos;re minutes away from launching your business ecosystem.</p>
                        </div>

                        <div className="space-y-8">
                            {steps.map((s, i) => (
                                <div key={i} className={cn(
                                    "flex items-center gap-4 transition-opacity",
                                    step > i + 1 ? "opacity-100" : step === i + 1 ? "opacity-100" : "opacity-40"
                                )}>
                                    <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center border-2",
                                        step > i + 1 ? "bg-white text-blue-600 border-white" : step === i + 1 ? "border-white" : "border-white/30"
                                    )}>
                                        {step > i + 1 ? <CheckCircle2 size={20} /> : s.icon}
                                    </div>
                                    <span className="font-bold text-lg">{s.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative z-10 pt-20">
                    <p className="text-blue-100 italic">&quot;AZ Commerce changed how we handle inventory. We launched our store in under 12 hours.&quot;</p>
                    <div className="mt-4 font-bold">— Sarah Jenkins, Founder of Mode</div>
                </div>
            </div>

            {/* Right Plate - Flow */}
            <div className="flex-grow flex items-center justify-center p-6 lg:p-20">
                <div className="w-full max-w-xl">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
                            >
                                <h3 className="text-3xl font-black text-slate-900 mb-2">Create your account</h3>
                                <p className="text-slate-500 mb-8">Start your 14-day free trial. No credit card required.</p>

                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900 flex items-center gap-2 px-1">
                                            <User size={14} /> Full Name
                                        </label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your name"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900 flex items-center gap-2 px-1">
                                            <Mail size={14} /> Email Address
                                        </label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="name@company.com"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900 flex items-center gap-2 px-1">
                                            <Lock size={14} /> Create Password
                                        </label>
                                        <input
                                            required
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="••••••••"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-all font-medium"
                                        />
                                    </div>
                                    <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2">
                                        Continue to Verification <ArrowRight size={20} />
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 text-center"
                            >
                                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <Mail size={32} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-2">Check your email</h3>
                                <p className="text-slate-500 mb-8">We&apos;ve sent a 6-digit verification code to <span className="font-bold text-slate-900">{formData.email}</span></p>

                                <div className="flex justify-center gap-4 mb-8">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            maxLength={1}
                                            className="w-12 h-16 text-center text-2xl font-black bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none"
                                        />
                                    ))}
                                </div>

                                <button onClick={nextStep} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 mb-6">
                                    Verify Code
                                </button>
                                <button className="text-blue-600 font-bold hover:underline">Resend code (0:59)</button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
                            >
                                <h3 className="text-3xl font-black text-slate-900 mb-2">Tell us about your business</h3>
                                <p className="text-slate-500 mb-8">We&apos;ll customize your dashboard based on your industry.</p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {["Retail", "Grocery", "Pharmacy", "Restaurant", "Fashion", "Electronics", "Wholesale", "Others"].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setFormData({ ...formData, businessType: type })}
                                            className={cn(
                                                "p-6 rounded-2xl border-2 transition-all text-left font-bold",
                                                formData.businessType === type
                                                    ? "bg-blue-50 border-blue-600 text-blue-600"
                                                    : "bg-white border-slate-100 text-slate-600 hover:border-slate-300"
                                            )}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>

                                <button onClick={nextStep} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                                    Select & Continue
                                </button>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
                            >
                                <h3 className="text-3xl font-black text-slate-900 mb-2">Choose your plan</h3>
                                <p className="text-slate-500 mb-8">Start for free, upgrade when you need to.</p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        { id: "Basic", name: "Basic", price: "$29/mo", desc: "1 store, POS, Web" },
                                        { id: "Advanced", name: "Advanced", price: "$99/mo", desc: "Apps, Delivery, Multi-vendor" },
                                    ].map((p) => (
                                        <button
                                            key={p.id}
                                            onClick={() => setFormData({ ...formData, plan: p.id })}
                                            className={cn(
                                                "w-full p-6 rounded-2xl border-2 transition-all flex items-center justify-between",
                                                formData.plan === p.id
                                                    ? "bg-blue-50 border-blue-600"
                                                    : "bg-white border-slate-100 hover:border-slate-300"
                                            )}
                                        >
                                            <div className="text-left">
                                                <div className="font-black text-lg text-slate-900">{p.name}</div>
                                                <div className="text-slate-500">{p.desc}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-black text-xl text-blue-600">{p.price}</div>
                                                <div className="text-xs text-slate-400 font-bold uppercase">14-Day Free Trial</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <button onClick={nextStep} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                                    Select Plan
                                </button>
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div
                                key="step5"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
                            >
                                <h3 className="text-3xl font-black text-slate-900 mb-2">Set up your store identity</h3>
                                <p className="text-slate-500 mb-8">This will be your storefront&apos;s digital address.</p>

                                <div className="space-y-8 mb-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-900 px-1">Store Name</label>
                                        <div className="relative">
                                            <Store className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                            <input
                                                required
                                                name="storeName"
                                                type="text"
                                                value={formData.storeName}
                                                onChange={handleInputChange}
                                                placeholder="e.g. Mode Fashion"
                                                className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-all font-black text-lg"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-900 px-1">Your Store URL</label>
                                        <div className="p-6 bg-slate-900 rounded-2xl flex items-center gap-3 text-white">
                                            <Globe size={24} className="text-blue-400" />
                                            <span className="font-mono text-lg font-bold">
                                                {formData.subdomain || "yourstore.azcommerce.in"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => router.push("/onboarding")}
                                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3"
                                >
                                    Create My Store <RocketIcon />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};


export default SignupFlow;
