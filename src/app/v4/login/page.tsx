"use client";

import { motion } from "framer-motion";
import { LogIn, Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react";
import Link from "next/link";

export default function V3LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-20 pb-12 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg"
            >
                <div className="bg-white rounded-[3.5rem] p-12 lg:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50">
                    <div className="text-center mb-12">
                        <Link href="/v3" className="inline-flex items-center gap-2 mb-8 group">
                            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                                <span className="text-white font-black text-xl italic">A/Z</span>
                            </div>
                        </Link>
                        <h1 className="text-3xl font-display font-semibold text-[#0f172a] mb-4 tracking-tight">Welcome back.</h1>
                        <p className="text-slate-500 font-medium">Log in to manage your global commerce engine.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                                <Link href="#" className="text-xs font-bold text-orange-600 hover:text-orange-700">Forgot?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-[#0f172a] text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 group">
                            Sign In <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-12">
                        <div className="relative flex items-center justify-center mb-8">
                            <hr className="w-full border-slate-100" />
                            <span className="absolute px-4 bg-white text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Or continue with</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 py-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-[#0f172a]">
                                <Chrome size={18} /> Google
                            </button>
                            <button className="flex items-center justify-center gap-3 py-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-[#0f172a]">
                                <Github size={18} /> GitHub
                            </button>
                        </div>
                    </div>

                    <p className="text-center mt-12 text-sm font-medium text-slate-500">
                        New to AZ Commerce? <Link href="/v3/signup" className="text-orange-600 font-bold hover:underline">Start free trial</Link>
                    </p>
                </div>
            </motion.div>
        </main>
    );
}
