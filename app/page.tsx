import Link from "next/link";
import { ArrowRight, Home, TrendingUp, Handshake, CheckCircle2, Phone, Mail } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

const featured = properties.filter((p) => p.hervorgehoben);

const services = [
  {
    icon: TrendingUp,
    titel: "Immobilien verkaufen",
    text: "Wir erzielen den bestmöglichen Preis für Ihre Immobilie – durch professionelle Bewertung, gezielte Vermarktung und persönliche Begleitung bis zum Notartermin.",
  },
  {
    icon: Home,
    titel: "Vermietung & Verpachtung",
    text: "Ob Wohnimmobilie oder Gewerbefläche – wir finden zuverlässige Mieter und übernehmen den gesamten Vermietungsprozess für Sie.",
  },
  {
    icon: Handshake,
    titel: "Persönliche Beratung",
    text: "Bei uns sind Sie keine Nummer. Wir nehmen uns Zeit, hören zu und begleiten Sie mit ehrlicher, ortskundiger Beratung durch jeden Schritt.",
  },
];

const vorteile = [
  "Lokale Marktkenntnis in Ostfriesland",
  "Persönliche Betreuung durch die Inhaber",
  "Kostenfreie Erstberatung – vor Ort oder telefonisch",
  "Professionelle Immobilienbewertung",
  "Transparente Kommunikation auf Augenhöhe",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-4">
              Ihr Makler in Ostfriesland
            </p>
            <h1 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ihr Zuhause in{" "}
              <span className="text-[#B84C0A]">guten Händen</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Wir sind Timberlae Immobilien – Ihr persönlicher Makler aus der Region. Wir verkaufen,
              vermieten und verpachten Immobilien in Großefehn und ganz Ostfriesland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/immobilien"
                className="inline-flex items-center justify-center gap-2 bg-[#B84C0A] hover:bg-[#9A3E09] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Immobilien ansehen
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors"
              >
                Kostenlos beraten lassen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact bar */}
      <div className="bg-[#152E20] border-b border-[#254D38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-gray-400 text-sm">
            <span className="text-white font-medium">Timberlae Immobilien GbR</span> · Ankerweg 2, 26629
            Timmel
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:01724311662"
              className="flex items-center gap-2 text-gray-300 hover:text-[#B84C0A] text-sm transition-colors"
            >
              <Phone size={14} />
              0172 4311662
            </a>
            <a
              href="mailto:info@timberlae-immobilien.de"
              className="flex items-center gap-2 text-gray-300 hover:text-[#B84C0A] text-sm transition-colors"
            >
              <Mail size={14} />
              info@timberlae-immobilien.de
            </a>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="py-16 md:py-24 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-2">
                Aktuelle Angebote
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1C3A2A]">
                Ausgewählte Immobilien
              </h2>
            </div>
            <Link
              href="/immobilien"
              className="text-sm font-semibold text-[#B84C0A] hover:text-[#9A3E09] flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              Alle ansehen <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-2">
              Was wir für Sie tun
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1C3A2A]">
              Unsere Leistungen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.titel}
                  className="bg-[#F8F6F1] rounded-xl p-7 border border-gray-100 hover:border-[#1C3A2A]/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1C3A2A] flex items-center justify-center mb-5 group-hover:bg-[#B84C0A] transition-colors">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1C3A2A] mb-3">{s.titel}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-[#B84C0A] font-semibold hover:text-[#9A3E09] transition-colors"
            >
              Alle Leistungen entdecken <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 md:py-24 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-3">
                Wer wir sind
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Aus der Region, für die Region
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Timberlae Immobilien GbR steht für persönlichen Service, Verlässlichkeit und tiefes
                Ortswissen. Als Inhaber kennen Harms und Meyer die Besonderheiten des
                ostfriesischen Immobilienmarkts – und setzen sich mit vollem Einsatz für Ihre Interessen ein.
              </p>
              <ul className="space-y-3 mb-8">
                {vorteile.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={17} className="text-[#B84C0A] shrink-0 mt-0.5" />
                    {v}
                  </li>
                ))}
              </ul>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 bg-[#B84C0A] hover:bg-[#9A3E09] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Mehr über uns <ArrowRight size={16} />
              </Link>
            </div>

            {/* Info card */}
            <div className="bg-[#152E20] rounded-2xl p-8 border border-[#254D38]">
              <p className="text-[#B84C0A] text-sm font-medium uppercase tracking-widest mb-6">
                Ihr direkter Draht zu uns
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Inhaber</p>
                  <p className="text-white font-semibold">Harms & Meyer</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Adresse</p>
                  <p className="text-white">Ankerweg 2 · 26629 Timmel</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Telefon</p>
                  <a href="tel:01724311662" className="text-white hover:text-[#B84C0A] transition-colors">
                    0172 4311662
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">E-Mail</p>
                  <a
                    href="mailto:info@timberlae-immobilien.de"
                    className="text-white hover:text-[#B84C0A] transition-colors break-all"
                  >
                    info@timberlae-immobilien.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-[#B84C0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Immobilie verkaufen oder kaufen?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Wir beraten Sie kostenlos und unverbindlich – persönlich bei Ihnen, in unserem Büro oder
            telefonisch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#B84C0A] font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors"
            >
              Jetzt Kontakt aufnehmen <ArrowRight size={18} />
            </Link>
            <a
              href="tel:01724311662"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Phone size={16} /> 0172 4311662
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
