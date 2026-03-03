"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRACTICE_AREAS } from "@/lib/constants";
import { Scale, Briefcase, Landmark, Home, ShieldAlert, Gavel, MessageSquare, Landmark as Bank, Stethoscope, Handshake, Users, Eye, ShieldCheck, X, ArrowRight } from "lucide-react";

const iconMap: Record<number, any> = {
    1: Scale,
    2: Briefcase,
    3: Landmark,
    4: Home,
    5: ShieldAlert,
    6: Gavel,
    7: MessageSquare,
    8: Bank,
    10: Stethoscope,
    11: Handshake,
    12: Users,
    13: Eye,
    14: ShieldCheck,
};

export function PracticeAreas() {
    const [selectedArea, setSelectedArea] = useState<typeof PRACTICE_AREAS[0] | null>(null);

    return (
        <section id="practice-areas" className="section-padding bg-accent/30 relative">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Our Areas of Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif text-primary"
                    >
                        Bespoke <span className="text-secondary italic">Legal Solutions</span> for a Complex World
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-muted-foreground text-lg"
                    >
                        We provide rigorous intellectual analysis and unwavering integrity across a diverse range of legal specializations. Click on any area to learn more about our comprehensive services.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRACTICE_AREAS.map((area, index) => {
                        const Icon = iconMap[area.id] || Scale;
                        return (
                            <motion.div
                                key={area.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                onClick={() => setSelectedArea(area)}
                                className="group p-8 bg-white border border-border rounded-2xl hover:border-primary hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight size={20} className="text-primary" />
                                </div>
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors pr-8">
                                    {area.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                    {area.description}
                                </p>
                                <div className="mt-6 pt-6 border-t border-border/50 flex items-center text-xs font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                                    Learn More
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedArea && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedArea(null)}
                            className="absolute inset-0 bg-secondary/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 bg-primary p-8 md:p-12 text-white flex flex-col justify-between min-h-[250px] md:min-h-[300px]">
                                    <div>
                                        {(() => {
                                            const Icon = iconMap[selectedArea.id] || Scale;
                                            return <Icon className="mb-6 md:mb-8 opacity-80 w-12 h-12 md:w-16 md:h-16" />;
                                        })()}
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                                            {selectedArea.title}
                                        </h2>
                                    </div>
                                    <button
                                        onClick={() => setSelectedArea(null)}
                                        className="mt-6 md:mt-8 flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-white/80 transition-colors"
                                    >
                                        <X size={18} /> Close
                                    </button>
                                </div>
                                <div className="md:w-2/3 p-8 md:p-12 bg-white">
                                    <div className="max-w-prose">
                                        <h4 className="text-secondary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 md:mb-6">Detailed Overview</h4>
                                        <p className="text-lg md:text-xl font-medium text-primary mb-6 md:mb-8 leading-relaxed italic">
                                            "{selectedArea.description}"
                                        </p>
                                        <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg pb-6 md:pb-8">
                                            {selectedArea.details?.split('\n\n').map((para, i) => (
                                                <p key={i}>{para}</p>
                                            ))}
                                        </div>
                                        <div className="pt-6 md:pt-8 border-t border-border">
                                            <a
                                                href="#contact"
                                                onClick={() => setSelectedArea(null)}
                                                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                                            >
                                                Book a Consultation <ArrowRight size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
