"use client";

import { useState } from "react";
import SectionBadge from "./landing/SectionBadge";
import SwipeQuiz from "./SwipeQuiz";
import Result from "./Result";

export default function QuizSection() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<string[] | null>(null);

    return (
        <section id="quiz-section" className="py-20 sm:py-30 px-6 bg-white">
            <div className="max-w-285 mx-auto text-center">
                {!quizStarted && !quizAnswers && (
                    <div className="max-w-xl mx-auto">
                        <SectionBadge>Quick Quiz</SectionBadge>
                        <h2
                            className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mb-5"
                            style={{ fontFamily: "var(--font-fraunces)" }}
                        >
                            Discover your couple<br />dynamics in 60 seconds
                        </h2>
                        <p className="text-[1.1rem] text-(--gray) leading-[1.7] max-w-130 mx-auto mb-4">
                            Take our Tinder-style swipe quiz — 8 quick questions about your relationship. Get a personalised Couple Snapshot instantly.
                        </p>
                        <p className="text-[0.9rem] text-(--gray)/70 leading-[1.6] max-w-110 mx-auto mb-10">
                            🎉 After the quiz you&apos;ll be added to our waitlist — be the first to try CoupleGoAI when we launch!
                        </p>
                        <button
                            onClick={() => setQuizStarted(true)}
                            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-white no-underline cursor-pointer transition-all duration-350 hover:-translate-y-0.5 border-none"
                            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                        >
                            Start the Quiz →
                        </button>
                    </div>
                )}

                {quizStarted && !quizAnswers && (
                    <SwipeQuiz
                        onFinish={(answers) => {
                            setQuizAnswers(answers);
                            setQuizStarted(false);
                        }}
                    />
                )}

                {quizAnswers && <Result answers={quizAnswers} />}
            </div>
        </section>
    );
}
