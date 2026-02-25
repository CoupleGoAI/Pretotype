"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/* ─── Questions ─── */
const questions: { q: string; left: string; right: string }[] = [
    { q: "Relationship stage?", left: "Dating", right: "Living together" },
    { q: "How often do conflicts happen?", left: "Rare", right: "Often" },
    { q: "What hurts most?", left: "Tone", right: "Feeling ignored" },
    { q: "Biggest goal?", left: "Less fights", right: "More closeness" },
    { q: "Preferred help style?", left: "De-escalation", right: "Communication tips" },
    { q: "Most interesting feature?", left: "Proactive dates", right: "Pattern insights" },
    { q: "Privacy comfort?", left: "Anonymous", right: "Account-based" },
    { q: "Willingness to pay?", left: "0–49 DKK", right: "50–199 DKK" },
];

interface SwipeQuizProps {
    onFinish: (answers: string[]) => void;
}

export default function SwipeQuiz({ onFinish }: SwipeQuizProps) {
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [dragX, setDragX] = useState(0);
    const [exiting, setExiting] = useState<"left" | "right" | null>(null);

    /* touch/mouse state */
    const startX = useRef(0);
    const dragging = useRef(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const THRESHOLD = 80;

    /* ─── answer handler ─── */
    const choose = useCallback(
        (dir: "left" | "right") => {
            const answer = dir === "left" ? questions[index].left : questions[index].right;
            const next = [...answers, answer];

            setExiting(dir);
            setTimeout(() => {
                setExiting(null);
                setDragX(0);

                if (index + 1 < questions.length) {
                    setAnswers(next);
                    setIndex((i) => i + 1);
                } else {
                    onFinish(next);
                }
            }, 250);
        },
        [index, answers, onFinish],
    );

    /* ─── keyboard ─── */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") choose("left");
            if (e.key === "ArrowRight") choose("right");
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [choose]);

    /* ─── touch / pointer events ─── */
    const onPointerDown = (e: React.PointerEvent) => {
        dragging.current = true;
        startX.current = e.clientX;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (!dragging.current) return;
        setDragX(e.clientX - startX.current);
    };
    const onPointerUp = () => {
        if (!dragging.current) return;
        dragging.current = false;
        if (dragX < -THRESHOLD) choose("left");
        else if (dragX > THRESHOLD) choose("right");
        else setDragX(0);
    };

    /* ─── current card ─── */
    const card = questions[index];

    const exitTranslate =
        exiting === "left" ? "-translate-x-[120%] opacity-0" :
            exiting === "right" ? "translate-x-[120%] opacity-0" : "";

    return (
        <section id="quiz" className="py-20 px-6 max-w-md mx-auto text-center scroll-mt-12">
            {/* Progress */}
            <p className="text-sm font-medium text-foreground/50 mb-1">
                {index + 1} / {questions.length}
            </p>
            <div className="h-1.5 rounded-full bg-muted mb-10 overflow-hidden">
                <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                />
            </div>

            {/* Card */}
            <div
                ref={cardRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                className={`swipe-card relative select-none rounded-3xl bg-white border border-primary/10 shadow-xl p-8 min-h-65 flex flex-col items-center justify-center ${exitTranslate}`}
                style={{
                    transform: exiting ? undefined : `translateX(${dragX}px) rotate(${dragX * 0.05}deg)`,
                    cursor: "grab",
                }}
                role="group"
                aria-label={`Question ${index + 1} of ${questions.length}`}
            >
                {/* directional hints */}
                {dragX !== 0 && (
                    <span
                        className={`absolute top-4 ${dragX < 0 ? "left-4" : "right-4"} text-xs font-bold uppercase tracking-wider ${dragX < 0 ? "text-accent" : "text-primary"
                            }`}
                    >
                        {dragX < 0 ? card.left : card.right}
                    </span>
                )}

                <p className="text-xl sm:text-2xl font-bold mb-8">{card.q}</p>

                <div className="flex items-center gap-6 text-base font-medium">
                    <span className="text-accent">← {card.left}</span>
                    <span className="text-foreground/20">|</span>
                    <span className="text-primary">{card.right} →</span>
                </div>
            </div>

            {/* Clickable fallback buttons */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={() => choose("left")}
                    className="rounded-full border-2 border-accent px-6 py-2 font-semibold text-accent transition hover:bg-accent hover:text-white"
                    aria-label={`Choose ${card.left}`}
                >
                    ← {card.left}
                </button>
                <button
                    onClick={() => choose("right")}
                    className="rounded-full border-2 border-primary px-6 py-2 font-semibold text-primary transition hover:bg-primary hover:text-white"
                    aria-label={`Choose ${card.right}`}
                >
                    {card.right} →
                </button>
            </div>

            <p className="mt-4 text-xs text-foreground/40">
                Swipe, tap, or use ← → arrow keys
            </p>
        </section>
    );
}
