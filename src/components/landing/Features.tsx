import RevealOnScroll from "./RevealOnScroll";
import SectionBadge from "./SectionBadge";
import { BentoGrid, BentoCard } from "@/components/reactbits/FeatureCards";

const cards = [
    { emoji: "🛡", title: "Private AI Confidant", desc: "Vent and get honest feedback without judgment. Your partner never sees these chats.", bg: "var(--c-muted)" },
    { emoji: "⚖", title: "Neutral Mediation", desc: "The Couple AI understands both sides and suggests compromises you hadn\u2019t thought of.", bg: "var(--c-accent-soft)" },
    { emoji: "🎉", title: "Date & Gift Ideas", desc: "Hyper-personalized suggestions based on what both of you actually like.", bg: "var(--c-accent-soft)" },
    { emoji: "📊", title: "Love Dashboard", desc: "Track conflicts resolved, dates planned, communication trends, and milestones.", bg: "var(--c-muted)" },
];

export default function Features() {
    return (
        <section id="features" className="py-20 sm:py-[120px] px-6"
            style={{ background: "linear-gradient(180deg, var(--background) 0%, var(--c-accent-soft) 50%, var(--background) 100%)" }}>
            <div className="max-w-[1140px] mx-auto">
                {/* Header */}
                <RevealOnScroll className="text-center mb-[72px]">
                    <SectionBadge>Features</SectionBadge>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mb-5" style={{ fontFamily: "var(--font-fraunces)" }}>
                        Everything your<br />relationship needs
                    </h2>
                    <p className="text-[1.1rem] text-[var(--gray)] leading-[1.7] max-w-[520px] mx-auto">
                        From conflict resolution to planning the perfect date night — we&apos;ve got you covered.
                    </p>
                </RevealOnScroll>

                {/* Cards grid — Bento */}
                <BentoGrid>
                    {cards.map((c, i) => (
                        <RevealOnScroll key={i}>
                            <BentoCard>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[26px] mb-5"
                                    style={{ background: c.bg }}>
                                    {c.emoji}
                                </div>
                                <h3 className="text-[1.25rem] font-semibold mb-2.5" style={{ fontFamily: "var(--font-fraunces)" }}>
                                    {c.title}
                                </h3>
                                <p className="text-[var(--gray)] leading-[1.65] text-[0.95rem]">{c.desc}</p>
                            </BentoCard>
                        </RevealOnScroll>
                    ))}

                    {/* Large "See It In Action" card */}
                    <RevealOnScroll className="col-span-1 sm:col-span-2">
                        <BentoCard wide className="!bg-white">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
                                <div>
                                    <SectionBadge>See It In Action</SectionBadge>
                                    <h3 className="text-[1.5rem] font-semibold mb-3" style={{ fontFamily: "var(--font-fraunces)" }}>
                                        Your AI, your voice
                                    </h3>
                                    <p className="text-[var(--gray)] leading-[1.7] text-[0.95rem]">
                                        CoupleGoAI doesn&apos;t pick sides. It helps both of you feel heard, then guides you toward understanding. Here&apos;s a glimpse of how a conversation might flow.
                                    </p>
                                </div>
                                {/* Chat visual */}
                                <div className="rounded-2xl p-10 flex flex-col gap-4"
                                    style={{ background: "linear-gradient(135deg, var(--c-muted), var(--c-accent-soft))" }}>
                                    <div className="self-end px-5 py-3.5 rounded-[18px] rounded-br-md text-white text-[0.9rem] leading-[1.5] max-w-[85%] animate-[bubbleIn_0.5s_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                                        style={{ background: "var(--c-primary)" }}>
                                        They never ask about my day. I feel invisible.
                                    </div>
                                    <div className="self-start px-5 py-3.5 rounded-[18px] rounded-bl-md bg-white text-foreground text-[0.9rem] leading-normal max-w-[85%] animate-[bubbleIn_0.5s_1s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                                        style={{ boxShadow: "var(--shadow-sm)" }}>
                                        <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-accent mb-1">CoupleGoAI</div>
                                        That sounds really frustrating. Your need to feel seen is valid. Would you like to explore a gentle way to express this to them?
                                    </div>
                                    <div className="self-end px-5 py-3.5 rounded-[18px] rounded-br-[6px] text-white text-[0.9rem] leading-[1.5] max-w-[85%] animate-[bubbleIn_0.5s_1.5s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                                        style={{ background: "var(--c-primary)" }}>
                                        Yeah... I just don&apos;t want it to sound like an attack.
                                    </div>
                                </div>
                            </div>
                        </BentoCard>
                    </RevealOnScroll>
                </BentoGrid>
            </div>
        </section>
    );
}
