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
                            <div className="mb-5 pb-5 border-b border-[rgba(30,18,48,0.08)]">
                                <p className="text-[var(--gray)] text-[0.88rem] mb-3">
                                    Join our Discord for beta testing and product updates
                                </p>
                                <a
                                    href="https://discord.gg/fA58tKnT"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Join Discord community for beta testing and product updates"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-[0.9rem] text-white transition-all duration-300 hover:-translate-y-0.5"
                                    style={{ background: "#5865F2", boxShadow: "0 4px 14px rgba(88,101,242,0.35)" }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M20.317 4.3671a19.8062 19.8062 0 00-4.8851-1.5152.074.074 0 00-.0784.0336c-.211.3972-.4446.9151-.6083 1.329a18.27 18.27 0 00-5.487 0c-.1637-.4139-.3957-.9319-.6083-1.329a.077.077 0 00-.0784-.0336 19.7818 19.7818 0 00-4.8854 1.515.07.07 0 00-.0329.0318C.5817 9.09.3134 13.7381 1.0703 18.2591a.082.082 0 00.0331.0554 19.9148 19.9148 0 005.7963 3.0294.073.073 0 00.0797-.0276c.461-.6304.8697-1.2952 1.226-1.9514a.07.07 0 00-.0385-.0985 13.072 13.072 0 01-1.473-.7034.07.07 0 01-.0066-.1154c.099-.074.198-.1498.293-.2271a.07.07 0 01.0726-.0096c3.189 1.48 6.644 1.48 9.786 0a.07.07 0 01.0757.0091c.096.0773.194.1529.293.2271a.07.07 0 01-.006.1139 12.251 12.251 0 01-1.473.7035a.07.07 0 00-.037.0985c.361.7562.769 1.421 1.226 1.9514a.07.07 0 00.0796.0276 19.99 19.99 0 005.8015-3.0294.07.07 0 00.033-.0551c.857-4.561.645-8.519-.274-12.6549a.058.058 0 00-.02-.0331zM8.02 15.3312c-1.1825 0-2.1569-.9718-2.1569-2.1575 0-1.1857.9718-2.1575 2.1569-2.1575 1.1851 0 2.1575.9718 2.1575 2.1575 0 1.1857-.9724 2.1575-2.1575 2.1575zm7.9701 0c-1.1825 0-2.1569-.9718-2.1569-2.1575 0-1.1857.9718-2.1575 2.1569-2.1575 1.1851 0 2.1575.9718 2.1575 2.1575 0 1.1857-.9724 2.1575-2.1575 2.1575z" />
                                    </svg>
                                    Join Discord
                                </a>
                            </div>
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
