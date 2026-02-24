"use client";

import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, User, ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import Link from "next/link";

export default function V4SignupPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 -z-10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600/5 -z-10 blur-[120px]" />

            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
                {/* Left: Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:block space-y-12"
                >
                    <div className="space-y-6">
                        <Link href="/v4" className="inline-flex items-center gap-2 group mb-8">
                            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-orange-600/20">
                                <span className="text-white font-black text-2xl italic">A/Z</span>
                            </div>
                        </Link>
                        <h1 className="text-5xl md:text-6xl font-display font-semibold text-[#0f172a] leading-[1.1] tracking-tighter">
                            Build your <br />
                            <span className="text-orange-600 italic">dream empire</span> <br />
                            starting today.
                        </h1>
                        <p className="text-xl text-slate-500 font-medium max-w-md">
                            Join 10,000+ businesses scaling with the AZ Commerce engine.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            "14-day full featured free trial",
                            "No credit card required to start",
                            "Full access to Inventory AI & POS",
                            "24/7 Priority support included"
                        ].map((benefit) => (
                            <div key={benefit} className="flex items-center gap-4">
                                <div className="w-6 h-6 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                                    <CheckCircle2 size={16} />
                                </div>
                                <span className="text-base font-bold text-slate-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Signup Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full"
                >
                    <div className="bg-white rounded-[3.5rem] p-12 lg:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50">
                        <div className="lg:hidden text-center mb-12">
                            <Link href="/v3" className="inline-flex items-center gap-2 mb-8 group">
                                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                                    <span className="text-white font-black text-xl italic">A/Z</span>
                                </div>
                            </Link>
                            <h1 className="text-3xl font-display font-semibold text-[#0f172a] tracking-tight">Create your account.</h1>
                        </div>

                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
                                        <input type="text" placeholder="John Doe" className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Business Name</label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
                                        <input type="text" placeholder="Acme Inc." className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
                                    <input type="email" placeholder="name@company.com" className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Create Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
                                    <input type="password" placeholder="••••••••" className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium" />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 ml-1">
                                <input type="checkbox" className="mt-1 accent-orange-600" id="terms" />
                                <label htmlFor="terms" className="text-xs font-medium text-slate-500 leading-relaxed">
                                    I agree to the <Link href="#" className="text-[#0f172a] font-bold hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#0f172a] font-bold hover:underline">Privacy Policy</Link>.
                                </label>
                            </div>

                            <button className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2 group">
                                Start Free Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <p className="text-center mt-12 text-sm font-medium text-slate-500">
                            Already have an account? <Link href="/v3/login" className="text-[#0f172a] font-bold hover:underline group">Log In <ArrowRight size={14} className="inline group-hover:translate-x-0.5 transition-transform" /></Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
