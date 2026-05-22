import { getApkUrl } from "@/lib/getApkUrl";

export default async function AndroidBetaBanner() {
    const apkUrl = await getApkUrl();

    return (
        <section className="px-6 py-6">
            <div className="max-w-[900px] mx-auto">
                <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[20px] px-7 py-5"
                    style={{
                        background: "linear-gradient(135deg, var(--c-muted) 0%, var(--c-accent-soft) 100%)",
                        boxShadow: "var(--shadow-md)",
                    }}
                >
                    <div className="flex items-center gap-3 text-center sm:text-left">
                        <span className="text-[1.5rem]">🤖</span>
                        <div>
                            <p className="font-semibold text-[var(--foreground)] text-[0.95rem] leading-snug">
                                Wanna try CoupleGoAI on Android?
                            </p>
                            <p className="text-[0.85rem] text-[var(--foreground-muted)]">
                                Install our beta and help us build something great together.
                            </p>
                        </div>
                    </div>
                    <a
                        href={apkUrl}
                        download
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-[0.9rem] text-white no-underline transition-all duration-[350ms] hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
                        style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Install Beta APK
                    </a>
                </div>
            </div>
        </section>
    );
}
