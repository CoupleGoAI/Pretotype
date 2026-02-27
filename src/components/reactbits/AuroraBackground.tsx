"use client";

/**
 * Aurora Background — fixed full-screen gradient blobs that slowly drift.
 * Uses CSS vars from global.css (--c-primary-rgb, --c-accent-rgb).
 * pointer-events: none so it never blocks interactions.
 */
export default function AuroraBackground() {
    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            {/* Top-right pink blob */}
            <div
                className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full opacity-[0.07] -top-[15%] -right-[10%]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(var(--c-primary-rgb), 0.4) 0%, transparent 70%)",
                    animation: "auroraMove1 25s ease-in-out infinite",
                    willChange: "transform",
                }}
            />
            {/* Bottom-left purple blob */}
            <div
                className="absolute w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.06] -bottom-[10%] -left-[10%]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(var(--c-accent-rgb), 0.4) 0%, transparent 70%)",
                    animation: "auroraMove2 30s ease-in-out infinite",
                    willChange: "transform",
                }}
            />
            {/* Centre mixed blob */}
            <div
                className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full opacity-[0.05] top-[40%] left-[30%]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(var(--c-primary-rgb), 0.3) 0%, rgba(var(--c-accent-rgb), 0.2) 50%, transparent 70%)",
                    animation: "auroraMove3 20s ease-in-out infinite",
                    willChange: "transform",
                }}
            />
        </div>
    );
}
