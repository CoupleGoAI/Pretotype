export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6 pt-[120px] pb-20"
            style={{ background: "var(--gradient-hero)" }}
        >
            {/* Floating shapes */}
            <div className="absolute rounded-full blur-[80px] opacity-50 w-[500px] h-[500px] -top-[100px] -right-[100px] animate-[float_20s_ease-in-out_infinite]"
                style={{ background: "var(--c-primary-light)" }} />
            <div className="absolute rounded-full blur-[80px] opacity-50 w-[400px] h-[400px] -bottom-[50px] -left-[100px] animate-[float_20s_ease-in-out_infinite_-7s]"
                style={{ background: "var(--c-accent-light)" }} />
            <div className="absolute rounded-full blur-[80px] opacity-20 w-[300px] h-[300px] bottom-[20%] right-[10%] animate-[float_20s_ease-in-out_infinite_-14s]"
                style={{ background: "var(--c-primary)" }} />

            <div className="relative z-[2] max-w-[780px]">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full text-[0.85rem] font-medium text-[var(--foreground-muted)] mb-8 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                    style={{ boxShadow: "var(--shadow-sm)" }}>
                    ✨ Launching Spring 2026 —{" "}
                    <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                        Join the waitlist
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-6 animate-[fadeUp_0.8s_0.1s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0"
                    style={{ fontFamily: "var(--font-fraunces)" }}>
                    Your relationship&apos;s<br />
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                        secret superpower
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-[clamp(1.05rem,2vw,1.25rem)] text-[var(--gray)] leading-[1.7] max-w-[560px] mx-auto mb-10 animate-[fadeUp_0.8s_0.2s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0">
                    A personal AI confidant for each of you, and a shared Couple AI that actually understands both sides. Resolve conflicts, plan incredible dates, and grow together.
                </p>

                {/* Actions */}
                <div className="flex gap-4 justify-center flex-wrap animate-[fadeUp_0.8s_0.3s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0">
                    <a href="#cta"
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-white no-underline transition-all duration-[350ms] hover:-translate-y-0.5"
                        style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}>
                        Join the Waitlist →
                    </a>
                    <a href="#how"
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-[var(--foreground)] bg-white border border-[rgba(30,18,48,0.1)] no-underline transition-all duration-[350ms] hover:border-[var(--c-primary)] hover:-translate-y-0.5"
                        style={{ boxShadow: "none" }}>
                        See How It Works
                    </a>
                </div>

                {/* Social proof */}
                <div className="flex items-center justify-center gap-3 mt-14 animate-[fadeUp_0.8s_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0">
                    <div className="flex">
                        {["👩", "👨", "🧑"].map((emoji, i) => (
                            <div key={i}
                                className={`w-9 h-9 rounded-full border-[2.5px] border-white flex items-center justify-center text-sm ${i > 0 ? "-ml-2.5" : ""}`}
                                style={{ background: i === 0 ? "var(--c-primary-light)" : i === 1 ? "var(--c-accent-light)" : "var(--c-primary)", color: i >= 2 ? "white" : undefined }}>
                                {emoji}
                            </div>
                        ))}
                        <div className="w-9 h-9 rounded-full border-[2.5px] border-white flex items-center justify-center text-sm -ml-2.5 text-white"
                            style={{ background: "var(--c-accent)" }}>
                            +
                        </div>
                    </div>
                    <p className="text-[0.9rem] text-[var(--gray)]">
                        <strong className="text-[var(--foreground)]">2,400+</strong> couples on the waitlist
                    </p>
                </div>
            </div>
        </section>
    );
}
