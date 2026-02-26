/**
 * Reusable uppercase section label used across landing sections.
 * Replaces the repeated inline-flex + before:pseudo-element pattern.
 */
export default function SectionBadge({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--c-accent)] mb-4">
            {children}
        </div>
    );
}
