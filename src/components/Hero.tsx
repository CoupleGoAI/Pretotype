"use client";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
            <span className="inline-block mb-4 rounded-full bg-muted px-4 py-1 text-sm font-medium text-primary">
                Early preview
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl">
                Your relationship,{" "}
                <span className="text-primary">understood in 60&nbsp;seconds</span>
            </h1>

            <p className="mt-4 max-w-lg text-lg text-foreground/60">
                Try a 30-second AI demo, take a quick swipe quiz, and get a free
                personalised Couple Snapshot — no sign-up required.
            </p>

            <a
                href="#demo"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-primary/30 transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-primary"
            >
                Try the demo ↓
            </a>
        </section>
    );
}
