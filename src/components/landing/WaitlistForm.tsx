"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export interface WaitlistFormProps {
    /** Extra data merged into the POST body (e.g. quiz answers). */
    extraPayload?: Record<string, unknown>;
    /** Replaces the default success view. */
    successSlot?: ReactNode;
    /** Called after a successful submission. */
    onSuccess?: () => void;
}

/**
 * Reusable waitlist signup form (header + name/email + submit + success).
 * Used inside WaitlistModal and the quiz Result component.
 */
export default function WaitlistForm({
    extraPayload,
    successSlot,
    onSuccess,
}: WaitlistFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, ...extraPayload }),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                onSuccess?.();
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

    if (status === "success") {
        return (
            successSlot ?? (
                <div className="text-center py-4">
                    <div className="text-5xl mb-4">💕</div>
                    <h3
                        className="text-[1.4rem] font-bold text-[var(--foreground)] mb-2"
                        style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                        You&apos;re on the list!
                    </h3>
                    <p className="text-[var(--gray)] text-[0.95rem] leading-relaxed">
                        We&apos;ll let you know as soon as CoupleGoAI is ready. Get excited!
                    </p>
                </div>
            )
        );
    }

    return (
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
    );
}
