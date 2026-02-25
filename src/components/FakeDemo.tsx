"use client";

import { useState } from "react";

const scenarios = [
    {
        label: "After a fight",
        emoji: "😤",
        response:
            "It sounds like you're both feeling hurt. Let's pause the blame game — here's a quick cool-down: take 5 minutes apart, then try this opener: \"I felt ___ when ___ happened. Can we talk about it?\" Most couples resolve 70 % faster with a structured pause.",
    },
    {
        label: "Feeling unheard",
        emoji: "😶",
        response:
            "Feeling invisible is painful. Research shows that validating your partner's emotion before problem-solving makes them 3× more likely to listen back. Try: \"I hear you're frustrated about ___. That makes sense because ___.\" Then share your own need.",
    },
    {
        label: "Plan something special",
        emoji: "✨",
        response:
            "Nice — proactive romance! Based on what couples report loving: surprise a micro-date this week. Pick something that matches your partner's love language. If it's Quality Time, try a 30-min phone-free walk. If Acts of Service, cook their favourite meal tonight.",
    },
];

interface FakeDemoProps {
    onContinue: () => void;
}

export default function FakeDemo({ onContinue }: FakeDemoProps) {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section id="demo" className="py-20 px-6 max-w-2xl mx-auto scroll-mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                What&apos;s on your mind?
            </h2>
            <p className="text-center text-foreground/50 mb-10">
                Pick a scenario — see how CoupleGo responds.
            </p>

            {/* Scenario buttons */}
            <div className="grid gap-4 sm:grid-cols-3">
                {scenarios.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => setSelected(i)}
                        className={`rounded-2xl border-2 p-5 text-left transition-all ${selected === i
                            ? "border-primary bg-muted shadow-md"
                            : "border-transparent bg-muted/50 hover:bg-muted"
                            }`}
                    >
                        <span className="text-3xl">{s.emoji}</span>
                        <span className="block mt-2 font-semibold">{s.label}</span>
                    </button>
                ))}
            </div>

            {/* AI response bubble */}
            {selected !== null && (
                <div className="mt-8 animate-[fadeUp_0.35s_ease] space-y-6">
                    <div className="relative rounded-2xl bg-white border border-primary/20 shadow-lg p-6">
                        <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-0.5 rounded-full">
                            CoupleGo AI
                        </div>
                        <p className="leading-relaxed text-foreground/80 mt-1">
                            {scenarios[selected].response}
                        </p>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={onContinue}
                            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110"
                        >
                            Continue to quiz →
                        </button>
                    </div>
                </div>
            )}

            {/* inline keyframe */}
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
