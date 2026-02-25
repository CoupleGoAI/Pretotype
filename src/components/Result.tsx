"use client";

import { useState, type FormEvent } from "react";

/* map answers → snapshot blurb */
function buildSnapshot(a: string[]): { title: string; bullets: string[] } {
    const stage = a[0]; // Dating | Living together
    const conflict = a[1]; // Rare | Often
    const hurt = a[2]; // Tone | Feeling ignored
    const goal = a[3]; // Less fights | More closeness
    const help = a[4]; // De-escalation | Communication tips
    const interest = a[5]; // Proactive dates | Pattern insights
    const privacy = a[6]; // Anonymous | Account-based
    const pay = a[7]; // 0–49 DKK | 50–199 DKK

    const title =
        conflict === "Often"
            ? "The Passionate Duo 🔥"
            : goal === "More closeness"
                ? "The Closeness Seekers 💕"
                : "The Steady Builders 🧱";

    const bullets: string[] = [
        `📍 Stage: ${stage}`,
        `⚡ Conflict frequency: ${conflict}`,
        `💔 Pain point: ${hurt}`,
        `🎯 Primary goal: ${goal}`,
        `🛠 Help style: ${help}`,
        `✨ Top interest: ${interest}`,
        `🔒 Privacy: ${privacy}`,
        `💰 Budget range: ${pay}/mo`,
    ];

    return { title, bullets };
}

interface ResultProps {
    answers: string[];
}

export default function Result({ answers }: ResultProps) {
    const { title, bullets } = buildSnapshot(answers);
    const [email, setEmail] = useState("");
    const [invitePartner, setInvitePartner] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log("📩 Beta signup payload:", {
            email,
            invitePartner,
            answers,
            snapshot: title,
        });
        setSubmitted(true);
    };

    return (
        <section className="py-20 px-6 max-w-lg mx-auto text-center animate-[fadeUp_0.4s_ease]">
            <span className="inline-block rounded-full bg-accent/15 text-accent text-sm font-semibold px-4 py-1 mb-4">
                Your Couple Snapshot
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">{title}</h2>

            <ul className="text-left space-y-2 bg-muted rounded-2xl p-6 mb-10 shadow-inner">
                {bullets.map((b, i) => (
                    <li key={i} className="text-base leading-relaxed">
                        {b}
                    </li>
                ))}
            </ul>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="font-semibold text-lg">Join the CoupleGo beta 🚀</p>

                    <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-primary/20 bg-white px-5 py-3 text-base outline-none focus:border-primary transition"
                    />

                    <label className="flex items-center justify-center gap-2 text-sm cursor-pointer">
                        <input
                            type="checkbox"
                            checked={invitePartner}
                            onChange={() => setInvitePartner(!invitePartner)}
                            className="accent-primary w-4 h-4"
                        />
                        Also invite my partner
                    </label>

                    <button
                        type="submit"
                        className="w-full rounded-full bg-primary px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-primary/30 transition hover:brightness-110"
                    >
                        Get early access
                    </button>
                </form>
            ) : (
                <div className="rounded-2xl bg-muted p-8">
                    <p className="text-2xl font-bold mb-2">You&apos;re in! 🎉</p>
                    <p className="text-foreground/60">
                        We&apos;ll reach out soon. Check the console for the full payload.
                    </p>
                </div>
            )}

            {/* inline keyframe */}
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
