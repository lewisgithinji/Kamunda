"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FIRM_INFO } from "@/lib/constants";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

const SLIDES = [
    {
        image: "/supreme-court.webp",
        title: <>Unwavering Commitment to the <span className="text-primary italic">Rule of Law</span></>,
        description: "Navigating the highest standards of justice with rigorous intellectual analysis and unwavering integrity since 2010.",
        overlay: "bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"
    },
    {
        image: "/law-firm.jpg",
        title: <>Bespoke Solutions for <span className="text-secondary italic">Complex Transactions</span></>,
        description: "Strategically handling corporate litigation and high-value transactions with the precision and strategic foresight you deserve.",
        overlay: "bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"
    },
    {
        image: "/big-five.jpg",
        title: <>African Excellence with <span className="text-primary italic">Global Standards</span></>,
        description: "Combining industry-hardened experience with youthful energy to secure and advance your interests in a dynamic legal landscape.",
        overlay: "bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent",
        flip: true
    }
];

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-secondary">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={SLIDES[currentSlide].image}
                            alt="Legal background"
                            fill
                            className={cn(
                                "object-cover object-center scale-105 transition-transform duration-500",
                                (SLIDES[currentSlide] as any).flip && "-scale-x-105"
                            )}
                            priority
                            sizes="100vw"
                        />
                        <div className={cn("absolute inset-0 z-10 transition-colors duration-1000", SLIDES[currentSlide].overlay)} />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center space-x-2 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-secondary" />
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm drop-shadow-sm">
                            Established {FIRM_INFO.established}
                        </span>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 drop-shadow-lg">
                                {SLIDES[currentSlide].title}
                            </h1>

                            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
                                {SLIDES[currentSlide].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <a
                            href="#practice-areas"
                            className="w-full sm:w-auto px-10 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-black/10"
                        >
                            Consult Us Now
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center gap-4 text-white/90 bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <div className="p-3 bg-secondary/20 rounded-full">
                                <ShieldCheck className="text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold opacity-70">Professional Indemnity</p>
                                <p className="font-serif font-bold">KES 100 Million Cover</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        suppressHydrationWarning
                        className={cn(
                            "h-1.5 transition-all duration-500 rounded-full",
                            currentSlide === index ? "w-12 bg-secondary" : "w-3 bg-white/30"
                        )}
                    />
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 right-10 hidden lg:block opacity-30">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center"
                >
                    <div className="w-24 h-24 border border-secondary/30 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-secondary/20 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
