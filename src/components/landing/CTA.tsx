"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function CTA() {

    return (
        <section id="cta" className="relative py-20 sm:py-28 px-6 text-center overflow-hidden mx-2 sm:mx-10 rounded-[28px] sm:rounded-[40px]">
            <RevealOnScroll className="relative z-2 max-w-[520px] mx-auto">
                <h2
                    className="text-[var(--foreground)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight mb-4"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                >
                    Ready to upgrade your relationship?
                </h2>
                <p className="text-[var(--foreground)]/60 text-[1.05rem] leading-[1.7] mb-8">
                    Join couples learning to communicate better and fight less.
                </p>
                <a
                    href="#quiz-section"
                    className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-white no-underline cursor-pointer transition-all duration-[350ms] hover:-translate-y-0.5 hover:shadow-lg border-none"
                    style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                >
                    Take the Quiz — Join the Waitlist →
                </a>
            </RevealOnScroll>
        </section>
    );
}
