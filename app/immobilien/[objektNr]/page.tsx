import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Tag,
  Home,
  Calendar,
  Phone,
  Mail,
} from "lucide-react";
import { properties, formatPreis } from "@/lib/properties";
import { PropertyInquiryForm } from "@/components/PropertyInquiryForm";

export function generateStaticParams() {
  return properties.map((p) => ({ objektNr: p.objektNr }));
}

const typLabels: Record<string, string> = {
  haus: "Haus",
  wohnung: "Wohnung",
  gewerbe: "Gewerbe",
  kaufgesuch: "Kaufgesuch",
};

const typColors: Record<string, string> = {
  haus: "bg-[#1C3A2A] text-white",
  wohnung: "bg-blue-700 text-white",
  gewerbe: "bg-gray-700 text-white",
  kaufgesuch: "bg-[#B84C0A] text-white",
};

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ objektNr: string }>;
}) {
  const { objektNr } = await params;
  const property = properties.find((p) => p.objektNr === objektNr);
  if (!property) notFound();

  const isGesuch = property.typ === "kaufgesuch";

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1C3A2A] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/immobilien"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft size={15} />
            Zurück zur Übersicht
          </Link>
          <div className="flex flex-wrap items-start gap-3 mb-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typColors[property.typ]}`}>
              {typLabels[property.typ]}
            </span>
          </div>
          <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            {property.titel}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin size={14} className="text-[#B84C0A]" />
            <span>{property.plz} {property.ort}</span>
            <span className="text-gray-600 mx-1">·</span>
            <span>Obj.-Nr. {property.objektNr}</span>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => {
              const src = property.bilder?.[i];
              return src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`${property.titel} – Bild ${i + 1}`}
                  className="aspect-[4/3] w-full object-cover rounded-lg"
                />
              ) : (
                <div
                  key={i}
                  className="aspect-[4/3] bg-gradient-to-br from-[#1C3A2A]/8 to-[#B84C0A]/8 rounded-lg flex flex-col items-center justify-center border border-gray-100"
                >
                  <Home size={32} className="text-[#1C3A2A]/20 mb-2" />
                  <span className="text-[#1C3A2A]/30 text-xs">Bild {i + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-6">

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex flex-wrap gap-6">
                  {property.zimmer && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bed size={18} className="text-[#1C3A2A]" />
                      <div>
                        <p className="text-xs text-gray-400">{isGesuch ? "mind." : ""} Zimmer</p>
                        <p className="font-semibold text-[#1C3A2A]">{property.zimmer}</p>
                      </div>
                    </div>
                  )}
                  {property.schlafzimmer && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bed size={18} className="text-[#1C3A2A]" />
                      <div>
                        <p className="text-xs text-gray-400">Schlafzimmer</p>
                        <p className="font-semibold text-[#1C3A2A]">{property.schlafzimmer}</p>
                      </div>
                    </div>
                  )}
                  {property.badezimmer && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bath size={18} className="text-[#1C3A2A]" />
                      <div>
                        <p className="text-xs text-gray-400">Badezimmer</p>
                        <p className="font-semibold text-[#1C3A2A]">{property.badezimmer}</p>
                      </div>
                    </div>
                  )}
                  {property.wohnflaeche && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Maximize2 size={18} className="text-[#1C3A2A]" />
                      <div>
                        <p className="text-xs text-gray-400">{isGesuch ? "ab" : ""} Wohnfläche</p>
                        <p className="font-semibold text-[#1C3A2A]">{property.wohnflaeche} m²</p>
                      </div>
                    </div>
                  )}
                  {property.grundstueck && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Tag size={18} className="text-[#1C3A2A]" />
                      <div>
                        <p className="text-xs text-gray-400">Grundstück</p>
                        <p className="font-semibold text-[#1C3A2A]">
                          {property.grundstueck.toLocaleString("de-DE")} m²
                        </p>
                      </div>
                    </div>
                  )}
                  {property.baujahr && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar size={18} className="text-[#1C3A2A]" />
                      <div>
                        <p className="text-xs text-gray-400">Baujahr</p>
                        <p className="font-semibold text-[#1C3A2A]">{property.baujahr}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Objektbeschreibung */}
              {property.beschreibung && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-4">
                    Objektbeschreibung
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{property.beschreibung}</p>
                </div>
              )}

              {/* Weitere Informationen */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-4">
                  Weitere Informationen
                </h2>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {property.haustyp && (
                      <tr>
                        <td className="py-2.5 text-gray-500 w-1/2">Objekttyp</td>
                        <td className="py-2.5 text-gray-800 font-medium">{property.haustyp}</td>
                      </tr>
                    )}
                    {property.etagen !== undefined && (
                      <tr>
                        <td className="py-2.5 text-gray-500">Etagenanzahl</td>
                        <td className="py-2.5 text-gray-800 font-medium">{property.etagen}</td>
                      </tr>
                    )}
                    {property.baujahr && (
                      <tr>
                        <td className="py-2.5 text-gray-500">Baujahr</td>
                        <td className="py-2.5 text-gray-800 font-medium">{property.baujahr}</td>
                      </tr>
                    )}
                    {property.moebliert !== undefined && (
                      <tr>
                        <td className="py-2.5 text-gray-500">Möbliert</td>
                        <td className="py-2.5 text-gray-800 font-medium">
                          {property.moebliert ? "Teilmöbliert" : "Nein"}
                        </td>
                      </tr>
                    )}
                    {property.heizungsart && (
                      <tr>
                        <td className="py-2.5 text-gray-500">Heizungsart</td>
                        <td className="py-2.5 text-gray-800 font-medium">{property.heizungsart}</td>
                      </tr>
                    )}
                    {property.heizungssystem && (
                      <tr>
                        <td className="py-2.5 text-gray-500">Befeuerungsart</td>
                        <td className="py-2.5 text-gray-800 font-medium">{property.heizungssystem}</td>
                      </tr>
                    )}
                    {property.garage !== undefined && (
                      <tr>
                        <td className="py-2.5 text-gray-500">Garage</td>
                        <td className="py-2.5 text-gray-800 font-medium">
                          {property.garage ? "Vorhanden" : "Nicht vorhanden"}
                        </td>
                      </tr>
                    )}
                    {property.carport !== undefined && (
                      <tr>
                        <td className="py-2.5 text-gray-500">Carport</td>
                        <td className="py-2.5 text-gray-800 font-medium">
                          {property.carport ? "Vorhanden" : "Nicht vorhanden"}
                        </td>
                      </tr>
                    )}
                    {property.stellplaetze !== undefined && (
                      <tr>
                        <td className="py-2.5 text-gray-500">Stellplätze</td>
                        <td className="py-2.5 text-gray-800 font-medium">{property.stellplaetze}</td>
                      </tr>
                    )}
                    {property.eigenschaften.length > 0 && (
                      <tr>
                        <td className="py-2.5 text-gray-500 align-top">Ausstattung</td>
                        <td className="py-2.5 text-gray-800 font-medium">
                          {property.eigenschaften.join(", ")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Energieeffizienz */}
              {(property.energieklasse || property.endenergiebedarf || property.energietraeger) && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-4">
                    Energieeffizienz
                  </h2>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-gray-100">
                      {property.energieklasse && (
                        <tr>
                          <td className="py-2.5 text-gray-500 w-1/2">Energieeffizienzklasse</td>
                          <td className="py-2.5">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1C3A2A] text-white font-bold text-sm">
                              {property.energieklasse}
                            </span>
                          </td>
                        </tr>
                      )}
                      {property.endenergiebedarf !== undefined &&
                        property.endenergiebedarf !== null && (
                          <tr>
                            <td className="py-2.5 text-gray-500">Endenergiebedarf</td>
                            <td className="py-2.5 text-gray-800 font-medium">
                              {property.endenergiebedarf} kWh/(m²·a)
                            </td>
                          </tr>
                        )}
                      {property.energietraeger && (
                        <tr>
                          <td className="py-2.5 text-gray-500">Wesentlicher Energieträger</td>
                          <td className="py-2.5 text-gray-800 font-medium">{property.energietraeger}</td>
                        </tr>
                      )}
                      {property.baujahr && (
                        <tr>
                          <td className="py-2.5 text-gray-500">Baujahr laut Energieausweis</td>
                          <td className="py-2.5 text-gray-800 font-medium">{property.baujahr}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <p className="text-gray-400 text-xs mt-4">
                    * Energieausweis liegt zur Besichtigung vor.
                  </p>
                </div>
              )}

              {/* Anmerkungen */}
              {property.anmerkungen && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-4">Anmerkungen</h2>
                  <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{property.anmerkungen}</p>
                </div>
              )}

              {/* Sonstiges */}
              {property.sonstiges && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-4">Sonstiges</h2>
                  <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{property.sonstiges}</p>
                </div>
              )}
            </div>

            {/* Right: Price + Form */}
            <div className="space-y-5">
              {/* Price card */}
              <div className="bg-[#1C3A2A] rounded-2xl p-6 text-white">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  {isGesuch ? "Suchbudget" : "Kaufpreis"}
                </p>
                <p className="font-heading text-2xl font-bold text-white mb-1">
                  {formatPreis(property.preis, property.preisAufAnfrage)}
                </p>
                {property.wohnflaeche && !property.preisAufAnfrage && property.preis && (
                  <p className="text-gray-400 text-xs">
                    ca.{" "}
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(Math.round(property.preis / property.wohnflaeche))}{" "}
                    / m²
                  </p>
                )}
                <div className="mt-5 pt-5 border-t border-[#254D38] space-y-3 text-sm">
                  <a
                    href="tel:01724311662"
                    className="flex items-center gap-3 text-gray-300 hover:text-[#B84C0A] transition-colors"
                  >
                    <Phone size={15} className="text-[#B84C0A]" />
                    0172 4311662
                  </a>
                  <a
                    href="mailto:info@timberlae-immobilien.de"
                    className="flex items-center gap-3 text-gray-300 hover:text-[#B84C0A] transition-colors break-all"
                  >
                    <Mail size={15} className="text-[#B84C0A]" />
                    info@timberlae-immobilien.de
                  </a>
                </div>
              </div>

              {/* Inquiry form */}
              <PropertyInquiryForm objektNr={property.objektNr} titel={property.titel} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
