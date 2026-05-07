"use client";

import { useState } from "react";
import { MapPin, Phone, Smartphone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    anrede: "",
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    betreff: "Allgemeine Anfrage",
    nachricht: "",
    newsletter: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1C3A2A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B84C0A] font-medium text-sm tracking-widest uppercase mb-3">
            Wir sind für Sie da
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Kontakt aufnehmen
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-base md:text-lg">
            Stellen Sie uns Ihre Fragen – per Formular, Telefon oder kommen Sie einfach vorbei.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Kontaktinfos */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-4">
                  Direktkontakt
                </h2>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1C3A2A] flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C3A2A] text-sm mb-0.5">Adresse</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Ankerweg 2<br />
                      26629 Timmel<br />
                      Niedersachsen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1C3A2A] flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C3A2A] text-sm mb-0.5">Telefon</p>
                    <a href="tel:01724311662" className="text-gray-500 text-sm hover:text-[#B84C0A] transition-colors block">
                      0172 4311662
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1C3A2A] flex items-center justify-center shrink-0">
                    <Smartphone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C3A2A] text-sm mb-0.5">Mobil</p>
                    <a href="tel:015125520671" className="text-gray-500 text-sm hover:text-[#B84C0A] transition-colors block">
                      0151 25520671
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1C3A2A] flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C3A2A] text-sm mb-0.5">E-Mail</p>
                    <a
                      href="mailto:info@timberlae-immobilien.de"
                      className="text-gray-500 text-sm hover:text-[#B84C0A] transition-colors break-all"
                    >
                      info@timberlae-immobilien.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1C3A2A] flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C3A2A] text-sm mb-0.5">Erreichbarkeit</p>
                    <p className="text-gray-500 text-sm">
                      Mo–Fr: nach Vereinbarung<br />
                      Auch Abendtermine möglich
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#1C3A2A]/5 border border-[#1C3A2A]/10 rounded-2xl h-40 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-[#1C3A2A]/30 mx-auto mb-2" />
                  <p className="text-[#1C3A2A]/50 text-xs">
                    Ankerweg 2 · 26629 Timmel
                  </p>
                </div>
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-xl font-bold text-[#1C3A2A] mb-6">
                Schreiben Sie uns
              </h2>

              {sent ? (
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center">
                  <CheckCircle size={48} className="text-[#1C3A2A] mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-[#1C3A2A] mb-3">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
                >
                  {/* Betreff */}
                  <div>
                    <Label htmlFor="betreff" className="text-[#1C3A2A] font-medium text-sm mb-1.5 block">
                      Anfrageart
                    </Label>
                    <select
                      id="betreff"
                      name="betreff"
                      value={form.betreff}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1C3A2A]/30 bg-white"
                    >
                      <option>Allgemeine Anfrage</option>
                      <option>Telefonische Beratung / Rückruf</option>
                      <option>Persönliche Beratung im Büro</option>
                      <option>Persönliche Beratung vor Ort</option>
                      <option>Immobilie zum Verkauf anbieten</option>
                      <option>Immobilie zur Vermietung anbieten</option>
                      <option>Kaufgesuch aufgeben</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="anrede" className="text-[#1C3A2A] font-medium text-sm mb-1.5 block">
                        Anrede
                      </Label>
                      <select
                        id="anrede"
                        name="anrede"
                        value={form.anrede}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1C3A2A]/30 bg-white"
                      >
                        <option value="">Bitte wählen</option>
                        <option>Herr</option>
                        <option>Frau</option>
                        <option>Familie</option>
                        <option>Firma</option>
                        <option>Eheleute</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="vorname" className="text-[#1C3A2A] font-medium text-sm mb-1.5 block">
                        Vorname
                      </Label>
                      <Input
                        id="vorname"
                        name="vorname"
                        value={form.vorname}
                        onChange={handleChange}
                        placeholder="Max"
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nachname" className="text-[#1C3A2A] font-medium text-sm mb-1.5 block">
                        Nachname *
                      </Label>
                      <Input
                        id="nachname"
                        name="nachname"
                        value={form.nachname}
                        onChange={handleChange}
                        placeholder="Mustermann"
                        required
                        className="text-sm"
                      />
                    </div>
                  </div>

                  {/* Kontakt */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-[#1C3A2A] font-medium text-sm mb-1.5 block">
                        E-Mail-Adresse *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="max@beispiel.de"
                        required
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefon" className="text-[#1C3A2A] font-medium text-sm mb-1.5 block">
                        Telefon
                      </Label>
                      <Input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        value={form.telefon}
                        onChange={handleChange}
                        placeholder="0172 …"
                        className="text-sm"
                      />
                    </div>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <Label htmlFor="nachricht" className="text-[#1C3A2A] font-medium text-sm mb-1.5 block">
                      Ihre Nachricht *
                    </Label>
                    <Textarea
                      id="nachricht"
                      name="nachricht"
                      value={form.nachricht}
                      onChange={handleChange}
                      placeholder="Wie können wir Ihnen helfen?"
                      required
                      rows={5}
                      className="text-sm resize-none"
                    />
                  </div>

                  {/* Newsletter */}
                  <div className="flex items-start gap-3">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      checked={form.newsletter}
                      onChange={handleChange}
                      className="mt-0.5 accent-[#1C3A2A]"
                    />
                    <Label htmlFor="newsletter" className="text-gray-500 text-sm leading-relaxed cursor-pointer">
                      Ich möchte über neue Immobilienangebote per E-Mail informiert werden.
                    </Label>
                  </div>

                  <p className="text-gray-400 text-xs">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
                    <a href="/datenschutz" className="underline hover:text-[#B84C0A]">
                      Datenschutzerklärung
                    </a>{" "}
                    zu. Pflichtfelder sind mit * markiert.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B84C0A] hover:bg-[#9A3E09] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    <Send size={16} />
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
