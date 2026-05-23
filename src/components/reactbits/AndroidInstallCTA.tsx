"use client";

import { Smartphone } from "lucide-react";
import { type ReactElement } from "react";
import StarBorder from "./StarBorder";

export default function AndroidInstallCTA(): ReactElement {
    return (
        <StarBorder
            color="#cc7be8"
            speed="4.8s"
            className="rounded-full"
        >
            <span
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-[1.02rem] text-[var(--foreground)] bg-white/95 no-underline overflow-hidden transition-all duration-[350ms] hover:-translate-y-0.5 hover:text-white"
                style={{ boxShadow: "0 12px 44px rgba(204, 123, 232, 0.24)" }}
            >
                <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "var(--gradient-brand)" }}
                    aria-hidden="true"
                />
                <Smartphone size={19} strokeWidth={2.3} className="relative z-[1]" aria-hidden="true" />
                <span className="relative z-[1]">Install Android App Now</span>
            </span>
        </StarBorder>
    );
}
