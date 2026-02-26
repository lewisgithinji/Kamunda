"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
    showText?: boolean;
    variant?: "default" | "white";
}

export function Logo({ className, showText = true, variant = "default" }: LogoProps) {
    const isWhite = variant === "white";

    return (
        <div className={cn("flex items-center gap-4 group", className)}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "relative h-10 md:h-12 w-auto aspect-[10/3] overflow-hidden rounded-sm p-1 transition-all duration-300",
                    !isWhite ? "bg-transparent" : "bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                )}
            >
                <Image
                    src="/logo.png"
                    alt="Kamunda Njue Logo"
                    width={200}
                    height={60}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            </motion.div>

            {showText && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col"
                >
                    <span className={cn(
                        "text-xl md:text-2xl font-serif font-bold tracking-tight leading-tight transition-colors duration-300",
                        isWhite ? "text-white" : "text-primary"
                    )}>
                        KAMUNDA NJUE
                    </span>
                    <span className={cn(
                        "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                        isWhite ? "text-white/80" : "text-secondary"
                    )}>
                        & Company Advocates
                    </span>
                </motion.div>
            )}
        </div>
    );
}
