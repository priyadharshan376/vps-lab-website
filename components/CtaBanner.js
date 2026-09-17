import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-primary-dark">
      <div className="max-w-content mx-auto px-6 py-16 text-center text-white">
        <h2 className="font-serif text-3xl">Ready to book a test?</h2>
        <p className="mt-3 text-white/80 max-w-md mx-auto">
          Reach out on WhatsApp, call us directly, or fill in a quick form —
          whichever's easiest for you.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-accent text-primary-dark font-medium px-6 py-3 hover:bg-accent-dark hover:text-white transition-colors"
        >
          Book or contact us
        </Link>
      </div>
    </section>
  );
}
