"use client";

import { useEffect } from "react";
import WaitlistForm from "./WaitlistForm";

interface WaitlistModalProps {
    open: boolean;
    onClose: () => void;
}

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
    // lock body scroll when open
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    // close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center px-4"
            onClick={onClose}
        >
            {/* backdrop */}
            <div className="absolute inset-0 bg-[#1e1230]/50 backdrop-blur-sm" />

            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[420px] rounded-[24px] bg-white p-8 sm:p-10 animate-[fadeUp_0.35s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                style={{ boxShadow: "0 24px 80px rgba(30,18,48,0.18)" }}
            >
                {/* close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[var(--gray)] hover:bg-[var(--c-muted)] transition-colors cursor-pointer"
                    aria-label="Close"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 4l10 10M14 4L4 14" />
                    </svg>
                </button>

                <WaitlistForm
                    successSlot={
                        <div className="text-center py-4">
                            <div className="text-5xl mb-4">💕</div>
                            <h3
                                className="text-[1.4rem] font-bold text-[var(--foreground)] mb-2"
                                style={{ fontFamily: "var(--font-fraunces)" }}
                            >
                                You&apos;re on the list!
                            </h3>
                            <p className="text-[var(--gray)] text-[0.95rem] leading-relaxed mb-6">
                                We&apos;ll let you know as soon as CoupleGoAI is ready. Get excited!
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 rounded-full font-semibold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                            >
                                Got it!
                            </button>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
