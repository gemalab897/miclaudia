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
  badgeColor = "bg-emerald-600",
}: PageHeaderProps) {
  return (
    <div className="mb-10 pb-8 border-b border-slate-100">
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-white px-3.5 py-1.5 rounded-full mb-5 ${badgeColor}`}
        >
          <span className="w-1 h-1 rounded-full bg-white/60" />
          {badge}
        </span>
      )}
      <h1
        className="text-[32px] md:text-[42px] font-bold leading-tight text-[#0b1d3a] mb-3"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h1>
      {description && (
        <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
