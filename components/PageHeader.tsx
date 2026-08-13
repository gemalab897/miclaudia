interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
}

export default function PageHeader({
  title,
  description,
  badge,
  badgeColor = "bg-violet-700",
}: PageHeaderProps) {
  return (
    <div className="mb-10 pb-8" style={{ borderBottom: "1px solid #e4e8f4" }}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-white px-3.5 py-1.5 rounded-full mb-5 ${badgeColor}`}
        >
          <span className="w-1 h-1 rounded-full bg-white/60" />
          {badge}
        </span>
      )}
      <h1
        className="font-bold leading-tight mb-3"
        style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,4vw,42px)", color: "#0d0c2b" }}
      >
        {title}
      </h1>
      {description && (
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#5a6280" }}>
          {description}
        </p>
      )}
    </div>
  );
}
