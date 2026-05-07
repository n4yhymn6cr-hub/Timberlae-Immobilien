export type PropertyType = "haus" | "wohnung" | "gewerbe" | "kaufgesuch";

export interface Property {
  id: string;
  objektNr: string;
  titel: string;
  kurzBeschreibung: string;
  ort: string;
  plz: string;
  bezirk: string;
  bundesland: string;
  preis: number | null;
  preisAufAnfrage: boolean;
  wohnflaeche: number | null;
  grundstueck: number | null;
  zimmer: number | null;
  schlafzimmer?: number;
  badezimmer?: number;
  baujahr?: number;
  typ: PropertyType;
  eigenschaften: string[];
  hervorgehoben?: boolean;

  // Detail-Felder
  beschreibung?: string;
  haustyp?: string;
  etagen?: number;
  moebliert?: boolean;
  heizungsart?: string;
  heizungssystem?: string;
  garage?: boolean;
  carport?: boolean;
  stellplaetze?: number;
  energieklasse?: string;
  endenergiebedarf?: number | null;
  energietraeger?: string;
  anmerkungen?: string;
  sonstiges?: string;
}

export const properties: Property[] = [
  {
    id: "202026",
    objektNr: "202026",
    titel: "Großzügiges Einfamilienhaus in bester Lage",
    kurzBeschreibung:
      "Wohnen, wo andere Urlaub machen – dieses gepflegte Einfamilienhaus in Wiesmoor überzeugt mit großzügiger Wohnfläche, einem traumhaften Garten und hochwertiger Ausstattung.",
    ort: "Wiesmoor",
    plz: "26639",
    bezirk: "Aurich",
    bundesland: "Niedersachsen",
    preis: 399000,
    preisAufAnfrage: false,
    wohnflaeche: 165,
    grundstueck: 883,
    zimmer: 5,
    schlafzimmer: 4,
    badezimmer: 2,
    baujahr: 1993,
    typ: "haus",
    eigenschaften: [
      "Einbauküche",
      "Terrasse",
      "Garten",
      "Kamin",
      "Dachboden",
      "Gäste-WC",
      "Seniorengerecht",
      "Nichtraucher",
    ],
    hervorgehoben: true,
    beschreibung:
      "Platzhalter – Objektbeschreibung folgt. Dieses gepflegte Einfamilienhaus in Wiesmoor bietet auf 165 m² Wohnfläche viel Raum für die ganze Familie. Das Grundstück mit 883 m² lädt zu Gartenaktivitäten ein. Die Immobilie befindet sich in einem sehr gepflegten Zustand und ist sofort bezugsfertig.",
    haustyp: "Einfamilienhaus",
    etagen: 1,
    moebliert: false,
    heizungsart: "Zentralheizung",
    heizungssystem: "Öl",
    garage: false,
    carport: false,
    stellplaetze: 2,
    energieklasse: "D",
    endenergiebedarf: 145,
    energietraeger: "Heizöl",
    anmerkungen: "Platzhalter – Anmerkungen folgen.",
    sonstiges: "Platzhalter – Sonstige Informationen folgen.",
  },
  {
    id: "1025",
    objektNr: "1025",
    titel: "Exklusiver Winkelbungalow in ruhiger Lage",
    kurzBeschreibung:
      "Barrierefreier Winkelbungalow mit Sauna, Carport und Garage auf einem 1.370 m² Grundstück. Ideal als Hauptwohnsitz oder Ferienhaus in der grünen Ruhe Ostfrieslands.",
    ort: "Großefehn",
    plz: "26629",
    bezirk: "Aurich",
    bundesland: "Niedersachsen",
    preis: 429000,
    preisAufAnfrage: false,
    wohnflaeche: 160,
    grundstueck: 1370,
    zimmer: 4,
    schlafzimmer: 2,
    badezimmer: 1,
    baujahr: 1999,
    typ: "haus",
    eigenschaften: [
      "Barrierefrei",
      "Seniorengerecht",
      "Sauna",
      "Garten",
      "Kamin",
      "Carport",
      "Garage",
      "Ferienhaus geeignet",
    ],
    hervorgehoben: true,
    beschreibung:
      "Platzhalter – Objektbeschreibung folgt. Dieser exklusive Winkelbungalow in Großefehn überzeugt mit seiner ebenerdigen Bauweise und der hochwertigen Ausstattung. Auf 160 m² Wohnfläche erwartet Sie ein großzügiges Raumkonzept mit vier Zimmern, einer Sauna und einem traumhaften 1.370 m² Grundstück.",
    haustyp: "Bungalow",
    etagen: 1,
    moebliert: false,
    heizungsart: "Zentralheizung",
    heizungssystem: "Gas",
    garage: true,
    carport: true,
    stellplaetze: 3,
    energieklasse: "C",
    endenergiebedarf: 110,
    energietraeger: "Erdgas",
    anmerkungen: "Platzhalter – Anmerkungen folgen.",
    sonstiges: "Platzhalter – Sonstige Informationen folgen.",
  },
  {
    id: "111",
    objektNr: "111",
    titel: "Zurück von Mallorca nach Ostfriesland",
    kurzBeschreibung:
      "Charmantes Einfamilienhaus mit ostfriesischem Flair in Großefehn – der perfekte Rückzugsort für alle, die das Beste beider Welten kennen.",
    ort: "Großefehn",
    plz: "26629",
    bezirk: "Aurich",
    bundesland: "Niedersachsen",
    preis: null,
    preisAufAnfrage: true,
    wohnflaeche: 150,
    grundstueck: null,
    zimmer: 4,
    typ: "haus",
    eigenschaften: [],
    hervorgehoben: false,
    beschreibung:
      "Platzhalter – Objektbeschreibung folgt. Dieses charmante Einfamilienhaus in Großefehn besticht durch seinen ostfriesischen Charakter und die ruhige Lage. Auf 150 m² Wohnfläche finden vier Zimmer Platz – ideal für Familien oder Rückkehrer, die die Vorzüge der Region genießen möchten.",
    haustyp: "Einfamilienhaus",
    etagen: 2,
    moebliert: false,
    heizungsart: "Zentralheizung",
    heizungssystem: "Öl",
    garage: false,
    carport: false,
    stellplaetze: 1,
    energieklasse: "E",
    endenergiebedarf: 175,
    energietraeger: "Heizöl",
    anmerkungen: "Platzhalter – Anmerkungen folgen.",
    sonstiges: "Platzhalter – Sonstige Informationen folgen.",
  },
  {
    id: "202",
    objektNr: "202",
    titel: "Bürofläche in Timmel – frei konfigurierbar",
    kurzBeschreibung:
      "Flexible Gewerbefläche in 26629 Timmel, ideal für Büros, Praxen oder Dienstleister. Moderner Zuschnitt, gute Erreichbarkeit.",
    ort: "Timmel",
    plz: "26629",
    bezirk: "Aurich",
    bundesland: "Niedersachsen",
    preis: null,
    preisAufAnfrage: true,
    wohnflaeche: null,
    grundstueck: null,
    zimmer: null,
    typ: "gewerbe",
    eigenschaften: ["Frei konfigurierbar"],
    hervorgehoben: false,
    beschreibung:
      "Platzhalter – Objektbeschreibung folgt. Diese moderne Gewerbefläche in Timmel eignet sich hervorragend für Büros, Praxen oder Dienstleistungsbetriebe. Der flexible Grundriss lässt sich individuell an Ihre Bedürfnisse anpassen.",
    haustyp: "Bürofläche",
    etagen: 1,
    moebliert: false,
    heizungsart: "Zentralheizung",
    heizungssystem: "Gas",
    garage: false,
    carport: false,
    stellplaetze: 2,
    energieklasse: "C",
    endenergiebedarf: 95,
    energietraeger: "Erdgas",
    anmerkungen: "Platzhalter – Anmerkungen folgen.",
    sonstiges: "Platzhalter – Sonstige Informationen folgen.",
  },
  {
    id: "110",
    objektNr: "110",
    titel: "Bodenständiger Unternehmer sucht Eigenheim",
    kurzBeschreibung:
      "Lokaler Unternehmer aus der Region sucht für sich und seine Familie ein neues Zuhause mit mindestens 150 m² in Großefehn, Ihlow oder Moormerland.",
    ort: "Großefehn / Ihlow / Moormerland",
    plz: "26629",
    bezirk: "Aurich",
    bundesland: "Niedersachsen",
    preis: null,
    preisAufAnfrage: true,
    wohnflaeche: 150,
    grundstueck: null,
    zimmer: 6,
    typ: "kaufgesuch",
    eigenschaften: [],
    hervorgehoben: false,
    beschreibung:
      "Ein bodenständiger Unternehmer aus der Region sucht für sich und seine Familie ein neues Zuhause. Gesucht wird ein Objekt mit mindestens 150 m² Wohnfläche und 6 Zimmern in den Gemeinden Großefehn, Ihlow oder Moormerland. Haben Sie ein passendes Objekt? Wir freuen uns auf Ihre Kontaktaufnahme.",
    anmerkungen: "Der Interessent wünscht eine diskrete Abwicklung. Platzhalter – weitere Details folgen.",
    sonstiges: "Platzhalter – Sonstige Informationen folgen.",
  },
];

export function formatPreis(preis: number | null, aufAnfrage: boolean): string {
  if (aufAnfrage || preis === null) return "Preis auf Anfrage";
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(preis);
}
