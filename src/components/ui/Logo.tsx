"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-4 group", className)}>
            <svg
                width="200"
                height="60"
                viewBox="0 0 200 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 md:h-12 w-auto drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
            >
                {/* 1. Left Bar (Cyan) */}
                <motion.rect
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    x="0" y="0" width="22" height="60" fill="var(--primary)"
                />

                {/* 2. K Block (Navy background) */}
                <g transform="translate(30, 0)">
                    <motion.rect
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        width="65" height="60" fill="var(--secondary)"
                    />
                    {/* Vertical stem (White) */}
                    <motion.path
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        d="M10 8H20V52H10V8Z" fill="white"
                    />
                    {/* Top arm (Cyan) */}
                    <motion.path
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        d="M20 30L55 8V25L20 45V30Z" fill="var(--primary)"
                    />
                    {/* Bottom arm (White) */}
                    <motion.path
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                        d="M20 35L55 52V40L20 20V35Z" fill="white"
                    />
                </g>

                {/* 3. N Block (Navy background) */}
                <g transform="translate(105, 0)">
                    <motion.rect
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        width="65" height="60" fill="var(--secondary)"
                    />
                    {/* N shapes (White) */}
                    <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        d="M10 8H18V52H10V8Z M18 8L47 52H55L26 8H18Z M47 8H55V52H47V8Z" fill="white"
                    />
                </g>

                {/* 4. Right Bar (Cyan) */}
                <motion.rect
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    x="180" y="0" width="20" height="60" fill="var(--primary)"
                />
            </svg>

            {showText && (
                <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-serif font-bold tracking-tight leading-tight text-primary">
                        KAMUNDA NJUE
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">
                        & Company Advocates
                    </span>
                </div>
            )}
        </div>
    );
}
