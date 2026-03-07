"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Code2, Webhook, Lock, Database } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

const tools = [
    {
        title: "RESTful Endpoints",
        desc: "Interact with users, products, orders, and more dynamically via JSON.",
        icon: Database,
        accent: "bg-slate-800"
    },
    {
        title: "Webhooks",
        desc: "Listen for events like order_created and sync your external apps instantly.",
        icon: Webhook,
        accent: "bg-emerald-600"
    },
    {
        title: "Authentication",
        desc: "Secure OAuth2 implementations and granular scoped API keys.",
        icon: Lock,
        accent: "bg-blue-600"
    },
    {
        title: "SDKs & Libraries",
        desc: "Official packages for Node.js, Python, PHP, and Go.",
        icon: Code2,
        accent: "bg-purple-600"
    }
];

export default function ApiReferencePage() {
    return (
        <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-600 pb-20">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="orange" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ rotate: [0, 360], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-orange-100/40 to-transparent blur-3xl rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                                </span>
                                Developer Hub
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8"
                            >
                                Build powerful <br />
                                <span className="text-orange-600 italic">Integrations</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-12"
                            >
                                Integrate AZ Commerce into your existing tech stack. Connect ERPs, build custom storefronts, and automate your workflows using our robust REST APIs.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                <Link
                                    href="/signup"
                                    className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-all shadow-xl shadow-orange-600/20 active:scale-95 flex items-center gap-3 group"
                                >
                                    Read API Docs
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg shadow-slate-200/10">
                                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                                        {/* <Terminal size={16} className="text-orange-600"
                                        /> */}
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    Get API Key
                                </button>
                            </motion.div>
                        </div>

                        {/* TERMINAL PREVIEW (UNCHANGED STRUCTURE) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative perspective-1000"
                        >
                            <div className="bg-[#0f172a] rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-700 overflow-hidden relative z-10 transition-transform hover:scale-[1.02] duration-700">

                                <div className="h-12 border-b border-slate-800 flex items-center px-8 gap-2.5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                    </div>
                                    <div className="mx-auto text-[11px] font-mono text-slate-400">
                                        api.azcommerce.com/v1
                                    </div>
                                </div>

                                <div className="p-8 aspect-[1.4/1] w-full relative font-mono text-sm">
                                    <div className="text-emerald-400 mb-4">
                                        GET <span className="text-slate-300">/v1/orders</span>
                                    </div>
                                    <div className="text-slate-500 mb-2">
                                        {'// Example Response'}
                                    </div>
                                    <pre className="text-blue-300 leading-relaxed overflow-hidden">
                                        {`{
  "status": "success",
  "data": [
    {
      "id": "ord_9x28qA",
      "amount": 299.99,
      "status": "fulfilled"
    }
  ]
}`}
                                    </pre>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CARDS SECTION — COMPLETELY UNTOUCHED */}
            <section className="py-20 bg-white relative overflow-hidden perspective-2000">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6">
                            Made for <span className="text-orange-600 italic">Developers</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl">
                            Low latency, exceptional uptime, and fully documented endpoints so you can build with confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tools.map((tool, i) => (
                            <motion.div
                                key={tool.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative h-[320px] rounded-[2rem] bg-white border border-slate-100 p-8 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div className={cn(
                                    "absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full",
                                    tool.accent
                                )} />
                                <div className="relative z-10">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-lg text-white",
                                        tool.accent
                                    )}>
                                        <tool.icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-[#0f172a] mb-3 group-hover:text-orange-600 transition-colors">
                                        {tool.title}
                                    </h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                        {tool.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}