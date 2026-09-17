import Link from "next/link";
import { useRouter } from "next/router";
import { siteConfig, telLink, whatsappLink } from "../lib/site-config";

const navLinks = [
  { href: "/services", label: "Tests we offer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Book / Contact" },
];

export default function Header() {
  const router = useRouter();
  const initial = siteConfig.labName.trim().charAt(0);

  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg">
            {initial}
          </span>
          <span className="font-serif text-xl font-semibold text-primary-dark">
            {siteConfig.labName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                router.pathname === link.href
                  ? "text-primary-dark font-medium"
                  : "text-ink/80 hover:text-primary-dark"
              }
            >
              {link.label}
            </Link>
          ))}
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
