"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/immobilien", label: "Immobilien" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1C3A2A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group" onClick={() => setOpen(false)}>
            <span className="text-white font-heading text-xl md:text-2xl font-bold tracking-wide group-hover:text-orange-300 transition-colors">
              Timberlae
            </span>
            <span className="text-[#B84C0A] text-xs md:text-sm font-medium tracking-widest uppercase">
              Immobilien
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#B84C0A] ${
                  pathname === link.href
                    ? "text-[#B84C0A] border-b-2 border-[#B84C0A] pb-0.5"
                    : "text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:01724311662"
            className="hidden md:flex items-center gap-2 bg-[#B84C0A] hover:bg-[#9A3E09] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            <Phone size={15} />
            0172 4311662
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#152E20] border-t border-[#254D38]">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 border-b border-[#254D38] transition-colors hover:text-[#B84C0A] ${
                  pathname === link.href ? "text-[#B84C0A]" : "text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:01724311662"
              className="flex items-center gap-2 bg-[#B84C0A] text-white font-semibold px-4 py-3 rounded mt-2 justify-center"
            >
              <Phone size={16} />
              0172 4311662
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
