"use client";

import { Smartphone } from "lucide-react";
import ElectricBorder from "./ElectricBorder";

export default function AndroidInstallCTA() {
    return (
        <ElectricBorder
            color="#cc7be8"
            speed={0.85}
            chaos={0.08}
            borderRadius={999}
            className="rounded-full"
            style={{ display: "inline-block" }}
        >
            <span
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-[1.02rem] text-[var(--foreground)] bg-white/90 border border-white/80 no-underline overflow-hidden transition-all duration-[350ms] hover:-translate-y-0.5 hover:text-white"
                style={{ boxShadow: "0 12px 44px rgba(204, 123, 232, 0.24)" }}
            >
                <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "var(--gradient-brand)" }}
                    aria-hidden="true"
                />
                <span
                    className="absolute inset-0 opacity-70"
                    style={{
                        background: "linear-gradient(105deg, transparent 34%, rgba(255,255,255,0.55) 48%, transparent 62%)",
                        animation: "glareSweep 2.8s ease-in-out infinite",
                    }}
                    aria-hidden="true"
                />
                <Smartphone size={19} strokeWidth={2.3} className="relative z-[1]" aria-hidden="true" />
                <span className="relative z-[1]">Install Android App Now</span>
            </span>
        </ElectricBorder>
    );
}
