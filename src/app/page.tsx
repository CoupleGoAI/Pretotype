"use client";

import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import FakeDemo from "@/components/FakeDemo";
import SwipeQuiz from "@/components/SwipeQuiz";
import Result from "@/components/Result";

type Stage = "hero" | "demo" | "quiz" | "result";

export default function Home() {
  const [stage, setStage] = useState<Stage>("hero");
  const [answers, setAnswers] = useState<string[]>([]);
  const quizRef = useRef<HTMLDivElement>(null);

  const goToQuiz = () => {
    setStage("quiz");
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <main className="min-h-screen">
      {/* Hero + Demo */}
      {(stage === "hero" || stage === "demo") && <Hero />}
      {(stage === "hero" || stage === "demo") && (
        <div onClickCapture={() => stage === "hero" && setStage("demo")}>
          <FakeDemo onContinue={goToQuiz} />
        </div>
      )}

      {/* Swipe quiz */}
      {stage === "quiz" && (
        <div ref={quizRef}>
          <SwipeQuiz
            onFinish={(a) => {
              setAnswers(a);
              setStage("result");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      )}

      {/* Result snapshot */}
      {stage === "result" && <Result answers={answers} />}
    </main>
  );
}
