export default function ImpressumPage() {
  return (
    <>
      <section className="bg-[#1C3A2A] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">Impressum</h1>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm prose prose-sm max-w-none text-gray-600">
            <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-4">Angaben gemäß § 5 TMG</h2>

            <p>
              <strong className="text-[#1C3A2A]">Timberlae Immobilien GbR</strong><br />
              Ankerweg 2<br />
              26629 Großefehn (OT Timmel)<br />
              Deutschland
            </p>

            <h3 className="font-heading text-base font-bold text-[#1C3A2A] mt-6 mb-2">Geschäftsinhaber</h3>
            <p>Harms, Meyer</p>

            <h3 className="font-heading text-base font-bold text-[#1C3A2A] mt-6 mb-2">Kontakt</h3>
            <p>
              Telefon: <a href="tel:01724311662" className="text-[#B84C0A] hover:underline">0172 4311662</a><br />
              Mobil: <a href="tel:015125520671" className="text-[#B84C0A] hover:underline">0151 25520671</a><br />
              E-Mail: <a href="mailto:info@timberlae-immobilien.de" className="text-[#B84C0A] hover:underline">info@timberlae-immobilien.de</a>
            </p>

            <h3 className="font-heading text-base font-bold text-[#1C3A2A] mt-6 mb-2">Steuernummer</h3>
            <p>54/234/24603</p>

            <h3 className="font-heading text-base font-bold text-[#1C3A2A] mt-6 mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
            <p>
              Berufsbezeichnung: Immobilienmakler<br />
              Zuständige Aufsichtsbehörde: IHK Ostfriesland und Papenburg
            </p>

            <h3 className="font-heading text-base font-bold text-[#1C3A2A] mt-6 mb-2">Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h3 className="font-heading text-base font-bold text-[#1C3A2A] mt-6 mb-2">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="font-heading text-base font-bold text-[#1C3A2A] mt-6 mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
