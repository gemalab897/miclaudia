interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
}

export default function PageHeader({ title, description, badge, badgeColor = "bg-[#10b981]" }: PageHeaderProps) {
  return (
    <div className="mb-8">
      {badge && (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white mb-3 ${badgeColor}`}>
          {badge}
        </span>
      )}
      <h1 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">{title}</h1>
      {description && (
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">{description}</p>
      )}
    </div>
  );
}
