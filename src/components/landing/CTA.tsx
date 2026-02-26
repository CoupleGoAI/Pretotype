import RevealOnScroll from "./RevealOnScroll";

export default function CTA() {
    return (
        <section id="cta" className="relative py-20 sm:py-[120px] px-6 text-center overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 mx-4 sm:mx-10 rounded-[28px] sm:rounded-[40px]"
                style={{ background: "var(--gradient-brand)" }}>
                {/* Inner radial glows */}
                <div className="absolute inset-0 rounded-[inherit]"
                    style={{
                        background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(204,123,232,0.25) 0%, transparent 50%)",
                    }} />
            </div>

            <RevealOnScroll className="relative z-[2] max-w-[560px] mx-auto">
                <h2 className="text-white text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mb-4"
                    style={{ fontFamily: "'Fraunces', serif" }}>
                    Ready to upgrade<br />your relationship?
                </h2>
                <p className="text-white/85 text-[1.1rem] leading-[1.7] mb-9">
                    Join thousands of couples who are learning to communicate better, fight less, and actually enjoy being together.
                </p>
                <a href="#"
                    className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white text-[var(--foreground)] font-semibold text-[1.05rem] no-underline transition-all duration-[350ms] hover:-translate-y-0.5"
                    style={{ boxShadow: "var(--shadow-md)" }}>
                    Join the Waitlist — It&apos;s Free →
                </a>
            </RevealOnScroll>
        </section>
    );
}
