"use client";

import { motion } from "framer-motion";
import { FIRM_INFO } from "@/lib/constants";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center space-x-2 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-secondary" />
                        <span className="text-secondary font-medium tracking-widest uppercase text-sm">
                            Established {FIRM_INFO.established}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8"
                    >
                        Combining Experience with <span className="text-secondary italic">Youthful Energy</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
                    >
                        {FIRM_INFO.description.split('.')[0]}. {FIRM_INFO.description.split('.')[1]}.
                        We provide expert legal solutions tailored to your unique corporate and individual needs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <a
                            href="#practice-areas"
                            className="w-full sm:w-auto px-10 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 group"
                        >
                            Consult Us Now
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center gap-4 text-white/90">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                                <ShieldCheck className="text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold opacity-70">Professional Indemnity</p>
                                <p className="font-serif">KES 100 Million Cover</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 right-10 hidden lg:block">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center"
                >
                    <div className="w-24 h-24 border border-secondary/20 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
