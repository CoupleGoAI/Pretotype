"use client";

import RevealOnScroll from "./RevealOnScroll";
import Grainient from "@/components/Grainient";

export default function CTA() {

    return (
        <section id="cta" className="relative py-20 sm:py-28 px-6 text-center overflow-hidden mx-4 sm:mx-10 rounded-[28px] sm:rounded-[40px]">
            {/* Grainient WebGL background */}
            <div className="absolute inset-0 z-[0] opacity-60">
                <Grainient
                    color1="#f48ba6"
                    color2="#cc7be8"
                    color3="#e16bb5"
                    timeSpeed={1.6}
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
