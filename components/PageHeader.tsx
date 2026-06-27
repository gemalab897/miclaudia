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
  badgeColor = "bg-[#10b981]",
}: PageHeaderProps) {
  return (
    <div className="mb-10">
      {badge && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
          <span
            className={`text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full text-white ${badgeColor}`}
          >
            {badge}
          </span>
        </div>
      )}
      <h1
        className="text-3xl md:text-4xl font-bold text-[#0b1d3a] mb-3 leading-tight"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h1>
      {description && (
        <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
      <div className="gradient-divider mt-6" />
    </div>
  );
}
