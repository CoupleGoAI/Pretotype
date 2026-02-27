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
                    className="w-[38px] h-[38px] rounded-[12px] flex items-center justify-center text-white text-lg"
                    style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}
                >
                    <BrandHeart size={20} />
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
