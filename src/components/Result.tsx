"use client";

import WaitlistForm from "./landing/WaitlistForm";
import QuizGrainient from "./QuizGrainient";
import { buildSnapshot } from "@/constants/quiz";

interface ResultProps {
    answers: string[];
}

export default function Result({ answers }: ResultProps) {
    const { title, bullets } = buildSnapshot(answers);

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

            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] mt-8 py-10 px-6">
                <QuizGrainient />
                <div className="relative z-[1]">
                    <WaitlistForm extraPayload={{ quizAnswers: answers, snapshot: title }} />
                </div>
            </div>
        </section>
    );
}
