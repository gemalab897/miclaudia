export default function Header() {
  return (
    <header className="border-b border-[var(--gold)]/20 bg-[var(--pine)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <span className="font-display text-lg font-semibold text-[var(--cream)]">
          Pack Navideño <span className="gold-text">✦</span>
        </span>
        <span className="text-sm text-[var(--gold-light)]">
          3 modelos de negocio para esta temporada
        </span>
      </div>
    </header>
  );
}
