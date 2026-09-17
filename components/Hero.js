import { siteConfig, telLink } from "../lib/site-config";
import { CameraIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="max-w-content mx-auto px-6 pt-14 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-primary-dark">
          Blood tests and health checkups, done right here in {siteConfig.location.split(",")[0]}.
        </h1>
        <p className="mt-5 text-lg text-ink/80 max-w-md">
          {siteConfig.labName} runs routine and specialised diagnostic tests for families in
          Watrap and the villages around it — with same-day reports for most tests and home
          sample collection on request.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-md bg-accent text-primary-dark font-medium px-6 py-3 hover:bg-accent-dark hover:text-white transition-colors"
          >
            Book a test
          </a>
          <a
            href={telLink}
            className="rounded-md border border-primary text-primary-dark font-medium px-6 py-3 hover:bg-primary-light transition-colors"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </div>

        <p className="mt-6 text-sm text-ink/60">
          {siteConfig.hours} · {siteConfig.address}
        </p>
      </div>

      <div className="relative flex justify-center md:justify-end">
        {/* Decorative rings sit behind the photo frame for depth */}
        <svg
          className="absolute -z-10 opacity-70"
          width="360" height="360" viewBox="0 0 360 360" fill="none"
          aria-hidden="true"
        >
          <circle cx="180" cy="180" r="170" stroke="#C9D8D5" strokeWidth="1.5" />
          <circle cx="180" cy="180" r="130" stroke="#1B4F4F" strokeWidth="1.2" opacity="0.4" />
        </svg>

        {siteConfig.heroImage ? (
          <img
            src={siteConfig.heroImage}
            alt={`${siteConfig.labName} in ${siteConfig.location}`}
            className="w-full max-w-sm aspect-[4/5] object-cover rounded-2xl shadow-lg border-4 border-white"
          />
        ) : (
          <div className="w-full max-w-sm aspect-[4/5] rounded-2xl border-2 border-dashed border-primary/40 bg-primary-light/40 flex flex-col items-center justify-center gap-3 text-primary-dark/70 p-8 text-center">
            <CameraIcon width={32} height={32} />
            <p className="text-sm">
              Add a photo of the lab here — set <code className="text-xs">heroImage</code> in{" "}
              <code className="text-xs">lib/site-config.js</code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
