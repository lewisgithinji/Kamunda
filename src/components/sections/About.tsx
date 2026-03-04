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

                    {/* Staggered Mask Layout / Partner Images */}
                    <div className="relative py-12 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 h-full min-h-[500px]"
                        >
                            {/* Partner 1: Daniel (Back, Left) */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative w-full md:w-[70%] h-[450px] rounded-3xl overflow-hidden shadow-2xl md:absolute md:top-0 md:left-0 z-10 border-4 border-white"
                            >
                                <img
                                    src="/Daniel_Kamunda.png"
                                    alt="Daniel Njue Kamunda - Managing Partner"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />

                                {/* Glassmorphism Badge 1 */}
                                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white shadow-xl">
                                    <div className="p-2 bg-secondary/80 rounded-lg">
                                        <History size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold leading-none">15+</h3>
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-white/80">Years of Legal Excellence</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Partner 2: Andrew (Front, Right) */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative w-full md:w-[65%] h-[400px] rounded-3xl overflow-hidden shadow-2xl md:absolute md:bottom-0 md:right-0 z-20 border-4 border-white md:translate-y-12"
                            >
                                <img
                                    src="/Andrew_Kamunda.png"
                                    alt="Andrew Mugo Kamunda - Partner"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

                                {/* Glassmorphism Badge 2 */}
                                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-primary/20 border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white shadow-xl">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <Award size={24} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold leading-none italic">Full Service</h3>
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-white/80">Expertise Across All Jurisdictions</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
