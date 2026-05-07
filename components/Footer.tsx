import Link from "next/link";
import { Phone, Smartphone, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C3A2A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/timberlae-logo-mono-ocher.png"
                alt="Timberlae Immobilien"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Ihr persönlicher Immobilienmakler in Großefehn und der Region Ostfriesland. Wir begleiten
              Sie beim Verkauf, der Vermietung und Verpachtung Ihrer Immobilie – mit Leidenschaft und
              lokalem Know-how.
            </p>
            <a
              href="https://www.instagram.com/timberlae.immobilien/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-gray-400 hover:text-[#B84C0A] transition-colors text-sm"
            >
              <ExternalLink size={16} />
              @timberlae.immobilien
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Startseite" },
                { href: "/immobilien", label: "Immobilien" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#B84C0A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#B84C0A]" />
                <span>
                  Ankerweg 2<br />
                  26629 Timmel
                </span>
              </li>
              <li>
                <a
                  href="tel:01724311662"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#B84C0A] transition-colors"
                >
                  <Phone size={15} className="text-[#B84C0A]" />
                  0172 4311662
                </a>
              </li>
              <li>
                <a
                  href="tel:015125520671"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#B84C0A] transition-colors"
                >
                  <Smartphone size={15} className="text-[#B84C0A]" />
                  0151 25520671
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@timberlae-immobilien.de"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#B84C0A] transition-colors"
                >
                  <Mail size={15} className="text-[#B84C0A]" />
                  info@timberlae-immobilien.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#254D38] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Timberlae Immobilien GbR. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/impressum" className="hover:text-[#B84C0A] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#B84C0A] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
