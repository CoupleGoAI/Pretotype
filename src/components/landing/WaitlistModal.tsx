"use client";

import { useState, useEffect, FormEvent } from "react";

interface WaitlistModalProps {
    open: boolean;
    onClose: () => void;
}

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });

            if (res.ok) {
                setStatus("success");
                setMessage("You're on the list! 🎉");
                setName("");
                setEmail("");
            } else {
                const data = await res.json();
                setStatus("error");
                setMessage(data.message || "Something went wrong.");
            }
        } catch {
            setStatus("error");
            setMessage("Network error. Please try again.");
        }
    };

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

                {status === "success" ? (
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
                ) : (
                    <>
                        <div className="text-center mb-6">
                            <div
                                className="inline-flex w-14 h-14 rounded-[16px] items-center justify-center text-white text-2xl mb-4"
                                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                            >
                                💌
                            </div>
                            <h3
                                className="text-[1.4rem] font-bold text-[var(--foreground)] mb-1"
                                style={{ fontFamily: "var(--font-fraunces)" }}
                            >
                                Join the Waitlist
                            </h3>
                            <p className="text-[var(--gray)] text-[0.9rem]">
                                Be the first to try CoupleGoAI — it&apos;s free!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                            <input
                                type="text"
                                placeholder="Your name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-5 py-3.5 rounded-full border border-[rgba(30,18,48,0.1)] bg-[var(--c-muted)] text-[var(--foreground)] text-[0.95rem] outline-none transition-all focus:border-[var(--c-primary)] focus:shadow-[0_0_0_3px_rgba(244,139,166,0.15)]"
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-3.5 rounded-full border border-[rgba(30,18,48,0.1)] bg-[var(--c-muted)] text-[var(--foreground)] text-[0.95rem] outline-none transition-all focus:border-[var(--c-primary)] focus:shadow-[0_0_0_3px_rgba(244,139,166,0.15)]"
                            />

                            {status === "error" && (
                                <p className="text-red-500 text-[0.85rem] text-center">{message}</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-4 rounded-full font-semibold text-[1.05rem] text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                            >
                                {status === "loading" ? "Joining…" : "Join the Waitlist — It's Free →"}
                            </button>
                        </form>

                        <p className="text-center text-[var(--gray)] text-[0.78rem] mt-4">
                            No spam, ever. Unsubscribe anytime.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
