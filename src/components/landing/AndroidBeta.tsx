import { Download, ShieldCheck, Smartphone } from "lucide-react";
import { APK_DOWNLOAD_PATH, APK_FILE_NAME } from "@/lib/apkDownload";
import RevealOnScroll from "./RevealOnScroll";
import SectionBadge from "./SectionBadge";

const installNotes = [
    "Direct APK download",
    "Latest beta release",
    "No app store required",
];

export default function AndroidBeta() {
    return (
        <section id="android-beta" className="relative py-20 sm:py-28 px-6">
            <div
                className="absolute inset-0 mx-4 sm:mx-10 rounded-[28px] sm:rounded-[40px]"
                style={{ background: "var(--c-muted)" }}
            />
            <div className="relative z-[1] max-w-[1060px] mx-auto">
                <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-8 lg:gap-12">
                    <div className="text-center lg:text-left">
                        <SectionBadge>Early Access</SectionBadge>
                        <h2
                            className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight mt-4 mb-5 text-[var(--foreground)]"
                            style={{ fontFamily: "var(--font-fraunces)" }}
                        >
                            Try CoupleGoAI on Android
                        </h2>
                        <p className="text-[1.05rem] sm:text-[1.1rem] text-[var(--gray)] leading-[1.7] max-w-[540px] mx-auto lg:mx-0">
                            Install the latest beta APK on your Android device and help shape the first mobile release.
                        </p>
                    </div>

                    <div
                        className="rounded-[var(--radius)] border border-[rgba(30,18,48,0.08)] bg-white p-6 sm:p-8"
                        style={{ boxShadow: "var(--shadow-md)" }}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-7">
                            <div
                                className="w-[58px] h-[58px] rounded-[18px] flex items-center justify-center text-white shrink-0 mx-auto sm:mx-0"
                                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                            >
                                <Smartphone size={28} strokeWidth={2.2} aria-hidden="true" />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-[1.2rem] font-bold text-[var(--foreground)] mb-2">
                                    Android beta install
                                </h3>
                                <p className="text-[0.95rem] text-[var(--foreground-muted)] leading-[1.65]">
                                    The button starts the APK download directly. Android may ask you to allow installs from your browser before opening it.
                                </p>
                            </div>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 list-none mb-7">
                            {installNotes.map((note) => (
                                <li key={note} className="flex items-center justify-center sm:justify-start gap-2 text-[0.85rem] text-[var(--foreground-muted)]">
                                    <ShieldCheck size={17} className="text-[var(--c-accent)] shrink-0" aria-hidden="true" />
                                    {note}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={APK_DOWNLOAD_PATH}
                            download={APK_FILE_NAME}
                            className="inline-flex items-center justify-center gap-2.5 w-full px-8 py-4 rounded-full font-semibold text-[1.02rem] text-white no-underline transition-all duration-[350ms] hover:-translate-y-0.5 hover:shadow-lg"
                            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                        >
                            <Download size={19} strokeWidth={2.4} aria-hidden="true" />
                            Install Beta APK
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
