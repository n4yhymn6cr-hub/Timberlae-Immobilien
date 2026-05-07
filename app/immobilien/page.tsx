import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
import { Home, Building2, Search } from "lucide-react";

const kategorien = [
  { key: "alle", label: "Alle Angebote", icon: Home },
  { key: "haus", label: "Häuser", icon: Home },
  { key: "gewerbe", label: "Gewerbe", icon: Building2 },
  { key: "kaufgesuch", label: "Kaufgesuche", icon: Search },
];

export default function ImmobilienPage() {
  const haeuser = properties.filter((p) => p.typ === "haus");
  const gewerbe = properties.filter((p) => p.typ === "gewerbe");
  const gesuche = properties.filter((p) => p.typ === "kaufgesuch");

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1C3A2A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-3">
            Unser Portfolio
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Aktuelle Immobilien
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-base md:text-lg">
            Entdecken Sie unsere aktuellen Angebote in Großefehn, Wiesmoor und der Region Ostfriesland.
          </p>
        </div>
      </section>

      <div className="bg-[#F8F6F1] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Häuser */}
          {haeuser.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#1C3A2A] flex items-center justify-center">
                  <Home size={16} className="text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#1C3A2A]">
                  Häuser zum Verkauf
                  <span className="ml-2 text-sm font-normal text-gray-400">({haeuser.length})</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {haeuser.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}

          {/* Gewerbe */}
          {gewerbe.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#1C3A2A] flex items-center justify-center">
                  <Building2 size={16} className="text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#1C3A2A]">
                  Gewerbeobjekte
                  <span className="ml-2 text-sm font-normal text-gray-400">({gewerbe.length})</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gewerbe.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}

          {/* Kaufgesuche – klar getrennt und erklärt */}
          {gesuche.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#B84C0A] flex items-center justify-center">
                  <Search size={16} className="text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#1C3A2A]">
                  Kaufgesuche
                  <span className="ml-2 text-sm font-normal text-gray-400">({gesuche.length})</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm mb-6 ml-11">
                Diese Interessenten suchen aktiv eine Immobilie. Wenn Sie verkaufen möchten, sprechen
                Sie uns an – wir vermitteln gerne.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gesuche.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}

          {/* Keine Angebote */}
          {properties.length === 0 && (
            <div className="text-center py-20">
              <Home size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Aktuell keine Angebote verfügbar.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
