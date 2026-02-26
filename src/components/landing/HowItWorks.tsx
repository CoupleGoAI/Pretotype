import RevealOnScroll from "./RevealOnScroll";
import SectionBadge from "./SectionBadge";

const steps = [
    {
        emoji: "🧠",
        title: "Sign Up Solo",
        desc: "Your AI privately learns your communication style and values.",
        iconBg: "var(--c-muted)",
        iconShadow: "0 8px 32px rgba(244,139,166,0.15)",
    },
    {
        emoji: "💬",
        title: "Vent & Reflect",
        desc: "Get neutral feedback and prepare for tough conversations.",
        iconBg: "linear-gradient(135deg, var(--c-muted), var(--c-accent-soft))",
        iconShadow: "0 8px 32px rgba(220,150,210,0.15)",
    },
    {
        emoji: "🤝",
        title: "Connect as a Couple",
        desc: "Link with your partner — a Couple AI helps you find win–wins.",
        iconBg: "var(--c-accent-soft)",
        iconShadow: "0 8px 32px rgba(204,123,232,0.15)",
    },
];

export default function HowItWorks() {
    return (
        <section id="how" className="py-16 sm:py-20 px-6 bg-white">
            <div className="max-w-[1140px] mx-auto">
                {/* Header */}
                <RevealOnScroll className="text-center mb-12">
                    <SectionBadge>How It Works</SectionBadge>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mb-5" style={{ fontFamily: "var(--font-fraunces)" }}>
                        Three steps to a<br />stronger relationship
                    </h2>
                    <p className="text-[1.05rem] text-[var(--gray)] leading-[1.7] max-w-[420px] mx-auto">
                        No therapist bookings. No awkward conversations. Just an AI that gets you.
                    </p>
                </RevealOnScroll>

                {/* Steps grid */}
                <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden sm:block absolute top-10 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-0.5"
                        style={{ background: "linear-gradient(90deg, var(--c-primary-light), var(--c-accent-light))" }} />

                    {steps.map((step, i) => (
                        <RevealOnScroll key={i} className="text-center relative z-[1]">
                            {/* Icon */}
                            <div className="relative w-20 h-20 rounded-3xl flex items-center justify-center text-[32px] mx-auto mb-7"
                                style={{ background: step.iconBg, boxShadow: step.iconShadow }}>
                                {step.emoji}
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-[0.75rem] font-bold flex items-center justify-center"
                                    style={{ background: "var(--gradient-brand)" }}>
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-[1.3rem] font-semibold mb-3" style={{ fontFamily: "var(--font-fraunces)" }}>
                                {step.title}
                            </h3>
                            <p className="text-[var(--gray)] leading-[1.65] text-[0.95rem]">
                                {step.desc}
                            </p>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
