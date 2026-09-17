export default function About() {
  return (
    <section id="about" className="bg-primary-light/50 border-y border-line">
      <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="font-serif text-2xl text-primary-dark">About the lab</h2>
        </div>
        <div className="md:col-span-2 space-y-4 text-ink/80 max-w-2xl">
          {/*
            EDIT ME: replace this paragraph with real details — how long the
            lab has been running, who runs it, any certifications it actually
            holds (only list ones that are true), and equipment used. Keeping
            this accurate matters more than making it sound impressive.
          */}
          <p>
            {`We're a local diagnostic lab serving Watrap and the surrounding villages,
            offering routine and specialised tests without the need to travel to a
            bigger town. Samples are processed carefully and reports are shared as
            soon as they're ready — most same-day.`}
          </p>
          <p>
            Home sample collection is available for patients who are unable to visit
            in person — mention this when you book.
          </p>
        </div>
      </div>
    </section>
  );
}
