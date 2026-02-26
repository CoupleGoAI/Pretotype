import RevealOnScroll from "./RevealOnScroll";

const stories = [
    {
        quote: "\u201CWe used to have the same fight every week. CoupleGoAI helped us see we were literally saying the same thing in different languages.\u201D",
        avatar: "👩",
        name: "Mia & Jordan",
        detail: "Together 2 years",
        avatarBg: "var(--c-primary-light)",
    },
    {
        quote: "\u201CI used to vent to my friends and get biased advice. Now I vent to my AI and actually figure out what I need before talking to my partner.\u201D",
        avatar: "🧑",
        name: "Alex",
        detail: "Beta tester",
        avatarBg: "var(--c-accent-light)",
    },
    {
        quote: "\u201CThe date ideas were scarily good. It suggested a ceramics class and my partner had secretly always wanted to try that. Magic.\u201D",
        avatar: "👨",
        name: "Sam & Riley",
        detail: "Together 6 months",
        avatarBg: "var(--c-muted)",
    },
];

export default function Testimonials() {
    return (
        <section id="stories" className="py-20 sm:py-[120px] px-6"
            style={{ background: "linear-gradient(180deg, var(--background) 0%, var(--c-muted) 100%)" }}>
            <div className="max-w-[1140px] mx-auto">
                {/* Header */}
                <RevealOnScroll className="text-center mb-16">
                    <div className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--c-accent)] mb-4 before:content-[''] before:w-5 before:h-0.5 before:rounded before:bg-[var(--c-primary)]">
                        Early Stories
                    </div>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                        Couples already<br />feeling the difference
                    </h2>
                </RevealOnScroll>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {stories.map((s, i) => (
                        <RevealOnScroll key={i}
                            className="p-8 bg-white rounded-[var(--radius)] border border-[rgba(30,18,48,0.04)] transition-all duration-[350ms] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                            style={{ boxShadow: "var(--shadow-sm)" }}>
                            <div className="text-[var(--c-primary)] text-[0.85rem] tracking-[2px] mb-4">★★★★★</div>
                            <blockquote className="text-[0.95rem] leading-[1.7] text-[var(--foreground-muted)] mb-5 italic">
                                {s.quote}
                            </blockquote>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-base"
                                    style={{ background: s.avatarBg }}>
                                    {s.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-[0.9rem]">{s.name}</div>
                                    <div className="text-[0.8rem] text-[var(--gray)]">{s.detail}</div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
