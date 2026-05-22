import { getApkUrl } from "@/lib/getApkUrl";
import RevealOnScroll from "./RevealOnScroll";
import SectionBadge from "./SectionBadge";

const GITHUB_REPO = "https://github.com/CoupleGoAI/couplegoai";

function AndroidIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.523 15.341a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9.046 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M3.184 7.42A2 2 0 0 1 5 6h14a2 2 0 0 1 1.816 1.42l.948 3.16A6.02 6.02 0 0 1 22 12v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5c0-.494.084-.967.236-1.42zM16.5 2.5l-2 3.5h-5l-2-3.5" />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

export default async function AndroidBeta() {
    const apkUrl = await getApkUrl();
    return (
        <section id="android-beta" className="py-20 sm:py-[100px] px-6">
            <div className="max-w-[900px] mx-auto">
                <RevealOnScroll>
                    <div
                        className="relative rounded-[28px] sm:rounded-[40px] overflow-hidden p-10 sm:p-16 text-center"
                        style={{
                            background: "linear-gradient(135deg, var(--c-muted) 0%, var(--c-accent-soft) 100%)",
                            boxShadow: "var(--shadow-lg)",
                        }}
                    >
                        {/* Background glow blobs */}
                        <div
                            className="absolute rounded-full blur-[60px] opacity-40 w-[300px] h-[300px] -top-[80px] -right-[60px] pointer-events-none"
                            style={{ background: "var(--c-accent-light)" }}
                        />
                        <div
                            className="absolute rounded-full blur-[60px] opacity-30 w-[240px] h-[240px] -bottom-[60px] -left-[40px] pointer-events-none"
                            style={{ background: "var(--c-primary-light)" }}
                        />

                        <div className="relative z-[1]">
                            {/* Icon + badge */}
                            <div className="flex flex-col items-center gap-4 mb-6">
                                <div
                                    className="w-[72px] h-[72px] rounded-[22px] flex items-center justify-center text-white"
                                    style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                                >
                                    <AndroidIcon />
                                </div>
                                <SectionBadge>Early Access · Android Beta</SectionBadge>
                            </div>

                            {/* Headline */}
                            <h2
                                className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-tight mb-4 text-[var(--foreground)]"
                                style={{ fontFamily: "var(--font-fraunces)" }}
                            >
                                Try CoupleGoAI on Android
                            </h2>

                            {/* Subtext */}
                            <p className="text-[1.05rem] text-[var(--foreground-muted)] leading-[1.7] max-w-[520px] mx-auto mb-3">
                                Be among the first to experience the full CoupleGoAI app. Download the latest beta release directly from GitHub — no app store required.
                            </p>
                            <p className="text-[0.875rem] text-[var(--gray)] mb-10">
                                You&apos;ll need to allow installation from unknown sources in your Android settings.
                            </p>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href={apkUrl}
                                    download
                                    className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-semibold text-[1.05rem] text-white no-underline transition-all duration-[350ms] hover:-translate-y-0.5 hover:shadow-xl"
                                    style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                                >
                                    <DownloadIcon />
                                    Download Latest APK
                                </a>

                                <a
                                    href={GITHUB_REPO}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-[1.05rem] text-[var(--foreground)] bg-white border border-[rgba(30,18,48,0.1)] no-underline transition-all duration-[350ms] hover:border-[var(--c-primary)] hover:-translate-y-0.5"
                                    style={{ boxShadow: "var(--shadow-sm)" }}
                                >
                                    <GithubIcon />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
