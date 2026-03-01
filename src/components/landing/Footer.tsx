import BrandHeart from "./BrandHeart";

export default function Footer() {
    return (
        <footer className="px-6 pt-20 pb-10 text-white/60" style={{ background: "var(--foreground)" }}>
            <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
                {/* Brand */}
                <div>
                    <a href="#" className="flex items-center gap-2.5 no-underline font-bold text-[1.35rem] text-white mb-4">
                        <div className="w-[38px] h-[38px] rounded-[12px] overflow-hidden flex items-center justify-center"
                            style={{ boxShadow: "var(--shadow-glow-primary)" }}>
                            <BrandHeart size={38} />
                        </div>
                        CoupleGoAI
                    </a>
                    <p className="text-[0.9rem] leading-[1.65] max-w-[280px]">
                        Your relationship&apos;s secret superpower. AI-powered support for modern couples.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h4 className="text-white font-semibold text-[0.9rem] uppercase tracking-[0.08em] mb-5">Product</h4>
                    <a href="#how" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">How It Works</a>
                    <a href="#features" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Features</a>
                    <a href="#pricing" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Pricing</a>
                    <a href="#" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Roadmap</a>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-white font-semibold text-[0.9rem] uppercase tracking-[0.08em] mb-5">Company</h4>
                    <a href="#" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">About Us</a>
                    <div className="flex gap-4 mt-4">
                        <a href="https://discord.gg/fA58tKnT" target="_blank" rel="noopener noreferrer"
                            className="text-white/50 hover:text-[var(--c-accent-light)] transition-colors"
                            title="Join our Discord">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.3671a19.8062 19.8062 0 00-4.8851-1.5152.074.074 0 00-.0784.0336c-.211.3972-.4446.9151-.6083 1.329a18.27 18.27 0 00-5.487 0c-.1637-.4139-.3957-.9319-.6083-1.329a.077.077 0 00-.0784-.0336 19.7818 19.7818 0 00-4.8854 1.515.07.07 0 00-.0329.0318C.5817 9.09.3134 13.7381 1.0703 18.2591a.082.082 0 00.0331.0554 19.9148 19.9148 0 005.7963 3.0294.073.073 0 00.0797-.0276c.461-.6304.8697-1.2952 1.226-1.9514a.07.07 0 00-.0385-.0985 13.072 13.072 0 01-1.473-.7034.07.07 0 01-.0066-.1154c.099-.074.198-.1498.293-.2271a.07.07 0 01.0726-.0096c3.189 1.48 6.644 1.48 9.786 0a.07.07 0 01.0757.0091c.096.0773.194.1529.293.2271a.07.07 0 01-.006.1139 12.251 12.251 0 01-1.473.7035a.07.07 0 00-.037.0985c.361.7562.769 1.421 1.226 1.9514a.07.07 0 00.0796.0276 19.99 19.99 0 005.8015-3.0294.07.07 0 00.033-.0551c.857-4.561.645-8.519-.274-12.6549a.058.058 0 00-.02-.0331zM8.02 15.3312c-1.1825 0-2.1569-.9718-2.1569-2.1575 0-1.1857.9718-2.1575 2.1569-2.1575 1.1851 0 2.1575.9718 2.1575 2.1575 0 1.1857-.9724 2.1575-2.1575 2.1575zm7.9701 0c-1.1825 0-2.1569-.9718-2.1569-2.1575 0-1.1857.9718-2.1575 2.1569-2.1575 1.1851 0 2.1575.9718 2.1575 2.1575 0 1.1857-.9724 2.1575-2.1575 2.1575z" />
                            </svg>
                        </a>
                        <a href="mailto:couplegoai.main@gmail.com"
                            className="text-white/50 hover:text-[var(--c-accent-light)] transition-colors"
                            title="Email us">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                            </svg>
                        </a>
                    </div>
                    <a href="mailto:couplegoai.main@gmail.com" className="block text-white/50 text-[0.85rem] no-underline mt-3 transition-colors hover:text-[var(--c-accent-light)]">couplegoai.main@gmail.com</a>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-white font-semibold text-[0.9rem] uppercase tracking-[0.08em] mb-5">Legal</h4>
                    <a href="/privacy-policy" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Privacy Policy</a>
                    <a href="/terms-of-service" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Terms of Service</a>
                    <a href="/cookie-policy" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Cookie Policy</a>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-[1140px] mx-auto pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.85rem]">
                <p>© 2026 CoupleGoAI. All rights reserved.</p>
                <p className="flex items-center gap-1">Made with <BrandHeart size={14} /> for modern couples.</p>
            </div>
        </footer>
    );
}
