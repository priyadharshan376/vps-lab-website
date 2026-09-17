import { siteConfig, telLink, whatsappLink } from "../lib/site-config";

export default function Header() {
  const initial = siteConfig.labName.trim().charAt(0);

  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg">
            {initial}
          </span>
          <span className="font-serif text-xl font-semibold text-primary-dark">
            {siteConfig.labName}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/80">
          <a href="#services" className="hover:text-primary-dark">Tests we offer</a>
          <a href="#about" className="hover:text-primary-dark">About</a>
          <a href="#book" className="hover:text-primary-dark">Book a test</a>
          <a href="#contact" className="hover:text-primary-dark">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={telLink}
            className="hidden sm:inline text-sm font-medium text-primary-dark hover:text-primary"
          >
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hi, I'd like to know more about VPS Lab.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary text-white text-sm font-medium px-4 py-2 hover:bg-primary-dark transition-colors"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </header>
  );
}
