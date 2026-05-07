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
  bilder?: string[];

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

const BASE = "https://www.timberlae-immobilien.de/de/upload";

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
      "Gäste-WC",
      "Seniorengerecht",
    ],
    bilder: [
      `${BASE}/4817-216-1-g.jpg`,
      `${BASE}/4818-216-2-g.jpg`,
      `${BASE}/4819-216-3-g.jpg`,
      `${BASE}/4820-216-4-g.jpg`,
      `${BASE}/4821-216-5-g.jpg`,
      `${BASE}/4822-216-6-g.jpg`,
    ],
    beschreibung:
      "Dieses beeindruckende Einfamilienhaus aus der Mitte der 1990er Jahre überzeugt mit einer durchdachten Raumaufteilung, einem äußerst gepflegten Zustand und einem Wohnambiente, das sofort begeistert. Auf ca. 169 m² Wohnfläche eröffnet sich Ihnen ein Zuhause, das keine Wünsche offenlässt – ideal für Familien oder alle, die großzügiges Wohnen zu schätzen wissen.\n\nSchon beim Betreten empfängt Sie eine weitläufige Diele, die den offenen und freundlichen Charakter des Hauses unterstreicht. Insgesamt fünf gut geschnittene Zimmer bieten vielfältige Nutzungsmöglichkeiten – ob als Schlafzimmer, Kinderzimmer, Homeoffice oder Hobbyraum. Zwei moderne Bäder sowie ein zusätzliches Gäste-WC sorgen für Komfort im Alltag.\n\nDer helle Wohn- und Essbereich lädt zum Verweilen ein und bildet das Herzstück des Hauses. Die angrenzende Küche mit praktischem Vorratsraum bietet optimale Bedingungen für kulinarische Entfaltung. Ergänzt wird das Raumangebot durch einen Hauswirtschaftsraum, einen separaten Heizungsraum sowie weitere Abstellflächen, die für Ordnung und Struktur sorgen.\n\nDas Haus befindet sich in einem äußerst gepflegten Zustand – ein Renovierungsstau besteht nicht, sodass Sie ohne großen Aufwand direkt einziehen und sich wohlfühlen können.\n\nAuch das großzügige Grundstück mit 883 m² lässt keine Wünsche offen: Ob entspannte Stunden im Garten, Spielmöglichkeiten für Kinder oder gesellige Abende auf der Terrasse – hier genießen Sie Ihre ganz persönliche Wohlfühloase. Die Lage im idyllischen Luftkurort Wiesmoor macht dieses Angebot besonders attraktiv – in unmittelbarer Nähe zum Naherholungsgebiet Ottermeer.",
    haustyp: "Einfamilienhaus",
    etagen: 2,
    moebliert: true,
    garage: true,
    carport: false,
    stellplaetze: 1,
    anmerkungen:
      "Die von uns gemachten Informationen beruhen auf Angaben des Verkäufers bzw. der Verkäuferin. Für die Richtigkeit und Vollständigkeit der Angaben kann keine Gewähr bzw. Haftung übernommen werden. Ein Zwischenverkauf und Irrtümer sind vorbehalten.",
    sonstiges:
      "Käuferprovision: 3,0 % inkl. MwSt. | AUF WUNSCH empfehlen wir Ihnen Finanzierungsexperten von namhaften Häusern oder regionalen Banken.",
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
      "Einbauküche",
      "Terrasse",
      "Gäste-WC",
      "Barrierefrei",
      "Seniorengerecht",
      "Garten",
      "Kamin",
      "Sauna",
      "Dachboden",
      "Carport",
      "Garage",
      "Ferienhaus geeignet",
      "Nichtraucher",
    ],
    bilder: [
      `${BASE}/4754-215-1-g.jpg`,
      `${BASE}/4755-215-2-g.jpg`,
      `${BASE}/4756-215-3-g.jpg`,
      `${BASE}/4757-215-4-g.jpg`,
      `${BASE}/4758-215-5-g.jpg`,
      `${BASE}/4759-215-6-g.jpg`,
    ],
    beschreibung:
      "Dieser gepflegte Bungalow aus dem Jahr 1999 überzeugt durch seinen zeitlosen Stil, eine hochwertige Ausstattung und ein angenehmes Wohnambiente. Das Haus bietet auf zwei Ebenen ein durchdachtes Raumkonzept mit 4 Zimmern, davon 1 Schlafzimmer im Obergeschoss, Bad mit Dusche und Badewanne, Gäste-WC, moderner Küche sowie einem Hauswirtschafts- und Abstellraum. Im Obergeschoss ist Platz für ein weiteres Bad und ein Studio – alle Anschlüsse sind dafür bereits gelegt.\n\nDer helle Wohnbereich ist mit einem gemütlichen Kamin ausgestattet und bietet Zugang zur teilüberdachten Terrasse mit Blick in den pflegeleichten Garten – ideal zum Entspannen und Genießen. Der gesamte Terrassenbereich basiert auf einer massiven Bodenplatte, vorbereitet für eine räumliche Erweiterung.\n\nElektrische Jalousien sorgen für Komfort und Sicherheit, die Garage und der Carport bieten ausreichend Platz für Fahrzeuge und zusätzlichen Stauraum.\n\nDas Haus befindet sich in zweiter Reihe in einer ruhigen, gepflegten Wohnlage mit guter Anbindung an Einkaufsmöglichkeiten, Schulen, Ärzte und öffentliche Verkehrsmittel.",
    haustyp: "Bungalow",
    etagen: 2,
    moebliert: true,
    heizungsart: "Zentralheizung",
    heizungssystem: "Gas",
    garage: true,
    carport: true,
    stellplaetze: 2,
    anmerkungen:
      "Die von uns gemachten Informationen beruhen auf Angaben des Verkäufers bzw. der Verkäuferin. Für die Richtigkeit und Vollständigkeit der Angaben kann keine Gewähr bzw. Haftung übernommen werden. Ein Zwischenverkauf und Irrtümer sind vorbehalten.\n\nVerfügbar ab: 01.03.2026 | Zustand: gepflegt | Provisionspflichtig: nein",
    sonstiges:
      "AUF WUNSCH empfehlen wir Ihnen Finanzierungsexperten von namhaften Häusern wie Swiss Life oder regionalen Banken.",
  },
  {
    id: "111",
    objektNr: "111",
    titel: "Zurück von Mallorca nach Ostfriesland",
    kurzBeschreibung:
      "Sympathisches Paar sucht gemütliches Haus im Raum Großefehn, Moormerland, Hesel oder Ihlow. Budget: 250.000 – 350.000 €.",
    ort: "Großefehn / Moormerland / Hesel / Ihlow",
    plz: "26629",
    bezirk: "Aurich",
    bundesland: "Niedersachsen",
    preis: null,
    preisAufAnfrage: true,
    wohnflaeche: 150,
    grundstueck: null,
    zimmer: 4,
    typ: "kaufgesuch",
    eigenschaften: [],
    bilder: [
      `${BASE}/4705-204-4-g.jpg`,
    ],
    beschreibung:
      "Mallorca-Rückkehrer suchen ein Haus im Raum Großefehn, Moormerland, Hesel oder Ihlow.\n\n\"Gemütlich muss es sein. Größe und Ausstattung spielen eine untergeordnete Rolle. Möglichst kein Renovierungsstau\", so die Wünsche des sympathischen Paares.\n\nDer Kaufpreis sollte sich im Rahmen von 250.000 bis 350.000 € bewegen.\n\nWir freuen uns auf Ihre Nachricht. Einfach anrufen oder schreiben Sie uns.",
    anmerkungen:
      "Die von uns gemachten Informationen beruhen auf Angaben der Suchenden. Für die Richtigkeit und Vollständigkeit der Angaben kann keine Gewähr übernommen werden.",
    sonstiges:
      "Bei Abschluss eines Kaufvertrages wird eine Vermittlungs-/Nachweisprovision in Höhe von 2,975 % inkl. 19 % MwSt. auf den Kaufpreis vom Käufer und Verkäufer fällig. | AUF WUNSCH empfehlen wir Ihnen Finanzierungsexperten von namhaften Häusern oder regionalen Banken.",
  },
  {
    id: "110",
    objektNr: "110",
    titel: "Bodenständiger Unternehmer sucht Eigenheim",
    kurzBeschreibung:
      "Lokaler Unternehmer sucht für sich und seine Familie einen neuen Lebensmittelpunkt in Großefehn, Ihlow oder Moormerland. Budget: bis 600.000 €.",
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
    bilder: [
      `${BASE}/4502-203-1-g.jpg`,
    ],
    beschreibung:
      "Ein bodenständiger Unternehmer aus der Region sucht für sich und seine Familie einen neuen Lebensmittelpunkt in Großefehn, Ihlow oder Moormerland – bis 600.000 €.\n\n\"Wir suchen ein Haus mit viel Platz. Entscheidend ist nicht das Baujahr oder die Lage, uns geht es in erster Linie darum, unseren neuen Lebensmittelpunkt zu finden, in dem wir uns einfach wohlfühlen\", so der Unternehmer.\n\nSchreiben Sie uns oder rufen Sie an, wenn Sie der Auffassung sind, dass wir miteinander sprechen sollten.",
    anmerkungen:
      "Die von uns gemachten Informationen beruhen auf Angaben des Kaufinteressenten. Für die Richtigkeit und Vollständigkeit der Angaben kann keine Gewähr übernommen werden.",
    sonstiges:
      "Bei Abschluss eines Kaufvertrages wird eine Vermittlungs-/Nachweisprovision in Höhe von 2,975 % inkl. 19 % MwSt. auf den Kaufpreis vom Käufer und Verkäufer fällig. | AUF WUNSCH empfehlen wir Ihnen Finanzierungsexperten von namhaften Häusern wie Swiss Life oder regionalen Banken.",
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
