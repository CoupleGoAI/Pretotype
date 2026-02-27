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
    { q: "Privacy comfort?", left: "Anonymous", right: "Account-based" }
];

interface SwipeQuizProps {
    onFinish: (answers: string[]) => void;
}

/* ─── Constants ─── */
const DISTANCE_THRESHOLD = 100;   // px — minimum drag distance to count as a swipe
const VELOCITY_THRESHOLD = 0.5;   // px/ms — fast flick override
const MAX_ROTATION = 12;          // degrees clamp
const EXIT_DISTANCE = 600;        // px — how far the card flies off-screen

export default function SwipeQuiz({ onFinish }: SwipeQuizProps) {
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [hintDir, setHintDir] = useState<"left" | "right" | null>(null);
    const [exiting, setExiting] = useState<"left" | "right" | null>(null);

    /* ─── refs for jitter-free drag ─── */
    const cardRef = useRef<HTMLDivElement>(null);
    const dragging = useRef(false);
    const startX = useRef(0);
    const currentX = useRef(0);              // raw offset — never in state
    const rafId = useRef(0);
    const lastPointerX = useRef(0);
    const lastPointerTime = useRef(0);
    const velocity = useRef(0);              // px/ms

    /* ─── sync state → refs (safe in useEffect, not during render) ─── */
    const answersRef = useRef(answers);
    const indexRef = useRef(index);
    useEffect(() => {
        answersRef.current = answers;
        indexRef.current = index;
    }, [answers, index]);

    /* ─── apply transform via rAF ─── */
    const applyTransform = useCallback((x: number) => {
        const el = cardRef.current;
        if (!el) return;
        const rot = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, x * 0.06));
        el.style.transform = `translate3d(${x}px, 0, 0) rotate(${rot}deg)`;
    }, []);

    /* ─── advance to next card or finish ─── */
    const advance = useCallback(
        (dir: "left" | "right", prevAnswers: string[], prevIndex: number) => {
            const answer = dir === "left" ? questions[prevIndex].left : questions[prevIndex].right;
            const next = [...prevAnswers, answer];

            // Animate exit
            setExiting(dir);
            const el = cardRef.current;
            if (el) {
                el.style.transition = "transform 300ms cubic-bezier(.22,1,.36,1), opacity 300ms ease";
                const exitX = dir === "left" ? -EXIT_DISTANCE : EXIT_DISTANCE;
                el.style.transform = `translate3d(${exitX}px, 0, 0) rotate(${dir === "left" ? -MAX_ROTATION : MAX_ROTATION}deg)`;
                el.style.opacity = "0";
            }

            setTimeout(() => {
                setExiting(null);
                currentX.current = 0;
                if (el) {
                    el.style.transition = "";
                    el.style.transform = "translate3d(0,0,0)";
                    el.style.opacity = "1";
                }
                if (prevIndex + 1 < questions.length) {
                    setAnswers(next);
                    setIndex((i) => i + 1);
                } else {
                    onFinish(next);
                }
            }, 300);
        },
        [onFinish],
    );

    /* ─── stable choose via refs ─── */
    const choose = useCallback(
        (dir: "left" | "right") => {
            advance(dir, answersRef.current, indexRef.current);
        },
        [advance],
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

    /* ─── pointer events ─── */
    const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (exiting) return;
        dragging.current = true;
        startX.current = e.clientX;
        lastPointerX.current = e.clientX;
        lastPointerTime.current = e.timeStamp;
        velocity.current = 0;
        currentX.current = 0;

        const el = cardRef.current;
        if (el) {
            el.style.transition = "";                  // remove any snap-back transition
            el.setPointerCapture(e.pointerId);
        }
    }, [exiting]);

    const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragging.current) return;

        const dx = e.clientX - startX.current;
        currentX.current = dx;

        // Velocity tracking (exponential moving average)
        const dt = e.timeStamp - lastPointerTime.current;
        if (dt > 0) {
            const instantVel = (e.clientX - lastPointerX.current) / dt;
            velocity.current = velocity.current * 0.6 + instantVel * 0.4;
        }
        lastPointerX.current = e.clientX;
        lastPointerTime.current = e.timeStamp;

        cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(() => {
            applyTransform(dx);
        });

        // Update hint direction via state (safe for rendering)
        const newDir: "left" | "right" | null = Math.abs(dx) > 20 ? (dx < 0 ? "left" : "right") : null;
        setHintDir(newDir);
    }, [applyTransform]);

    const onPointerUp = useCallback(() => {
        if (!dragging.current) return;
        dragging.current = false;
        cancelAnimationFrame(rafId.current);

        const dx = currentX.current;
        const vel = velocity.current;
        const absX = Math.abs(dx);
        const absVel = Math.abs(vel);

        if (absX > DISTANCE_THRESHOLD || absVel > VELOCITY_THRESHOLD) {
            const dir = dx < 0 ? "left" : "right";
            choose(dir);
        } else {
            // Snap back with spring-like ease
            const el = cardRef.current;
            if (el) {
                el.style.transition = "transform 350ms cubic-bezier(.22,1,.36,1)";
                el.style.transform = "translate3d(0,0,0) rotate(0deg)";
            }
            currentX.current = 0;
            setHintDir(null);
        }
    }, [choose]);

    /* ─── current card ─── */
    const card = questions[index];

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
                className="swipe-card relative select-none touch-none rounded-3xl bg-white border border-primary/10 p-8 min-h-65 flex flex-col items-center justify-center will-change-transform"
                style={{ cursor: exiting ? "default" : "grab", animation: "quizCardGlow 4s ease-in-out infinite" }}
                role="group"
                aria-label={`Question ${index + 1} of ${questions.length}`}
            >
                {/* directional hints */}
                {hintDir && (
                    <span
                        className={`absolute top-4 ${hintDir === "left" ? "left-4" : "right-4"} text-xs font-bold uppercase tracking-wider ${hintDir === "left" ? "text-accent" : "text-primary"}`}
                    >
                        {hintDir === "left" ? card.left : card.right}
                    </span>
                )}

                <p className="text-xl sm:text-2xl font-bold mb-8 px-2">{card.q}</p>

                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 w-full text-sm sm:text-base font-medium px-2">
                    <span className="text-accent text-center leading-snug">← {card.left}</span>
                    <span className="text-foreground/20">|</span>
                    <span className="text-primary text-center leading-snug">{card.right} →</span>
                </div>
            </div>

            {/* Clickable fallback buttons */}
            <div className="flex justify-center gap-3 mt-6 w-full max-w-md mx-auto">
                <button
                    onClick={() => choose("left")}
                    className="flex-1 min-w-0 rounded-full border-2 border-accent px-4 py-2 font-semibold text-sm text-accent transition hover:bg-accent hover:text-white truncate"
                    aria-label={`Choose ${card.left}`}
                >
                    ← {card.left}
                </button>
                <button
                    onClick={() => choose("right")}
                    className="flex-1 min-w-0 rounded-full border-2 border-primary px-4 py-2 font-semibold text-sm text-primary transition hover:bg-primary hover:text-white truncate"
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
