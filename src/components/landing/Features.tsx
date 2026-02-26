import RevealOnScroll from "./RevealOnScroll";

const cards = [
    { emoji: "🛡", title: "Private AI Confidant", desc: "Your safe space. Vent, process emotions, and get honest feedback without judgment. Your partner never sees these conversations.", bg: "var(--c-muted)" },
    { emoji: "⚖", title: "Neutral Mediation", desc: "The Couple AI understands both sides equally. It translates feelings, spots miscommunication, and suggests compromises you hadn\u2019t thought of.", bg: "var(--c-accent-soft)" },
    { emoji: "🎉", title: "Date & Gift Ideas", desc: "Get hyper-personalized suggestions based on what both of you actually like — not generic \u201Ctop 10\u201D lists from the internet.", bg: "var(--c-accent-soft)" },
    { emoji: "📊", title: "Love Dashboard", desc: "Track your relationship health over time: conflicts resolved, dates planned, communication trends, and milestones celebrated.", bg: "var(--c-muted)" },
];

export default function Features() {
    return (
        <section id="features" className="py-20 sm:py-[120px] px-6"
            style={{ background: "linear-gradient(180deg, var(--background) 0%, var(--c-accent-soft) 50%, var(--background) 100%)" }}>
            <div className="max-w-[1140px] mx-auto">
                {/* Header */}
                <RevealOnScroll className="text-center mb-[72px]">
                    <div className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--c-accent)] mb-4 before:content-[''] before:w-5 before:h-0.5 before:rounded before:bg-[var(--c-primary)]">
                        Features
                    </div>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mb-5" style={{ fontFamily: "'Fraunces', serif" }}>
                        Everything your<br />relationship needs
                    </h2>
                    <p className="text-[1.1rem] text-[var(--gray)] leading-[1.7] max-w-[520px] mx-auto">
                        From conflict resolution to planning the perfect date night — we&apos;ve got you covered.
                    </p>
                </RevealOnScroll>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cards.map((c, i) => (
                        <RevealOnScroll key={i}
                            className="group relative overflow-hidden p-10 rounded-[var(--radius)] bg-white/70 backdrop-blur-[20px] border border-[rgba(30,18,48,0.05)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] hover:border-[rgba(244,139,166,0.15)]">
                            {/* hover overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                                style={{ background: "var(--gradient-card)" }} />
                            <div className="relative z-[1]">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[26px] mb-5"
                                    style={{ background: c.bg }}>
                                    {c.emoji}
                                </div>
                                <h3 className="text-[1.25rem] font-semibold mb-2.5" style={{ fontFamily: "'Fraunces', serif" }}>
                                    {c.title}
                                </h3>
                                <p className="text-[var(--gray)] leading-[1.65] text-[0.95rem]">{c.desc}</p>
                            </div>
                        </RevealOnScroll>
                    ))}

                    {/* Large "See It In Action" card */}
                    <RevealOnScroll className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12 items-center p-10 sm:p-12 bg-white rounded-[var(--radius)] border border-[rgba(30,18,48,0.05)]"
                        style={{ boxShadow: "var(--shadow-sm)" } as React.CSSProperties}>
                        <div>
                            <div className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--c-accent)] mb-4 before:content-[''] before:w-5 before:h-0.5 before:rounded before:bg-[var(--c-primary)]">
                                See It In Action
                            </div>
                            <h3 className="text-[1.5rem] font-semibold mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                                Your AI, your voice
                            </h3>
                            <p className="text-[var(--gray)] leading-[1.7] text-[0.95rem]">
                                CoupleGoAI doesn&apos;t pick sides. It helps both of you feel heard, then guides you toward understanding. Here&apos;s a glimpse of how a conversation might flow.
                            </p>
                        </div>
                        {/* Chat visual */}
                        <div className="rounded-2xl p-10 flex flex-col gap-4"
                            style={{ background: "linear-gradient(135deg, var(--c-muted), var(--c-accent-soft))" }}>
                            <div className="self-end px-5 py-3.5 rounded-[18px] rounded-br-[6px] text-white text-[0.9rem] leading-[1.5] max-w-[85%] animate-[bubbleIn_0.5s_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                                style={{ background: "var(--c-primary)" }}>
                                They never ask about my day. I feel invisible.
                            </div>
                            <div className="self-start px-5 py-3.5 rounded-[18px] rounded-bl-[6px] bg-white text-[var(--foreground)] text-[0.9rem] leading-[1.5] max-w-[85%] animate-[bubbleIn_0.5s_1s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                                style={{ boxShadow: "var(--shadow-sm)" }}>
                                <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--c-accent)] mb-1">CoupleGoAI</div>
                                That sounds really frustrating. Your need to feel seen is valid. Would you like to explore a gentle way to express this to them?
                            </div>
                            <div className="self-end px-5 py-3.5 rounded-[18px] rounded-br-[6px] text-white text-[0.9rem] leading-[1.5] max-w-[85%] animate-[bubbleIn_0.5s_1.5s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                                style={{ background: "var(--c-primary)" }}>
                                Yeah... I just don&apos;t want it to sound like an attack.
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
