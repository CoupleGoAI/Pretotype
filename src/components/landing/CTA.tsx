import RevealOnScroll from "./RevealOnScroll";

export default function CTA() {
    return (
        <section id="cta" className="relative py-16 sm:py-20 px-6 text-center overflow-hidden">
            {/* Gradient background */}
            <div
                className="absolute inset-0 mx-4 sm:mx-10 rounded-[28px] sm:rounded-[40px]"
                style={{ background: "linear-gradient(135deg, #1e1230 0%, #2d1a42 40%, #3a1e55 100%)" }}
            >
                {/* Subtle accent glows */}
                <div
                    className="absolute inset-0 rounded-[inherit] opacity-40"
                    style={{
                        background:
                            "radial-gradient(circle at 20% 60%, var(--c-primary) 0%, transparent 50%), radial-gradient(circle at 80% 40%, var(--c-accent) 0%, transparent 50%)",
                    }}
                />
            </div>

            <RevealOnScroll className="relative z-2 max-w-[520px] mx-auto">
                <h2
                    className="text-white text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight mb-4"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                >
                    Ready to upgrade your relationship?
                </h2>
                <p className="text-white/70 text-[1.05rem] leading-[1.7] mb-8">
                    Join couples learning to communicate better and fight less.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-white no-underline transition-all duration-[350ms] hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                >
                    Join the Waitlist — It&apos;s Free →
                </a>
            </RevealOnScroll>
        </section>
    );
}
