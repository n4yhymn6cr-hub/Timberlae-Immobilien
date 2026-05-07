import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Home,
  Handshake,
  ClipboardList,
  Phone,
  Star,
} from "lucide-react";

const leistungen = [
  {
    icon: TrendingUp,
    titel: "Immobilien verkaufen",
    untertitel: "Zum besten Preis, ohne Stress",
    punkte: [
      "Kostenfreie, professionelle Marktwertermittlung",
      "Erstellung hochwertiger Exposés mit Texten und Fotos",
      "Gezielte Vermarktung auf relevanten Portalen",
      "Durchführung aller Besichtigungen",
      "Vollständige Kaufvertragsbegleitung bis zum Notar",
      "Übergabe und Nachbetreuung",
    ],
    cta: "Jetzt Bewertung anfragen",
  },
  {
    icon: Home,
    titel: "Vermietung & Verpachtung",
    untertitel: "Zuverlässige Mieter, weniger Aufwand",
    punkte: [
      "Marktgerechte Mietpreisermittlung",
      "Bonitätsprüfung und Mieterauswahl",
      "Erstellung rechtssicherer Mietverträge",
      "Übergabeprotokoll und Schlüsselmanagement",
      "Auch für Gewerbeobjekte und Grundstücke",
    ],
    cta: "Objekt zur Vermietung anfragen",
  },
  {
    icon: Handshake,
    titel: "Persönliche Beratung",
    untertitel: "Direkt mit den Inhabern sprechen",
    punkte: [
      "Kostenfreie Erstberatung – telefonisch oder vor Ort",
      "Beratung für Käufer und Verkäufer",
      "Hilfe bei der Finanzierungsplanung (Vermittlung)",
      "Einschätzung von Marktchancen und -risiken",
      "Diskrete Behandlung aller Informationen",
    ],
    cta: "Beratungsgespräch vereinbaren",
  },
  {
    icon: ClipboardList,
    titel: "Kaufgesuche aufgeben",
    untertitel: "Wir finden das passende Objekt für Sie",
    punkte: [
      "Aufnahme Ihres genauen Suchprofils",
      "Aktive Suche im Netzwerk und Off-Market",
      "Sofortige Benachrichtigung bei Treffern",
      "Diskrete Käufervermittlung",
    ],
    cta: "Gesuch aufgeben",
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1C3A2A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-3">
            Was wir anbieten
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Unsere Leistungen
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-base md:text-lg">
            Von der ersten Beratung bis zur Schlüsselübergabe – wir begleiten Sie durch jeden Schritt Ihrer
            Immobilientransaktion.
          </p>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section className="py-16 md:py-24 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leistungen.map((l) => {
              const Icon = l.icon;
              return (
                <div
                  key={l.titel}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1C3A2A] flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-[#1C3A2A]">{l.titel}</h2>
                      <p className="text-[#B84C0A] text-sm font-medium mt-0.5">{l.untertitel}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-7">
                    {l.punkte.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-gray-600 text-sm">
                        <Star size={13} className="text-[#B84C0A] shrink-0 mt-1 fill-[#B84C0A]" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#B84C0A] hover:text-[#9A3E09] transition-colors border-b border-[#B84C0A]/30 pb-0.5"
                  >
                    {l.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1C3A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Unsicher welche Leistung für Sie passt?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Rufen Sie einfach an oder schreiben Sie uns – gemeinsam finden wir die beste Lösung für Ihre
            Situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#B84C0A] hover:bg-[#9A3E09] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Kontakt aufnehmen <ArrowRight size={16} />
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
