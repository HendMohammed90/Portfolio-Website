type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
    return (
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-accent2">{eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">{title}</h2>
            {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
        </div>
    );
}