"use client";

import { type ReactNode, type MouseEvent } from "react";

interface HeroCTAProps {
    children: ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

/**
 * Primary CTA button with a subtle glare-sweep on hover.
 * CSS-only — the sweep animation runs once per hover via group-hover.
 */
export default function HeroCTA({
    children,
    onClick,
    className = "",
}: HeroCTAProps) {
    return (
        <button
            onClick={onClick}
            className={`group relative inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-white cursor-pointer border-none transition-all duration-[350ms] hover:-translate-y-0.5 overflow-hidden ${className}`}
            style={{
                background: "var(--gradient-brand)",
                boxShadow: "var(--shadow-glow-primary)",
            }}
        >
            {/* Glare overlay — sweeps on hover */}
            <span
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-hidden="true"
            >
                <span
                    className="absolute inset-0 group-hover:animate-[glareSweep_0.6s_ease-in-out]"
                    style={{
                        background:
                            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
                        transform: "translateX(-100%) skewX(-15deg)",
                    }}
                />
            </span>
            <span className="relative z-[1]">{children}</span>
        </button>
    );
}
