import { Download, Smartphone } from "lucide-react";
import { type ReactElement } from "react";
import { APK_DOWNLOAD_PATH, APK_FILE_NAME } from "@/lib/apkDownload";

export default function AndroidBetaBanner(): ReactElement {
    return (
        <section className="px-6 py-10 sm:py-12">
            <div className="max-w-[1060px] mx-auto">
                <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-[var(--radius)] border border-[rgba(30,18,48,0.08)] bg-white px-6 py-5 sm:px-7 mx-auto"
                    style={{
                        boxShadow: "var(--shadow-sm)",
                    }}
                >
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                        <span
                            className="w-11 h-11 rounded-[14px] flex items-center justify-center text-white shrink-0"
                            style={{ background: "var(--gradient-brand)" }}
                        >
                            <Smartphone size={22} strokeWidth={2.2} aria-hidden="true" />
                        </span>
                        <div>
                            <p className="font-semibold text-[var(--foreground)] text-[0.95rem] leading-snug">
                                Want to try CoupleGoAI on Android?
                            </p>
                            <p className="text-[0.85rem] text-[var(--gray)] leading-[1.55]">
                                Install our beta and help us build something great together.
                            </p>
                        </div>
                    </div>
                    <a
                        href={APK_DOWNLOAD_PATH}
                        download={APK_FILE_NAME}
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-[0.9rem] text-white no-underline transition-all duration-[350ms] hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
                        style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                    >
                        <Download size={16} strokeWidth={2.4} aria-hidden="true" />
                        Install Beta APK
                    </a>
                </div>
            </div>
        </section>
    );
}
