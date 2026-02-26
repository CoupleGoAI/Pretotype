"use client";

import { useState } from "react";
import { Header, Hero, HowItWorks, Features, Pricing, Testimonials, CTA, Footer } from "@/components/landing";
import SwipeQuiz from "@/components/SwipeQuiz";
import Result from "@/components/Result";

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<string[] | null>(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />

        {/* ─── Swipe Quiz section ─── */}
        <section id="quiz-section" className="py-20 sm:py-[120px] px-6 bg-white">
          <div className="max-w-[1140px] mx-auto text-center">
            {!quizStarted && !quizAnswers && (
              <div className="max-w-xl mx-auto">
                <div className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--c-accent)] mb-4 before:content-[''] before:w-5 before:h-0.5 before:rounded before:bg-[var(--c-primary)]">
                  Quick Quiz
                </div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mb-5"
                  style={{ fontFamily: "'Fraunces', serif" }}>
                  Discover your couple<br />dynamics in 60 seconds
                </h2>
                <p className="text-[1.1rem] text-[var(--gray)] leading-[1.7] max-w-[520px] mx-auto mb-10">
                  Take our Tinder-style swipe quiz — 8 quick questions about your relationship. Get a personalised Couple Snapshot instantly.
                </p>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-white no-underline cursor-pointer transition-all duration-[350ms] hover:-translate-y-0.5 border-none"
                  style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                >
                  Start the Quiz →
                </button>
              </div>
            )}

            {quizStarted && !quizAnswers && (
              <SwipeQuiz onFinish={(answers) => {
                setQuizAnswers(answers);
                setQuizStarted(false);
              }} />
            )}

            {quizAnswers && <Result answers={quizAnswers} />}
          </div>
        </section>

        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
