import { siteConfig, telLink, whatsappLink } from "../lib/site-config";

export default function Contact() {
  const mapQuery = encodeURIComponent(siteConfig.address);

  return (
    <section id="contact" className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="font-serif text-3xl text-primary-dark">Visit or reach us</h2>
        <dl className="mt-6 space-y-4 text-ink/80">
          <div>
            <dt className="text-sm text-ink/50">Address</dt>
            <dd>{siteConfig.address}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink/50">Phone</dt>
            <dd>
              <a href={telLink} className="text-primary-dark hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink/50">Hours</dt>
            <dd>{siteConfig.hours}</dd>
          </div>
        </dl>

        <a
          href={whatsappLink("Hi, I have a question for VPS Lab.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-md bg-primary text-white font-medium px-6 py-3 hover:bg-primary-dark transition-colors"
        >
          Message us on WhatsApp
        </a>
      </div>

      <div className="rounded-lg overflow-hidden border border-line min-h-[280px]">
        <iframe
          title="Map"
          className="w-full h-full min-h-[280px]"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
        />
      </div>
    </section>
  );
}
