import type { NavLink, FeatureCard, Step, PricingPlan, FooterColumn } from "@/types";

export const NAV_LINKS: NavLink[] = [
    { label: "How It Works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
];

export const FEATURE_CARDS: FeatureCard[] = [
    { emoji: "🛡", title: "Private AI Confidant", desc: "Vent and get honest feedback without judgment. Your partner never sees these chats.", bg: "var(--c-muted)" },
    { emoji: "⚖", title: "Neutral Mediation", desc: "The Couple AI understands both sides and suggests compromises you hadn\u2019t thought of.", bg: "var(--c-accent-soft)" },
    { emoji: "🎉", title: "Date & Gift Ideas", desc: "Hyper-personalized suggestions based on what both of you actually like.", bg: "var(--c-accent-soft)" },
    { emoji: "📊", title: "Love Dashboard", desc: "Track conflicts resolved, dates planned, communication trends, and milestones.", bg: "var(--c-muted)" },
];

export const HOW_IT_WORKS_STEPS: Step[] = [
    {
        emoji: "🧠",
        title: "Sign Up Solo",
        desc: "Your AI privately learns your communication style and values.",
        iconBg: "var(--c-muted)",
        iconShadow: "0 8px 32px rgba(244,139,166,0.15)",
    },
    {
        emoji: "💬",
        title: "Vent & Reflect",
        desc: "Get neutral feedback and prepare for tough conversations.",
        iconBg: "linear-gradient(135deg, var(--c-muted), var(--c-accent-soft))",
        iconShadow: "0 8px 32px rgba(220,150,210,0.15)",
    },
    {
        emoji: "🤝",
        title: "Connect as a Couple",
        desc: "Link with your partner — a Couple AI helps you find win\u2013wins.",
        iconBg: "var(--c-accent-soft)",
        iconShadow: "0 8px 32px rgba(204,123,232,0.15)",
    },
];

export const PRICING_PLANS: PricingPlan[] = [
    {
        tier: "Crush",
        price: "€0",
        desc: "Try CoupleGoAI, vent safely, and get a taste of smarter support.",
        features: [
            "Personal AI chat (10\u201315 msgs/day)",
            "Basic onboarding quiz",
            "Emotional support after conflicts",
            "1\u20132 conversation scripts",
            "3 date/gift ideas per month",
            "Daily relationship check\u2011in",
        ],
        cta: "Get Started Free",
        popular: false,
    },
    {
        tier: "Couple",
        price: "€5",
        desc: "Turn conflicts into connection with a shared AI that knows both of you.",
        features: [
            "Unlimited personal AI chat",
            "Shared Couple AI mediation",
            "Date, trip & gift planning",
            "Full conversation scripts library",
            "Love Success mini\u2011dashboard",
            "Tag & revisit important convos",
        ],
        cta: "Join the Waitlist",
        popular: true,
    },
    {
        tier: "Soulmate",
        price: "€12",
        desc: "Turn your relationship into a growth journey with deep insights and coaching.",
        features: [
            "Everything in Couple, plus:",
            "Months of AI memory & patterns",
            "Advanced trends & monthly review",
            "Custom goals with nudges",
            "Voice notes to AI",
            "Guided micro\u2011programs",
            "Anonymous community access",
            "Early access to new features",
        ],
        cta: "Join the Waitlist",
        popular: false,
    },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        heading: "Product",
        links: [
            { label: "How It Works", href: "#how" },
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Roadmap", href: "#" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ],
    },
];
