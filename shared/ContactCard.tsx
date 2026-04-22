import { ContactCardProps } from "@/lib/types";

export function ContactCard({ icon, label, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent/40 transition"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-bg text-xl flex-shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
        <p className="truncate text-ink font-medium">{value}</p>
      </div>
    </a>
  );
}