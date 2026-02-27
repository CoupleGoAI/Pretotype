"use client";

import { type ReactNode } from "react";

/* ─── Bento Grid ─── */
export function BentoGrid({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${className}`}>
            {children}
        </div>
    );
}

/* ─── Bento Card ─── */
interface BentoCardProps {
    children: ReactNode;
    className?: string;
    /** span 2 columns on sm+ */
    wide?: boolean;
}

/**
 * Magic-Bento–style card: translucent glass bg, subtle gradient overlay
 * on hover, and a thin top-edge highlight that fades in.
 * Mobile-safe (hover effects are decoration-only).
 */
export function BentoCard({
    children,
    className = "",
    wide = false,
}: BentoCardProps) {
    return (
        <div
            className={`group relative overflow-hidden p-10 rounded-[var(--radius)] bg-white/70 backdrop-blur-[12px] border border-[rgba(30,18,48,0.05)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] hover:border-[rgba(244,139,166,0.15)] ${wide ? "sm:col-span-2" : ""} ${className}`}
        >
            {/* Gradient fill on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "var(--gradient-card)" }}
            />
            {/* Top-edge shine on hover */}
            <div
                className="absolute top-0 left-[10%] right-[10%] h-px opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(var(--c-primary-rgb), 0.4), rgba(var(--c-accent-rgb), 0.4), transparent)",
                }}
            />
            <div className="relative z-[1]">{children}</div>
        </div>
    );
}
