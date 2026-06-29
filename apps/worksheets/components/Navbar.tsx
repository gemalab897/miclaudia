"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/worksheets", label: "All Worksheets" },
  ];

  return (
    <>
      <nav
        className="no-print fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6"
        style={{ background: "#0c1a17", borderBottom: "1px solid rgba(20,184,166,0.12)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#0f766e,#0d9488)", boxShadow: "0 4px 12px rgba(15,118,110,0.4)" }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-white text-[15px] leading-none">
              Therapy <span style={{ color: "#14b8a6" }}>Worksheets</span>
            </span>
            <div className="text-[9px] tracking-[0.18em] uppercase font-medium mt-0.5" style={{ color: "rgba(20,184,166,0.4)" }}>
              Professional Toolkit
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
                style={active
                  ? { background: "rgba(20,184,166,0.15)", color: "#14b8a6" }
                  : { color: "rgba(255,255,255,0.5)" }
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white/50"
          style={{ background: "rgba(255,255,255,0.05)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed top-14 left-0 right-0 z-40 py-2 px-4 no-print"
          style={{ background: "#0c1a17", borderBottom: "1px solid rgba(20,184,166,0.12)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium mb-1"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
