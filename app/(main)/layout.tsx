import Sidebar from "@/components/Sidebar";
import SessionTimer from "@/components/SessionTimer";
import SearchShortcut from "@/components/SearchShortcut";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full bg-slate-50 font-sans">
      <div className="sidebar-wrapper no-print">
        <Sidebar />
      </div>
      <main className="flex-1 min-h-screen overflow-auto">
        <div className="pt-16 lg:pt-0">
          {children}
        </div>
      </main>
      <SessionTimer />
      <SearchShortcut />
    </div>
  );
}
