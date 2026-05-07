export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-[#1C3A2A] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm space-y-6 text-gray-600 text-sm leading-relaxed">

            <div>
              <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-semibold text-[#1C3A2A] mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
                sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-3">2. Verantwortlicher</h2>
              <p>
                Timberlae Immobilien GbR<br />
                Harms, Meyer<br />
                Ankerweg 2, 26629 Großefehn (OT Timmel)<br />
                Telefon: 0172 4311662<br />
                E-Mail: info@timberlae-immobilien.de
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-3">3. Datenerfassung auf dieser Website</h2>
              <h3 className="font-semibold text-[#1C3A2A] mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
                nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-3">4. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Unrichtige Daten berichtigen zu lassen (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Die Verarbeitung einzuschränken (Art. 18 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
                <li>Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen</li>
              </ul>
              <p className="mt-2">
                Für Anfragen wenden Sie sich an: info@timberlae-immobilien.de
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-3">5. Server-Log-Dateien</h2>
              <p>
                Der Provider der Seite erhebt und speichert automatisch Informationen in sogenannten
                Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und
                Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden
                Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit
                anderen Datenquellen wird nicht vorgenommen.
              </p>
            </div>

            <p className="text-gray-400 text-xs border-t border-gray-100 pt-4">
              Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
