import Link from "next/link";
import { Bed, Maximize2, MapPin, Home, Tag } from "lucide-react";
import { type Property, formatPreis } from "@/lib/properties";

const typLabels: Record<Property["typ"], string> = {
  haus: "Haus",
  wohnung: "Wohnung",
  gewerbe: "Gewerbe",
  kaufgesuch: "Kaufgesuch",
};

const typColors: Record<Property["typ"], string> = {
  haus: "bg-[#1C3A2A] text-white",
  wohnung: "bg-blue-700 text-white",
  gewerbe: "bg-gray-700 text-white",
  kaufgesuch: "bg-[#B84C0A] text-white",
};

export function PropertyCard({ property }: { property: Property }) {
  const isGesuch = property.typ === "kaufgesuch";

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col group">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-[#1C3A2A]/10 to-[#B84C0A]/10 flex items-center justify-center">
        <Home size={48} className="text-[#1C3A2A]/20" />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typColors[property.typ]}`}>
            {typLabels[property.typ]}
          </span>
        </div>
        {property.hervorgehoben && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500 text-white">
              Empfehlung
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <MapPin size={13} className="text-[#B84C0A]" />
          <span>
            {property.plz} {property.ort}
          </span>
          <span className="text-gray-300 mx-1">|</span>
          <span>Obj.-Nr. {property.objektNr}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-[#1C3A2A] font-semibold text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#B84C0A] transition-colors">
          {property.titel}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {property.kurzBeschreibung}
        </p>

        {/* Stats */}
        {!isGesuch && (
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4 border-t border-gray-100 pt-4">
            {property.zimmer && (
              <div className="flex items-center gap-1.5">
                <Bed size={14} className="text-[#1C3A2A]" />
                <span>{property.zimmer} Zimmer</span>
              </div>
            )}
            {property.wohnflaeche && (
              <div className="flex items-center gap-1.5">
                <Maximize2 size={14} className="text-[#1C3A2A]" />
                <span>{property.wohnflaeche} m²</span>
              </div>
            )}
            {property.grundstueck && (
              <div className="flex items-center gap-1.5">
                <Tag size={14} className="text-[#1C3A2A]" />
                <span>{property.grundstueck.toLocaleString("de-DE")} m² Grund</span>
              </div>
            )}
          </div>
        )}

        {/* Gesuch stats */}
        {isGesuch && (
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4 border-t border-gray-100 pt-4">
            {property.zimmer && (
              <div className="flex items-center gap-1.5">
                <Bed size={14} className="text-[#1C3A2A]" />
                <span>min. {property.zimmer} Zimmer</span>
              </div>
            )}
            {property.wohnflaeche && (
              <div className="flex items-center gap-1.5">
                <Maximize2 size={14} className="text-[#1C3A2A]" />
                <span>ab {property.wohnflaeche} m²</span>
              </div>
            )}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span
            className={`font-heading font-bold text-lg ${
              property.preisAufAnfrage ? "text-gray-400 text-sm" : "text-[#1C3A2A]"
            }`}
          >
            {formatPreis(property.preis, property.preisAufAnfrage)}
          </span>
          <Link
            href={`/immobilien/${property.objektNr}`}
            className="text-sm font-semibold text-[#B84C0A] hover:text-[#9A3E09] transition-colors border-b border-[#B84C0A]/40 hover:border-[#9A3E09] pb-0.5"
          >
            Details ansehen →
          </Link>
        </div>
      </div>
    </div>
  );
}
