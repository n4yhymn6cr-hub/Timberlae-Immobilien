import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Users, Heart, Award } from "lucide-react";

const werte = [
  {
    icon: Heart,
    titel: "Persönlich",
    text: "Wir kümmern uns persönlich um jeden Kunden – keine Callcenter, kein Ticket-System. Sie sprechen direkt mit den Inhabern.",
  },
  {
    icon: MapPin,
    titel: "Regional",
    text: "Als ortsansässiges Unternehmen kennen wir Ostfriesland wie unsere Westentasche – jeden Ortsteil, jede Lage, jeden Markttrend.",
  },
  {
    icon: Award,
    titel: "Zuverlässig",
    text: "Transparente Kommunikation, ehrliche Einschätzungen und verbindliche Zusagen – darauf können Sie sich verlassen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1C3A2A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-3">
            Das sind wir
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Über Timberlae Immobilien
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-base md:text-lg">
            Ein Maklerunternehmen aus Überzeugung – gegründet von Menschen, die Ostfriesland lieben und
            kennen.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-3">
                Unsere Geschichte
              </p>
              <h2 className="font-heading text-3xl font-bold text-[#1C3A2A] mb-6">
                Immobilien mit Herz und Verstand
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Timberlae Immobilien GbR wurde von Harms und Meyer gegründet – zwei Menschen,
                  die in Ostfriesland verwurzelt sind und den hiesigen Immobilienmarkt aus tiefster
                  Überzeugung kennen.
                </p>
                <p>
                  Unser Name steht für Verlässlichkeit, Bodenständigkeit und echten Service. Wir glauben
                  daran, dass der Kauf oder Verkauf einer Immobilie eine der bedeutendsten Entscheidungen
                  im Leben ist – und begleiten Sie dabei von der ersten Anfrage bis zur Schlüsselübergabe.
                </p>
                <p>
                  Unser Büro befindet sich am Ankerweg 2 in Timmel, mitten in der Region,
                  die wir täglich betreuen. Hier kennen wir die Nachbarschaften, die Infrastruktur und die
                  Menschen – das macht den Unterschied.
                </p>
              </div>
            </div>

            {/* Team card */}
            <div className="bg-[#1C3A2A] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#B84C0A] flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Ihr Team</h3>
              </div>

              <div className="space-y-6">
                <div className="bg-[#152E20] rounded-xl p-5 border border-[#254D38]">
                  <div className="w-12 h-12 rounded-full bg-[#B84C0A]/20 border-2 border-[#B84C0A] flex items-center justify-center mb-3">
                    <span className="text-[#B84C0A] font-heading font-bold text-lg">H</span>
                  </div>
                  <p className="text-white font-semibold">Harms</p>
                  <p className="text-gray-400 text-sm mt-1">Geschäftsinhaber & Makler</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Bodenständig, erfahren und immer direkt – mit einem tiefen Verständnis für den
                    ostfriesischen Markt.
                  </p>
                </div>

                <div className="bg-[#152E20] rounded-xl p-5 border border-[#254D38]">
                  <div className="w-12 h-12 rounded-full bg-[#B84C0A]/20 border-2 border-[#B84C0A] flex items-center justify-center mb-3">
                    <span className="text-[#B84C0A] font-heading font-bold text-lg">M</span>
                  </div>
                  <p className="text-white font-semibold">Meyer</p>
                  <p className="text-gray-400 text-sm mt-1">Geschäftsinhaber & Makler</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Kommunikationsstark, verlässlich und immer nah an den Wünschen der Kunden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-2">
              Wofür wir stehen
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1C3A2A]">
              Unsere Werte
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {werte.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.titel} className="text-center px-4">
                  <div className="w-14 h-14 rounded-full bg-[#F8F6F1] border-2 border-[#1C3A2A]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-[#1C3A2A]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1C3A2A] mb-3">{w.titel}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kontakt-Infos */}
      <section className="py-16 md:py-20 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1C3A2A] mb-8">
            Besuchen Sie uns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <MapPin size={22} className="text-[#B84C0A] mx-auto mb-3" />
              <p className="font-semibold text-[#1C3A2A] text-sm mb-1">Adresse</p>
              <p className="text-gray-500 text-sm leading-relaxed">Ankerweg 2<br />26629 Timmel</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Phone size={22} className="text-[#B84C0A] mx-auto mb-3" />
              <p className="font-semibold text-[#1C3A2A] text-sm mb-1">Telefon</p>
              <a href="tel:01724311662" className="text-gray-500 text-sm hover:text-[#B84C0A] transition-colors block">0172 4311662</a>
              <a href="tel:015125520671" className="text-gray-500 text-sm hover:text-[#B84C0A] transition-colors block">0151 25520671</a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Mail size={22} className="text-[#B84C0A] mx-auto mb-3" />
              <p className="font-semibold text-[#1C3A2A] text-sm mb-1">E-Mail</p>
              <a
                href="mailto:info@timberlae-immobilien.de"
                className="text-gray-500 text-sm hover:text-[#B84C0A] transition-colors break-all"
              >
                info@timberlae-immobilien.de
              </a>
            </div>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[#B84C0A] hover:bg-[#9A3E09] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Kontakt aufnehmen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
