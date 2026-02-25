"use client";

import { motion } from "framer-motion";
import { FIRM_INFO } from "@/lib/constants";
import { CheckCircle2, History, Target, Award } from "lucide-react";

export function About() {
    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                            About Our Firm
                        </span>
                        <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
                            A Legacy of <span className="text-primary italic">Excellence</span> Since 2010
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                            {FIRM_INFO.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent rounded-lg">
                                    <Target className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Our Vision</h4>
                                    <p className="text-sm text-muted-foreground">{FIRM_INFO.vision}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent rounded-lg">
                                    <Award className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Our Motto</h4>
                                    <p className="text-sm text-muted-foreground">{FIRM_INFO.motto}</p>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Strategic representation for corporate & individual clients",
                                "Full-service legal solutions across 13 practice areas",
                                "Deep-rooted local knowledge with global standards",
                                "Committed to efficiency, competition and timeliness"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                                    <span className="font-medium text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image/Stats Grid */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="space-y-4">
                                <div className="h-64 rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                                        alt="Law Office"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-primary p-8 rounded-2xl text-white">
                                    <h3 className="text-4xl font-serif font-bold mb-2">15+</h3>
                                    <p className="text-white/70 text-sm">Years of Legal Excellence</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="bg-secondary p-8 rounded-2xl text-primary">
                                    <h3 className="text-3xl font-serif font-bold mb-2">Full Service</h3>
                                    <p className="text-primary/70 text-sm italic">Covering all areas of law</p>
                                </div>
                                <div className="h-64 rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1505664194762-85b1758d5140?q=80&w=2070&auto=format&fit=crop"
                                        alt="Legal Gavel"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Experience Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border flex items-center gap-4 z-20">
                            <History className="text-secondary" size={32} />
                            <div>
                                <p className="font-bold text-lg">Since 2010</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Growing with Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
