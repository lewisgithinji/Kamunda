"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-4 group", className)}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-10 md:h-12 w-auto aspect-[10/3] overflow-hidden rounded-sm"
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
                    <span className="text-xl md:text-2xl font-serif font-bold tracking-tight leading-tight text-primary">
                        KAMUNDA NJUE
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">
                        & Company Advocates
                    </span>
                </motion.div>
            )}
        </div>
    );
}
