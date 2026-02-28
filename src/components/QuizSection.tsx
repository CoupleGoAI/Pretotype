"use client";

import { useState } from "react";
import SectionBadge from "./landing/SectionBadge";
import SwipeQuiz from "./SwipeQuiz";
import Result from "./Result";
import Grainient from "@/components/reactbits/Grainient";

export default function QuizSection() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<string[] | null>(null);

    return (
        <section id="quiz-section" className="relative px-6 bg-white pb-20 sm:pb-28">
            {/* Badge outside the gradient */}
            <div className="text-center pt-20 sm:pt-30 pb-8">
                <SectionBadge>Quick Quiz</SectionBadge>
            </div>

            {/* Grainient area */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] mx-0 sm:mx-4 py-16 sm:py-20 px-6">
                {/* Grainient background — hidden while quiz is active or done */}
                {!quizStarted && !quizAnswers && (
                <div className="absolute inset-0 z-[0]">
                    <Grainient
                        color1="#f48ba6"
                        color2="#cc7be8"
                        color3="#e16bb5"
                        timeSpeed={4}
                        colorBalance={-0.27}
                        warpStrength={0}
                        warpFrequency={12}
                        warpSpeed={2}
                        warpAmplitude={50}
                        blendAngle={0}
                        blendSoftness={0.05}
                        rotationAmount={500}
                        noiseScale={2}
                        grainAmount={0.1}
                        grainScale={2}
                        grainAnimated={false}
                        contrast={1.5}
                        gamma={1}
                        saturation={1}
                        centerX={0}
                        centerY={0}
                        zoom={0.9}
                    />
                </div>
                )}

                <div className="relative z-[1] max-w-285 mx-auto text-center">
                    {!quizStarted && !quizAnswers && (
                        <div className="max-w-xl mx-auto">
                            <h2
                                className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mb-5 text-[var(--foreground)]"
                                style={{ fontFamily: "var(--font-fraunces)" }}
                            >
                                Discover your couple<br />dynamics in 60 seconds
                            </h2>
                            <p className="text-[1.1rem] text-[var(--foreground-muted)] leading-[1.7] max-w-130 mx-auto mb-4">
                                Take our quiz - 7 quick questions about your relationship. Get a personalised Couple Snapshot instantly.
                            </p>
                            <p className="text-[0.95rem] text-[var(--foreground-muted)] leading-[1.6] max-w-110 mx-auto mb-10">
                                🎉 After the quiz you&apos;ll be added to our waitlist — be the first to try CoupleGoAI when we launch!
                            </p>
                            <button
                                onClick={() => setQuizStarted(true)}
                                className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-[var(--foreground)] bg-white no-underline cursor-pointer transition-all duration-350 hover:-translate-y-0.5 border-none"
                                style={{ boxShadow: "var(--shadow-md)" }}
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
            </div>
        </section>
    );
}
