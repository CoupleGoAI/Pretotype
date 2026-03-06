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
                    <div className="mt-6 pt-5 border-t border-[rgba(30,18,48,0.08)]">
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
