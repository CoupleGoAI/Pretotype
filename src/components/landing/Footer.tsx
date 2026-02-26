import BrandHeart from "./BrandHeart";

export default function Footer() {
    return (
        <footer className="px-6 pt-20 pb-10 text-white/60" style={{ background: "var(--foreground)" }}>
            <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
                {/* Brand */}
                <div>
                    <a href="#" className="flex items-center gap-2.5 no-underline font-bold text-[1.35rem] text-white mb-4">
                        <div className="w-[38px] h-[38px] rounded-[12px] flex items-center justify-center text-white text-lg"
                            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-primary)" }}>
                            <BrandHeart size={20} />
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
                    <a href="#" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Blog</a>
                    <a href="#" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Careers</a>
                    <a href="#" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Contact</a>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-white font-semibold text-[0.9rem] uppercase tracking-[0.08em] mb-5">Legal</h4>
                    <a href="#" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Privacy Policy</a>
                    <a href="#" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Terms of Service</a>
                    <a href="#" className="block text-white/50 text-[0.9rem] no-underline mb-3 transition-colors hover:text-[var(--c-accent-light)]">Cookie Policy</a>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-[1140px] mx-auto pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.85rem]">
                <p>© 2026 CoupleGoAI. All rights reserved.</p>
                <p className="flex items-center gap-1">Made with <BrandHeart size={14} /> for modern love.</p>
            </div>
        </footer>
    );
}
