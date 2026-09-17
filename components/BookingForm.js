import { useState } from "react";
import { whatsappLink } from "../lib/site-config";
import { testCategories } from "../lib/tests";

const allTests = testCategories.flatMap((group) => group.tests);

const initialForm = {
  name: "",
  phone: "",
  test: "",
  date: "",
  slot: "Morning",
  homeCollection: false,
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.test) {
      setError("Please fill in your name, phone number, and the test you need.");
      return;
    }
    setError("");

    const lines = [
      "New booking request from the website:",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Test needed: ${form.test}`,
      form.date ? `Preferred date: ${form.date}` : null,
      `Preferred time: ${form.slot}`,
      `Home sample collection: ${form.homeCollection ? "Yes" : "No"}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setForm(initialForm);
  }

  return (
    <section id="book" className="bg-primary-dark">
      <div className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div className="text-white">
          <h2 className="font-serif text-3xl">Book a test</h2>
          <p className="mt-4 text-white/80 max-w-sm">
            Fill this in and it opens WhatsApp with your details already filled in —
            just hit send and we'll confirm your slot.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-paper rounded-lg p-6 sm:p-8 space-y-5">
          {error && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink/80">
              Your name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="mt-1 w-full rounded-md border border-line px-3 py-2 bg-white"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ink/80">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="mt-1 w-full rounded-md border border-line px-3 py-2 bg-white"
              required
            />
          </div>

          <div>
            <label htmlFor="test" className="block text-sm font-medium text-ink/80">
              Test needed
            </label>
            <select
              id="test"
              value={form.test}
              onChange={(e) => update("test", e.target.value)}
              className="mt-1 w-full rounded-md border border-line px-3 py-2 bg-white"
              required
            >
              <option value="" disabled>Select a test</option>
              {allTests.map((test) => (
                <option key={test} value={test}>{test}</option>
              ))}
              <option value="Not sure / other">Not sure / other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-ink/80">
                Preferred date
              </label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="mt-1 w-full rounded-md border border-line px-3 py-2 bg-white"
              />
            </div>
            <div>
              <label htmlFor="slot" className="block text-sm font-medium text-ink/80">
                Preferred time
              </label>
              <select
                id="slot"
                value={form.slot}
                onChange={(e) => update("slot", e.target.value)}
                className="mt-1 w-full rounded-md border border-line px-3 py-2 bg-white"
              >
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-ink/80">
            <input
              type="checkbox"
              checked={form.homeCollection}
              onChange={(e) => update("homeCollection", e.target.checked)}
              className="rounded border-line"
            />
            I'd like home sample collection
          </label>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-ink/80">
              Anything else we should know?
            </label>
            <textarea
              id="notes"
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              rows={3}
              className="mt-1 w-full rounded-md border border-line px-3 py-2 bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-accent text-primary-dark font-medium px-6 py-3 hover:bg-accent-dark hover:text-white transition-colors"
          >
            Send booking request on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
