"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PropertyInquiryForm({
  objektNr,
  titel,
}: {
  objektNr: string;
  titel: string;
}) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    anrede: "",
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    nachricht: `Ich interessiere mich für Objekt Nr. ${objektNr} – "${titel}" und bitte um weitere Informationen.`,
    newsletter: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  }

  if (sent) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
        <CheckCircle size={40} className="text-[#1C3A2A] mx-auto mb-3" />
        <h3 className="font-heading text-lg font-bold text-[#1C3A2A] mb-2">Anfrage gesendet!</h3>
        <p className="text-gray-500 text-sm">
          Vielen Dank – wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4"
    >
      <h3 className="font-heading text-lg font-bold text-[#1C3A2A]">Objekt anfragen</h3>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="anrede" className="text-[#1C3A2A] font-medium text-xs mb-1 block">
            Anrede
          </Label>
          <select
            id="anrede"
            name="anrede"
            value={form.anrede}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1C3A2A]/30 bg-white"
          >
            <option value="">Bitte wählen</option>
            <option>Herr</option>
            <option>Frau</option>
            <option>Familie</option>
            <option>Firma</option>
          </select>
        </div>
        <div>
          <Label htmlFor="vorname" className="text-[#1C3A2A] font-medium text-xs mb-1 block">
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
      </div>

      <div>
        <Label htmlFor="nachname" className="text-[#1C3A2A] font-medium text-xs mb-1 block">
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

      <div>
        <Label htmlFor="email" className="text-[#1C3A2A] font-medium text-xs mb-1 block">
          E-Mail *
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
        <Label htmlFor="telefon" className="text-[#1C3A2A] font-medium text-xs mb-1 block">
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

      <div>
        <Label htmlFor="nachricht" className="text-[#1C3A2A] font-medium text-xs mb-1 block">
          Nachricht *
        </Label>
        <Textarea
          id="nachricht"
          name="nachricht"
          value={form.nachricht}
          onChange={handleChange}
          required
          rows={4}
          className="text-sm resize-none"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="newsletter"
          name="newsletter"
          type="checkbox"
          checked={form.newsletter as boolean}
          onChange={handleChange}
          className="mt-0.5 accent-[#1C3A2A]"
        />
        <Label htmlFor="newsletter" className="text-gray-500 text-xs leading-relaxed cursor-pointer">
          Über neue Angebote per E-Mail informieren
        </Label>
      </div>

      <p className="text-gray-400 text-xs">
        Mit dem Absenden stimmen Sie unserer{" "}
        <a href="/datenschutz" className="underline hover:text-[#B84C0A]">
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#B84C0A] hover:bg-[#9A3E09] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
      >
        <Send size={15} />
        Anfrage senden
      </button>
    </form>
  );
}
