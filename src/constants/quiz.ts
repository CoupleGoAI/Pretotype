import type { QuizQuestion, QuizSnapshot } from "@/types";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    { q: "Relationship stage?", left: "Dating", right: "Living together" },
    { q: "How often do conflicts happen?", left: "Rare", right: "Often" },
    { q: "What hurts most?", left: "Tone", right: "Feeling ignored" },
    { q: "Biggest goal?", left: "Less fights", right: "More closeness" },
    { q: "Preferred help style?", left: "De-escalation", right: "Communication tips" },
    { q: "Most interesting feature?", left: "Proactive dates", right: "Pattern insights" },
    { q: "Privacy comfort?", left: "Anonymous", right: "Account-based" },
];

/** Maps quiz answers to a personalised couple snapshot. */
export function buildSnapshot(answers: string[]): QuizSnapshot {
    const conflict = answers[1]; // Rare | Often
    const goal = answers[3];     // Less fights | More closeness

    const title =
        conflict === "Often"
            ? "The Passionate Duo 🔥"
            : goal === "More closeness"
                ? "The Closeness Seekers 💕"
                : "The Steady Builders 🧱";

    const bullets: string[] = [
        `📍 Stage: ${answers[0]}`,
        `⚡ Conflict frequency: ${answers[1]}`,
        `💔 Pain point: ${answers[2]}`,
        `🎯 Primary goal: ${answers[3]}`,
        `🛠 Help style: ${answers[4]}`,
        `✨ Top interest: ${answers[5]}`,
        `🔒 Privacy: ${answers[6]}`,
    ];

    return { title, bullets };
}
