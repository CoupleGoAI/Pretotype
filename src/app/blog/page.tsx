import BrandHeart from "@/components/landing/BrandHeart";

export const metadata = {
    title: "Blog — CoupleGoAI",
    description: "Relationship insights, tips, and stories — coming soon.",
};

export default function BlogPage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--foreground)]">
            {/* Aurora blobs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ zIndex: 0 }}
            >
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "65vw",
                        height: "65vw",
                        top: "-15%",
                        left: "-10%",
                        background: "radial-gradient(circle, rgba(244,139,166,0.25) 0%, transparent 70%)",
                        animation: "auroraMove1 14s ease-in-out infinite",
                        filter: "blur(40px)",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "55vw",
                        height: "55vw",
                        bottom: "-10%",
                        right: "-5%",
                        background: "radial-gradient(circle, rgba(204,123,232,0.22) 0%, transparent 70%)",
                        animation: "auroraMove2 18s ease-in-out infinite",
                        filter: "blur(40px)",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "40vw",
                        height: "40vw",
                        top: "30%",
                        left: "35%",
                        background: "radial-gradient(circle, rgba(244,139,166,0.15) 0%, transparent 70%)",
                        animation: "auroraMove3 22s ease-in-out infinite",
                        filter: "blur(50px)",
                    }}
                />
            </div>

            {/* Noise overlay */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    zIndex: 1,
                    opacity: 0.04,
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: "200px",
                }}
            />

            {/* Floating ring around the heart */}
            <div
                aria-hidden="true"
                className="absolute rounded-full"
                style={{
                    width: 120,
                    height: 120,
                    border: "1.5px solid rgba(244,139,166,0.3)",
                    animation: "blogRingPulse 3s ease-in-out infinite",
                    zIndex: 2,
                }}
            />
            <div
                aria-hidden="true"
                className="absolute rounded-full"
                style={{
                    width: 160,
                    height: 160,
                    border: "1px solid rgba(204,123,232,0.18)",
                    animation: "blogRingPulse 3s ease-in-out infinite 0.6s",
                    zIndex: 2,
                }}
            />

            {/* Content */}
            <div
                className="relative flex flex-col items-center text-center px-6"
                style={{ zIndex: 3 }}
            >
                {/* Floating logo */}
                <div
                    className="mb-8 w-[72px] h-[72px] rounded-[22px] overflow-hidden flex items-center justify-center"
                    style={{
                        boxShadow: "var(--shadow-glow-primary)",
                        animation: "blogFloat 4s ease-in-out infinite",
                    }}
                >
                    <BrandHeart size={72} />
                </div>

                {/* "Blog" label */}
                <div
                    className="mb-4 px-4 py-1.5 rounded-full text-[0.8rem] font-semibold uppercase tracking-[0.12em]"
                    style={{
                        background: "rgba(244,139,166,0.12)",
                        border: "1px solid rgba(244,139,166,0.25)",
                        color: "var(--c-primary-light)",
                        animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
                    }}
                >
                    Blog
                </div>

                {/* Heading with shimmer */}
                <h1
                    className="text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-tight mb-5"
                    style={{
                        fontFamily: "var(--font-fraunces)",
                        background: "linear-gradient(90deg, #fff 0%, var(--c-primary-light) 30%, var(--c-accent-light) 55%, #fff 80%, var(--c-primary-light) 100%)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: "blogShimmer 4s linear infinite, fadeUp 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both",
                    }}
                >
                    Coming Soon
                </h1>

                <p
                    className="text-[1.1rem] leading-[1.7] max-w-[420px] text-white/50"
                    style={{
                        animation: "fadeUp 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both",
                    }}
                >
                    Relationship insights, expert tips, and real stories — arriving shortly.
                </p>

                {/* Back link */}
                <a
                    href="/"
                    className="mt-10 inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-[0.95rem] text-white no-underline transition-all duration-350 hover:-translate-y-0.5"
                    style={{
                        background: "var(--gradient-brand)",
                        boxShadow: "var(--shadow-glow-primary)",
                        animation: "fadeUp 0.7s 0.35s cubic-bezier(0.22,1,0.36,1) both",
                    }}
                >
                    ← Back to Home
                </a>
            </div>

            {/* Inline keyframes */}
            <style>{`
                @keyframes blogFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes blogShimmer {
                    0% { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes blogRingPulse {
                    0%, 100% { transform: scale(1); opacity: 0.6; }
                    50% { transform: scale(1.12); opacity: 0.2; }
                }
            `}</style>
        </main>
    );
}
