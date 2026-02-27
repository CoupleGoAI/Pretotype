import RevealOnScroll from "./RevealOnScroll";
import SectionBadge from "./SectionBadge";

const plans = [
    {
        tier: "Crush",
        price: "€0",
        desc: "Try CoupleGoAI, vent safely, and get a taste of smarter support.",
        features: [
            "Personal AI chat (10–15 msgs/day)",
            "Basic onboarding quiz",
            "Emotional support after conflicts",
            "1–2 conversation scripts",
            "3 date/gift ideas per month",
            "Daily relationship check‑in",
        ],
        cta: "Get Started Free",
        popular: false,
    },
    {
        tier: "Couple",
        price: "€5",
        desc: "Turn conflicts into connection with a shared AI that knows both of you.",
        features: [
            "Unlimited chat for both partners",
            "Shared Couple AI mediation",
            "Date, trip & gift planning",
            "Full conversation scripts library",
            "Love Success mini‑dashboard",
            "Tag & revisit important convos",
        ],
        cta: "Join the Waitlist",
        popular: true,
    },
    {
        tier: "Soulmate",
        price: "€12",
        desc: "Turn your relationship into a growth journey with deep insights and coaching.",
        features: [
            "Everything in Couple, plus:",
            "Months of AI memory & patterns",
            "Advanced trends & monthly review",
            "Custom goals with nudges",
            "Voice notes to AI",
            "Guided micro‑programs",
            "Anonymous community access",
            "Early access to new features",
        ],
        cta: "Join the Waitlist",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-20 sm:py-28 px-6">
            {/* Background card */}
            <div
                className="absolute inset-0 mx-4 sm:mx-10 rounded-[28px] sm:rounded-[40px]"
                style={{ background: "var(--c-muted)" }}
            />
            <div className="relative z-[1] max-w-[1140px] mx-auto">
                {/* Header */}
                <RevealOnScroll className="text-center mb-16">
                    <SectionBadge>Pricing</SectionBadge>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mb-5" style={{ fontFamily: "var(--font-fraunces)" }}>
                        Less than one coffee<br />date a month
                    </h2>
                    <p className="text-[1.1rem] text-[var(--gray)] leading-[1.7] max-w-[520px] mx-auto">
                        Start free. Upgrade when you&apos;re ready for the full experience.
                    </p>
                </RevealOnScroll>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1060px] mx-auto">
                    {plans.map((plan) => (
                        <RevealOnScroll key={plan.tier}
                            className={`relative flex flex-col p-8 sm:p-10 rounded-[var(--radius)] border transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] ${plan.popular
                                ? "border-[var(--c-accent)] sm:scale-[1.04] sm:-my-2"
                                : "border-[rgba(30,18,48,0.08)]"
                                }`}
                            style={plan.popular
                                ? { background: "linear-gradient(170deg, var(--background) 0%, var(--c-accent-soft) 100%)", boxShadow: "var(--shadow-glow-accent)" }
                                : { background: "var(--background)" }
                            }
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 right-6 px-3.5 py-1 rounded-full text-white text-[0.75rem] font-bold uppercase tracking-[0.06em]"
                                    style={{ background: "var(--gradient-brand)" }}>
                                    Most Popular
                                </div>
                            )}

                            <div className="text-[1.1rem] font-bold text-[var(--foreground)] mb-3">{plan.tier}</div>
                            <div className="text-[2.5rem] font-bold mb-1" style={{ fontFamily: "var(--font-fraunces)" }}>
                                {plan.price} <span className="text-base font-normal text-[var(--gray)]">/mo per couple</span>
                            </div>
                            <p className="text-[var(--gray)] text-[0.88rem] leading-[1.55] mb-7">{plan.desc}</p>

                            <ul className="flex flex-col gap-2.5 mb-8 list-none flex-1">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5 text-[0.88rem] text-[var(--foreground-muted)]">
                                        <span className="flex-shrink-0 mt-0.5 w-[20px] h-[20px] rounded-full flex items-center justify-center text-[0.65rem] font-bold text-[var(--c-accent)]"
                                            style={{ background: plan.popular ? "rgba(204,123,232,0.2)" : "var(--c-accent-soft)" }}>
                                            ✓
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a href="#quiz-section"
                                className={`flex items-center justify-center w-full px-7 py-3 rounded-full font-semibold text-[0.95rem] no-underline cursor-pointer transition-all duration-[350ms] hover:-translate-y-0.5 ${plan.popular
                                    ? "text-white"
                                    : "text-[var(--foreground)] bg-white border border-[rgba(30,18,48,0.1)]"
                                    }`}
                                style={plan.popular
                                    ? { background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }
                                    : undefined
                                }>
                                {plan.cta}
                            </a>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
