export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-slate-900 font-sans">
      {children}
    </div>
  );
}
