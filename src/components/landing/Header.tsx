"use client";

import { useEffect, useState } from "react";
import BrandHeart from "./BrandHeart";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
                ? "bg-white/85 backdrop-blur-[20px] backdrop-saturate-150 shadow-[0_1px_20px_rgba(30,18,48,0.06)] px-5 py-3.5 sm:px-10"
                : "px-5 py-5 sm:px-10"
                }`}
        >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 no-underline font-bold text-[1.35rem] text-[var(--foreground)]">
                <div
                    className="w-[38px] h-[38px] rounded-[12px] overflow-hidden flex items-center justify-center"
                    style={{ boxShadow: "var(--shadow-glow-primary)" }}
                >
                    <BrandHeart size={38} />
                </div>
                CoupleGoAI
            </a>

            {/* Links — hidden on small screens */}
            <ul className="hidden sm:flex items-center gap-9 list-none">
                {[
                    { label: "How It Works", href: "#how" },
                    { label: "Features", href: "#features" },
                    { label: "Pricing", href: "#pricing" },
                ].map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="relative text-[var(--foreground-muted)] font-medium text-[0.95rem] no-underline transition-colors hover:text-[var(--foreground)] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:rounded after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100"
                            style={{ "--tw-after-bg": "var(--gradient-brand)" } as React.CSSProperties}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="#android-beta"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-[0.85rem] text-[var(--foreground)] no-underline border border-[rgba(30,18,48,0.15)] transition-all duration-[350ms] hover:border-[var(--c-primary)] hover:-translate-y-0.5"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.523 15.341a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9.046 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M3.184 7.42A2 2 0 0 1 5 6h14a2 2 0 0 1 1.816 1.42l.948 3.16A6.02 6.02 0 0 1 22 12v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5c0-.494.084-.967.236-1.42zM16.5 2.5l-2 3.5h-5l-2-3.5" />
                        </svg>
                        Android Beta
                    </a>
                </li>
                <li>
                    <a
                        href="#quiz-section"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-[0.95rem] text-white no-underline cursor-pointer border-none transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
                        style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                    >
                        Take the Quiz
                    </a>
                </li>
            </ul>
        </nav>
    );
}
