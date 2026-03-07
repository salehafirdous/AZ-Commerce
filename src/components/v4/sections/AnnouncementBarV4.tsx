"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AnnouncementBarV4 = () => {
    return (
        <div className="relative w-full bg-[#0f172a] py-2.5 overflow-hidden">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-20 items-center"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6">
                            <span className="text-white/90 text-sm font-medium tracking-wide">
                                🚀 New Platform Release: Version 4.0 is now live!
                            </span>
                            <span className="text-orange-400 text-sm font-bold flex items-center gap-1">
                                Start your 14-day free trial today
                            </span>
                            <Link
                                href="/v4/demo"
                                className="text-white text-sm font-bold underline decoration-orange-500 underline-offset-4 hover:text-orange-400 transition-colors"
                            >
                                Try the Demo
                            </Link>
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-20 items-center"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6">
                            <span className="text-white/90 text-sm font-medium tracking-wide">
                                🚀 New Platform Release: Version 4.0 is now live!
                            </span>
                            <span className="text-orange-400 text-sm font-bold flex items-center gap-1">
                                Start your 14-day free trial today
                            </span>
                            <Link
                                href="/v4/demo"
                                className="text-white text-sm font-bold underline decoration-orange-500 underline-offset-4 hover:text-orange-400 transition-colors"
                            >
                                Try the Demo
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default AnnouncementBarV4;
